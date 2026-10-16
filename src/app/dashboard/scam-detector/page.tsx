"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRightLeft, TrendingDown, RefreshCcw, AlertTriangle, Zap, CheckCircle2 } from "lucide-react";

export default function ScamDetector() {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [offeredRate, setOfferedRate] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [cacheSource, setCacheSource] = useState<string | null>(null);
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
      // Connect to GlobeRate's high-performance cached API route
      const startTime = performance.now();
      const res = await fetch(`/api/forex/rates?base=${fromCurrency}`);
      const data = await res.json();
      const elapsed = Math.round(performance.now() - startTime);
      setLatency(elapsed);
      setCacheSource(data.tier || data.source || "Edge Cache");
      
      const realRate = data.rates?.[toCurrency] || 1;
      const offered = parseFloat(offeredRate);
      const amountValue = parseFloat(amount) || 1;
      
      // Calculate hidden markup
      const diff = realRate - offered;
      const markupPercent = (diff / realRate) * 100;
      const loss = diff * amountValue;

      setResult({
        realRate,
        markup: markupPercent,
        lossAmount: loss,
        fair: markupPercent <= 2.5, // Standard international bank margin
      });
    } catch (error) {
      console.error("Failed to fetch rates", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto font-sans">
      
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE8] border border-[#DDD7D0] text-[#49263F] text-xs font-black tracking-wide uppercase mb-3">
          <ShieldAlert size={15} /> Rate Audit Engine
        </div>
        <h1 className="text-3xl font-black text-[#29252B] tracking-tight">Is this rate fair or a scam?</h1>
        <p className="text-[#8A7B85] font-semibold mt-1">Enter the foreign exchange rate offered by your airport booth, ATM, or card terminal to reveal hidden markups.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* INPUT SECTION */}
        <div className="bg-white p-7 rounded-3xl border border-[#DDD7D0] shadow-sm">
          <div className="space-y-5">
            
            {/* Amount */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#8A7B85] mb-2">You want to exchange</label>
              <div className="flex gap-3">
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl px-4 py-3 font-bold text-[#29252B] focus:outline-none focus:border-[#49263F] focus:ring-1 focus:ring-[#49263F] transition-all"
                />
                <select 
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-28 bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl px-3 py-3 font-black text-[#49263F] focus:outline-none focus:border-[#49263F]"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="SGD">SGD</option>
                  <option value="AED">AED</option>
                </select>
              </div>
            </div>

            {/* Target Currency */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#8A7B85] mb-2">Into (Target Currency)</label>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl px-4 py-3 font-black text-[#49263F] focus:outline-none focus:border-[#49263F]"
              >
                <option value="INR">INR - Indian Rupee</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="AED">AED - UAE Dirham</option>
                <option value="EUR">EUR - Euro</option>
                <option value="USD">USD - US Dollar</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>

            {/* Offered Rate */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#8A7B85] mb-2">Rate they are offering you</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-[#8A7B85] font-black text-sm">1 {fromCurrency} =</span>
                <input 
                  type="number" 
                  placeholder="e.g. 81.50"
                  value={offeredRate}
                  onChange={(e) => setOfferedRate(e.target.value)}
                  className="w-full bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl pl-24 pr-4 py-3 font-black text-[#49263F] focus:outline-none focus:border-[#49263F] focus:ring-1 focus:ring-[#49263F] text-lg"
                />
              </div>
            </div>

            <button 
              onClick={checkRate}
              disabled={loading || !offeredRate}
              className="w-full py-4 rounded-xl bg-[#49263F] text-white font-black flex items-center justify-center gap-2 hover:bg-[#3B1E33] disabled:opacity-40 transition-all shadow-md shadow-[#49263F]/20 cursor-pointer"
            >
              {loading ? <RefreshCcw className="animate-spin" size={19} /> : <ShieldAlert size={19} />}
              {loading ? "Auditing Institutional Rates..." : "Audit Rate for Hidden Fees"}
            </button>

            {latency !== null && (
              <div className="flex items-center justify-between text-[11px] font-bold text-[#8A7B85] pt-2 border-t border-[#DDD7D0]/60">
                <span className="flex items-center gap-1 text-[#49263F]">
                  <Zap size={13} className="text-[#49263F]" /> {cacheSource}
                </span>
                <span>Response Time: <strong className="text-[#29252B]">{latency}ms</strong></span>
              </div>
            )}

          </div>
        </div>

        {/* RESULTS SECTION */}
        <div>
          {result ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-7 rounded-3xl border border-[#DDD7D0] bg-white shadow-lg space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-[#DDD7D0]">
                {result.fair ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-[#EFECE8] text-[#49263F] flex items-center justify-center border border-[#DDD7D0]"><CheckCircle2 size={20} /></div>
                    <div>
                      <h3 className="text-lg font-black text-[#29252B]">Fair Exchange Rate</h3>
                      <p className="text-xs text-[#8A7B85] font-semibold">Near institutional mid-market benchmark</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-[#49263F] text-white flex items-center justify-center shadow-md"><AlertTriangle size={20} /></div>
                    <div>
                      <h3 className="text-lg font-black text-[#49263F]">Predatory Markup Detected</h3>
                      <p className="text-xs text-[#8A7B85] font-semibold">Hidden DCC fees applied to this transaction</p>
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-3 bg-[#FAF8F6] p-4 rounded-2xl border border-[#DDD7D0]">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8A7B85] font-bold">Real Mid-Market Rate</span>
                  <span className="font-black text-[#29252B]">{result.realRate.toFixed(4)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8A7B85] font-bold">Rate Offered to You</span>
                  <span className="font-black text-[#49263F]">{parseFloat(offeredRate).toFixed(4)}</span>
                </div>
              </div>

              {!result.fair && (
                <div className="bg-[#FAF8F6] rounded-2xl p-5 text-center border-2 border-[#49263F]/20">
                  <p className="text-xs font-black uppercase tracking-wider text-[#49263F] mb-1">Hidden Markup Margin</p>
                  <div className="text-4xl font-black text-[#49263F] mb-1">{result.markup.toFixed(1)}%</div>
                  <p className="text-xs font-semibold text-[#8A7B85]">
                    You would lose <strong className="text-[#49263F] font-black">{Math.max(0, result.lossAmount).toFixed(2)} {toCurrency}</strong> on this exchange.
                  </p>
                </div>
              )}
              
              {result.fair && (
                <div className="bg-[#EFECE8] rounded-2xl p-5 text-center border border-[#DDD7D0]">
                  <p className="text-xs font-black uppercase tracking-wider text-[#49263F] mb-1">Approved Rate</p>
                  <p className="text-xs font-semibold text-[#29252B]">
                    Markup is only {result.markup.toFixed(1)}%. This aligns with verified zero-surcharge bank rates. You can safely proceed.
                  </p>
                </div>
              )}

            </motion.div>
          ) : (
            <div className="h-full border-2 border-dashed border-[#DDD7D0] rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-[#FAF8F6]/50">
              <div className="w-14 h-14 bg-[#EFECE8] rounded-full flex items-center justify-center text-[#49263F] mb-3 border border-[#DDD7D0]">
                <TrendingDown size={28} />
              </div>
              <h3 className="font-black text-[#29252B] text-base mb-1">Awaiting Rate Input</h3>
              <p className="text-xs text-[#8A7B85] font-semibold max-w-xs">Enter the rate from an ATM or booth on the left to instantly test against live institutional mid-market rates.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
