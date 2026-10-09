"use client";
import { ArrowDownRight, RefreshCw } from "lucide-react";

export default function ExchangePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Convert Currency</h1>
        <p className="text-slate-500 font-medium mt-2">Get the real mid-market rate with zero hidden fees.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <div className="space-y-4">
          <div className="p-6 border-2 border-slate-200 rounded-xl bg-slate-50 focus-within:border-indigo-600 transition-colors">
            <p className="text-sm font-bold text-slate-500 mb-2">You Send</p>
            <div className="flex justify-between items-center">
              <input type="number" defaultValue="1000" className="w-full text-4xl font-black text-slate-900 bg-transparent outline-none" />
              <select className="font-black text-lg text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200 outline-none cursor-pointer">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-center -my-6 relative z-10">
            <button className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-indigo-600 shadow-md hover:scale-110 transition-transform">
              <ArrowDownRight size={20} />
            </button>
          </div>
          
          <div className="p-6 border-2 border-slate-200 rounded-xl bg-slate-50 focus-within:border-indigo-600 transition-colors">
            <p className="text-sm font-bold text-slate-500 mb-2">You Receive</p>
            <div className="flex justify-between items-center">
              <input type="number" value="922.50" readOnly className="w-full text-4xl font-black text-emerald-600 bg-transparent outline-none" />
              <select className="font-black text-lg text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200 outline-none cursor-pointer">
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
          
          <div className="py-4 px-2 flex justify-between items-center text-sm font-bold text-slate-500 border-b border-slate-100 mb-4">
            <span className="flex items-center gap-2"><RefreshCw size={14} className="animate-spin-slow"/> Live Rate</span>
            <span>1 USD = 0.9225 EUR</span>
          </div>
          
          <button className="w-full py-4 mt-2 bg-slate-900 text-white font-black text-lg rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
            Complete Conversion
          </button>
        </div>
      </div>
    </div>
  );
}