"use client";
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
          
          <Link href="/dashboard" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}>
            <LayoutDashboard size={20} /> Overview
          </Link>
          
          <Link href="/dashboard/budget" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard/budget' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}>
            <Wallet size={20} /> Budget River
          </Link>
          
          <Link href="/dashboard/nova" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard/nova' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-[0_0_20px_rgba(211,169,255,0.4)] border border-white/20' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}>
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
}