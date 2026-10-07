"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* 100% CRYSTAL CLEAR BACKGROUND IMAGE (NO BLUR OVERLAYS) */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/login-image.png" alt="Travel Background" fill className="object-cover" priority />
      </div>

      {/* CENTERED FLOATING CARD */}
      <div className="relative z-10 w-full max-w-lg p-10 md:p-12 bg-white/95 backdrop-blur-md border border-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.15)] mx-4 transform transition-all hover:scale-[1.01]">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-magenta transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white bg-white mx-auto mb-6 relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-600 font-medium">Sign in to your GlobeRate account to track your global budget.</p>
        </div>
        
        <form className="space-y-5">
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-purple-magenta focus:ring-4 focus:ring-purple-magenta/20 shadow-sm transition-all text-slate-900 font-medium" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
            <input type="password" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-purple-magenta focus:ring-4 focus:ring-purple-magenta/20 shadow-sm transition-all text-slate-900 font-medium" placeholder="••••••••" />
          </div>
          <button className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(211,169,255,0.6)] transition-all shadow-lg text-lg">
            Sign In
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm font-medium text-slate-600">
          Don't have an account? <Link href="/auth/signup" className="text-purple-magenta font-black hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
