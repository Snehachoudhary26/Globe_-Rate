"use client";
import { Wallet, ArrowRight, ShieldAlert, TrendingDown, Plane } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      
      {/* WELCOME & HERO STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* MAIN BALANCE CARD (Vibrant Dark Theme) */}
        <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
          {/* Glowing Orbs in the background of the card */}
          <div className="absolute top-[-30%] right-[-10%] w-80 h-80 bg-purple-magenta/40 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-30%] left-[-10%] w-80 h-80 bg-sea-green/40 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div>
              <p className="text-slate-300 font-bold uppercase tracking-widest text-sm">Euro Trip Budget</p>
            </div>
            
            <h2 className="text-6xl font-black mb-8 tracking-tight">
              $4,250.00 <span className="text-3xl text-slate-400 font-medium">USD</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
                <Wallet size={20} /> Add Funds
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 transition-all">
                Convert Currency
              </button>
            </div>
          </div>
        </div>

        {/* NOVA AI ALERT CARD (Popping Scam Detector Preview) */}
        <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-[2.5rem] p-8 border-2 border-white flex flex-col justify-between shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
           <div className="relative z-10">
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-rose-500/30">
               <ShieldAlert size={28} />
             </div>
             <h3 className="text-2xl font-black text-rose-900 mb-3">Scam Avoided!</h3>
             <p className="text-rose-700 font-medium leading-relaxed mb-6">
               Nova AI successfully blocked an unfair 8% markup at a Euronet ATM in Paris yesterday.
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-black text-rose-600 shadow-sm">
               <TrendingDown size={16} /> Saved $42.50
             </div>
           </div>
        </div>
      </div>

      {/* QUICK TOOLS GRID */}
      <div>
        <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Your 22+ Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Nova Menu Scanner", color: "from-purple-400 to-purple-600", shadow: "shadow-purple-500/30" },
            { title: "ATM Heatmap", color: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/30" },
            { title: "Split Group Bills", color: "from-sea-green to-emerald-500", shadow: "shadow-sea-green/30" },
            { title: "Live Rate Anchor", color: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/30" },
            { title: "Tax Refund Guide", color: "from-pink-400 to-rose-500", shadow: "shadow-rose-500/30" },
            { title: "Offline OCR", color: "from-cyan-400 to-teal-500", shadow: "shadow-cyan-500/30" },
            { title: "Crypto Swap", color: "from-slate-700 to-slate-900", shadow: "shadow-slate-500/30" },
            { title: "View All 22 Tools", color: "from-slate-200 to-slate-300 text-slate-700", shadow: "shadow-slate-300/30" },
          ].map((tool, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border-2 border-slate-50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group relative overflow-hidden">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} mb-6 shadow-lg ${tool.shadow} transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}></div>
              <h4 className="font-bold text-slate-800 flex items-center justify-between">
                {tool.title} 
                <ArrowRight size={18} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
              </h4>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
