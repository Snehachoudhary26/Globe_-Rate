"use client";
import { CreditCard, DollarSign } from "lucide-react";

export default function AddFundsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Add Funds to Wallet</h1>
        <p className="text-slate-500 font-medium mt-2">Instantly top up your global travel balance.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">Amount (USD)</label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input type="number" placeholder="0.00" className="w-full pl-12 pr-4 py-4 text-3xl font-black text-slate-900 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-0 outline-none transition-colors" />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-700 mb-2">Payment Method</label>
          <div className="border border-indigo-600 bg-indigo-50 p-4 rounded-xl flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-indigo-600">
                <CreditCard size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Visa ending in 4242</p>
                <p className="text-xs font-bold text-slate-500">Connected Bank</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-white"></div>
          </div>
        </div>

        <button className="w-full py-4 bg-indigo-600 text-white font-black text-lg rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
          Confirm Deposit
        </button>
      </div>
    </div>
  );
}