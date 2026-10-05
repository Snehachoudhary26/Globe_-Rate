"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, RefreshCcw, Coffee, Pizza, Film, Car, Smartphone, Home } from "lucide-react";

// Familiar home items with average prices in INR
const homeAnchors = [
  { name: "Cup of Chai", price: 20, icon: Coffee, bg: "bg-butter-yellow", color: "text-amber-600" },
  { name: "Movie Ticket", price: 300, icon: Film, bg: "bg-pale-purple", color: "text-purple-magenta" },
  { name: "Uber Ride", price: 400, icon: Car, bg: "bg-pale-aqua", color: "text-sea-blue" },
  { name: "Domino's Pizza", price: 600, icon: Pizza, bg: "bg-blush-pink", color: "text-coral-pink" },
  { name: "Netflix Month", price: 650, icon: Smartphone, bg: "bg-slate-200", color: "text-slate-800" },
  { name: "Month of Rent", price: 20000, icon: Home, bg: "bg-soft-mint", color: "text-sea-green" },
];

export default function PriceAnchor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("JPY");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    convertedAmount: number;
    anchors: { item: any; count: number }[];
  } | null>(null);

  const calculateAnchor = async () => {
    if (!amount) return;
    setLoading(true);

    try {
      // Free Frankfurter API
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);
      const data = await res.json();
      const convertedInr = data.rates.INR;

      // Find best matching anchors
      let matchedAnchors = homeAnchors.map(anchor => {
        const count = convertedInr / anchor.price;
        return { item: anchor, count };
      });

      // Filter for anchors that make sense (e.g. between 0.5 and 50 items)
      matchedAnchors = matchedAnchors
        .filter(a => a.count >= 0.5 && a.count <= 50)
        .sort((a, b) => {
          // Sort to find the items closest to a whole number (1x, 2x, etc.)
          const aDecimal = Math.abs(a.count - Math.round(a.count));
          const bDecimal = Math.abs(b.count - Math.round(b.count));
          return aDecimal - bDecimal;
        })
        .slice(0, 3); // Take top 3 best fits

      setResult({
        convertedAmount: convertedInr,
        anchors: matchedAnchors
      });
    } catch (error) {
      console.error("Failed to fetch rates", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      <header>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-butter-yellow text-amber-600 text-sm font-bold mb-4">
          <Anchor size={16} /> Price Anchor
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Feel the price.</h1>
        <p className="text-slate-500 font-medium mt-2">Enter a foreign price to see what it equals in familiar everyday items back home.</p>
      </header>

      {/* Input Section */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">Price you are looking at</label>
          <input 
            type="number" 
            placeholder="e.g. 2500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div className="w-full md:w-48">
          <label className="block text-sm font-bold text-slate-700 mb-2">Currency</label>
          <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="JPY">JPY - Yen</option>
            <option value="THB">THB - Baht</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Pound</option>
            <option value="USD">USD - Dollar</option>
          </select>
        </div>
        <button 
          onClick={calculateAnchor}
          disabled={loading || !amount}
          className="w-full md:w-auto px-8 py-4 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-amber-600 disabled:opacity-50 transition-all"
        >
          {loading ? <RefreshCcw className="animate-spin" size={20} /> : <Anchor size={20} />}
          Anchor It
        </button>
      </div>

      {/* Results Section */}
      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center p-8 bg-slate-900 rounded-3xl shadow-xl text-white">
            <p className="text-slate-400 font-medium mb-2">That equals</p>
            <h2 className="text-5xl font-black">₹{result.convertedAmount.toFixed(0)}</h2>
          </div>

          <h3 className="text-xl font-bold text-slate-800 text-center mt-10 mb-6">Which feels like buying...</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {result.anchors.map((anchor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className={`p-6 rounded-3xl border border-white shadow-sm flex flex-col items-center text-center ${anchor.item.bg}`}
              >
                <div className={`w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-4 shadow-sm ${anchor.item.color}`}>
                  <anchor.item.icon size={32} />
                </div>
                <div className="text-3xl font-black text-slate-800 mb-1">
                  {anchor.count < 2 ? anchor.count.toFixed(1) : Math.round(anchor.count)}x
                </div>
                <div className="font-bold text-slate-700">{anchor.item.name}s</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
