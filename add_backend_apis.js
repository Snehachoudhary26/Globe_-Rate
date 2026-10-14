const fs = require('fs');

// Ensure directories exist
fs.mkdirSync('src/app/api/forex/rates', { recursive: true });
fs.mkdirSync('src/app/api/scam/analyze', { recursive: true });

// 1. FOREX LIVE ENGINE (/api/forex/rates/route.ts)
const forexRouteCode = `import { NextResponse } from "next/server";

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
    const response = await fetch(\`https://open.er-api.com/v6/latest/\${base}\`, {
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
`;
fs.writeFileSync('src/app/api/forex/rates/route.ts', forexRouteCode);

// 2. SCAM SCORING ENGINE (/api/scam/analyze/route.ts)
const scamRouteCode = `import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fromCurrency = "EUR",
      toCurrency = "INR",
      amountOffered,
      amountToPay,
      boothFee = 0,
    } = body;

    if (!amountOffered || !amountToPay) {
      return NextResponse.json(
        { success: false, error: "Please provide both amountOffered and amountToPay" },
        { status: 400 }
      );
    }

    // Fetch official real mid-market benchmark
    const res = await fetch(\`https://open.er-api.com/v6/latest/\${fromCurrency.toUpperCase()}\`);
    const data = await res.json();
    const realMidMarketRate = data.rates?.[toCurrency.toUpperCase()] || 1;

    // What the user is actually getting vs what they should get
    const offeredRate = Number(amountToPay) / Number(amountOffered);
    const fairMarketAmount = Number(amountOffered) * realMidMarketRate;
    const actualReceivedAmount = Number(amountToPay) - Number(boothFee);
    
    // Difference calculation
    const lossInHomeCurrency = fairMarketAmount - actualReceivedAmount;
    const hiddenMarkupPercent = ((fairMarketAmount - actualReceivedAmount) / fairMarketAmount) * 100;

    let riskTier = "SAFE";
    let recommendation = "Fair rate. You are getting close to the mid-market exchange value.";

    if (hiddenMarkupPercent >= 8) {
      riskTier = "PREDATORY_SCAM";
      recommendation = "Severe markup detected! Airport booth / ATM is hiding large fees. Walk away and find a verified local bank ATM.";
    } else if (hiddenMarkupPercent >= 3.5) {
      riskTier = "MODERATE_MARKUP";
      recommendation = "Moderate markup. Typical for high-tourist zones, but you can find better rates at standard bank ATMs.";
    }

    return NextResponse.json({
      success: true,
      analysis: {
        fromCurrency,
        toCurrency,
        realMidMarketRate: Number(realMidMarketRate.toFixed(4)),
        offeredRate: Number(offeredRate.toFixed(4)),
        fairMarketAmount: Math.round(fairMarketAmount),
        actualReceivedAmount: Math.round(actualReceivedAmount),
        hiddenMarkupPercent: Number(Math.max(0, hiddenMarkupPercent).toFixed(2)),
        lossInHomeCurrency: Math.max(0, Math.round(lossInHomeCurrency)),
        riskTier,
        recommendation,
        analyzedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to analyze exchange rate" },
      { status: 500 }
    );
  }
}
`;
fs.writeFileSync('src/app/api/scam/analyze/route.ts', scamRouteCode);

console.log("✅ Successfully created /api/forex/rates and /api/scam/analyze!");
