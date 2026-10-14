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
  Compass 
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";\nimport CountrySearchBar from "@/components/search/CountrySearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      
      {/* 11 Minimal Floating Bubbles */}
      <FloatingParticles />

      {/* Subtle Pastel Ambient Glows */}
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
          <Link href="/features" className="hover:text-[#FF007A] transition-colors">Features</Link>
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

      {/* 1. HERO SECTION (hero.jpg) */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-screen relative z-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-sm font-black text-[#A855F7] mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#FF007A] animate-pulse"></span>
            Meet Nova AI: Your Travel Superpower
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            Travel smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-[#FACC15]">
              Protect your money.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            The intelligent travel finance platform that detects exchange scams, anchors foreign prices, and tracks your global budget in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/auth/signup" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white font-black text-lg flex items-center justify-center gap-2 hover:opacity-95 hover:shadow-[0_0_30px_rgba(255,0,122,0.35)] transition-all">
              Start Your Trip <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-lg">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
            <Image src="/images/hero.jpg" alt="Stylish traveler" fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF007A]/15 flex items-center justify-center text-[#FF007A]">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Secure Exchange</p>
                <p className="text-sm font-black text-slate-900">Scam Prevented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOVA AI VISION (nova_ai.jpg) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
          <Image src="/images/nova_ai.jpg" alt="Nova AI scanning cafe menu" fill className="object-cover" />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200/80">
            <div className="bg-[#FF007A] text-white p-2 rounded-xl">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#A855F7] uppercase tracking-widest">Nova AI Result</p>
              <p className="text-sm font-black text-slate-900">Menu converted to ₹ INR</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/10 text-[#A855F7] text-sm font-black mb-6 border border-[#A855F7]/25">
            <Sparkles size={16} /> Nova AI Vision
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Point your camera. <br />
            <span className="text-[#A855F7]">Know the truth.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
            Just snap a photo of any foreign menu or ATM screen. Nova converts everything instantly with real mid-market rates.
          </p>
        </div>
      </section>

      {/* 3. SCAM PROTECTION (atm.jpg) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF007A]/10 text-[#FF007A] text-sm font-black mb-6 border border-[#FF007A]/25">
            <ShieldAlert size={16} /> Scam Protection
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Never fall for <br />
            <span className="text-[#FF007A]">&quot;0% Commission&quot;</span> again.
          </h2>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
            Airport exchange booths hide unfair fees inside terrible exchange rates. Enter the rate they offer you, and we instantly expose their hidden markup against the real mid-market rate.
          </p>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF007A] to-rose-600 flex items-center justify-center text-white shadow-md">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h4 className="font-black text-xl text-slate-900">Average Tourist Loss</h4>
                <p className="font-black text-[#FF007A]">8% to 12% per exchange</p>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">
              We guide you to the nearest verified low-fee ATMs and highlight which of your cards saves you the most.
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white">
          <Image src="/images/atm.jpg" alt="Traveler using ATM" fill className="object-cover" />
        </div>
      </section>

      {/* 4. PRICE ANCHOR */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-4">
          {[
            { price: "¥1,200", feels: "1 Medium Pizza" },
            { price: "€4.50", feels: "3 Espresso Coffees" },
            { price: "฿250", feels: "2 Days Metro Pass" },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between shadow-md">
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Foreign Price</span>
                <span className="text-2xl font-black text-slate-900">{item.price}</span>
              </div>
              <span className="text-[#FF007A] font-black text-sm">→ Feels like {item.feels}</span>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Don&apos;t just see numbers. <br />
            <span className="text-[#A855F7]">Feel the price.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            When you see unfamiliar foreign currency, your brain goes blank. Our Price Anchor translates numbers into familiar daily items so you stop accidentally overspending.
          </p>
        </div>
      </section>

      {/* 5. BUDGET RIVER (budget.jpg) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-black mb-6 border border-cyan-500/25">
            <Droplets size={16} /> Financial Clarity
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Your budget as a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-[#FF007A]">
              flowing river.
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
            Tracking a multi-currency trip in Excel is a nightmare. GlobeRate visualizes your total budget beautifully.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
            Every time you log an expense, watch the river thin out. Get visual warnings before you overspend so you can relax and enjoy your trip.
          </p>
          
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80">
            <div className="flex items-center gap-4 mb-2">
              <LineChart size={24} className="text-cyan-500" />
              <span className="font-bold text-slate-600">Total Budget Remaining</span>
            </div>
            <div className="text-4xl font-black text-slate-900">₹1,45,000</div>
            <div className="mt-6 h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-[#FF007A] rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
          <Image src="/images/budget.jpg" alt="Couple checking budget at cafe" fill className="object-cover" />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-lg flex flex-col items-end border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-500 uppercase">Live Sync</span>
            </div>
            <span className="text-sm font-black text-slate-900">Euro Trip Synced</span>
          </div>
        </div>
      </section>

      {/* 6. 3-STEP TRIP GUIDANCE WALKTHROUGH */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF007A]/10 text-[#FF007A] text-sm font-black mb-4 border border-[#FF007A]/25">
            <Compass size={16} /> Foreign Traveler Direction Guide
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            How GlobeRate guides you in 3 simple steps.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Scared of airport exchange rip-offs? Here is your exact playbook the moment your flight lands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF007A] to-rose-500 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                1
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Search Your Country</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                Type India, Japan, Thailand, or France. Our Radar reveals all verified 0% bank ATMs and flags the local tourist trap machines to avoid.
              </p>
            </div>
            <Link href="/dashboard/map" className="inline-flex items-center gap-2 text-sm font-black text-[#FF007A] hover:underline">
              Search Countries Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#A855F7] to-purple-600 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                2
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Check the Rate Offer</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                At the ATM or currency counter, enter the rate they show on screen. We expose their hidden markup against the real interbank mid-market rate.
              </p>
            </div>
            <Link href="/dashboard/nova" className="inline-flex items-center gap-2 text-sm font-black text-[#A855F7] hover:underline">
              Test Scam Scanner <ArrowRight size={16} />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                3
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Always Choose Local Cash</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                When the foreign machine asks &quot;Charge in Home Currency or Local Cash?&quot;, always pick Local Cash to avoid the 12% DCC bank trap!
              </p>
            </div>
            <Link href="/dashboard/budget" className="inline-flex items-center gap-2 text-sm font-black text-cyan-600 hover:underline">
              Monitor Budget River <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. EVERYTHING YOU NEED */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">Everything you need.</h2>
          <p className="text-lg text-slate-600 font-medium">Over 21 powerful tools packed into one platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/dashboard/map" className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF007A] to-rose-600 flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#FF007A] transition-colors">Scam Detector</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">Instantly spot hidden ATM markups.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#FF007A] group-hover:translate-x-1 transition-transform">
              Explore Tool <ArrowRight size={16} />
            </div>
          </Link>

          <Link href="/dashboard/nova" className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A855F7] to-purple-600 flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#A855F7] transition-colors">Nova AI Lens</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">Scan menus for live price conversions.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-[#A855F7] group-hover:translate-x-1 transition-transform">
              Explore Tool <ArrowRight size={16} />
            </div>
          </Link>

          <Link href="/dashboard/budget" className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Droplets size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Budget River</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">Visual, flowing budget tracking.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-600 group-hover:translate-x-1 transition-transform">
              Explore Tool <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION (With Aditi Sharma Photo & Cream/Lavender Cards) */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Loved by global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-[#A855F7]">travelers.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">Real people saving real money across Europe and Asia.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT: PHOTO OF ADITI SHARMA (testimonial.jpg) WITH QUOTE OVERLAY */}
          <div className="flex-1 relative min-h-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <Image 
              src="/images/testimonial.jpg" 
              alt="Happy traveler" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
              <div className="flex gap-1 mb-3 text-amber-400">
                <Star size={18} fill="currentColor"/>
                <Star size={18} fill="currentColor"/>
                <Star size={18} fill="currentColor"/>
                <Star size={18} fill="currentColor"/>
                <Star size={18} fill="currentColor"/>
              </div>
              <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
                &quot;GlobeRate&apos;s Scam Detector literally saved me ₹12,000 at the Bangkok airport. Nova AI is basically magic.&quot;
              </p>
              <p className="font-black text-xl text-white">Aditi Sharma</p>
              <p className="text-white/80 text-sm font-medium">Solo Traveler</p>
            </div>
          </div>

          {/* RIGHT: SOFT CREAM AND LAVENDER CARDS */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Card 1: Soft Cream Card */}
            <div className="flex-1 bg-[#FFF9EE] text-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-amber-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed mb-6">
                &quot;The Budget River feature is insane. It&apos;s the first time I actually understand how much I&apos;m spending across 3 different European currencies.&quot;
              </p>
              <div>
                <div className="font-black text-slate-900 text-lg">Rahul Verma</div>
                <div className="text-sm font-bold text-amber-700">Digital Nomad</div>
              </div>
            </div>

            {/* Card 2: Soft Lavender Card */}
            <div className="flex-1 bg-[#F3E8FF] text-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-purple-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed mb-6">
                &quot;I love the Price Anchor! Seeing that a ¥1,200 meal in Tokyo is just &apos;1 Domino&apos;s Pizza&apos; immediately stopped me from overspending.&quot;
              </p>
              <div>
                <div className="font-black text-slate-900 text-lg">Priya Patel</div>
                <div className="text-sm font-bold text-purple-700">Exchange Student</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
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
