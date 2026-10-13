import { NextResponse } from "next/server";

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
    const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency.toUpperCase()}`);
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
