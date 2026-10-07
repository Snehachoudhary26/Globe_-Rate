"use client";
import { motion } from "framer-motion";
import { Sparkles, ScanText } from "lucide-react";
import Image from "next/image";

export default function SnapAskSection() {
  return (
    <section id="nova-ai" className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div className="flex-1 relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
        <Image src="/images/nova_ai.jpg" alt="Nova AI scanning cafe menu" fill className="object-cover hover:scale-105 transition-transform duration-700" />
        
        {/* Removed the buggy scanner overlay. Let the beautiful image speak for itself! */}
        
        {/* Small sleek AI Result Card */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-purple-100">
          <div className="bg-purple-magenta text-white p-2 rounded-xl"><Sparkles size={16} /></div>
          <div><p className="text-[10px] font-black text-purple-magenta uppercase tracking-widest">Nova AI Result</p><p className="text-sm font-black text-slate-900">Menu converted to ₹ INR</p></div>
        </motion.div>
      </motion.div>

      <div className="flex-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6 border border-purple-200">
          <Sparkles size={16} /> Nova AI Vision
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Point your camera. <br /><span className="text-purple-magenta">Know the truth.</span></h2>
        <p className="text-lg text-slate-700 mb-8 font-medium">Just snap a photo. <strong className="text-slate-900 font-black block mt-2 text-xl">Meet Nova AI.</strong></p>
      </div>
    </section>
  );
}
