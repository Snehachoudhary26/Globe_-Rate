"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, Settings, LogOut, Sparkles } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20">
        <div className="p-8 border-b border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-black text-2xl text-slate-900 tracking-tight">GlobeRate</span>
        </div>
        
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 ml-2">Main Menu</p>
          
          <Link href="/dashboard" className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${pathname === '/dashboard' ? 'bg-purple-50 text-purple-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
            <LayoutDashboard size={20} /> Overview
          </Link>
          
          <Link href="/dashboard/budget" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-bold transition-all">
            <Wallet size={20} /> Budget River
          </Link>
          
          <Link href="/dashboard/nova" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-bold transition-all">
            <Smartphone size={20} /> Nova AI Lens
          </Link>
          
          <Link href="/dashboard/map" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-bold transition-all">
            <Map size={20} /> ATM Heatmap
          </Link>
          
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-8 mb-4 ml-2">Preferences</p>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-bold transition-all">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        
        <div className="p-6 border-t border-slate-100">
          <Link href="/" className="flex items-center justify-center gap-3 px-5 py-4 w-full rounded-2xl text-rose-600 bg-rose-50 hover:bg-rose-100 font-black transition-colors">
            <LogOut size={20} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* TOP HEADER */}
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-10 z-10 sticky top-0">
          <h1 className="text-3xl font-black text-slate-800">Dashboard</h1>
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black shadow-lg shadow-purple-magenta/30 hover:scale-105 hover:shadow-xl transition-all">
              <Sparkles size={18} /> Ask Nova AI
            </button>
            <div className="w-12 h-12 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
               {/* Using the hero image as a placeholder profile picture */}
               <Image src="/images/hero.jpg" alt="Profile" fill className="object-cover" />
            </div>
          </div>
        </header>
        
        {/* SCROLLABLE DASHBOARD CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
