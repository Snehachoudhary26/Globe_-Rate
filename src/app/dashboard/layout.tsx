"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, LogOut, Home } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#29252B] flex transition-colors duration-300 font-sans">
      {/* Sidebar in Aubergine x Fog Theme */}
      <aside className="w-72 bg-white border-r border-[#DDD7D0] flex flex-col hidden md:flex z-20">
        <div className="p-8 border-b border-[#DDD7D0]/60">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-[#DDD7D0]">
              <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
            </div>
            <span className="font-black text-2xl tracking-tight text-[#29252B]">GlobeRate</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[#5C555C] hover:bg-[#FAF8F6] hover:text-[#49263F] font-bold transition-all mb-6">
            <Home size={18} /> Back to Home
          </Link>

          <p className="text-xs font-black text-[#8A7B85] uppercase tracking-widest mt-6 mb-3 ml-4">Main Tools</p>
          
          <Link 
            href="/dashboard" 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all ${
              pathname === '/dashboard' 
                ? 'bg-[#EFECE8] text-[#49263F] border border-[#DDD7D0] shadow-sm' 
                : 'text-[#5C555C] hover:bg-[#FAF8F6] hover:text-[#49263F]'
            }`}
          >
            <LayoutDashboard size={18} /> Financial Overview
          </Link>

          <Link 
            href="/dashboard/budget" 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all ${
              pathname === '/dashboard/budget' 
                ? 'bg-[#EFECE8] text-[#49263F] border border-[#DDD7D0] shadow-sm' 
                : 'text-[#5C555C] hover:bg-[#FAF8F6] hover:text-[#49263F]'
            }`}
          >
            <Wallet size={18} /> Budget River
          </Link>

          <Link 
            href="/dashboard/nova" 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all ${
              pathname === '/dashboard/nova' 
                ? 'bg-[#EFECE8] text-[#49263F] border border-[#DDD7D0] shadow-sm' 
                : 'text-[#5C555C] hover:bg-[#FAF8F6] hover:text-[#49263F]'
            }`}
          >
            <Smartphone size={18} /> Nova AI Lens
          </Link>

          <Link 
            href="/dashboard/map" 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all ${
              pathname === '/dashboard/map' 
                ? 'bg-[#EFECE8] text-[#49263F] border border-[#DDD7D0] shadow-sm' 
                : 'text-[#5C555C] hover:bg-[#FAF8F6] hover:text-[#49263F]'
            }`}
          >
            <Map size={18} /> ATM Heatmap
          </Link>
        </nav>
        
        <div className="p-6 border-t border-[#DDD7D0]/60">
          <Link href="/" className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-2xl text-[#8A7B85] hover:text-[#49263F] hover:bg-[#EFECE8] font-black transition-colors">
            <LogOut size={18} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-24 bg-white border-b border-[#DDD7D0] flex items-center justify-between px-10 z-10">
          <h1 className="text-3xl font-black text-[#29252B] hidden md:block tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-6 ml-auto">
            <Link href="/dashboard/profile" className="w-12 h-12 rounded-full border-2 border-[#DDD7D0] hover:border-[#49263F] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform shadow-sm">
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
