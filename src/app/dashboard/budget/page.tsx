"use client";
import { useState } from "react";
import { Wallet, Plane, Coffee, Hotel, Bus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BudgetRiverPage() {
  const [budget] = useState({
    total: 5000,
    spent: 2150,
    remaining: 2850,
    currency: "USD"
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 lg:p-12 font-sans relative overflow-hidden">
      {/* Radiant Pink & Purple Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF007A]/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#7928CA]/25 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/dashboard" className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm font-bold hover:bg-white/20 transition-all">
            Open Console
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF007A]/20 border border-[#FF007A]/30 text-pink-300 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Plane size={14} /> Active Trip: Euro Tour
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white">
              Budget <span className="text-[#FF007A] drop-shadow-[0_0_20px_rgba(255,0,122,0.5)]">River</span>
            </h1>
            <p className="text-slate-400 font-medium mt-1">Real-time dynamic spending flow and multi-currency burn rate.</p>
          </div>
          <button className="px-6 py-3.5 bg-gradient-to-r from-[#FF007A] to-[#7928CA] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,0,122,0.4)] flex items-center gap-2">
            <Plus size={18} /> Log Expense
          </button>
        </div>

        {/* River Progress Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Remaining Budget</p>
              <h2 className="text-5xl font-black text-white mt-1">
                ${budget.remaining.toLocaleString()} <span className="text-2xl font-bold text-slate-400">USD</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Allocated</p>
              <p className="text-2xl font-black text-slate-300 mt-1">${budget.total.toLocaleString()} USD</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-6 w-full bg-slate-900 rounded-full overflow-hidden flex shadow-inner border border-white/10">
              <div className="h-full bg-gradient-to-r from-[#FF007A] to-[#7928CA] w-[43%] transition-all duration-500 flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_rgba(255,0,122,0.6)]">43% Spent</div>
              <div className="h-full bg-emerald-400/80 w-[57%] transition-all duration-500 flex items-center justify-center text-[10px] font-black text-slate-900">57% Safe</div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Spent: ${budget.spent.toLocaleString()}</span>
              <span>Safe Daily Allowance: $95/day</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Hotels & Stays", spent: "$980", icon: Hotel, color: "from-blue-500 to-indigo-600" },
            { name: "Food & Dining", spent: "$640", icon: Coffee, color: "from-[#FF007A] to-rose-600" },
            { name: "Transport & Trains", spent: "$320", icon: Bus, color: "from-emerald-500 to-teal-600" },
            { name: "Activities & Misc", spent: "$210", icon: Wallet, color: "from-[#7928CA] to-purple-600" },
          ].map((cat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg hover:border-white/20 transition-all">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 text-white shadow-md`}>
                <cat.icon size={22} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{cat.name}</p>
              <h3 className="text-2xl font-black text-white mt-1">{cat.spent}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}