"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldAlert, 
  Sparkles, 
  Droplets, 
  ChevronDown, 
  Smartphone, 
  Compass, 
  Eye, 
  Zap, 
  Check 
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";

export default function FeaturesPage() {
  const tools = [
    {
      icon: ShieldAlert,
      tag: "Scam Protection",
      color: "#FF007A",
      title: "ATM Scam Detector",
      description: "Exposes hidden dynamic currency conversion markups (8%–14%) at foreign ATMs and airport booths.",
    },
    {
      icon: Sparkles,
      tag: "Nova AI Vision",
      color: "#A855F7",
      title: "Nova AI Lens",
      description: "Snap a photo of foreign cafe menus or bills. Instantly translates prices to INR at mid-market rates.",
    },
    {
      icon: Droplets,
      tag: "Financial Clarity",
      color: "#06B6D4",
      title: "Budget River",
      description: "Visual, flowing budget stream that narrows as you spend, warning you before you burn through trip cash.",
    },
    {
      icon: Compass,
      tag: "Smart ATM Radar",
      color: "#FACC15",
      title: "Zero-Fee Bank ATMs",
      description: "Directs you to verified local bank ATMs that charge zero extra tourist surcharges in over 160 countries.",
    },
    {
      icon: Eye,
      tag: "Price Anchor",
      color: "#FF007A",
      title: "Daily Item Anchors",
      description: "Stops foreign currency confusion by translating unfamiliar notes into everyday items (like coffee or pizza).",
    },
    {
      icon: Smartphone,
      tag: "Offline Vault",
      color: "#A855F7",
      title: "Zero-Data Offline Mode",
      description: "Access cached forex rates and emergency embassy numbers even with zero international roaming data.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      
      {/* Pink & Purple Bubbles */}
      <FloatingParticles />

      {/* Pastel Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-pink-200/40 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 blur-[180px] rounded-full pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-slate-200">
            <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            GlobeRate
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="/features" className="text-[#FF007A] transition-colors">Features</Link>
          <Link href="/dashboard/nova" className="hover:text-[#FF007A] transition-colors flex items-center gap-1">
            Nova AI <Sparkles size={14} className="text-[#FF007A]" />
          </Link>
          <Link href="/dashboard/map" className="hover:text-[#FF007A] transition-colors">Destinations</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-all border border-slate-200">
            EN <ChevronDown size={14} />
          </button>
          <Link href="/auth/login" className="hidden md:block text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors">
            Sign In
          </Link>
          <Link href="/auth/signup" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white text-sm font-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,122,0.4)] transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF007A]/10 border border-[#FF007A]/25 text-sm font-black text-[#FF007A] mb-6 backdrop-blur-md">
          <Zap size={16} /> All Features & Capabilities
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
          Everything built to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-[#FACC15]">
            protect your travel money.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Over 21 powerful financial tools designed to keep you safe from airport currency markups and overspending.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={26} />
                    </div>
                    <span 
                      className="text-xs font-black px-3 py-1 rounded-full border"
                      style={{ color: item.color, borderColor: `${item.color}30`, backgroundColor: `${item.color}10` }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-black pt-4 border-t border-slate-100" style={{ color: item.color }}>
                  <span>Included in GlobeRate</span>
                  <Check size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-slate-200 py-12 px-6 md:px-12 relative z-10 text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm flex-shrink-0 border border-slate-200">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black text-slate-900">GlobeRate</span>
          </div>
          <p className="text-sm font-medium">© 2026 GlobeRate. Built for smarter global travel finance.</p>
          <div className="flex gap-6 text-sm font-bold text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="/" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
