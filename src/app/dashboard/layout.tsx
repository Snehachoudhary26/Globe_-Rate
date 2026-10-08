"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, Settings, LogOut, Sparkles, Home } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex relative overflow-hidden">
      {/* Vibrant Background Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-magenta/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-sea-green/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Floating Glassmorphic Sidebar */}
      <aside className="w-72 bg-white/80 backdrop-blur-2xl border border-white shadow-[20px_0_60px_rgba(0,0,0,0.05)] flex flex-col hidden md:flex z-20 m-6 rounded-[2.5rem]">
        <Link href="/" className="p-8 border-b border-slate-100 flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-black text-3xl text-slate-900 tracking-tight">GlobeRate</span>
        </Link>
        
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          {/* New Back to Home Button! */}
          <Link href="/" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 font-black transition-all mb-4 border border-transparent hover:border-slate-200">
            <Home size={20} /> Back to Home
          </Link>

          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-6 mb-4 ml-2">Main Tools</p>
          
          <Link href="/dashboard" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg shadow-purple-magenta/30' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
            <LayoutDashboard size={20} /> Overview
          </Link>
          
          <Link href="/dashboard/budget" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard/budget' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
            <Wallet size={20} /> Budget River
          </Link>
          
          <Link href="/dashboard/nova" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all ${pathname === '/dashboard/nova' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
            <Smartphone size={20} /> Nova AI Lens
          </Link>
        </nav>
        
        <div className="p-6">
          <Link href="/" className="flex items-center justify-center gap-3 px-5 py-4 w-full rounded-2xl text-rose-600 bg-rose-50 hover:bg-rose-100 font-black transition-colors border border-rose-100">
            <LogOut size={20} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        <header className="h-28 flex items-center justify-between px-10 z-10 pt-6">
          <h1 className="text-5xl font-black text-slate-800 tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-magenta font-black shadow-xl hover:scale-105 transition-all border-2 border-white">
              <Sparkles size={18} /> Ask Nova AI
            </button>
            <div className="w-14 h-14 rounded-full bg-slate-200 border-4 border-white shadow-xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
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