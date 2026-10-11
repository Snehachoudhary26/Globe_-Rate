const fs = require('fs');

// 1. HIGH-VISIBILITY NEON PINK & PURPLE FLOATING BUBBLES
const bubblesCode = `"use client";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
  glow: string;
}

export default function FloatingParticles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const bubbleStyles = [
      {
        color: "from-[#FF007A]/50 via-[#FF1493]/30 to-[#7928CA]/40 border-[#FF007A]/80",
        glow: "shadow-[0_0_25px_rgba(255,0,122,0.8)]"
      },
      {
        color: "from-[#7928CA]/50 via-[#9333EA]/30 to-[#4338CA]/40 border-[#9333EA]/80",
        glow: "shadow-[0_0_25px_rgba(147,51,234,0.8)]"
      },
      {
        color: "from-[#FF007A]/60 to-[#9333EA]/40 border-[#FF007A]/90",
        glow: "shadow-[0_0_30px_rgba(255,0,122,0.9)]"
      },
      {
        color: "from-[#A855F7]/50 via-[#EC4899]/30 to-[#8B5CF6]/40 border-[#A855F7]/80",
        glow: "shadow-[0_0_25px_rgba(168,85,247,0.8)]"
      }
    ];

    const list: Bubble[] = Array.from({ length: 28 }).map((_, i) => {
      const style = bubbleStyles[i % bubbleStyles.length];
      return {
        id: i,
        size: Math.floor(Math.random() * 32) + 18, // 18px to 50px
        left: Math.random() * 100,
        duration: Math.floor(Math.random() * 10) + 14,
        delay: Math.random() * 8,
        color: style.color,
        glow: style.glow
      };
    });

    setBubbles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={\`absolute rounded-full bg-gradient-to-tr border backdrop-blur-[1.5px] animate-float-bubble \${b.color} \${b.glow}\`}
          style={{
            width: \`\${b.size}px\`,
            height: \`\${b.size}px\`,
            left: \`\${b.left}%\`,
            bottom: "-60px",
            animationDuration: \`\${b.duration}s\`,
            animationDelay: \`\${b.delay}s\`,
          }}
        >
          {/* Specular light spot to look like real floating neon glass bubbles */}
          <div className="absolute top-[16%] left-[20%] w-[32%] h-[32%] bg-white/80 rounded-full blur-[0.4px]"></div>
        </div>
      ))}
      <style jsx global>{\`
        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          50% {
            transform: translateY(-50vh) translateX(30px) scale(1.15);
            opacity: 1;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-115vh) translateX(-25px) scale(0.85);
            opacity: 0;
          }
        }
        .animate-float-bubble {
          animation-name: floatBubble;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      \`}</style>
    </div>
  );
}`;
fs.writeFileSync('src/components/animations/FloatingParticles.tsx', bubblesCode);

// 2. BUDGET RIVER PAGE WITH NEON HIGHLIGHTS AND BUBBLE COMPATIBILITY
const budgetCode = `"use client";
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
      {/* Radiant Pink & Purple Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF007A]/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#7928CA]/25 blur-[150px] rounded-full pointer-events-none"></div>

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF007A]/20 border border-[#FF007A]/30 text-pink-300 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Plane size={14} /> Active Trip: Euro Tour
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white">
              Budget <span className="text-[#FF007A] drop-shadow-[0_0_20px_rgba(255,0,122,0.5)]">River</span>
            </h1>
            <p className="text-slate-400 font-medium mt-1">Real-time dynamic spending flow and multi-currency burn rate.</p>
          </div>
          <button className="px-6 py-3.5 bg-gradient-to-r from-[#FF007A] to-[#7928CA] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,0,122,0.4)] flex items-center gap-2">
            <Plus size={18} /> Log Expense
          </button>
        </div>

        {/* River Progress Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Remaining Budget</p>
              <h2 className="text-5xl font-black text-white mt-1">
                \${budget.remaining.toLocaleString()} <span className="text-2xl font-bold text-slate-400">USD</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Allocated</p>
              <p className="text-2xl font-black text-slate-300 mt-1">\${budget.total.toLocaleString()} USD</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-6 w-full bg-slate-900 rounded-full overflow-hidden flex shadow-inner border border-white/10">
              <div className="h-full bg-gradient-to-r from-[#FF007A] to-[#7928CA] w-[43%] transition-all duration-500 flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_rgba(255,0,122,0.6)]">43% Spent</div>
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
            { name: "Food & Dining", spent: "\$640", icon: Coffee, color: "from-[#FF007A] to-rose-600" },
            { name: "Transport & Trains", spent: "\$320", icon: Bus, color: "from-emerald-500 to-teal-600" },
            { name: "Activities & Misc", spent: "\$210", icon: Wallet, color: "from-[#7928CA] to-purple-600" },
          ].map((cat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg hover:border-white/20 transition-all">
              <div className={\`w-12 h-12 rounded-2xl bg-gradient-to-br \${cat.color} flex items-center justify-center mb-4 text-white shadow-md\`}>
                <cat.icon size={22} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{cat.name}</p>
              <h3 className="text-2xl font-black text-white mt-1">{cat.spent}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;

fs.mkdirSync('src/app/dashboard/budget', { recursive: true });
fs.writeFileSync('src/app/dashboard/budget/page.tsx', budgetCode);
fs.mkdirSync('src/app/budget', { recursive: true });
fs.writeFileSync('src/app/budget/page.tsx', budgetCode);

// 3. REMOVE TOGGLE BUTTON FROM DASHBOARD LAYOUT & REMOVE BOX AROUND LOGO
let dashLayout = fs.readFileSync('src/app/dashboard/layout.tsx', 'utf8');
dashLayout = dashLayout.replace(/import \{ ThemeToggle \} from "@\/components\/ThemeToggle";/g, '');
dashLayout = dashLayout.replace(/<ThemeToggle \/>/g, '');
fs.writeFileSync('src/app/dashboard/layout.tsx', dashLayout);

// 4. OVERHAUL HOMEPAGE: CRISP WHITE TEXT + EYE-CATCHING NEON PINK & PURPLE
let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove theme toggle
home = home.replace(/<ThemeToggle \/>/g, '');
home = home.replace(/import \{ ThemeToggle \} from "@\/components\/ThemeToggle";/g, '');

// Navbar fixes
home = home.replace(/bg-white\/20/g, 'bg-slate-950/70');
home = home.replace(/text-slate-700/g, 'text-slate-300');
home = home.replace(/border-b border-white\/50/g, 'border-b border-white/10');

// Fix Hero Section
home = home.replace(
  /<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-\[1\.1\] mb-6"[^>]*>[\s\S]*?<\/h1>/g,
  `<h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
    Travel smarter. <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#A855F7] to-cyan-400 drop-shadow-[0_0_30px_rgba(255,0,122,0.4)]">
      Protect your money.
    </span>
  </h1>`
);
home = home.replace(/text-slate-800 mb-10 max-w-2xl/g, 'text-slate-300 mb-10 max-w-2xl');

// Fix Nova AI Vision Section
home = home.replace(
  /<h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">[\s\S]*?<\/h2>/g,
  `<h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
    Point your camera. <br/>
    <span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">Know the truth.</span>
  </h2>`
);
home = home.replace(/text-lg text-slate-700 mb-8 font-medium/g, 'text-lg text-slate-300 mb-8 font-medium');

// Fix Scam Protection Section (0% Commission highlight)
home = home.replace(
  /Never fall for <br\/>\s*<span className="text-rose-500">[^<]*<\/span>\s*again\./g,
  `Never fall for <br/><span className="text-[#FF007A] drop-shadow-[0_0_30px_rgba(255,0,122,0.8)]">&quot;0% Commission&quot;</span> again.`
);
home = home.replace(/text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight/g, 'text-4xl md:text-5xl font-black text-white mb-6 leading-tight');
home = home.replace(/text-lg text-slate-700 mb-8 leading-relaxed font-medium/g, 'text-lg text-slate-300 mb-8 leading-relaxed font-medium');

// Fix Price Anchor Section
home = home.replace(
  /Don't just see numbers\. <br\/>\s*<span className="text-amber-500">Feel the price\.<\/span>/g,
  `Don't just see numbers. <br/><span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">Feel the price.</span>`
);
home = home.replace(/text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight/g, 'text-4xl md:text-5xl font-black text-white mb-6 leading-tight');
home = home.replace(/text-lg text-slate-700 mb-8 leading-relaxed/g, 'text-lg text-slate-300 mb-8 leading-relaxed');

// Fix Budget River on Homepage
home = home.replace(
  /Your budget as a <br\/>\s*<span[^>]*>flowing river\.<\/span>/g,
  `Your budget as a <br/><span className="text-[#FF007A] drop-shadow-[0_0_25px_rgba(255,0,122,0.6)]">flowing river.</span>`
);
home = home.replace(/text-lg text-slate-700 mb-6 leading-relaxed font-medium/g, 'text-lg text-slate-300 mb-6 leading-relaxed font-medium');
home = home.replace(/text-lg text-slate-700 leading-relaxed font-medium mb-8/g, 'text-lg text-slate-300 leading-relaxed font-medium mb-8');

// Fix Loved by Global Travelers
home = home.replace(
  /Loved by global <span class="text-sea-green">travelers\.<\/span>/g,
  `Loved by global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] to-[#A855F7]">travelers.</span>`
);
home = home.replace(/text-4xl md:text-5xl font-black text-slate-900 mb-6/g, 'text-4xl md:text-5xl font-black text-white mb-6');

// Fix Footer
home = home.replace(
  /<footer class="[^"]*">/g,
  `<footer className="w-full bg-slate-950/80 backdrop-blur-xl border-t border-white/10 py-12 px-6 md:px-12 mt-12 text-slate-400">`
);

fs.writeFileSync('src/app/page.tsx', home);

console.log("✅ Neon pink & purple glow applied! Floating bubbles ready across Homepage and Budget River!");
