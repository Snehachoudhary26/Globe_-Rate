"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRightLeft, TrendingDown, RefreshCcw, AlertTriangle } from "lucide-react";

export default function ScamDetector() {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [offeredRate, setOfferedRate] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    realRate: number;
    markup: number;
    lossAmount: number;
    fair: boolean;
  } | null>(null);

  const checkRate = async () => {
    if (!offeredRate) return;
    setLoading(true);
    
    try {
      // Call the completely FREE Frankfurter API for real-time rates
      const res = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      
      const realRate = data.rates[toCurrency];
      const offered = parseFloat(offeredRate);
      const amountValue = parseFloat(amount);
      
      // Calculate how much they are stealing (markup)
      const diff = realRate - offered;
      const markupPercent = (diff / realRate) * 100;
      const loss = diff * amountValue;

      setResult({
        realRate,
        markup: markupPercent,
        lossAmount: loss,
        fair: markupPercent <= 2.5 // Banks usually charge 2-2.5%. Anything more is a scam.
      });
    } catch (error) {
      console.error("Failed to fetch rates", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush-pink text-coral-pink text-sm font-bold mb-4">
          <ShieldAlert size={16} /> Scam Detector
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Is this rate fair?</h1>
        <p className="text-slate-500 font-medium mt-2">Enter the exchange rate they are offering you to reveal hidden markups.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* INPUT SECTION */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="space-y-6">
            
            {/* Amount */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">You want to exchange</label>
              <div className="flex gap-4">
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-sea-green"
                />
                <select 
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-28 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-sea-green"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>
            </div>

            {/* Target Currency */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Into</label>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-sea-green"
              >
                <option value="INR">INR - Indian Rupee</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="AED">AED - UAE Dirham</option>
              </select>
            </div>

            {/* Offered Rate */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Rate they are offering</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400 font-bold">1 {fromCurrency} =</span>
                <input 
                  type="number" 
                  placeholder="e.g. 81.50"
                  value={offeredRate}
                  onChange={(e) => setOfferedRate(e.target.value)}
                  className="w-full bg-pale-purple/20 border border-lilac rounded-xl pl-24 pr-4 py-3 font-bold text-purple-magenta focus:outline-none focus:ring-2 focus:ring-purple-magenta"
                />
              </div>
            </div>

            <button 
              onClick={checkRate}
              disabled={loading || !offeredRate}
              className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-50 transition-all"
            >
              {loading ? <RefreshCcw className="animate-spin" size={20} /> : <ShieldAlert size={20} />}
              {loading ? "Checking real-time rates..." : "Check for Hidden Fees"}
            </button>

          </div>
        </div>

        {/* RESULTS SECTION */}
        <div>
          {result ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-8 rounded-3xl border shadow-lg ${
                result.fair 
                  ? "bg-soft-mint border-sea-green/30" 
                  : "bg-pale-peach border-coral-pink/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-black/5 pb-4">
                {result.fair ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-sea-green text-white flex items-center justify-center"><ArrowRightLeft size={20} /></div>
                    <h3 className="text-xl font-bold text-slate-900">Fair Exchange Rate</h3>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-coral-pink text-white flex items-center justify-center"><AlertTriangle size={20} /></div>
                    <h3 className="text-xl font-bold text-slate-900">Unfair Rate Detected</h3>
                  </>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Real Mid-Market Rate</span>
                  <span className="font-bold text-slate-900">{result.realRate.toFixed(4)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Rate You Were Offered</span>
                  <span className="font-bold text-slate-900">{parseFloat(offeredRate).toFixed(4)}</span>
                </div>
              </div>

              {!result.fair && (
                <div className="bg-white/60 rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-sm font-bold text-coral-pink mb-2">Hidden Markup (Fees)</p>
                  <div className="text-4xl font-black text-slate-900 mb-2">{result.markup.toFixed(1)}%</div>
                  <p className="text-slate-700 font-medium">
                    You are losing <strong className="text-coral-pink text-lg">{result.lossAmount.toFixed(2)} {toCurrency}</strong> on this transaction.
                  </p>
                </div>
              )}
              
              {result.fair && (
                <div className="bg-white/60 rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-sm font-bold text-sea-green mb-2">Good Deal</p>
                  <p className="text-slate-700 font-medium">
                    The markup is only {result.markup.toFixed(1)}%. This is better than most airport booths. You can safely exchange here.
                  </p>
                </div>
              )}

            </motion.div>
          ) : (
            <div className="h-full border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <TrendingDown size={32} />
              </div>
              <h3 className="font-bold text-slate-400 mb-2">Awaiting Input</h3>
              <p className="text-sm text-slate-400 font-medium">Enter the rate you're being offered on the left to see if it's a scam.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
