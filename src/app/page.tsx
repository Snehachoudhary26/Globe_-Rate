"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Camera } from "lucide-react";
import Link from "next/link";

// Framer Motion animation variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-marble-mesh relative overflow-hidden">
      
      {/* GLASSMORPHIC NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/20 backdrop-blur-lg border-b border-white/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sea-green flex items-center justify-center text-white">
            <Globe2 size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">GlobeRate</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="#features" className="hover:text-sea-green transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-sea-green transition-colors">How it Works</Link>
          <Link href="#destinations" className="hover:text-sea-green transition-colors">Destinations</Link>
        </div>
        <button className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:scale-105 transition-transform">
          Open App
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-screen">
        
        {/* Left Content: Text & Buttons */}
        <motion.div 
          className="flex-1 text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/50 text-sm font-medium text-slate-700 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-coral-pink animate-pulse"></span>
            New: SnapAsk AI Photo Analysis
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Travel smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-green to-purple-magenta">
              Protect your money.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            The intelligent travel finance platform that detects exchange scams, anchors foreign prices, and tracks your global budget in real-time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-sea-green text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-light-teal hover:shadow-lg hover:shadow-sea-green/30 transition-all active:scale-95">
              Start Your Trip <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-slate-800 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/70 transition-all active:scale-95">
              <Camera size={20} /> Try SnapAsk AI
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-sea-green" /> 100% Free</div>
            <div className="flex items-center gap-1.5"><Globe2 size={16} className="text-purple-magenta" /> 150+ Currencies</div>
          </motion.div>
        </motion.div>

        {/* Right Content: Floating Visual/Globe Placeholder */}
        <motion.div 
          className="flex-1 relative w-full max-w-lg aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          {/* Abstract floating glass cards to represent the app before we build the 3D globe */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 left-10 right-10 bottom-10 bg-white/30 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pale-aqua to-lavender"></div>
              <div className="w-24 h-8 rounded-full bg-white/50"></div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-16 rounded-2xl bg-white/40 flex items-center px-4 gap-4">
                <div className="w-8 h-8 rounded-full bg-coral-pink/80"></div>
                <div className="flex-1 h-4 rounded-full bg-white/60"></div>
              </div>
              <div className="w-full h-16 rounded-2xl bg-white/40 flex items-center px-4 gap-4">
                <div className="w-8 h-8 rounded-full bg-sea-green/80"></div>
                <div className="flex-1 h-4 rounded-full bg-white/60"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </section>
    </main>
  );
}
