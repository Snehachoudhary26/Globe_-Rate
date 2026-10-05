"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Traveler!</h1>
          <p className="text-slate-500 font-medium mt-1">Here is what's happening with your trip.</p>
        </div>
        <button className="bg-sea-green text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-light-teal transition-colors shadow-md shadow-sea-green/20">
          <PlaneTakeoff size={18} /> New Trip
        </button>
      </header>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Active Trip Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-pale-aqua rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Active Trip</div>
          <div className="text-2xl font-black text-slate-800 mb-1">Japan & Thailand</div>
          <div className="text-sm font-medium text-sea-green bg-soft-mint inline-block px-2 py-0.5 rounded-md">Day 4 of 14</div>
        </motion.div>

        {/* Budget Remaining */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-pale-purple rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Budget Left</div>
            <div className="p-2 bg-slate-50 rounded-lg text-slate-600"><Wallet size={16}/></div>
          </div>
          <div className="text-3xl font-black text-slate-800 mb-1">₹84,500</div>
          <div className="text-sm font-medium text-slate-500">From ₹1,50,000 total</div>
        </motion.div>

        {/* Money Saved */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blush-pink rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Money Saved</div>
          <div className="text-3xl font-black text-slate-800 mb-1">₹12,400</div>
          <div className="text-sm font-medium flex items-center gap-1 text-coral-pink">
            <ShieldAlert size={14} /> Prevented 2 scams
          </div>
        </motion.div>

      </div>
      
      {/* We will add more dashboard widgets here later */}
      <div className="h-64 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-medium">
        More widgets coming in the next steps...
      </div>

    </div>
  );
}
