const fs = require('fs');

// 1. CREATE ATM HEATMAP PAGE
const mapCode = `"use client";
import { Search, MapPin, Filter } from "lucide-react";

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Global ATM Network</h1>
          <p className="text-slate-500 font-medium mt-1">Find zero-fee and low-markup ATMs worldwide.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search city..." defaultValue="Paris, France" className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-auto text-slate-700" />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg flex items-center gap-2 text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:h-[600px] shadow-inner">
           {/* Interactive Map UI Mockup */}
           <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
             <MapPin size={48} className="mb-4 opacity-50" />
             <p className="font-bold text-lg">Interactive Maps API Placeholder</p>
             <p className="text-sm font-medium">MapBox / Google Maps goes here</p>
           </div>
           
           {/* Map Pins overlay mock */}
           <div className="absolute top-1/3 left-1/3 flex flex-col items-center animate-bounce">
             <div className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-black shadow-lg mb-1">0% Fee</div>
             <div className="w-5 h-5 bg-emerald-500 border-4 border-white rounded-full shadow-xl"></div>
           </div>
           <div className="absolute top-1/2 right-1/3 flex flex-col items-center">
             <div className="bg-rose-500 text-white px-3 py-1.5 rounded-lg text-xs font-black shadow-lg mb-1">12% Fee</div>
             <div className="w-5 h-5 bg-rose-500 border-4 border-white rounded-full shadow-xl"></div>
           </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 bg-slate-50">
            <h3 className="font-black text-slate-900">Nearby ATMs (Paris)</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="p-4 hover:bg-slate-50 rounded-xl cursor-pointer border border-slate-100 transition-all">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900">BNP Paribas</h4>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">0% Fee</span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-3"><MapPin size={12}/> 74 Rue de Rivoli (0.2 mi)</p>
              <button className="w-full py-2.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg hover:bg-indigo-100 transition-colors">Get Directions</button>
            </div>
            
            <div className="p-4 hover:bg-slate-50 rounded-xl cursor-pointer border border-slate-100 transition-all">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900">Société Générale</h4>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">0% Fee</span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-3"><MapPin size={12}/> 112 Rue de Rivoli (0.4 mi)</p>
              <button className="w-full py-2.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg hover:bg-indigo-100 transition-colors">Get Directions</button>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-75">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900">Euronet ATM</h4>
                <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-1 rounded-md">12% Markup</span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-3"><MapPin size={12}/> Tourist Center (0.1 mi)</p>
              <button className="w-full py-2.5 bg-slate-200 text-slate-500 text-sm font-bold rounded-lg cursor-not-allowed">Avoid This ATM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
fs.mkdirSync('src/app/dashboard/map', { recursive: true });
fs.writeFileSync('src/app/dashboard/map/page.tsx', mapCode);

// 2. CREATE ADD FUNDS PAGE
const fundsCode = `"use client";
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
}`;
fs.mkdirSync('src/app/dashboard/funds', { recursive: true });
fs.writeFileSync('src/app/dashboard/funds/page.tsx', fundsCode);

// 3. CREATE CURRENCY EXCHANGE PAGE
const exchangeCode = `"use client";
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
}`;
fs.mkdirSync('src/app/dashboard/exchange', { recursive: true });
fs.writeFileSync('src/app/dashboard/exchange/page.tsx', exchangeCode);

// 4. WIRE THE BUTTONS IN THE DASHBOARD OVERVIEW TO THE NEW PAGES
let dashboardCode = fs.readFileSync('src/app/dashboard/page.tsx', 'utf8');

// Add Link to imports if missing
if (!dashboardCode.includes('import Link from "next/link"')) {
  dashboardCode = dashboardCode.replace('import { Wallet,', 'import Link from "next/link";\nimport { Wallet,');
}

// Convert "Add Funds" button to Link
dashboardCode = dashboardCode.replace(
  /<button className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">\s*\+\s*Add Funds\s*<\/button>/g,
  `<Link href="/dashboard/funds" className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">\n          + Add Funds\n        </Link>`
);

// Convert "Convert Now" button to Link
dashboardCode = dashboardCode.replace(
  /<button className="w-full py-3 mt-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">\s*Convert Now\s*<\/button>/g,
  `<Link href="/dashboard/exchange" className="w-full py-3 mt-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors text-center block">\n              Convert Now\n            </Link>`
);

fs.writeFileSync('src/app/dashboard/page.tsx', dashboardCode);

console.log("Navigation pages created and wired up!");
