"use client";

import { motion } from "framer-motion";
import { Anchor, Pizza, Coffee, TrainFront } from "lucide-react";

export default function PriceAnchorSection() {
  const anchors = [
    { foreign: "¥1,200", home: "₹670", icon: Pizza, text: "1 Medium Pizza", color: "text-coral-pink", bg: "bg-blush-pink" },
    { foreign: "€4.50", home: "₹420", icon: Coffee, text: "3 Starbucks Coffees", color: "text-purple-magenta", bg: "bg-pale-purple" },
    { foreign: "฿250", home: "₹600", icon: TrainFront, text: "2 Days Metro Pass", color: "text-sea-green", bg: "bg-soft-mint" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      
      {/* Left Visual: Floating Price Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] bg-butter-yellow/50 rounded-[2rem] border border-white p-8 shadow-xl flex flex-col items-center justify-center gap-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-canary-yellow/20 to-transparent"></div>
        
        {anchors.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (i * 0.2), type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-2xl shadow-md border border-white p-4 flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Foreign Price</span>
              <span className="text-xl font-black text-slate-800">{item.foreign}</span>
            </div>
            
            <div className="text-slate-300">→</div>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="block text-xs text-slate-500 font-medium">Feels like</span>
                <span className="block text-sm font-bold text-slate-700">{item.text}</span>
              </div>
              <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                <item.icon size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canary-yellow text-amber-600 text-sm font-bold mb-6">
          <Anchor size={16} /> Feature 03
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Don't just see numbers. <br />
          <span className="text-amber-500">Feel the price.</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          When you see "¥1,200", your brain goes blank. Is that cheap or expensive? 
          Our <strong className="text-slate-900">Price Anchor AI</strong> instantly converts foreign prices into familiar items from your daily life back home.
        </p>
        
        <p className="text-lg text-slate-700 leading-relaxed">
          Instantly build price intuition. Stop accidentally overspending just because the currency has extra zeros.
        </p>
      </motion.div>

    </section>
  );
}
