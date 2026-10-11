const fs = require('fs');

// 1. Create the Budget River Component across ALL possible routes so 404 is IMPOSSIBLE
const budgetPageCode = `"use client";
import { useState } from "react";
import { Wallet, Plane, Coffee, Hotel, Bus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BudgetRiverPage() {
  const [budget] = useState({
    total: 5000,
    spent: 2150,
    remaining: 2850,
    currency: "USD"
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 lg:p-12 font-sans relative overflow-hidden">
      {/* Pink & Purple Ambient Bubbles */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/25 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/25 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/dashboard" className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm font-bold hover:bg-white/20 transition-all">
            Open Console
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-300 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Plane size={14} /> Active Trip: Euro Tour
            </div>
            <h1 className="text-5xl font-black tracking-tight">Budget River</h1>
            <p className="text-slate-400 font-medium mt-1">Real-time dynamic spending flow and multi-currency burn rate.</p>
          </div>
          <button className="px-6 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2">
            <Plus size={18} /> Log Expense
          </button>
        </div>

        {/* River Progress Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Remaining Budget</p>
              <h2 className="text-5xl font-black mt-1">
                \${budget.remaining.toLocaleString()} <span className="text-2xl font-bold text-slate-400">USD</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Allocated</p>
              <p className="text-2xl font-black text-slate-300 mt-1">\${budget.total.toLocaleString()} USD</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-6 w-full bg-slate-800/80 rounded-full overflow-hidden flex shadow-inner border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 w-[43%] transition-all duration-500 flex items-center justify-center text-[10px] font-black text-white">43% Spent</div>
              <div className="h-full bg-emerald-400/80 w-[57%] transition-all duration-500 flex items-center justify-center text-[10px] font-black text-slate-900">57% Safe</div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Spent: \${budget.spent.toLocaleString()}</span>
              <span>Safe Daily Allowance: \$95/day</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Hotels & Stays", spent: "\$980", icon: Hotel, color: "from-blue-500 to-indigo-600" },
            { name: "Food & Dining", spent: "\$640", icon: Coffee, color: "from-amber-500 to-orange-600" },
            { name: "Transport & Trains", spent: "\$320", icon: Bus, color: "from-emerald-500 to-teal-600" },
            { name: "Activities & Misc", spent: "\$210", icon: Wallet, color: "from-pink-500 to-rose-600" },
          ].map((cat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg hover:border-white/20 transition-all">
              <div className={\`w-12 h-12 rounded-2xl bg-gradient-to-br \${cat.color} flex items-center justify-center mb-4 text-white shadow-md\`}>
                <cat.icon size={22} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{cat.name}</p>
              <h3 className="text-2xl font-black mt-1">{cat.spent}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;

// Write to all routes so clicking any variation of the link works
const routes = [
  'src/app/dashboard/budget',
  'src/app/budget',
  'src/app/dashboard/budget-river',
  'src/app/budget-river',
  'src/app/features/budget',
  'src/app/features'
];
routes.forEach(r => {
  fs.mkdirSync(r, { recursive: true });
  fs.writeFileSync(r + '/page.tsx', budgetPageCode);
});

// 2. Update MegaFeatureSection.tsx to have Glowing Glassmorphic Cards and direct links
const megaCode = `"use client";
import Link from "next/link";
import { Shield, Smartphone, Wallet, ArrowRight } from "lucide-react";

export default function MegaFeatureSection() {
  const features = [
    {
      title: "Scam Detector",
      desc: "Instantly spot hidden ATM markups before you withdraw.",
      href: "/dashboard/map",
      icon: Shield,
      gradient: "from-pink-500 to-rose-600",
      glow: "shadow-[0_0_25px_rgba(244,63,94,0.35)]"
    },
    {
      title: "Nova AI Lens",
      desc: "Scan foreign menus for live price conversions and translation.",
      href: "/dashboard/nova",
      icon: Smartphone,
      gradient: "from-cyan-400 to-blue-600",
      glow: "shadow-[0_0_25px_rgba(6,182,212,0.35)]"
    },
    {
      title: "Budget River",
      desc: "Visual, flowing multi-currency trip budget tracking.",
      href: "/dashboard/budget",
      icon: Wallet,
      gradient: "from-amber-400 to-orange-500",
      glow: "shadow-[0_0_25px_rgba(245,158,11,0.35)]"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-white tracking-tight mb-4 drop-shadow-md">Everything you need.</h2>
        <p className="text-lg text-slate-400 font-medium max-w-lg mx-auto">Over 21 powerful travel tools designed to save you money abroad.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <Link key={i} href={feat.href} className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] hover:-translate-y-2 transition-all group block">
            <div className={\`w-16 h-16 rounded-2xl bg-gradient-to-br \${feat.gradient} \${feat.glow} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform\`}>
              <feat.icon size={30} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors">
              {feat.title}
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-6">
              {feat.desc}
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-pink-400 group-hover:translate-x-1 transition-transform">
              Explore Feature <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}`;
fs.writeFileSync('src/components/landing/MegaFeatureSection.tsx', megaCode);

// 3. Update Homepage (page.tsx) to inject ambient Pink & Purple Bubbles
let pageCode = fs.readFileSync('src/app/page.tsx', 'utf8');

// Inject Glowing Ambient Bubbles at top of return if not already present
if (!pageCode.includes('bg-pink-500/20 blur-[160px]')) {
  pageCode = pageCode.replace(
    /return \(\s*<div className="min-h-screen/g,
    \`return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Massive Glowing Pink and Purple Ambient Bubbles */}
      <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-pink-500/20 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-15%] w-[55vw] h-[55vw] bg-purple-600/25 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-500/20 blur-[160px] rounded-full pointer-events-none"></div>\`
  );
}

// Make sure any static references to /budget point to /dashboard/budget
pageCode = pageCode.replace(/href="\/budget"/g, 'href="/dashboard/budget"');
fs.writeFileSync('src/app/page.tsx', pageCode);

console.log("✅ Pink & purple ambient bubbles injected and all Budget routes secured!");
