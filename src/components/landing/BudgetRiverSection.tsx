"use client";

import { motion } from "framer-motion";
import { Droplets, Wallet, LineChart } from "lucide-react";
import Image from "next/image";

export default function BudgetRiverSection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pale-aqua text-sea-blue text-sm font-bold mb-6">
          <Droplets size={16} /> Financial Clarity
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Your budget as a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-blue to-sea-green">flowing river.</span>
        </h2>
        <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
          Tracking a multi-currency trip in Excel is a nightmare. GlobeRate visualizes your total budget beautifully.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
          Every time you log an expense, watch the river thin out. Get visual warnings before you overspend so you can relax and enjoy your trip.
        </p>

        <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sea-green/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex items-center gap-4 mb-2 relative z-10">
            <LineChart className="text-sea-green" size={24} />
            <span className="font-bold text-slate-400">Total Budget Remaining</span>
          </div>
          <div className="text-4xl font-black text-white relative z-10">₹1,45,000</div>
          
          <div className="mt-6 h-3 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-sea-blue to-sea-green rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Visual: Real Photo */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white"
      >
        <Image 
          src="/images/budget.jpg" 
          alt="Couple checking budget at cafe" 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        
        {/* Floating Stat Card */}
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex flex-col items-end border border-white"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-sea-green animate-pulse"></div>
            <span className="text-xs font-bold text-slate-500 uppercase">Live Sync</span>
          </div>
          <span className="text-lg font-black text-slate-800">Euro Trip Synced</span>
        </motion.div>
      </motion.div>

    </section>
  );
}
