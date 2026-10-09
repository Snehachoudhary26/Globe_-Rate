"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Sparkles, Languages, ArrowRight, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function NovaLensPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => { setIsScanning(false); setScanComplete(true); }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-3 tracking-tight mb-2">
            <Sparkles className="text-purple-magenta" size={32} /> Nova AI Lens
          </h1>
          <p className="text-slate-300 font-bold text-lg">Point your camera at any foreign menu or ATM screen.</p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-xl border border-white/10 text-purple-700 font-black rounded-xl text-sm shadow-md border-2 border-white w-fit">
          <span className="flex h-3 w-3 rounded-full bg-purple-magenta animate-pulse"></span>
          Live Translation Active
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-8 border-white">
        {/* BRAND NEW PHOTOGRAPH! */}
        <Image src="/images/nova_scanner_menu.jpg" alt="Camera Feed" fill className="object-cover opacity-90" />

        {isScanning && (
          <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 border-b-4 border-purple-magenta bg-gradient-to-b from-transparent to-purple-magenta/40 z-10 shadow-[0_10px_50px_rgba(211,169,255,0.8)]" />
        )}

        <div className="absolute inset-8 md:inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-white/80 rounded-tl-[2rem]"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-white/80 rounded-tr-[2rem]"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-white/80 rounded-bl-[2rem]"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-white/80 rounded-br-[2rem]"></div>
        </div>

        <AnimatePresence>
          {scanComplete && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10/95 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border-2 border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <Languages size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-white">Menu Translated</h3>
                    <p className="text-sm font-bold text-slate-300">French (€) → English ($ USD)</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl border-2 border-white/10 shadow-sm">
                    <span className="font-black text-white text-xl">Café au Lait</span>
                    <span className="font-black text-emerald-600 text-xl">$4.50 <span className="text-sm text-slate-400 line-through ml-1">€4.20</span></span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl border-2 border-white/10 shadow-sm">
                    <span className="font-black text-white text-xl">Croissant</span>
                    <span className="font-black text-emerald-600 text-xl">$2.80 <span className="text-sm text-slate-400 line-through ml-1">€2.60</span></span>
                  </div>
                </div>
                
                <button onClick={() => setScanComplete(false)} className="w-full py-4 bg-slate-900 text-white font-black text-lg rounded-2xl hover:bg-purple-magenta transition-colors shadow-lg">
                  Scan Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          {isScanning === false && scanComplete === false && (
            <button onClick={handleScan} className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black text-xl rounded-full shadow-[0_0_50px_rgba(211,169,255,1)] hover:scale-110 active:scale-95 transition-all border-4 border-white">
              <Scan size={28} /> Analyze Screen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}