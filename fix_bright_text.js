const fs = require('fs');

const completeHomePageCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldAlert, ChevronDown, Coffee, Pizza, Droplets, LineChart, Shield, Smartphone, Wallet, Globe, Star } from "lucide-react";
import MegaFeatureSection from "@/components/landing/MegaFeatureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      
      {/* Subtle Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#FF007A]/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-[#A855F7]/15 blur-[180px] rounded-full pointer-events-none"></div>

      {/* 1. NAVBAR - 100% VISIBLE WHITE BRAND NAME */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-white/20">
            <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
          </div>
          <span className="text-2xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            GlobeRate
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-200">
          <Link href="/features" className="hover:text-[#FF007A] transition-colors">Features</Link>
          <Link href="/dashboard/nova" className="hover:text-[#FF007A] transition-colors flex items-center gap-1">
            Nova AI <Sparkles size={14} className="text-[#FACC15]" />
          </Link>
          <Link href="/dashboard/map" className="hover:text-[#FF007A] transition-colors">Destinations</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-200 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-all border border-white/10">
            EN <ChevronDown size={14} />
          </button>
          <Link href="/auth/login" className="hidden md:block text-sm font-bold text-slate-200 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/auth/signup" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white text-sm font-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,122,0.5)] transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION - PURE WHITE TITLE + NEON PINK/PURPLE/YELLOW GRADIENT */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-screen relative z-10">
        <div className="flex-1 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/15 border border-[#A855F7]/30 text-sm font-black text-[#A855F7] mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#FF007A] animate-pulse"></span>
            Meet Nova AI: Your Travel Superpower
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
            Travel smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-[#FACC15] drop-shadow-[0_0_35px_rgba(255,0,122,0.5)]">
              Protect your money.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            The intelligent travel finance platform that detects exchange scams, anchors foreign prices, and tracks your global budget in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/auth/signup" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white font-black text-lg flex items-center justify-center gap-2 hover:opacity-95 hover:shadow-[0_0_30px_rgba(255,0,122,0.4)] transition-all">
              Start Your Trip <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-lg">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image src="/images/hero.jpg" alt="Stylish traveler" fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 bg-slate-950/85 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF007A]/20 flex items-center justify-center text-[#FF007A]">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300 uppercase">Secure Exchange</p>
                <p className="text-sm font-black text-white">Scam Prevented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOVA AI VISION SECTION - PURE WHITE TITLE + NEON PURPLE/YELLOW */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/20">
          <Image src="/images/nova_ai.jpg" alt="Nova AI scanning cafe menu" fill className="object-cover" />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-950/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
            <div className="bg-[#FF007A] text-white p-2 rounded-xl">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#FACC15] uppercase tracking-widest">Nova AI Result</p>
              <p className="text-sm font-black text-white">Menu converted to ₹ INR</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/15 text-[#A855F7] text-sm font-black mb-6 border border-[#A855F7]/30">
            <Sparkles size={16} /> Nova AI Vision
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Point your camera. <br />
            <span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">Know the truth.</span>
          </h2>
          <p className="text-lg text-slate-200 mb-8 font-medium leading-relaxed">
            Just snap a photo. <span className="text-[#FACC15] font-black block mt-2 text-2xl drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">Meet Nova AI.</span>
          </p>
        </div>
      </section>

      {/* 4. SCAM PROTECTION SECTION - PURE WHITE TITLE + NEON PINK 0% COMMISSION */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF007A]/15 text-[#FF007A] text-sm font-black mb-6 border border-[#FF007A]/30">
            <ShieldAlert size={16} /> Scam Protection
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Never fall for <br />
            <span className="text-[#FF007A] drop-shadow-[0_0_30px_rgba(255,0,122,0.85)]">&quot;0% Commission&quot;</span> again.
          </h2>

          <p className="text-lg text-slate-200 mb-8 leading-relaxed font-medium">
            Airport exchange booths hide unfair fees inside terrible exchange rates. Enter the rate they offer you, and we instantly expose their hidden markup against the real mid-market rate.
          </p>

          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/15 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF007A] to-rose-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,122,0.5)]">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h4 className="font-black text-xl text-white">Average Tourist Loss</h4>
                <p className="font-black text-[#FF007A]">8% to 12% per exchange</p>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-300">
              We guide you to the nearest verified low-fee ATMs and highlight which of your cards saves you the most.
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden border-2 border-white/20">
          <Image src="/images/atm.jpg" alt="Traveler using ATM" fill className="object-cover" />
        </div>
      </section>

      {/* 5. PRICE ANCHOR SECTION - PURE WHITE TITLE + BUTTER YELLOW ACCENT */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-4">
          {[
            { price: "¥1,200", feels: "1 Medium Pizza" },
            { price: "€4.50", feels: "3 Espresso Coffees" },
            { price: "฿250", feels: "2 Days Metro Pass" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/15 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block">Foreign Price</span>
                <span className="text-2xl font-black text-white">{item.price}</span>
              </div>
              <span className="text-[#FACC15] font-black text-sm drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">→ Feels like {item.feels}</span>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Don&apos;t just see numbers. <br />
            <span className="text-[#FACC15] drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">Feel the price.</span>
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed font-medium">
            When you see unfamiliar foreign currency, your brain goes blank. Our Price Anchor translates numbers into familiar daily items so you stop accidentally overspending.
          </p>
        </div>
      </section>

      {/* 6. EVERYTHING YOU NEED SECTION */}
      <MegaFeatureSection />

      {/* 7. TESTIMONIALS - PURE WHITE TITLE + NEON ACCENTS */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Loved by global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-[#FACC15]">travelers.</span>
          </h2>
          <p className="text-slate-300 text-lg font-medium">Real people saving real money across Europe and Asia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/15 shadow-xl">
            <div className="flex gap-1 mb-4 text-[#FACC15]"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
            <p className="text-lg font-bold text-white mb-6 leading-relaxed">
              &quot;The Scam Detector literally saved me ₹12,000 at Bangkok airport on my first day. The mid-market comparison exposed their 11% markup instantly.&quot;
            </p>
            <p className="font-black text-white">Aditi Sharma</p>
            <p className="text-slate-300 text-sm font-medium">Solo Traveler</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/15 shadow-xl">
            <div className="flex gap-1 mb-4 text-[#FACC15]"><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/><Star size={18} fill="currentColor"/></div>
            <p className="text-lg font-bold text-white mb-6 leading-relaxed">
              &quot;The Budget River feature is insane. It's the first time I actually understood my burn rate across 3 European currencies without Excel.&quot;
            </p>
            <p className="font-black text-white">Rahul Verma</p>
            <p className="text-slate-300 text-sm font-medium">Digital Nomad</p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER - CRISP WHITE BRAND + CLEAN LINKS */}
      <footer className="w-full bg-slate-950 border-t border-white/10 py-12 px-6 md:px-12 relative z-10 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm flex-shrink-0 border border-white/20">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black text-white">GlobeRate</span>
          </div>
          <p className="text-sm font-medium text-slate-300">© 2026 GlobeRate. Built for smarter global travel finance.</p>
          <div className="flex gap-6 text-sm font-bold text-slate-200">
            <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};
fs.writeFileSync('src/app/page.tsx', completeHomePageCode);

console.log("✅ 100% of text rewritten with pure white, neon pink, purple, and butter-yellow!");
