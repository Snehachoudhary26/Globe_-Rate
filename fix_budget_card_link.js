const fs = require('fs');

// 1. Create /budget route so both /budget AND /dashboard/budget work seamlessly!
fs.mkdirSync('src/app/budget', { recursive: true });
fs.writeFileSync('src/app/budget/page.tsx', `"use client";
import BudgetRiverPage from "../dashboard/budget/page";
export default function BudgetPage() {
  return <BudgetRiverPage />;
}`);

// 2. Also alias /nova and /map so other homepage cards can never 404
fs.mkdirSync('src/app/nova', { recursive: true });
fs.writeFileSync('src/app/nova/page.tsx', `"use client";
import NovaLensPage from "../dashboard/nova/page";
export default function NovaPage() {
  return <NovaLensPage />;
}`);

fs.mkdirSync('src/app/map', { recursive: true });
fs.writeFileSync('src/app/map/page.tsx', `"use client";
import MapPage from "../dashboard/map/page";
export default function MapPageAlias() {
  return <MapPage />;
}`);

// 3. Ensure MegaFeatureSection has active Links for all 3 cards (including Budget River)
const megaPath = 'src/components/landing/MegaFeatureSection.tsx';
const megaCode = `"use client";
import Link from "next/link";
import { Shield, Smartphone, Wallet, ArrowRight } from "lucide-react";

export default function MegaFeatureSection() {
  const features = [
    {
      title: "Scam Detector",
      desc: "Instantly spot hidden ATM markups.",
      href: "/dashboard/map",
      icon: Shield,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Nova AI Lens",
      desc: "Scan menus for live price conversions.",
      href: "/dashboard/nova",
      icon: Smartphone,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Budget River",
      desc: "Visual, flowing budget tracking.",
      href: "/dashboard/budget",
      icon: Wallet,
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Everything you need.</h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Over 21 powerful tools packed into one platform.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <Link key={i} href={feat.href} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group block">
            <div className={\`w-16 h-16 rounded-2xl bg-gradient-to-br \${feat.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform\`}>
              <feat.icon size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {feat.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
              {feat.desc}
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
              Explore Tool <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}`;
fs.writeFileSync(megaPath, megaCode);

// 4. Update any loose references in src/app/page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(/href="\/budget"/g, 'href="/dashboard/budget"');
fs.writeFileSync('src/app/page.tsx', page);

console.log("✅ Budget River button successfully linked and alias created!");
