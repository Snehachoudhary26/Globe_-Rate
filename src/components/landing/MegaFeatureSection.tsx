"use client";
import { motion } from "framer-motion";
import { Globe, Wallet, Shield, Zap, Map, Receipt, Bell, Smartphone } from "lucide-react";

export default function MegaFeatureSection() {
  const extraFeatures = [
    "Offline Mode Support", "Multi-currency Wallets", "Split Bills with Friends", "Receipt OCR Scanning",
    "Real-time Rate Alerts", "Crypto Exchange Support", "ATM Fee Heatmap", "Local Tipping Guides",
    "Export to Excel/PDF", "Bank Card Recommendations", "Custom Budget Categories", "Apple/Google Pay Sync",
    "Live Fraud Prevention", "Flight Price Anchor", "Group Travel Tracking"
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/40 backdrop-blur-md rounded-[3rem] my-12 border border-white shadow-xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Everything you need for global finance.</h2>
        <p className="text-slate-600 font-medium">Over 21 powerful features packed into one intelligent platform.</p>
      </div>

      {/* Main 6 Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { icon: <Shield />, title: "Scam Detector", desc: "Instantly spot hidden ATM and booth markups." },
          { icon: <Smartphone />, title: "Nova AI Lens", desc: "Scan physical menus for live price conversions." },
          { icon: <Wallet />, title: "Budget River", desc: "Visual, flowing budget tracking for any currency." },
          { icon: <Globe />, title: "Price Anchor", desc: "Translate foreign prices into local familiar items." },
          { icon: <Map />, title: "ATM Heatmap", desc: "Find the lowest-fee ATMs anywhere in the world." },
          { icon: <Zap />, title: "Live Sync", desc: "Bank-level real-time exchange rate updates." }
        ].map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-4">{f.icon}</div>
            <h3 className="font-black text-slate-800 mb-2">{f.title}</h3>
            <p className="text-sm font-medium text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 15 Extra Features Ticker */}
      <div className="pt-8 border-t border-slate-200">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center mb-6">Plus 15 more powerful tools</p>
        <div className="flex flex-wrap justify-center gap-3">
          {extraFeatures.map((feat, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/60 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
              {feat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
