"use client";

import { motion } from "framer-motion";
import { Sparkles, ScanText } from "lucide-react";
import Image from "next/image";

export default function SnapAskSection() {
  return (
    <section id="nova-ai" className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      
      {/* Left Visual: Real Image with Floating UI */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white"
      >
        <Image 
          src="/images/nova_ai.jpg" 
          alt="Nova AI scanning cafe menu" 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-purple-magenta/40 to-transparent"></div>
        
        {/* Floating AI Reticle/Analysis Widget */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 m-auto w-[75px] h-[150px] ml-[-20px] mt-[10px] border-2 border-dashed border-white/80 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ y: -40 }}
            animate={{ y: 40 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatType: "reverse" }}
            className="w-full h-1 bg-gradient-to-r from-transparent via-purple-magenta to-transparent shadow-[0_0_10px_#D3A9FF]"
          />
        </motion.div>

        {/* AI Result Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex items-center gap-4"
        >
          <div className="bg-purple-magenta text-white p-2 rounded-xl"><Sparkles size={24} /></div>
          <div>
            <p className="text-xs font-bold text-purple-magenta uppercase tracking-wider">Nova AI Result</p>
            <p className="text-sm font-black text-slate-800">Menu items converted to ₹ INR</p>
          </div>
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pale-purple text-purple-magenta text-sm font-bold mb-6">
          <Sparkles size={16} /> Nova AI Vision
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Point your camera. <br />
          <span className="text-purple-magenta">Know the truth.</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
          Don't know if that restaurant menu is a rip-off? Not sure about the hidden fees on an ATM screen? Just snap a photo. 
          <strong className="text-slate-900 block mt-2 text-xl">Meet Nova AI.</strong>
        </p>
        
        <ul className="space-y-5">
          {[
            "Instantly translates & converts physical menus",
            "Reads complex airport exchange boards",
            "Detects hidden withdrawal fees visually"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center gap-4 text-slate-800 font-bold"
            >
              <div className="w-8 h-8 rounded-full bg-light-violet flex items-center justify-center text-white shadow-sm">
                <ScanText size={14} />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
