"use client";

import { motion } from "framer-motion";
import { Droplets, Wallet, Plane, ShoppingBag } from "lucide-react";

export default function BudgetRiverSection() {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-aqua text-sea-blue text-sm font-bold mb-6">
          <Droplets size={16} /> Feature 04
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Your budget as a <br />
          <span className="text-sea-blue">flowing river.</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          Tracking a multi-currency trip in Excel is a nightmare. GlobeRate visualizes your total budget as an animated river.
        </p>
        
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Every time you log an expense, water siphons off into category pools. Watch the river thin out as your trip progresses, and get visual warnings before you overspend.
        </p>

        <div className="flex gap-4">
          <div className="bg-white/60 border border-white backdrop-blur-md rounded-xl p-4 flex-1 shadow-sm text-center">
            <Plane className="mx-auto text-light-teal mb-2" size={24} />
            <div className="font-bold text-slate-800 text-xl">¥45,000</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Transport</div>
          </div>
          <div className="bg-white/60 border border-white backdrop-blur-md rounded-xl p-4 flex-1 shadow-sm text-center">
            <ShoppingBag className="mx-auto text-purple-magenta mb-2" size={24} />
            <div className="font-bold text-slate-800 text-xl">€120</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Shopping</div>
          </div>
        </div>
      </motion.div>

      {/* Right Visual: Abstract Flowing River */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative w-full aspect-[4/3] bg-sea-blue/10 rounded-[2rem] border border-white p-8 shadow-xl flex items-center justify-center overflow-hidden"
      >
        {/* Animated River Background */}
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-50"
          style={{
            background: "linear-gradient(-45deg, #A8DFFF, #98E2F9, #C1F0D1, #88DBCB)",
            backgroundSize: "400% 400%",
          }}
        />
        
        {/* Main Budget Card */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-sm bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white p-6"
        >
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <Wallet className="text-sea-blue" size={24} />
            <div>
              <div className="text-sm font-bold text-slate-700">Japan + Europe Trip</div>
              <div className="text-xs text-slate-500">14 Days Remaining</div>
            </div>
          </div>
          
          <div className="mb-2 flex justify-between text-sm font-bold">
            <span className="text-slate-600">Total Budget</span>
            <span className="text-sea-blue">₹1,45,000 Left</span>
          </div>
          
          {/* Animated Liquid Progress Bar */}
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-sea-blue to-light-teal rounded-full"
            />
          </div>
          
          <div className="mt-4 flex justify-between text-xs font-medium text-slate-400">
            <span>Spent: ₹55,000</span>
            <span>Total: ₹2,00,000</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
