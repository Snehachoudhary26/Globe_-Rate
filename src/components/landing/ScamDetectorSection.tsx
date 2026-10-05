"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, ArrowRightLeft } from "lucide-react";

export default function ScamDetectorSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-pink text-coral-pink text-sm font-bold mb-6">
          <ShieldAlert size={16} /> Feature 02
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Never fall for <br />
          <span className="text-coral-pink">"0% Commission"</span> again.
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          Airport booths hide their fees inside terrible exchange rates. Enter the rate they offer you, and we compare it against the real-time mid-market rate to expose their hidden markup.
        </p>
        
        <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-rose-pink/20 flex items-center justify-center text-rose-pink">
              <TrendingDown size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Average Tourist Loss</h4>
              <p className="text-sm text-slate-600">8% to 12% per exchange</p>
            </div>
          </div>
          <p className="text-sm text-slate-700">We guide you to the nearest low-fee ATMs and suggest which of your own bank cards is cheapest to use.</p>
        </div>
      </motion.div>

      {/* Right Visual: Warning Card Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] bg-pale-peach rounded-[2rem] border border-white p-8 shadow-xl flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-coral-pink"
        >
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <span className="font-semibold text-slate-500 flex items-center gap-2">
              <ArrowRightLeft size={16}/> Exchange Check
            </span>
            <span className="bg-coral-pink/10 text-coral-pink px-3 py-1 rounded-full text-xs font-bold">UNFAIR RATE</span>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Real Rate</span>
              <span className="font-bold text-sea-green">¥0.0568</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">They Offer</span>
              <span className="font-bold text-coral-pink">¥0.0530</span>
            </div>
          </div>

          <div className="bg-rose-pink/10 rounded-xl p-4 text-center">
            <p className="text-sm font-medium text-rose-pink mb-1">Hidden Markup Detected</p>
            <p className="text-2xl font-black text-coral-pink">6.7% (₹6,700 loss)</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
