"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Camera } from "lucide-react";
import Link from "next/link";
import SnapAskSection from "@/components/landing/SnapAskSection";
import ScamDetectorSection from "@/components/landing/ScamDetectorSection";
import PriceAnchorSection from "@/components/landing/PriceAnchorSection";
import BudgetRiverSection from "@/components/landing/BudgetRiverSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/landing/Footer";

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
    <main className="min-h-screen relative overflow-hidden bg-soft-ivory">
      
      {/* Dynamic Marble Mesh Background for Hero only */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-marble-mesh -z-10"></div>
      
      {/* GLASSMORPHIC NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/30 backdrop-blur-xl border-b border-white/40">
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
        <Link href="/dashboard" className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:scale-105 transition-transform">
          Open App
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-screen">
        <motion.div className="flex-1 text-center md:text-left z-10" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-white/60 text-sm font-medium text-slate-800 mb-6 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-coral-pink animate-pulse"></span>
            New: SnapAsk AI Photo Analysis
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Travel smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-green to-purple-magenta">
              Protect your money.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            The intelligent travel finance platform that detects exchange scams, anchors foreign prices, and tracks your global budget in real-time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-sea-green text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-light-teal hover:shadow-xl hover:shadow-sea-green/20 transition-all active:scale-95">
              Start Your Trip <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-slate-900 font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/80 transition-all active:scale-95 shadow-sm">
              <Camera size={20} /> Try SnapAsk AI
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm font-bold text-slate-700">
            <div className="flex items-center gap-1.5"><ShieldCheck size={18} className="text-sea-green" /> 100% Free</div>
            <div className="flex items-center gap-1.5"><Globe2 size={18} className="text-purple-magenta" /> 150+ Currencies</div>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 relative w-full max-w-lg aspect-square" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, type: "spring" }}>
          <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute inset-10 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-2xl flex flex-col p-8">
            <div className="flex justify-between items-center mb-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pale-aqua to-lavender shadow-inner"></div>
              <div className="w-28 h-10 rounded-full bg-white/60"></div>
            </div>
            <div className="space-y-5">
              <div className="w-full h-20 rounded-3xl bg-white/50 flex items-center px-5 gap-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-coral-pink/80"></div>
                <div className="flex-1 h-5 rounded-full bg-white/80"></div>
              </div>
              <div className="w-full h-20 rounded-3xl bg-white/50 flex items-center px-5 gap-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sea-green/80"></div>
                <div className="flex-1 h-5 rounded-full bg-white/80"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURE SECTIONS */}
      <SnapAskSection />
      <ScamDetectorSection />
      <PriceAnchorSection />
      <BudgetRiverSection />
      
      {/* FINAL SECTIONS */}
      <TestimonialsSection />
      <Footer />

    </main>
  );
}
