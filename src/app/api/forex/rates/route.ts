import { NextResponse } from "next/server";

// --- IN-MEMORY SLIDING-WINDOW RATE LIMITER ---
// Limits each client IP to 60 requests per minute to prevent API abuse and DDoS
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 60;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const resetTime = Math.ceil((now + RATE_LIMIT_WINDOW_MS) / 1000);

  let timestamps = rateLimitMap.get(ip) || [];
  timestamps = timestamps.filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, timestamps);
    return { allowed: false, remaining: 0, resetTime };
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - timestamps.length, resetTime };
}

// --- MULTI-TIER CACHE (Upstash Redis + Memory with 15-min TTL) ---
interface CachedForex {
  timestamp: number;
  base: string;
  rates: Record<string, number>;
  source: string;
}

const memoryCache = new Map<string, CachedForex>();
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes TTL

// Fallback baseline institutional rates in case upstream APIs are completely unavailable
const DEFAULT_RATES: Record<string, number> = {
  USD: 1.0,
  INR: 88.65,
  EUR: 0.92,
  GBP: 0.77,
  JPY: 153.40,
  AED: 3.67,
  THB: 35.80,
  SGD: 1.34,
  AUD: 1.52,
  CAD: 1.38,
  CHF: 0.88,
};

export async function GET(request: Request) {
  const startTime = Date.now();

  try {
    const { searchParams } = new URL(request.url);
    const base = (searchParams.get("base") || "USD").toUpperCase();

    // 1. IP extraction & Rate Limit Check
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const { allowed, remaining, resetTime } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Too many requests, please slow down.",
          limit: MAX_REQUESTS_PER_WINDOW,
          retryAfterSeconds: resetTime - Math.ceil(Date.now() / 1000),
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": resetTime.toString(),
            "Retry-After": "60",
          },
        }
      );
    }

    const now = Date.now();

    // 2. Check Tier 1: Upstash Redis (if configured in .env.local)
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      try {
        const redisRes = await fetch(`${redisUrl}/get/forex_${base}`, {
          headers: { Authorization: `Bearer ${redisToken}` },
          cache: "no-store",
        });
        if (redisRes.ok) {
          const redisData = await redisRes.json();
          if (redisData.result) {
            const parsed = typeof redisData.result === "string" ? JSON.parse(redisData.result) : redisData.result;
            return NextResponse.json(
              {
                success: true,
                source: "upstash_redis_cache",
                base,
                rates: parsed.rates,
                updatedAt: new Date(parsed.timestamp).toISOString(),
                latencyMs: Date.now() - startTime,
                tier: "L1_Distributed_Redis",
              },
              {
                headers: {
                  "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
                  "X-RateLimit-Remaining": remaining.toString(),
                  "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
                },
              }
            );
          }
        }
      } catch (redisErr) {
        console.warn("Redis check failed, falling back to L2 In-Memory Cache");
      }
    }

    // 3. Check Tier 2: In-Memory Edge Cache
    const memoryHit = memoryCache.get(base);
    if (memoryHit && now - memoryHit.timestamp < CACHE_TTL_MS) {
      return NextResponse.json(
        {
          success: true,
          source: "edge_memory_cache",
          base,
          rates: memoryHit.rates,
          updatedAt: new Date(memoryHit.timestamp).toISOString(),
          latencyMs: Date.now() - startTime,
          tier: "L2_Edge_Memory",
        },
        {
          headers: {
            "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
          },
        }
      );
    }

    // 4. Check Tier 3: Fetch fresh rates from institutional open forex API
    let freshRates: Record<string, number> = {};

    try {
      const upstreamRes = await fetch(`https://open.er-api.com/v6/latest/${base}`, {
        next: { revalidate: 900 },
      });
      if (upstreamRes.ok) {
        const data = await upstreamRes.json();
        freshRates = data.rates || {};
      }
    } catch (e) {
      console.warn("Primary forex API failed, trying European Central Bank Frankfurter API");
      try {
        const altRes = await fetch(`https://api.frankfurter.app/latest?from=${base}`);
        if (altRes.ok) {
          const altData = await altRes.json();
          freshRates = { ...altData.rates, [base]: 1.0 };
        }
      } catch (err) {
        console.warn("Frankfurter fallback failed, applying baseline institutional rates");
        freshRates = DEFAULT_RATES;
      }
    }

    if (Object.keys(freshRates).length === 0) {
      freshRates = DEFAULT_RATES;
    }

    // Cache in memory
    memoryCache.set(base, {
      timestamp: now,
      base,
      rates: freshRates,
      source: "upstream_institutional",
    });

    // Write to Upstash Redis asynchronously if configured
    if (redisUrl && redisToken) {
      fetch(`${redisUrl}/set/forex_${base}?ex=900`, {
        method: "POST",
        headers: { Authorization: `Bearer ${redisToken}` },
        body: JSON.stringify({ timestamp: now, rates: freshRates }),
      }).catch(() => {});
    }

    return NextResponse.json(
      {
        success: true,
        source: "institutional_upstream",
        base,
        rates: freshRates,
        updatedAt: new Date(now).toISOString(),
        latencyMs: Date.now() - startTime,
        tier: "L3_Institutional_Fetch",
      },
      {
        headers: {
          "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to retrieve forex rates",
        fallbackRates: DEFAULT_RATES,
      },
      { status: 500 }
    );
  }
}
