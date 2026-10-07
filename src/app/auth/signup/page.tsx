"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE: Vibrant Gradient Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 relative z-10 bg-gradient-to-br from-[#F4EFFF] via-white to-[#E6F9F5]">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sea-green transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="max-w-md w-full mx-auto">
          {/* Zoomed-in Circular Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-lg bg-white mb-8 relative flex items-center justify-center">
            <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover scale-[1.3]" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2">Create Account</h2>
          <p className="text-slate-600 font-medium mb-8">Join thousands of smart travelers globally.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-100 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/10 shadow-sm transition-all text-slate-900 font-medium" placeholder="Aditi Sharma" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email</label>
              <input type="email" className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-100 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/10 shadow-sm transition-all text-slate-900 font-medium" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
              <input type="password" className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-100 focus:bg-white focus:outline-none focus:border-sea-green focus:ring-4 focus:ring-sea-green/10 shadow-sm transition-all text-slate-900 font-medium" placeholder="••••••••" />
            </div>
            <button className="w-full py-4 mt-4 rounded-2xl bg-gradient-to-r from-sea-green to-emerald-500 text-white font-black hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(112,197,164,0.6)] transition-all shadow-lg text-lg">
              Get Started
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm font-medium text-slate-600">
            Already have an account? <Link href="/auth/login" className="text-sea-green font-black hover:underline">Sign in</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: European Cafe Budget Image (NO MUDDY FILTER) */}
      <div className="hidden lg:flex flex-1 relative m-4 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
        <Image src="/images/budget.jpg" alt="Travel Budget" fill className="object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-12 left-12 right-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white text-sm font-bold mb-4 shadow-sm">
            <Sparkles size={16} className="text-emerald-300" /> Financial Clarity
          </div>
          <h3 className="text-4xl font-black text-white mb-2 leading-tight">Flowing naturally.</h3>
          <p className="text-white/90 font-medium text-lg">Visual budget tracking across 150+ global currencies.</p>
        </div>
      </div>
    </div>
  );
}
