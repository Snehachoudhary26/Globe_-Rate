const fs = require('fs');

fs.mkdirSync('src/app/dashboard/profile', { recursive: true });

const profilePageCode = `"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  User, 
  Shield, 
  CreditCard, 
  Globe, 
  Bell, 
  Save, 
  Check, 
  Smartphone, 
  AlertTriangle,
  Lock,
  Sparkles,
  ArrowLeft
} from "lucide-react";

export default function ProfilePage() {
  const [name, setName] = useState("Sneha Choudhary");
  const [email, setEmail] = useState("sneha@globerate.io");
  const [homeCurrency, setHomeCurrency] = useState("INR");
  const [cardTier, setCardTier] = useState("zero_markup");
  const [dccWarning, setDccWarning] = useState(true);
  const [offlineCache, setOfflineCache] = useState(true);
  const [dailyLimit, setDailyLimit] = useState("25000");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8 text-white">
      
      {/* 1. TOP HEADER & BREADCRUMB */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-2">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <User className="text-[#FF007A]" size={32} />
            User Profile & Travel Preferences
          </h1>
          <p className="text-slate-300 text-sm mt-1">
            Configure your base currency, banking card fee tiers, and ATM scam protection safeguards.
          </p>
        </div>

        {/* Live Saved Notification Toast */}
        {savedSuccess && (
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm animate-bounce">
            <Check size={18} /> Settings saved successfully!
          </div>
        )}
      </div>

      {/* 2. TRAVELER STATS & BADGE BANNER */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#FF007A] shadow-[0_0_20px_rgba(255,0,122,0.4)] mb-4 bg-slate-800">
            <Image src="/images/hero.jpg" alt="Profile Avatar" fill className="object-cover" />
          </div>
          <h3 className="text-xl font-black text-white">{name}</h3>
          <p className="text-xs text-slate-400 font-medium">{email}</p>
          <span className="mt-3 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white">
            ⭐ Global Explorer Pro
          </span>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Scam Loss Evaded</span>
              <Shield size={20} className="text-[#FF007A]" />
            </div>
            <div className="text-3xl font-black text-white">₹14,250</div>
            <p className="text-xs text-emerald-400 font-bold mt-2">Saved across 4 ATM interactions</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Home Base Rate</span>
              <Globe size={20} className="text-[#A855F7]" />
            </div>
            <div className="text-3xl font-black text-white">{homeCurrency} (₹)</div>
            <p className="text-xs text-purple-300 font-bold mt-2">Real-time mid-market sync active</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Protection Tier</span>
              <Sparkles size={20} className="text-[#FACC15]" />
            </div>
            <div className="text-3xl font-black text-white">Maximum</div>
            <p className="text-xs text-[#FACC15] font-bold mt-2">Zero-Roaming Cache Enabled</p>
          </div>
        </div>
      </div>

      {/* 3. MAIN PREFERENCES FORM */}
      <form onSubmit={handleSave} className="space-y-8">
        
        {/* SECTION A: TRAVEL FINANCIAL PREFERENCES */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <CreditCard size={22} className="text-[#FF007A]" /> Travel Banking & Currency Defaults
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Home Currency */}
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                Home Reference Currency
              </label>
              <select 
                value={homeCurrency} 
                onChange={(e) => setHomeCurrency(e.target.value)}
                className="w-full bg-slate-950 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:border-[#FF007A] focus:outline-none transition-colors"
              >
                <option value="INR">INR (₹) - Indian Rupee</option>
                <option value="USD">USD ($) - United States Dollar</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="JPY">JPY (¥) - Japanese Yen</option>
                <option value="AUD">AUD ($) - Australian Dollar</option>
                <option value="AED">AED (د.إ) - UAE Dirham</option>
              </select>
              <p className="text-xs text-slate-400 mt-2">All foreign prices & scam calculations will auto-benchmark to this.</p>
            </div>

            {/* Card Forex Fee Tier */}
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                Primary International Card Type
              </label>
              <select 
                value={cardTier} 
                onChange={(e) => setCardTier(e.target.value)}
                className="w-full bg-slate-950 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:border-[#FF007A] focus:outline-none transition-colors"
              >
                <option value="zero_markup">Zero Forex Markup Card (Wise, Niyo, Scapia - 0% Fee)</option>
                <option value="premium_travel">Premium Travel Card (1.5% FX Markup)</option>
                <option value="standard_bank">Standard Bank Debit/Credit Card (3.5% Markup + GST)</option>
              </select>
              <p className="text-xs text-slate-400 mt-2">Used to calculate your real card cost vs airport cash booth markup.</p>
            </div>

            {/* Daily Safety Spending Ceiling */}
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                Daily Budget Warning Trigger ({homeCurrency})
              </label>
              <input 
                type="number"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(e.target.value)}
                className="w-full bg-slate-950 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:border-[#FF007A] focus:outline-none transition-colors"
                placeholder="25000"
              />
              <p className="text-xs text-slate-400 mt-2">The Budget River alerts you when single-day burn rate exceeds this amount.</p>
            </div>

            {/* DCC Scam Shield Toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="text-sm font-black text-white">Dynamic Currency Conversion (DCC) Shield</p>
                <p className="text-xs text-slate-400">Alert me when overseas ATMs try to charge in {homeCurrency} instead of local cash.</p>
              </div>
              <button
                type="button"
                onClick={() => setDccWarning(!dccWarning)}
                className={`w-14 h-8 rounded-full p-1 transition-colors ${dccWarning ? 'bg-[#FF007A]' : 'bg-slate-700'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white transition-transform ${dccWarning ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

          </div>
        </div>

        {/* SECTION B: PERSONAL ACCOUNT INFO */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <User size={22} className="text-[#A855F7]" /> Account & Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:border-[#A855F7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:border-[#A855F7] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* SECTION C: OFFLINE & EMERGENCY VAULT */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <Smartphone size={22} className="text-[#06B6D4]" /> Zero-Roaming Offline Cache
          </h2>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <p className="text-sm font-black text-white">Save Top 50 Global Currencies Offline</p>
              <p className="text-xs text-slate-400">Allows instant conversion at airports or metro stations without internet data.</p>
            </div>
            <button
              type="button"
              onClick={() => setOfflineCache(!offlineCache)}
              className={`w-14 h-8 rounded-full p-1 transition-colors ${offlineCache ? 'bg-[#06B6D4]' : 'bg-slate-700'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white transition-transform ${offlineCache ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white font-black text-lg flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,122,0.5)] transition-all"
          >
            <Save size={20} /> Save Profile Preferences
          </button>
        </div>

      </form>

    </div>
  );
}
`;

fs.writeFileSync('src/app/dashboard/profile/page.tsx', profilePageCode);
console.log("✅ Successfully replaced placeholder with the full User Profile & Settings Page!");
