const fs = require('fs');

// 1. PERFECT LOGIN PAGE (100% Image Visibility, ZERO Cropping)
const loginCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white dark:bg-slate-950 font-sans transition-colors duration-300">
      
      {/* 100% Full Image Column (Never Cropped) */}
      <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-screen bg-gradient-to-br from-rose-50/60 via-purple-50/40 to-indigo-50/60 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5">
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[550px] flex items-center justify-center">
          <Image 
            src="/images/login-image.png" 
            alt="GlobeRate Travel" 
            fill 
            className="object-contain drop-shadow-md"
            priority 
          />
        </div>
      </div>

      {/* Auth Form Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden relative shadow-sm border border-slate-200 dark:border-slate-800 bg-white">
                <Image src="/images/logo-brand.png" alt="Logo" fill className="object-contain p-0.5" />
              </div>
              <span className="font-black text-lg text-slate-900 dark:text-white">GlobeRate</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Log in to manage your multi-currency budget.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </div>

            <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-base rounded-2xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center">
              Sign In to Dashboard
            </Link>
          </form>

          <div className="text-center pt-2">
            <p className="text-sm font-bold text-slate-500">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-indigo-600 hover:underline">
                Create free account
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}`;
fs.writeFileSync('src/app/auth/login/page.tsx', loginCode);

// 2. PERFECT SIGNUP PAGE (100% Image Visibility, ZERO Cropping)
const signupCode = `"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white dark:bg-slate-950 font-sans transition-colors duration-300">
      
      {/* 100% Full Image Column (Never Cropped) */}
      <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-screen bg-gradient-to-br from-rose-50/60 via-purple-50/40 to-indigo-50/60 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5">
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[550px] flex items-center justify-center">
          <Image 
            src="/images/login-image.png" 
            alt="GlobeRate Travel" 
            fill 
            className="object-contain drop-shadow-md"
            priority 
          />
        </div>
      </div>

      {/* Auth Form Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden relative shadow-sm border border-slate-200 dark:border-slate-800 bg-white">
                <Image src="/images/logo-brand.png" alt="Logo" fill className="object-contain p-0.5" />
              </div>
              <span className="font-black text-lg text-slate-900 dark:text-white">GlobeRate</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Create an account</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Start avoiding hidden ATM markups worldwide.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Sneha Choudhary" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••••••" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </div>

            <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-base rounded-2xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center">
              Create Account
            </Link>
          </form>

          <div className="text-center pt-2">
            <p className="text-sm font-bold text-slate-500">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-indigo-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}`;
fs.writeFileSync('src/app/auth/signup/page.tsx', signupCode);

console.log("✅ Fixed auth pages: 100% image displayed without any cropping!");
