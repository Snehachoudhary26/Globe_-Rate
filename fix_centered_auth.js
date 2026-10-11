const fs = require('fs');

// 1. LOGIN PAGE: Full 100% Background Image + Card Directly in the Center Space
const loginCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* 100% Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/login-image.png" 
          alt="GlobeRate Background" 
          fill 
          className="object-cover object-center"
          priority 
        />
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
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-black text-slate-300 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs font-bold text-pink-400 hover:text-pink-300">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                defaultValue="••••••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] transition-all"
              />
            </div>
          </div>

          <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r from-[#FF007A] to-[#7928CA] hover:opacity-95 text-white font-black text-base rounded-2xl transition-all shadow-[0_0_30px_rgba(255,0,122,0.5)] flex items-center justify-center">
            Sign In to Dashboard
          </Link>
        </form>

        <div className="text-center pt-6">
          <p className="text-sm font-bold text-slate-300">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-pink-400 hover:text-pink-300 hover:underline">
              Create free account
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}`;
fs.writeFileSync('src/app/auth/login/page.tsx', loginCode);

// 2. SIGNUP PAGE: Full 100% Background Image + Centered Card
const signupCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* 100% Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/login-image.png" 
          alt="GlobeRate Background" 
          fill 
          className="object-cover object-center"
          priority 
        />
      </div>

      {/* Floating Auth Card Placed Directly in the Middle Empty Space */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 sm:p-10 bg-slate-950/75 backdrop-blur-2xl rounded-[2.5rem] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
        
        {/* Header */}
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
          <h1 className="text-3xl font-black text-white tracking-tight">Create an account</h1>
          <p className="text-slate-300 font-medium text-sm mt-1">Start avoiding hidden ATM markups worldwide.</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Sneha Choudhary" 
                defaultValue="Sneha Choudhary"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com" 
                defaultValue="snehachoudhary2620@gmail.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] transition-all"
              />
            </div>
          </div>

          <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r from-[#FF007A] to-[#7928CA] hover:opacity-95 text-white font-black text-base rounded-2xl transition-all shadow-[0_0_30px_rgba(255,0,122,0.5)] flex items-center justify-center">
            Create Account
          </Link>
        </form>

        <div className="text-center pt-6">
          <p className="text-sm font-bold text-slate-300">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-pink-400 hover:text-pink-300 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}`;
fs.writeFileSync('src/app/auth/signup/page.tsx', signupCode);

console.log("✅ 100% full background image applied with card placed right in the center space!");
