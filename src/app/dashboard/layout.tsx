"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, LogOut, Home, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-white/10 flex flex-col hidden md:flex z-20">
        <div className="p-8 border-b border-slate-100 dark:border-white/5">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
              <Globe className="text-white" size={22} />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">GlobeRate</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-bold transition-all mb-6">
            <Home size={18} /> Back to Home
          </Link>

          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-6 mb-3 ml-4">Main Tools</p>
          
          <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${pathname === '/dashboard' ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
            <LayoutDashboard size={18} /> Financial Overview
          </Link>
          <Link href="/dashboard/budget" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${pathname === '/dashboard/budget' ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
            <Wallet size={18} /> Budget River
          </Link>
          <Link href="/dashboard/nova" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${pathname === '/dashboard/nova' ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
            <Smartphone size={18} /> Nova AI Lens
          </Link>
          <Link href="/dashboard/map" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${pathname === '/dashboard/map' ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
            <Map size={18} /> ATM Heatmap
          </Link>
        </nav>
        
        <div className="p-6 border-t border-slate-100 dark:border-white/5">
          <Link href="/" className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 font-bold transition-colors">
            <LogOut size={18} /> Sign Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-10 z-10">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white hidden md:block">Dashboard</h1>
          <div className="flex items-center gap-6 ml-auto">
            <ThemeToggle />
            <Link href="/dashboard/profile" className="w-12 h-12 rounded-full border-2 border-indigo-100 dark:border-indigo-900 overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
               <Image src="/images/hero.jpg" alt="Profile" fill className="object-cover" />
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}