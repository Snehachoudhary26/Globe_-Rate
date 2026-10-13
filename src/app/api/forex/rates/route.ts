import { NextResponse } from "next/server";

// In-memory server-side cache (10 minutes) to keep latency low and avoid rate limits
let cachedRates: { timestamp: number; base: string; rates: Record<string, number> } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const base = (searchParams.get("base") || "INR").toUpperCase();

    const now = Date.now();
    if (cachedRates && cachedRates.base === base && now - cachedRates.timestamp < CACHE_TTL_MS) {
      return NextResponse.json({
        success: true,
        source: "cache",
        base: cachedRates.base,
        updatedAt: new Date(cachedRates.timestamp).toISOString(),
        rates: cachedRates.rates,
      });
    }

    // Fetch from institutional open forex API
    const response = await fetch(`https://open.er-api.com/v6/latest/${base}`, {
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch live forex rates");
    }

    const data = await response.json();
    cachedRates = {
      timestamp: now,
      base: data.base_code || base,
      rates: data.rates || {},
    };

    return NextResponse.json({
      success: true,
      source: "live_forex_engine",
      base: cachedRates.base,
      updatedAt: new Date(cachedRates.timestamp).toISOString(),
      rates: cachedRates.rates,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error fetching rates",
      },
      { status: 500 }
    );
  }
}
