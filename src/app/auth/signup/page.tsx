"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Container: Ambient Glow + Full Uncropped Artwork in Aubergine Theme */}
      <div className="absolute inset-0 z-0 bg-[#FAF8F6] overflow-hidden">
        {/* Layer 1: Ambient Blurred Backdrop to smoothly fill fullscreen height */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/login-image-aubergine.png" 
            alt="GlobeRate Background Glow" 
            fill 
            className="object-cover blur-2xl opacity-40 scale-105"
            priority 
          />
        </div>

        {/* Layer 2: 100% Crisp Artwork (Never crops ATM on left or Phone on right at any resolution) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Image 
            src="/images/login-image-aubergine.png" 
            alt="GlobeRate Background" 
            fill 
            className="object-contain object-center"
            priority 
          />
        </div>
      </div>

      {/* Floating Auth Card Placed Directly in the Middle Empty Space */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 sm:p-10 bg-[#29252B]/85 backdrop-blur-2xl rounded-[2.5rem] border border-[#DDD7D0]/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#D1C7BD] hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-[#DDD7D0]/20">
              <Image src="/images/logo-brand.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-black text-lg text-white">GlobeRate</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Create an account</h1>
          <p className="text-[#D1C7BD] font-medium text-sm mt-1">Start avoiding hidden ATM markups worldwide.</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black text-[#D1C7BD] uppercase tracking-wider mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Sneha Choudhary" 
                defaultValue="Sneha Choudhary"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#49263F] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-[#D1C7BD] uppercase tracking-wider mb-2">Email Address</label>
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
            <label className="block text-xs font-black text-[#D1C7BD] uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#49263F] transition-all"
              />
            </div>
          </div>

          <Link href="/dashboard" className="w-full py-4 bg-[#49263F] hover:bg-[#3E1F35] text-white font-black text-base rounded-2xl transition-all shadow-lg flex items-center justify-center">
            Create Account
          </Link>
        </form>

        <div className="text-center pt-6">
          <p className="text-sm font-bold text-[#D1C7BD]">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#D1C7BD] hover:text-white font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}
