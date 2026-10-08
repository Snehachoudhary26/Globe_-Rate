const fs = require('fs');

// 1. Upgrade the Dashboard Layout (Vibrant Glassmorphic Design + Home Button)
const layoutCode = `"use client";
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
          
          <Link href="/dashboard" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg shadow-purple-magenta/30' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}>
            <LayoutDashboard size={20} /> Overview
          </Link>
          
          <Link href="/dashboard/budget" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard/budget' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}>
            <Wallet size={20} /> Budget River
          </Link>
          
          <Link href="/dashboard/nova" className={\`flex items-center gap-3 px-5 py-4 rounded-2xl font-black transition-all \${pathname === '/dashboard/nova' ? 'bg-gradient-to-r from-purple-magenta to-rose-500 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}\`}>
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
}`;
fs.writeFileSync('src/app/dashboard/layout.tsx', layoutCode);

// 2. Upgrade the Nova Lens Page (Use the beautiful new image & make it pop!)
const novaCode = `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Sparkles, Languages, ArrowRight, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function NovaLensPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => { setIsScanning(false); setScanComplete(true); }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3 tracking-tight mb-2">
            <Sparkles className="text-purple-magenta" size={32} /> Nova AI Lens
          </h1>
          <p className="text-slate-500 font-bold text-lg">Point your camera at any foreign menu or ATM screen.</p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-3 bg-white text-purple-700 font-black rounded-xl text-sm shadow-md border-2 border-white w-fit">
          <span className="flex h-3 w-3 rounded-full bg-purple-magenta animate-pulse"></span>
          Live Translation Active
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-8 border-white">
        {/* BRAND NEW PHOTOGRAPH! */}
        <Image src="/images/nova_scanner_menu.jpg" alt="Camera Feed" fill className="object-cover opacity-90" />

        {isScanning && (
          <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 border-b-4 border-purple-magenta bg-gradient-to-b from-transparent to-purple-magenta/40 z-10 shadow-[0_10px_50px_rgba(211,169,255,0.8)]" />
        )}

        <div className="absolute inset-8 md:inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-white/80 rounded-tl-[2rem]"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-white/80 rounded-tr-[2rem]"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-white/80 rounded-bl-[2rem]"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-white/80 rounded-br-[2rem]"></div>
        </div>

        <AnimatePresence>
          {scanComplete && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
              <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border-2 border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <Languages size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-slate-900">Menu Translated</h3>
                    <p className="text-sm font-bold text-slate-500">French (€) → English ($ USD)</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-5 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
                    <span className="font-black text-slate-800 text-xl">Café au Lait</span>
                    <span className="font-black text-emerald-600 text-xl">$4.50 <span className="text-sm text-slate-400 line-through ml-1">€4.20</span></span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
                    <span className="font-black text-slate-800 text-xl">Croissant</span>
                    <span className="font-black text-emerald-600 text-xl">$2.80 <span className="text-sm text-slate-400 line-through ml-1">€2.60</span></span>
                  </div>
                </div>
                
                <button onClick={() => setScanComplete(false)} className="w-full py-4 bg-slate-900 text-white font-black text-lg rounded-2xl hover:bg-purple-magenta transition-colors shadow-lg">
                  Scan Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          {isScanning === false && scanComplete === false && (
            <button onClick={handleScan} className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black text-xl rounded-full shadow-[0_0_50px_rgba(211,169,255,1)] hover:scale-110 active:scale-95 transition-all border-4 border-white">
              <Scan size={28} /> Analyze Screen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/dashboard/nova/page.tsx', novaCode);
