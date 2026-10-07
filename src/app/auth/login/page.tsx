"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      
      {/* LEFT SIDE: PERFECTLY CENTERED FORM */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 bg-[#FAFAFA]">
        <div className="absolute top-8 left-8">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-magenta transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        
        <div className="w-full max-w-md px-8">
          {/* Brand New Perfect Logo */}
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white mx-auto mb-8 relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Welcome back</h2>
            <p className="text-slate-600 font-medium">Sign in to your GlobeRate account to track your budget globally.</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email</label>
              <input type="email" className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-white focus:outline-none focus:border-purple-magenta focus:ring-4 focus:ring-purple-magenta/10 shadow-sm transition-all text-slate-900 font-medium" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
              <input type="password" className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-white focus:outline-none focus:border-purple-magenta focus:ring-4 focus:ring-purple-magenta/10 shadow-sm transition-all text-slate-900 font-medium" placeholder="••••••••" />
            </div>
            <button className="w-full py-4 mt-6 rounded-2xl bg-gradient-to-r from-purple-magenta to-rose-500 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(211,169,255,0.6)] transition-all shadow-lg text-lg">
              Sign In
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm font-medium text-slate-600">
            Don't have an account? <Link href="/auth/signup" className="text-purple-magenta font-black hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: BRAND NEW NEON IMAGE (Perfectly Side-by-Side) */}
      <div className="hidden lg:flex flex-1 relative m-4 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
        <Image src="/images/auth-login.jpg" alt="Neon Traveler" fill className="object-cover" />
        
        {/* No muddy filters! Just a subtle text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-12 left-12 right-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-bold mb-4 shadow-sm">
            <Sparkles size={16} className="text-purple-300" /> Premium Finance
          </div>
          <h3 className="text-5xl font-black text-white mb-4 leading-tight">Travel smarter.</h3>
        </div>
      </div>
    </div>
  );
}
