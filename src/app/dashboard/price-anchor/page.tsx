"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, RefreshCcw, Coffee, Pizza, Film, Car, Smartphone, Home, Zap } from "lucide-react";

const homeAnchors = [
  { name: "Cup of Masala Chai", price: 20, icon: Coffee },
  { name: "Movie Ticket (PVR)", price: 300, icon: Film },
  { name: "City Uber Ride", price: 400, icon: Car },
  { name: "Artisanal Pizza", price: 650, icon: Pizza },
  { name: "Monthly Streaming Sub", price: 799, icon: Smartphone },
  { name: "Studio Monthly Rent", price: 22000, icon: Home },
];

export default function PriceAnchor() {
  const [amount, setAmount] = useState("5000");
  const [currency, setCurrency] = useState("JPY");
  const [loading, setLoading] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [result, setResult] = useState<{
    convertedAmount: number;
    anchors: { item: any; count: number }[];
  } | null>(null);

  const calculateAnchor = async () => {
    if (!amount) return;
    setLoading(true);

    try {
      const startTime = performance.now();
      const res = await fetch(`/api/forex/rates?base=${currency}`);
      const data = await res.json();
      setLatency(Math.round(performance.now() - startTime));

      const inrRate = data.rates?.INR || 0.58;
      const convertedInr = parseFloat(amount) * inrRate;

      let matchedAnchors = homeAnchors.map((anchor) => {
        const count = convertedInr / anchor.price;
        return { item: anchor, count };
      });

      matchedAnchors = matchedAnchors
        .filter((a) => a.count >= 0.4 && a.count <= 100)
        .sort((a, b) => Math.abs(a.count - 1) - Math.abs(b.count - 1));

      setResult({
        convertedAmount: convertedInr,
        anchors: matchedAnchors.slice(0, 4),
      });
    } catch (error) {
      console.error("Failed to calculate anchor", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE8] border border-[#DDD7D0] text-[#49263F] text-xs font-black tracking-wide uppercase mb-3">
          <Anchor size={15} /> Psychological Price Anchor
        </div>
        <h1 className="text-3xl font-black text-[#29252B] tracking-tight">What does this cost in real life?</h1>
        <p className="text-[#8A7B85] font-semibold mt-1">
          When spending foreign money (like 5,000 Yen or 45 Euro), your brain loses its financial anchor. This tool translates foreign prices into familiar daily purchases.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-1 bg-white p-7 rounded-3xl border border-[#DDD7D0] shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#8A7B85] mb-2">Foreign Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl px-4 py-3 font-black text-[#49263F] text-lg focus:outline-none focus:border-[#49263F]"
              placeholder="e.g. 5000"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#8A7B85] mb-2">Foreign Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl px-4 py-3 font-black text-[#49263F] focus:outline-none focus:border-[#49263F]"
            >
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="EUR">EUR - Euro</option>
              <option value="USD">USD - US Dollar</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="THB">THB - Thai Baht</option>
            </select>
          </div>

          <button
            onClick={calculateAnchor}
            disabled={loading || !amount}
            className="w-full py-3.5 bg-[#49263F] text-white rounded-xl font-black hover:bg-[#3B1E33] disabled:opacity-40 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#49263F]/20 cursor-pointer"
          >
            {loading ? <RefreshCcw className="animate-spin" size={17} /> : <Anchor size={17} />}
            {loading ? "Anchoring..." : "Anchor Price"}
          </button>

          {latency !== null && (
            <div className="flex items-center justify-between text-[11px] font-bold text-[#8A7B85] pt-2 border-t border-[#DDD7D0]/60">
              <span className="flex items-center gap-1 text-[#49263F]">
                <Zap size={13} /> Edge Cached
              </span>
              <span>{latency}ms</span>
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          {result ? (
            <div className="space-y-4">
              <div className="bg-[#FAF8F6] p-6 rounded-3xl border border-[#DDD7D0]">
                <p className="text-xs font-black uppercase tracking-wider text-[#8A7B85]">Equates To Home Value</p>
                <div className="text-3xl font-black text-[#49263F] mt-1">
                  ₹{Math.round(result.convertedAmount).toLocaleString("en-IN")} INR
                </div>
                <p className="text-xs text-[#8A7B85] font-semibold mt-1">
                  {amount} {currency} at institutional mid-market conversion
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {result.anchors.map((anchor, idx) => {
                  const Icon = anchor.item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-5 rounded-2xl border border-[#DDD7D0] shadow-sm flex items-center gap-3.5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#EFECE8] text-[#49263F] flex items-center justify-center flex-shrink-0 border border-[#DDD7D0]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-[#29252B]">
                          ~{anchor.count < 1 ? anchor.count.toFixed(1) : Math.round(anchor.count)}x
                        </div>
                        <div className="text-xs font-bold text-[#8A7B85] leading-tight mt-0.5">
                          {anchor.item.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-[#DDD7D0] rounded-3xl flex flex-col items-center justify-center text-center p-8 bg-[#FAF8F6]/50">
              <Anchor className="text-[#8A7B85] mb-2" size={32} />
              <p className="text-sm font-bold text-[#29252B]">Ready to anchor foreign currency</p>
              <p className="text-xs text-[#8A7B85] mt-1">Enter an amount on the left to visualize its actual purchasing power back home.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
