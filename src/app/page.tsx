"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  ChevronDown, 
  Droplets, 
  LineChart, 
  Star,
  Compass,
  Zap,
  Activity,
  Layers,
  CheckCircle2
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";
import CountrySearchBar from "@/components/search/CountrySearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#29252B] font-sans relative overflow-x-hidden selection:bg-[#49263F] selection:text-white">
      
      {/* 11 Minimal Floating Bubbles */}
      <FloatingParticles />

      {/* Subtle Ambient Depth Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#49263F]/5 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-[#B8ADB5]/15 blur-[180px] rounded-full pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-xl border-b border-[#DDD7D0]/80 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-[#DDD7D0]">
            <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
          </div>
          <span className="text-2xl font-black tracking-tight text-[#29252B]">
            GlobeRate
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#5C555C]">
          <Link href="/features" className="hover:text-[#49263F] transition-colors">Platform Modules</Link>
          <Link href="/dashboard/nova" className="hover:text-[#49263F] transition-colors flex items-center gap-1">
            Nova Vision AI <Sparkles size={14} className="text-[#49263F]" />
          </Link>
          <Link href="/dashboard/map" className="hover:text-[#49263F] transition-colors">Global FX Radar</Link>
          <Link href="/dashboard" className="hover:text-[#49263F] transition-colors">Treasury Vault</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-all border border-[#DDD7D0]">
            EN <ChevronDown size={14} />
          </button>
          <Link href="/auth/login" className="hidden md:block text-sm font-bold text-slate-700 hover:text-[#29252B] transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-6 py-2.5 rounded-full bg-[#49263F] hover:bg-[#3E1F35] text-white text-sm font-black hover:scale-105 shadow-md transition-all">
            Launch Console
          </Link>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFECE8] border border-[#DDD7D0] text-xs font-black text-[#49263F] mb-6 backdrop-blur-md uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-[#49263F] animate-pulse"></span>
            Autonomous Cross-Border FX Engine • Gemini 2.0 Vision
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#29252B] leading-[1.08] mb-6">
            Intelligent Travel Finance. <br />
            <span className="text-[#49263F]">Engineered Against </span>
            <span className="text-[#8A7B85]">Predatory FX.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#5C555C] mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            An institutional-grade fintech engine designed to eliminate deceptive Dynamic Currency Conversion (DCC), cross-audit retail exchange spreads against interbank mid-market rates, and automate multi-currency treasury liquidity in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#49263F] hover:bg-[#3E1F35] text-white font-black text-base flex items-center justify-center gap-2 hover:opacity-95 shadow-lg transition-all">
              Initialize Travel Vault <ArrowRight size={19} />
            </Link>
            <Link href="/dashboard/scam-detector" className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-[#EFECE8] text-[#29252B] border border-[#DDD7D0] font-black text-base flex items-center justify-center gap-2 transition-all shadow-sm">
              <ShieldAlert size={18} className="text-[#49263F]" /> Audit Terminal Rate
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-lg">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
            <Image src="/images/hero.jpg" alt="Institutional traveler using GlobeRate" fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-[#DDD7D0]/80 shadow-xl flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#EFECE8] border border-[#DDD7D0] flex items-center justify-center text-[#49263F]">
                <ShieldAlert size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[#8A7B85] uppercase tracking-wider">Interbank FX Audit</p>
                <p className="text-sm font-black text-[#29252B]">DCC Arbitrage Prevented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. INTERACTIVE DESTINATION & RATE SEARCH HUB */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <CountrySearchBar />
      </section>

      {/* 2. NOVA AI VISION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
          <Image src="/images/nova_ai.jpg" alt="Nova AI multimodal optical parsing" fill className="object-cover" />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3.5 border border-[#DDD7D0]/80">
            <div className="bg-[#49263F] text-white p-2 rounded-xl shadow-sm">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#49263F] uppercase tracking-widest">Multimodal Optical Parsing</p>
              <p className="text-sm font-black text-[#29252B]">Real-Time Interbank FX Indexing</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black uppercase tracking-wider mb-6 border border-[#DDD7D0]">
            <Sparkles size={14} /> Multimodal Computer Vision
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] mb-6 leading-tight tracking-tight">
            Sub-Second Terminal Auditing. <br />
            <span className="text-[#49263F]">Optical DCC Detection.</span>
          </h2>
          <p className="text-lg text-[#5C555C] mb-8 font-medium leading-relaxed">
            Capture foreign ATM prompts, merchant POS terminals, or multilingual receipts. Nova leverages low-latency vision parsing and European Central Bank (ECB) benchmark feeds to identify hidden DCC margins and enforce domestic currency settlement instantly.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7D0] shadow-sm">
              <p className="text-2xl font-black text-[#49263F]">&lt;250ms</p>
              <p className="text-xs font-bold text-[#8A7B85] mt-0.5">Edge Optical Inference</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7D0] shadow-sm">
              <p className="text-2xl font-black text-[#29252B]">35+ Currencies</p>
              <p className="text-xs font-bold text-[#8A7B85] mt-0.5">Live Interbank Parity</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCAM PROTECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black uppercase tracking-wider mb-6 border border-[#DDD7D0]">
            <ShieldAlert size={15} /> DCC Forensic Engine • Regulatory Defense
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] mb-6 leading-tight tracking-tight">
            Exposing Deceptive Spreads &amp; <br />
            <span className="text-[#49263F]">Predatory DCC Surcharges.</span>
          </h2>
          <p className="text-lg text-[#5C555C] mb-8 leading-relaxed font-medium">
            Airport FX kiosks and independent ATM operators exploit cognitive bias by advertising &quot;Zero Commission&quot; while embedding 8.5% to 14.2% hidden markups inside inflated bid-ask spreads. GlobeRate executes sub-second variance cross-audits against verified institutional benchmarks.
          </p>

          <div className="bg-white rounded-3xl p-6 border border-[#DDD7D0]/80 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#49263F] flex items-center justify-center text-white shadow-md">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h4 className="font-black text-xl text-[#29252B]">Average Capital Loss</h4>
                <p className="font-black text-[#49263F]">8.5% to 14.2% per foreign withdrawal</p>
              </div>
            </div>
            <p className="text-sm font-medium text-[#5C555C] leading-relaxed">
              Identifies verified tier-1 zero-surcharge bank networks across 35+ countries and evaluates card interchange fees to maximize settlement efficiency.
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white">
          <Image src="/images/atm.jpg" alt="Forensic inspection of deceptive foreign ATM" fill className="object-cover" />
        </div>
      </section>

      {/* 4. PRICE ANCHOR */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-[#DDD7D0]/80 flex items-center justify-between shadow-md">
            <div>
              <span className="text-xs text-[#8A7B85] font-black uppercase tracking-wider block">Foreign Nominal Quote</span>
              <span className="text-2xl font-black text-[#29252B]">¥1,200 JPY</span>
            </div>
            <span className="text-[#49263F] font-black text-sm bg-[#EFECE8] px-3 py-1.5 rounded-full border border-[#DDD7D0]">
              → Normalized: ₹670 INR (Single Meal Unit)
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#DDD7D0]/80 flex items-center justify-between shadow-md">
            <div>
              <span className="text-xs text-[#8A7B85] font-black uppercase tracking-wider block">Foreign Nominal Quote</span>
              <span className="text-2xl font-black text-[#29252B]">€4.50 EUR</span>
            </div>
            <span className="text-[#49263F] font-black text-sm bg-[#EFECE8] px-3 py-1.5 rounded-full border border-[#DDD7D0]">
              → Normalized: ₹405 INR (Artisan Daily Beverage)
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#DDD7D0]/80 flex items-center justify-between shadow-md">
            <div>
              <span className="text-xs text-[#8A7B85] font-black uppercase tracking-wider block">Foreign Nominal Quote</span>
              <span className="text-2xl font-black text-[#29252B]">฿250 THB</span>
            </div>
            <span className="text-[#49263F] font-black text-sm bg-[#EFECE8] px-3 py-1.5 rounded-full border border-[#DDD7D0]">
              → Normalized: ₹620 INR (Urban Transit Pass)
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black uppercase tracking-wider mb-6 border border-[#DDD7D0]">
            <Layers size={14} /> Behavioral Purchasing Parity
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] mb-6 leading-tight tracking-tight">
            Behavioral Price Normalization &amp; <br />
            <span className="text-[#49263F]">Cognitive Parity Index.</span>
          </h2>
          <p className="text-lg text-[#5C555C] leading-relaxed font-medium">
            Cross-border travelers face acute cognitive distortion due to unfamiliar nominal denomination units. Our behavioral economics engine normalizes foreign quotes against domestic consumer purchasing power baskets, eliminating irrational expenditure drift.
          </p>
        </div>
      </section>

      {/* 5. BUDGET RIVER */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black uppercase tracking-wider mb-6 border border-[#DDD7D0]">
            <Droplets size={14} /> Liquidity Analytics • Real-Time FX Treasury
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] mb-6 leading-tight tracking-tight">
            Dynamic Multi-Currency Liquidity &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49263F] to-[#8A7B85]">
              Burn-Rate Analytics.
            </span>
          </h2>
          <p className="text-lg text-[#5C555C] mb-6 leading-relaxed font-medium">
            Fragmented cross-border spending across non-pegged foreign currencies obscures real capital reserves. GlobeRate continuously computes mark-to-market valuations across all transaction ledgers against your sovereign home currency.
          </p>
          <p className="text-lg text-[#5C555C] leading-relaxed font-medium mb-8">
            Algorithmic cashflow curves model daily expenditure velocity against your target departure balance, triggering proactive runway variance alerts before fiscal depletion occurs.
          </p>
          
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#DDD7D0]/80">
            <div className="flex items-center gap-4 mb-2">
              <LineChart size={24} className="text-[#49263F]" />
              <span className="font-bold text-[#5C555C]">Total Net Liquid Travel Reserve</span>
            </div>
            <div className="text-4xl font-black text-[#29252B]">₹1,45,000 INR <span className="text-lg font-bold text-[#8A7B85]">(~$1,635 USD)</span></div>
            <div className="mt-6 h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#49263F] to-[#8A7B85] rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
          <Image src="/images/budget.jpg" alt="Traveler managing multi-currency treasury" fill className="object-cover" />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl p-3 px-4 rounded-2xl shadow-lg flex flex-col items-end border border-[#DDD7D0]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-[#8A7B85] uppercase tracking-wider">Multi-Currency Sync</span>
            </div>
            <span className="text-sm font-black text-[#29252B]">Mark-to-Market Active</span>
          </div>
        </div>
      </section>

      {/* 6. 3-STEP TRIP GUIDANCE WALKTHROUGH */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black uppercase tracking-wider mb-4 border border-[#DDD7D0]">
            <Compass size={15} /> Deployment Protocol • 3-Stage Settlement Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] tracking-tight mb-4">
            Systematic Execution Protocol for Cross-Border Settlement.
          </h2>
          <p className="text-lg text-[#5C555C] max-w-2xl mx-auto font-medium">
            A rigorous end-to-end operational framework deployed from international airport arrival to local point-of-sale execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#49263F] text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                01
              </div>
              <h3 className="text-2xl font-black text-[#29252B] mb-3">Pre-Arrival Geo Reconnaissance</h3>
              <p className="text-[#5C555C] text-sm leading-relaxed font-medium mb-6">
                Query destination liquidity profiles for India, Japan, UAE, UK, or EU. The radar maps verified zero-fee sovereign banking ATMs and flags unaccredited predatory kiosks.
              </p>
            </div>
            <Link href="/dashboard/map" className="inline-flex items-center gap-2 text-sm font-black text-[#49263F] hover:underline">
              Inspect Sovereign ATM Radar <ArrowRight size={16} />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#8A7B85] to-[#49263F] text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                02
              </div>
              <h3 className="text-2xl font-black text-[#29252B] mb-3">Real-Time Spread Verification</h3>
              <p className="text-[#5C555C] text-sm leading-relaxed font-medium mb-6">
                At any point-of-sale or ATM terminal, input the presented conversion rate. The forensic engine calculates the hidden spread differential against live interbank benchmarks in under 10ms.
              </p>
            </div>
            <Link href="/dashboard/nova" className="inline-flex items-center gap-2 text-sm font-black text-[#49263F] hover:underline">
              Initialize Forensic Audit <ArrowRight size={16} />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#B8ADB5] to-[#8A7B85] text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                03
              </div>
              <h3 className="text-2xl font-black text-[#29252B] mb-3">Enforce Sovereign Settlement</h3>
              <p className="text-[#5C555C] text-sm leading-relaxed font-medium mb-6">
                When the foreign terminal prompts DCC conversion (&quot;Charge in USD vs Local EUR/JPY?&quot;), execute the settlement in local sovereign currency to bypass the 12% merchant acquirer markup.
              </p>
            </div>
            <Link href="/dashboard/budget" className="inline-flex items-center gap-2 text-sm font-black text-[#49263F] hover:underline">
              Monitor Treasury Reserves <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. COMPREHENSIVE PLATFORM ARCHITECTURE */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#29252B] tracking-tight mb-4">Comprehensive FinTech Architecture.</h2>
          <p className="text-lg text-[#5C555C] font-medium">Over 21 institutional modules engineered for enterprise reliability, sub-second latency, and offline resiliency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/dashboard/scam-detector" className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-[#49263F] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-black text-[#29252B] mb-2 group-hover:text-[#49263F] transition-colors">Forensic Scam Detector</h3>
            <p className="text-[#5C555C] font-medium leading-relaxed mb-6">Sub-second interbank spread analysis with automated DCC risk classifications and loss quantification.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#49263F] group-hover:translate-x-1 transition-transform">
              Access Engine <ArrowRight size={16} />
            </div>
          </Link>

          <Link href="/dashboard/nova" className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8A7B85] to-[#49263F] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-black text-[#29252B] mb-2 group-hover:text-[#49263F] transition-colors">Nova Multimodal Vision</h3>
            <p className="text-[#5C555C] font-medium leading-relaxed mb-6">Gemini-powered vision engine parsing foreign receipts, menu items, and ATM prompts into structured financial data.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#49263F] group-hover:translate-x-1 transition-transform">
              Access Engine <ArrowRight size={16} />
            </div>
          </Link>

          <Link href="/dashboard/budget" className="bg-white rounded-[2.5rem] p-8 border border-[#DDD7D0]/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B8ADB5] to-[#8A7B85] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Droplets size={28} />
            </div>
            <h3 className="text-2xl font-black text-[#29252B] mb-2 group-hover:text-[#49263F] transition-colors">Multi-Currency Treasury</h3>
            <p className="text-[#5C555C] font-medium leading-relaxed mb-6">Real-time mark-to-market liquidity tracking with predictive burn velocity modeling and variance alerts.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#49263F] group-hover:translate-x-1 transition-transform">
              Access Engine <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#29252B] mb-4">
            Validated by <span className="text-[#49263F]">Cross-Border Professionals.</span>
          </h2>
          <p className="text-[#5C555C] text-lg font-medium">Delivering measurable capital retention across international business operations, academic mobility, and digital nomadism.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Main Photo Card */}
          <div className="flex-1 relative min-h-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <Image 
              src="/images/testimonial.jpg" 
              alt="Management consultant using GlobeRate" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
              <div className="flex gap-1 mb-3 text-amber-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
                &quot;GlobeRate&apos;s real-time spread analysis intercepted a 13.8% predatory DCC conversion on an airport terminal in Bangkok, preserving over ₹12,000 on a single transaction. The multimodal vision audit is exceptional engineering.&quot;
              </p>
              <p className="font-black text-xl text-white">Aditi Sharma</p>
              <p className="text-white/80 text-sm font-medium">International Management Consultant</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-6">
            
            <div className="flex-1 bg-white text-[#29252B] p-8 md:p-10 rounded-[2.5rem] border border-[#DDD7D0] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed mb-6">
                &quot;Managing liquidity across non-pegged European currencies was always prone to reconciliation errors. GlobeRate&apos;s mark-to-market treasury engine provides institutional clarity without manual spreadsheet overhead.&quot;
              </p>
              <div>
                <div className="font-black text-[#29252B] text-lg">Rahul Verma</div>
                <div className="text-sm font-bold text-[#49263F]">Senior Software Engineer &amp; Global Nomad</div>
              </div>
            </div>

            <div className="flex-1 bg-white text-[#29252B] p-8 md:p-10 rounded-[2.5rem] border border-[#DDD7D0] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed mb-6">
                &quot;The behavioral price anchoring module immediately neutralizes the cognitive bias of foreign denomination. Converting ¥12,000 JPY into domestic purchasing baskets eliminated accidental budget drift entirely.&quot;
              </p>
              <div>
                <div className="font-black text-[#29252B] text-lg">Priya Patel</div>
                <div className="text-sm font-bold text-[#49263F]">International Research Scholar</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="w-full bg-white border-t border-[#DDD7D0] py-12 px-6 md:px-12 relative z-10 text-[#5C555C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm flex-shrink-0 border border-[#DDD7D0]">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black text-[#29252B]">GlobeRate</span>
          </div>
          <p className="text-sm font-medium">© 2026 GlobeRate. Institutional-Grade Cross-Border Financial Intelligence &amp; DCC Protection Platform.</p>
          <div className="flex gap-6 text-sm font-bold text-[#5C555C]">
            <Link href="/" className="hover:text-[#29252B] transition-colors">API Specs</Link>
            <Link href="/" className="hover:text-[#29252B] transition-colors">Architecture</Link>
            <Link href="/" className="hover:text-[#29252B] transition-colors">Compliance</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
