"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Container: Ambient Glow + Full Uncropped Artwork */}
      <div className="absolute inset-0 z-0 bg-[#FDF2F8] overflow-hidden">
        {/* Layer 1: Ambient Blurred Backdrop to smoothly fill fullscreen height */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/login-image.png" 
            alt="GlobeRate Background Glow" 
            fill 
            className="object-cover blur-2xl opacity-50 scale-105"
            priority 
          />
        </div>

        {/* Layer 2: 100% Crisp Artwork (Never crops ATM on left or Phone on right at any resolution) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Image 
            src="/images/login-image.png" 
            alt="GlobeRate Background" 
            fill 
            className="object-contain object-center"
            priority 
          />
        </div>
      </div>

      {/* Floating Auth Card Placed Directly in the Middle Empty Space */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 sm:p-10 bg-slate-950/75 backdrop-blur-2xl rounded-[2.5rem] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
        
        {/* Header: Back Link + Circular Logo */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden relative shadow-md flex-shrink-0">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-black text-lg text-white">GlobeRate</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Welcome back</h1>
          <p className="text-slate-300 font-medium text-sm mt-1">Log in to manage your multi-currency budget.</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com" 
                defaultValue="snehachoudhary2620@gmail.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#49263F] transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-black text-slate-300 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs font-bold text-[#D1C7BD] hover:text-white">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                defaultValue="••••••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#49263F] transition-all"
              />
            </div>
          </div>

          <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r bg-[#49263F] hover:bg-[#3E1F35] hover:opacity-95 text-white font-black text-base rounded-2xl transition-all shadow-lg flex items-center justify-center">
            Sign In to Dashboard
          </Link>
        </form>

        <div className="text-center pt-6">
          <p className="text-sm font-bold text-slate-300">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-[#D1C7BD] hover:text-white hover:underline">
              Create free account
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}
