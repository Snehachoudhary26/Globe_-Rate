"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function ScamDetectorSection() {
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
        {/* Highly visible contrast badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-bold mb-6 border border-rose-200 shadow-sm">
          <ShieldAlert size={16} /> Scam Protection
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Never fall for <br />
          <span className="text-rose-500">"0% Commission"</span> again.
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
          Airport booths hide their fees inside terrible exchange rates. Enter the rate they offer you, and we instantly compare it against the real-time mid-market rate to expose their hidden markup.
        </p>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-14 h-14 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg">
              <TrendingDown size={28} />
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-900">Average Tourist Loss</h4>
              <p className="font-bold text-rose-500">8% to 12% per exchange</p>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-600 relative z-10">We guide you to the nearest low-fee ATMs globally and suggest which of your own bank cards is cheapest to use.</p>
        </div>
      </motion.div>

      {/* Right Visual: Real ATM Photo */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white"
      >
        <Image 
          src="/images/atm.jpg" 
          alt="Traveler using ATM in Tokyo" 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

        {/* Sleek, Medium-sized Warning UI */}
        <motion.div 
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl p-3 border-l-4 border-rose-500 w-[220px]"
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={16} className="text-rose-500"/>
            <span className="font-black text-slate-800 text-sm">Unfair Rate</span>
          </div>
          
          <div className="bg-rose-50 rounded-lg p-2.5 flex justify-between items-center border border-rose-100">
            <span className="text-xs font-bold text-rose-600">Markup</span>
            <span className="text-sm font-black text-rose-600">6.7% (₹6k)</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
