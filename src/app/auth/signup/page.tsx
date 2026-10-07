"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-[#F4EFFF]">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 relative z-10">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="max-w-md w-full mx-auto">
          <Image src="/images/logo-brand.png" alt="Logo" width={48} height={48} className="mb-8 rounded-xl shadow-sm" />
          <h2 className="text-3xl font-black text-slate-900 mb-2">Create an account</h2>
          <p className="text-slate-600 font-medium mb-8">Join thousands of smart travelers saving money globally.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-magenta bg-white shadow-sm" placeholder="Aditi Sharma" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-magenta bg-white shadow-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
              <input type="password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-magenta bg-white shadow-sm" placeholder="••••••••" />
            </div>
            <button className="w-full py-3 rounded-xl bg-purple-magenta text-white font-bold hover:scale-[1.02] transition-transform shadow-lg">Get Started</button>
          </form>
          <p className="mt-8 text-center text-sm font-medium text-slate-600">
            Already have an account? <Link href="/auth/login" className="text-sea-green font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block flex-1 relative bg-purple-magenta m-4 rounded-3xl overflow-hidden shadow-2xl">
        <Image src="/images/budget.jpg" alt="Travel" fill className="object-cover opacity-80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12">
          <h3 className="text-3xl font-black text-white mb-2">Never overspend again.</h3>
          <p className="text-purple-100 font-medium">Your global budget, flowing naturally across 150+ currencies.</p>
        </div>
      </div>
    </div>
  );
}
