"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* FULL SCREEN BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero.jpg" alt="Travel Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[6px]"></div>
      </div>

      {/* ABSOLUTE CENTER FLOATING GLASS CARD */}
      <div className="relative z-10 w-full max-w-lg p-10 md:p-12 bg-white/85 backdrop-blur-3xl border border-white rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] mx-4 transform transition-all hover:scale-[1.01]">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sea-green transition-colors mb-6">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white bg-white mx-auto mb-4 relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2">Create Account</h2>
          <p className="text-slate-600 font-medium">Join thousands of smart travelers globally.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
            <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/20 shadow-inner transition-all text-slate-900 font-medium" placeholder="Aditi Sharma" />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/20 shadow-inner transition-all text-slate-900 font-medium" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
            <input type="password" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/20 shadow-inner transition-all text-slate-900 font-medium" placeholder="••••••••" />
          </div>
          <button className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-sea-green to-emerald-500 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(112,197,164,0.8)] transition-all shadow-xl text-lg">
            Get Started
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm font-medium text-slate-600">
          Already have an account? <Link href="/auth/login" className="text-sea-green font-black hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
