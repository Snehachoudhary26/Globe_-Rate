"use client";
import { motion } from "framer-motion";
import { Globe, Wallet, Shield, Zap, Map, Smartphone } from "lucide-react";
import Link from "next/link";

export default function MegaFeatureSection() {
  const features = [
    { icon: <Shield size={28} className="text-white" />, title: "Scam Detector", desc: "Instantly spot hidden ATM markups.", gradient: "from-[#FF007A] to-[#7928CA]", shadow: "shadow-[#FF007A]/50", href: "/dashboard/nova" },
    { icon: <Smartphone size={28} className="text-white" />, title: "Nova AI Lens", desc: "Scan menus for live price conversions.", gradient: "from-[#00DFD8] to-[#007CF0]", shadow: "shadow-[#00DFD8]/50", href: "/dashboard/nova" },
    { icon: <Wallet size={28} className="text-white" />, title: "Budget River", desc: "Visual, flowing budget tracking.", gradient: "from-[#F5A623] to-[#FF4D4D]", shadow: "shadow-[#F5A623]/50", href: "/dashboard/budget" },
    { icon: <Globe size={28} className="text-white" />, title: "Price Anchor", desc: "Translate prices into familiar items.", gradient: "from-[#7928CA] to-[#4338CA]", shadow: "shadow-[#7928CA]/50", href: "/dashboard" },
    { icon: <Map size={28} className="text-white" />, title: "ATM Heatmap", desc: "Find the lowest-fee ATMs anywhere.", gradient: "from-[#FF4D4D] to-[#991B1B]", shadow: "shadow-[#FF4D4D]/50", href: "/dashboard/map" },
    { icon: <Zap size={28} className="text-white" />, title: "Live Sync", desc: "Bank-level real-time exchange rates.", gradient: "from-[#00DFD8] to-[#10B981]", shadow: "shadow-[#10B981]/50", href: "/dashboard" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto my-12 relative">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Everything you need.</h2>
        <p className="text-xl text-slate-600 font-medium">Over 21 powerful tools packed into one platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
            <Link href={f.href} className="block p-8 rounded-[2.5rem] bg-white border-2 border-slate-50 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden h-full cursor-pointer">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-8 shadow-2xl ${f.shadow} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{f.title}</h3>
              <p className="text-base font-medium text-slate-600 leading-relaxed">{f.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
