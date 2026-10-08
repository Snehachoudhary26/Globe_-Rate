"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Sparkles, Languages, ArrowRight, ShieldAlert, Camera } from "lucide-react";
import Image from "next/image";

export default function NovaLensPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
            <Sparkles className="text-purple-magenta" size={28} /> Nova AI Lens
          </h1>
          <p className="text-slate-500 font-medium mt-2 text-lg">Point your camera at any foreign menu or ATM screen.</p>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 font-black rounded-xl text-sm border border-purple-100 shadow-sm w-fit">
          <span className="flex h-2 w-2 rounded-full bg-purple-magenta animate-pulse"></span>
          Live Translation Active
        </div>
      </div>

      {/* Main Camera Viewfinder */}
      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
        
        {/* The mock camera feed (using an existing photo) */}
        <Image src="/images/budget.jpg" alt="Camera Feed" fill className="object-cover opacity-60" />

        {/* Animated Scanning Laser Overlay */}
        {isScanning && (
          <motion.div 
            animate={{ y: ["-100%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 border-b-4 border-purple-magenta bg-gradient-to-b from-transparent to-purple-magenta/30 z-10 shadow-[0_10px_50px_rgba(211,169,255,0.6)]"
          />
        )}

        {/* Viewfinder Corner Brackets */}
        <div className="absolute inset-6 md:inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/60 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white/60 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white/60 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/60 rounded-br-3xl"></div>
        </div>

        {/* AI Results Overlay (Glassmorphic Pop-up) */}
        <AnimatePresence>
          {scanComplete && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 z-20 bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-6"
            >
              <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 shadow-2xl border border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-lg">
                    <Languages size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-slate-900">Menu Translated</h3>
                    <p className="text-sm font-bold text-slate-500">French (€) → English ($ USD)</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-800 text-lg">Café au Lait</span>
                    <span className="font-black text-emerald-600 text-lg">$4.50 <span className="text-sm text-slate-400 line-through ml-1">€4.20</span></span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-800 text-lg">Croissant</span>
                    <span className="font-black text-emerald-600 text-lg">$2.80 <span className="text-sm text-slate-400 line-through ml-1">€2.60</span></span>
                  </div>
                </div>
                
                <button onClick={() => setScanComplete(false)} className="w-full py-4 bg-slate-100 text-slate-700 font-black text-lg rounded-2xl hover:bg-slate-200 transition-colors">
                  Scan Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analyze Button */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          {!isScanning && !scanComplete && (
            <button 
              onClick={handleScan}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black text-lg rounded-full shadow-[0_0_40px_rgba(211,169,255,0.8)] hover:scale-110 active:scale-95 transition-all border-2 border-white/20"
            >
              <Scan size={24} /> Analyze Screen
            </button>
          )}
        </div>
      </div>

      {/* Feature Explanations Below the Camera */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-amber-400/20 transition-all"></div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center mb-6 shadow-lg">
            <ShieldAlert size={24} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-3">Hidden Fee Detection</h3>
          <p className="text-slate-600 font-medium mb-6 leading-relaxed">Point your camera at an ATM confirmation screen before pressing accept. Nova will instantly calculate the true hidden markup.</p>
          <button className="text-orange-500 font-black flex items-center gap-2 hover:gap-3 transition-all">Try Demo <ArrowRight size={18}/></button>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-magenta/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-magenta/20 transition-all"></div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center mb-6 shadow-lg">
            <Languages size={24} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-3">Instant Menu Anchor</h3>
          <p className="text-slate-600 font-medium mb-6 leading-relaxed">Scanning a restaurant menu will overlay your home currency directly onto the physical menu using augmented reality tracking.</p>
          <button className="text-purple-600 font-black flex items-center gap-2 hover:gap-3 transition-all">Enable AR Mode <ArrowRight size={18}/></button>
        </div>
      </div>
    </div>
  );
}
