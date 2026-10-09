"use client";
import { Wallet, ArrowRight, ShieldAlert, TrendingDown, Plane } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const tools = [
    { title: "Nova Scanner", href: "/dashboard/nova", color: "from-purple-400 to-purple-600" },
    { title: "ATM Heatmap", href: "/dashboard/map", color: "from-amber-400 to-orange-500" },
    { title: "Split Group Bills", href: "/dashboard/split", color: "from-sea-green to-emerald-500" },
    { title: "Live Anchor", href: "/dashboard/exchange", color: "from-blue-400 to-indigo-600" },
    { title: "Tax Refund Guide", href: "/dashboard/tax", color: "from-pink-400 to-rose-500" },
    { title: "Offline OCR", href: "/dashboard/nova", color: "from-cyan-400 to-teal-500" },
    { title: "Crypto Swap", href: "/dashboard/crypto", color: "from-slate-400 to-slate-600" },
    { title: "View All Tools", href: "/dashboard/tools", color: "from-indigo-400 to-blue-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-black rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-[-30%] right-[-10%] w-80 h-80 bg-purple-magenta/30 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Plane size={20} className="text-white" />
              </div>
              <p className="text-slate-300 font-black uppercase tracking-widest text-sm">Euro Trip Budget</p>
            </div>
            
            <h2 className="text-6xl font-black mb-8 tracking-tight">
              $4,250.00 <span className="text-3xl text-slate-400 font-medium">USD</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard/funds" className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black flex items-center gap-2 hover:scale-105 transition-all shadow-lg">
                <Wallet size={20} /> Add Funds
              </Link>
              <Link href="/dashboard/exchange" className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 transition-all flex items-center">
                Convert Currency
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-xl">
           <div>
             <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
               <ShieldAlert size={28} />
             </div>
             <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Scam Avoided!</h3>
             <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
               Nova AI successfully blocked an unfair 8% markup at a Euronet ATM in Paris yesterday.
             </p>
           </div>
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-sm font-black text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 w-fit">
             <TrendingDown size={16} /> Saved $42.50
           </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Your 22+ Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <Link key={i} href={tool.href} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group block">
              <div className={"w-14 h-14 rounded-2xl bg-gradient-to-br " + tool.color + " mb-6 shadow-md transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"}></div>
              <h4 className="font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                {tool.title} 
                <ArrowRight size={18} className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}