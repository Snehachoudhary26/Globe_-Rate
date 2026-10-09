"use client";
import Link from "next/link";
import { Wallet, ArrowRight, ShieldAlert, TrendingDown, Plane } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Balance Card - Deep Space Glow */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-black rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="absolute top-[-30%] right-[-10%] w-80 h-80 bg-purple-magenta/40 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-30%] left-[-10%] w-80 h-80 bg-cyan-500/30 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Plane size={20} className="text-white" />
              </div>
              <p className="text-slate-300 font-black uppercase tracking-widest text-sm drop-shadow-md">Euro Trip Budget</p>
            </div>
            
            <h2 className="text-6xl font-black mb-8 tracking-tight drop-shadow-lg">
              $4,250.00 <span className="text-3xl text-slate-400 font-medium">USD</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                <Wallet size={20} /> Add Funds
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/10 transition-all">
                Convert Currency
              </button>
            </div>
          </div>
        </div>

        {/* Neon Scam Alert Card */}
        <div className="bg-gradient-to-br from-rose-950 to-black rounded-[2.5rem] p-8 border border-rose-500/30 flex flex-col justify-between shadow-[0_0_40px_rgba(244,63,94,0.2)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
           <div className="relative z-10">
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.6)]">
               <ShieldAlert size={28} />
             </div>
             <h3 className="text-2xl font-black text-rose-400 mb-3 drop-shadow-md">Scam Avoided!</h3>
             <p className="text-rose-100 font-medium leading-relaxed mb-6 opacity-90">
               Nova AI successfully blocked an unfair 8% markup at a Euronet ATM in Paris yesterday.
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full text-sm font-black text-rose-300 border border-rose-500/30 shadow-sm">
               <TrendingDown size={16} /> Saved $42.50
             </div>
           </div>
        </div>
      </div>

      {/* Glowing Tools Grid */}
      <div>
        <h3 className="text-3xl font-black text-white mb-8 tracking-tight drop-shadow-md">Your 22+ Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Nova Scanner", color: "from-purple-400 to-purple-600", shadow: "shadow-[0_0_25px_rgba(168,85,247,0.6)]" },
            { title: "ATM Heatmap", color: "from-amber-400 to-orange-500", shadow: "shadow-[0_0_25px_rgba(245,158,11,0.6)]" },
            { title: "Split Group Bills", color: "from-sea-green to-emerald-500", shadow: "shadow-[0_0_25px_rgba(16,185,129,0.6)]" },
            { title: "Live Anchor", color: "from-blue-400 to-indigo-600", shadow: "shadow-[0_0_25px_rgba(59,130,246,0.6)]" },
            { title: "Tax Refund", color: "from-pink-400 to-rose-500", shadow: "shadow-[0_0_25px_rgba(244,63,94,0.6)]" },
            { title: "Offline OCR", color: "from-cyan-400 to-teal-500", shadow: "shadow-[0_0_25px_rgba(6,182,212,0.6)]" },
            { title: "Crypto Swap", color: "from-slate-400 to-slate-600", shadow: "shadow-[0_0_25px_rgba(148,163,184,0.6)]" },
            { title: "View All Tools", color: "from-white/20 to-white/10", shadow: "shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white" },
          ].map((tool, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:border-white/30 transition-all cursor-pointer group relative overflow-hidden">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} mb-6 ${tool.shadow} transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}></div>
              <h4 className="font-bold text-slate-200 flex items-center justify-between group-hover:text-white transition-colors">
                {tool.title} 
                <ArrowRight size={18} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}