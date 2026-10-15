"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Plus, 
  RefreshCw, 
  ShieldCheck, 
  ShieldAlert, 
  Sparkles, 
  Camera, 
  MapPin, 
  Users, 
  Anchor, 
  Receipt, 
  FileText, 
  Coins, 
  Grid,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  Wallet
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";

export default function FinancialOverviewPage() {
  const [balance, setBalance] = useState(4250.00);
  const [currency, setCurrency] = useState("USD");

  const tools = [
    { name: "Nova Scanner", href: "/dashboard/nova", color: "from-[#FF007A] to-[#A855F7]", desc: "Menu & ATM OCR Vision" },
    { name: "ATM Heatmap", href: "/dashboard/map", color: "from-amber-400 to-orange-500", desc: "0% Surcharge Radar" },
    { name: "Split Group Bills", href: "/dashboard/split", color: "from-emerald-400 to-teal-500", desc: "Multi-currency Split" },
    { name: "Live Anchor", href: "/dashboard/price-anchor", color: "from-blue-500 to-indigo-500", desc: "Local Price Baselines" },
    { name: "Tax Refund Guide", href: "/dashboard/tax", color: "from-pink-500 to-rose-500", desc: "VAT Refund Assistant" },
    { name: "Offline OCR", href: "/dashboard/nova", color: "from-cyan-400 to-blue-500", desc: "No Internet Scanner" },
    { name: "Crypto Swap", href: "/dashboard/crypto", color: "from-slate-700 to-slate-900", desc: "USDT / Fiat Bridge" },
    { name: "View All Tools", href: "/dashboard/tools", color: "from-purple-500 to-pink-500", desc: "Explore 22+ Utilities" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      {/* 11 Minimal Floating Bubbles */}
      <FloatingParticles />

      {/* Pastel Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-pink-200/35 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/35 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-slate-200">
            <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            GlobeRate
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="w-9 h-9 rounded-full overflow-hidden relative border border-slate-200 shadow-sm">
            <Image src="/images/hero.jpg" alt="User Avatar" fill className="object-cover" />
          </div>
        </div>
      </nav>

      {/* Main Dashboard Container */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* Top Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF007A]/10 text-[#FF007A] text-xs font-black mb-3 border border-[#FF007A]/20">
            <Wallet size={14} /> Global Travel Vault
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Financial Overview
          </h1>
          <p className="text-base text-slate-600 font-medium mt-1">
            Real-time balance, multi-currency wallet, and active travel scam protection.
          </p>
        </div>

        {/* 2-Column Hero Cards (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Euro Trip Budget (NOW IN WHITE LIGHT THEME!) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200/90 p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#FF007A] text-xs font-black">
                  <span className="w-2 h-2 rounded-full bg-[#FF007A] animate-pulse"></span>
                  EURO TRIP BUDGET
                </span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Live Forex Sync
                </span>
              </div>

              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                Available Travel Funds
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                  $${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-lg font-black text-slate-500">{currency}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button 
                onClick={() => setBalance(prev => prev + 500)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white text-sm font-black hover:opacity-95 transition-all shadow-[0_0_20px_rgba(255,0,122,0.35)] flex items-center gap-2"
              >
                <Plus size={16} /> Add Funds
              </button>
              <Link 
                href="/dashboard/budget"
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-black border border-slate-200/80 transition-all flex items-center gap-2"
              >
                <RefreshCw size={16} /> View Budget River
              </Link>
            </div>
          </div>

          {/* Card 2: Scam Avoided Card */}
          <div className="lg:col-span-1 bg-white rounded-[2.5rem] border border-slate-200/90 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#FF007A] border border-pink-200 flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck size={26} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Scam Avoided!
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Nova AI successfully blocked an unfair 8% markup at a Euronet ATM in Paris yesterday.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span className="text-xs font-black text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 size={15} /> Saved Surcharge
              </span>
              <span className="text-base font-black text-emerald-700">+$42.50</span>
            </div>
          </div>

        </div>

        {/* Section: Your 22+ Tools Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your 22+ Travel Tools</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Quick access to intelligent currency, budget, and scam tools.</p>
            </div>
            <Link href="/dashboard/tools" className="text-xs font-black text-[#FF007A] hover:underline flex items-center gap-1">
              Explore All Tools <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <Link 
                key={tool.name}
                href={tool.href}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-pink-300 transition-all group flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${tool.color} mb-3 shadow-md`} />
                  <h4 className="text-base font-black text-slate-900 group-hover:text-[#FF007A] transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {tool.desc}
                  </p>
                </div>
                <div className="flex items-center justify-end text-slate-400 group-hover:text-[#FF007A] transition-colors mt-2">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
