const fs = require('fs');

// 1. Dark Neon Dashboard Layout
const layoutCode = `"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, LogOut, Sparkles, Home } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 flex relative overflow-hidden text-white">
      {/* Massive Neon Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-magenta/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-sea-green/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Dark Frosted Glass Sidebar */}
      <aside className="w-72 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[20px_0_60px_rgba(0,0,0,0.5)] flex flex-col hidden md:flex z-20 m-6 rounded-[2.5rem]">
        <Link href="/" className="p-8 border-b border-white/10 flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] relative flex items-center justify-center bg-white">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-black text-3xl tracking-tight text-white drop-shadow-md">GlobeRate</span>
        </Link>
        
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-300 hover:bg-white/10 hover:text-white font-black transition-all mb-4 border border-transparent hover:border-white/10">
            <Home size={20} /> Back to Home
          </Link>

          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mt-6 mb-4 ml-2">Main Tools</p>
          
          <Link href="/dashboard" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}\`}>
            <LayoutDashboard size={20} /> Overview
          </Link>
          
          <Link href="/dashboard/budget" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard/budget' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}\`}>
            <Wallet size={20} /> Budget River
          </Link>
          
          <Link href="/dashboard/nova" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard/nova' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}\`}>
            <Smartphone size={20} /> Nova AI Lens
          </Link>
        </nav>
        
        <div className="p-6">
          <Link href="/" className="flex items-center justify-center gap-3 px-5 py-4 w-full rounded-2xl text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 font-black transition-colors border border-rose-500/20">
            <LogOut size={20} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        <header className="h-28 flex items-center justify-between px-10 z-10 pt-6">
          <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-md">Dashboard</h1>
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-white/20 transition-all">
              <Sparkles size={18} className="text-purple-400" /> Ask Nova AI
            </button>
            <div className="w-14 h-14 rounded-full border-2 border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
               <Image src="/images/hero.jpg" alt="Profile" fill className="object-cover" />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}`;
fs.writeFileSync('src/app/dashboard/layout.tsx', layoutCode);

// 2. Dark Neon Dashboard Overview
const pageCode = `"use client";
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
              <div className={\`w-14 h-14 rounded-2xl bg-gradient-to-br \${tool.color} mb-6 \${tool.shadow} transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300\`}></div>
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
}`;
fs.writeFileSync('src/app/dashboard/page.tsx', pageCode);

// 3. Update Nova AI Page to match the new Dark Mode
let novaCode = fs.readFileSync('src/app/dashboard/nova/page.tsx', 'utf8');
novaCode = novaCode.replace(/text-slate-900/g, 'text-white');
novaCode = novaCode.replace(/text-slate-500/g, 'text-slate-300');
novaCode = novaCode.replace(/text-slate-800/g, 'text-white');
novaCode = novaCode.replace(/bg-white/g, 'bg-white/10 backdrop-blur-xl border border-white/10');
novaCode = novaCode.replace(/bg-slate-50/g, 'bg-black/40 border border-white/10');
novaCode = novaCode.replace(/border-slate-100/g, 'border-white/10');
fs.writeFileSync('src/app/dashboard/nova/page.tsx', novaCode);
