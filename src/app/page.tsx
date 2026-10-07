"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SnapAskSection from "@/components/landing/SnapAskSection";
import ScamDetectorSection from "@/components/landing/ScamDetectorSection";
import PriceAnchorSection from "@/components/landing/PriceAnchorSection";
import BudgetRiverSection from "@/components/landing/BudgetRiverSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Footer from "@/components/landing/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#F4EFFF] to-[#E6F9F5]">
      
      {/* Dynamic Marble Mesh Background for Hero only */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-marble-mesh -z-10"></div>
      
      {/* ULTRA-PREMIUM NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/20 backdrop-blur-2xl border-b border-white/50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white">
            <Image src="/images/logo.jpg" alt="GlobeRate Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">GlobeRate</span>
        </div>
        
        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <Link href="#features" className="hover:text-purple-magenta transition-colors">Features</Link>
          <Link href="#nova-ai" className="hover:text-purple-magenta transition-colors flex items-center gap-1">
            Nova AI <Sparkles size={14} className="text-amber-500" />
          </Link>
          <Link href="#destinations" className="hover:text-purple-magenta transition-colors">Destinations</Link>
        </div>

        {/* Right Actions (Language, Sign In, CTA) */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-600 bg-white/40 px-3 py-1.5 rounded-full hover:bg-white/70 transition-all border border-white/50">
            <Globe2 size={16} /> EN <ChevronDown size={14} />
          </button>
          <Link href="/auth/login" className="hidden md:block text-sm font-bold text-slate-700 hover:text-purple-magenta transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO SECTION WITH REAL PHOTO */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-screen">
        
        <motion.div className="flex-1 text-center md:text-left z-10" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-bold text-slate-800 mb-6 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-purple-magenta animate-pulse"></span>
            Meet Nova AI: Your Travel Superpower
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Travel smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-green via-purple-magenta to-amber-500">
              Protect your money.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            The intelligent travel finance platform that detects exchange scams, anchors foreign prices, and tracks your global budget in real-time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-sea-green text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-light-teal hover:shadow-xl hover:shadow-sea-green/30 transition-all active:scale-95">
              Start Your Trip <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-lg"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sea-green/20 to-purple-magenta/20 rounded-[2.5rem] blur-2xl transform scale-105"></div>
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-[6px] border-white/80 shadow-2xl">
            <Image 
              src="/images/hero.jpg" 
              alt="Stylish traveler at airport" 
              fill 
              className="object-cover"
              priority
            />
            {/* Floating Glass Widget on Image */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/60 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-soft-mint flex items-center justify-center text-sea-green"><ShieldCheck size={20} /></div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Secure Exchange</p>
                <p className="text-sm font-black text-slate-800">Scam Prevented</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FEATURE SECTIONS */}
      <SnapAskSection />
      <ScamDetectorSection />
      <PriceAnchorSection />
      <BudgetRiverSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
