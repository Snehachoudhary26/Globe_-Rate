const fs = require('fs');

fs.mkdirSync('src/app/features', { recursive: true });

const featuresPageCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldAlert, 
  Sparkles, 
  Droplets, 
  ArrowRight, 
  Check, 
  X, 
  Shield, 
  Smartphone, 
  ChevronDown, 
  Eye, 
  Receipt, 
  RefreshCw, 
  Zap, 
  Star,
  Globe,
  Compass
} from "lucide-react";

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: ShieldAlert,
      tag: "Scam Protection",
      color: "#FF007A",
      title: "ATM Dynamic Currency Conversion (DCC) Exposer",
      description: "Overseas ATMs trick travelers into charging in their home currency with hidden 8% to 14% markups. GlobeRate detects the trap instantly and tells you exactly which button to press.",
    },
    {
      icon: Sparkles,
      tag: "Nova AI Vision",
      color: "#A855F7",
      title: "Live Menu & Bill Optical Scanner",
      description: "Point your camera at handwritten menus or foreign receipts in Tokyo, Rome, or Bangkok. Nova reads line items and translates costs to your home currency using real interbank rates.",
    },
    {
      icon: Droplets,
      tag: "Financial Clarity",
      color: "#06B6D4",
      title: "Flowing Budget River Engine",
      description: "Replace messy travel spreadsheets with an intuitive, flowing stream. As you log expenses across multiple foreign currencies, the river visibly narrows before you overspend.",
    },
    {
      icon: Compass,
      tag: "Navigation",
      color: "#FACC15",
      title: "Verified Zero-Surcharge ATM Radar",
      description: "Crowdsourced and algorithmically verified map of local bank ATMs in 160+ countries that charge zero extra terminal fees compared to high-commission tourist kiosks.",
    },
    {
      icon: Eye,
      tag: "Behavioral Finance",
      color: "#FF007A",
      title: "Psychological Price Anchoring",
      description: "Unfamiliar currency notes trick your brain into overspending. We anchor foreign prices to familiar benchmarks—like espresso coffees, subway passes, and pizzas.",
    },
    {
      icon: Smartphone,
      tag: "Offline Resilience",
      color: "#A855F7",
      title: "Zero-Roaming Emergency Vault",
      description: "No roaming data at international borders or subway stations? Access cached mid-market exchange rates and embassy emergency hotlines completely offline.",
    },
  ];

  const comparisonRows = [
    { feature: "Hidden Exchange Markup", globerate: "0% (Real Mid-Market)", airport: "8% - 15% Stolen", bank: "3.5% + GST" },
    { feature: "ATM Scam Detector", globerate: "Real-Time Warning", airport: "None (They are the scam)", bank: "None" },
    { feature: "AI Menu & Receipt OCR", globerate: "Instant Live Vision", airport: "Not Available", bank: "Not Available" },
    { feature: "Multi-Currency Flow", globerate: "Live River Tracking", airport: "Manual Paper Slips", bank: "Delayed 3 Days" },
    { feature: "Works Offline Without Roaming", globerate: "Full Cache Vault", airport: "No", bank: "No" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#FF007A]/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-[#A855F7]/15 blur-[180px] rounded-full pointer-events-none"></div>

      {/* 1. NAVBAR (Matches Homepage with Circular Logo) */}
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
          <Link href="/features" className="text-[#FF007A] transition-colors">Features</Link>
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

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF007A]/15 border border-[#FF007A]/30 text-sm font-black text-[#FF007A] mb-6 backdrop-blur-md">
          <Zap size={16} /> 2026 Core Capabilities
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
          Every tool you need to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-[#FACC15] drop-shadow-[0_0_35px_rgba(255,0,122,0.5)]">
            outsmart hidden travel fees.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          From predatory airport exchange traps to multi-currency group dinners, GlobeRate arms you with real-time financial defense across 160+ countries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/signup" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white font-black text-lg flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,122,0.5)] transition-all">
            Launch Your Safe Trip <ArrowRight size={20} />
          </Link>
          <Link href="/dashboard" className="px-8 py-4 rounded-full bg-slate-900 border border-white/20 text-white font-bold text-lg hover:bg-slate-800 transition-all">
            Explore Live Dashboard
          </Link>
        </div>
      </section>

      {/* 3. 6 POWERHOUSE FEATURE CARDS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div 
                key={i} 
                className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:border-white/25 transition-all shadow-xl hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: f.color }}
                    >
                      <Icon size={26} />
                    </div>
                    <span 
                      className="text-xs font-black px-3 py-1 rounded-full border"
                      style={{ color: f.color, borderColor: \`\${f.color}40\`, backgroundColor: \`\${f.color}15\` }}
                    >
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 leading-snug group-hover:text-white transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-slate-200 text-sm leading-relaxed font-medium mb-6">
                    {f.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-black pt-4 border-t border-white/10" style={{ color: f.color }}>
                  <span>Active in GlobeRate</span>
                  <Check size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. COMPARISON MATRIX (GlobeRate vs Airport Kiosks vs Banks) */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            How GlobeRate compares.
          </h2>
          <p className="text-slate-300 text-lg font-medium">Why smart global travelers ditch traditional methods.</p>
        </div>

        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 text-sm font-bold text-slate-300 uppercase">Capability</th>
                  <th className="py-5 px-6 text-sm font-black text-[#FF007A] uppercase bg-[#FF007A]/10">GlobeRate Pro</th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase">Airport Exchange Booths</th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase">Standard Credit/Debit Cards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-bold text-white text-sm">{row.feature}</td>
                    <td className="py-5 px-6 font-black text-emerald-400 text-sm bg-[#FF007A]/5">{row.globerate}</td>
                    <td className="py-5 px-6 text-rose-400 text-sm font-medium">{row.airport}</td>
                    <td className="py-5 px-6 text-slate-300 text-sm font-medium">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border-2 border-white/20 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(255,0,122,0.15)]">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Stop losing 10% of every trip to hidden fees.
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join thousands of global travelers protecting their money in Europe, Asia, and the Americas with GlobeRate.
          </p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white font-black text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,122,0.6)] transition-all">
            Get Started For Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="w-full bg-slate-950 border-t border-white/10 py-12 px-6 md:px-12 relative z-10 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm flex-shrink-0 border border-white/20">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black text-white">GlobeRate</span>
          </div>
          <p className="text-sm font-medium">© 2026 GlobeRate. Built for smarter global travel finance.</p>
          <div className="flex gap-6 text-sm font-bold text-slate-200">
            <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
`;

fs.writeFileSync('src/app/features/page.tsx', featuresPageCode);
console.log("✅ Features page created with full dark theme, 6 core feature cards, and comparison matrix!");
