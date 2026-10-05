"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, ScanText, Receipt } from "lucide-react";

export default function SnapAskSection() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      
      {/* Left Visual: Floating App Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] bg-lavender/50 rounded-[2rem] border border-white p-8 shadow-xl flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-lilac/20 to-transparent"></div>
        
        {/* Mockup Card */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-xs bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 p-5"
        >
          <div className="flex items-center gap-3 mb-4 text-purple-magenta">
            <Camera size={24} />
            <span className="font-semibold text-slate-700">SnapAsk AI</span>
          </div>
          <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-lilac">
            <Receipt className="text-slate-400" size={32} />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-slate-200 rounded-full"></div>
            <div className="h-3 w-1/2 bg-slate-200 rounded-full"></div>
          </div>
          
          {/* AI Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -right-6 -bottom-6 bg-purple-magenta text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1"
          >
            <Sparkles size={14} /> Analyzed in 1s
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-purple text-purple-magenta text-sm font-bold mb-6">
          <ScanText size={16} /> Feature 01
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Point your camera. <br />
          <span className="text-purple-magenta">Know the truth.</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          Don't know if that restaurant menu is a rip-off? Not sure about the hidden fees on an ATM screen? Just snap a photo. 
          Our <strong className="text-slate-900">SnapAsk AI</strong> instantly reads foreign text, converts amounts to your home currency, and tells you if you're getting a fair deal.
        </p>
        
        <ul className="space-y-4">
          {[
            "Scan foreign receipts & auto-categorize",
            "Instantly read airport exchange boards",
            "Detect hidden ATM withdrawal fees visually"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center gap-3 text-slate-700 font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-light-violet flex items-center justify-center text-white">
                <Sparkles size={12} />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </section>
  );
}
