const fs = require('fs');

// 1. ADVANCED FINTECH DASHBOARD LAYOUT (Clean, Professional, Cohesive)
const layoutCode = `"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Smartphone, Map, LogOut, Home, Globe, Bell, Search } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* Sleek, Professional Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20">
        <div className="p-8 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Globe className="text-white" size={22} />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900">GlobeRate</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold transition-all mb-6">
            <Home size={18} /> Back to Home
          </Link>

          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-6 mb-3 ml-4">Analytics & Tools</p>
          
          <Link href="/dashboard" className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all \${pathname === '/dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}\`}>
            <LayoutDashboard size={18} /> Financial Overview
          </Link>
          
          <Link href="/dashboard/budget" className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all \${pathname === '/dashboard/budget' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}\`}>
            <Wallet size={18} /> Budget River Analytics
          </Link>
          
          <Link href="/dashboard/nova" className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all \${pathname === '/dashboard/nova' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}\`}>
            <Smartphone size={18} /> Nova AI Scanner
          </Link>

          <Link href="/dashboard/map" className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all \${pathname === '/dashboard/map' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}\`}>
            <Map size={18} /> Global ATM Network
          </Link>
        </nav>
        
        <div className="p-6 border-t border-slate-100">
          <Link href="/" className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 font-bold transition-colors">
            <LogOut size={18} /> Secure Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Professional Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 z-10">
          <div className="relative w-96 hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search transactions, tools, or currencies..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
          </div>
          
          <div className="flex items-center gap-6 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-900">Sneha Choudhary</p>
                <p className="text-xs font-semibold text-slate-500">Premium Account</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 overflow-hidden relative">
                 <Image src="/images/hero.jpg" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}`;
fs.writeFileSync('src/app/dashboard/layout.tsx', layoutCode);

// 2. REAL BANKING DASHBOARD (Professional Overview)
const pageCode = `"use client";
import { Wallet, ArrowUpRight, ArrowDownRight, CreditCard, Activity, DollarSign, Percent } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      <div className="flex justify-between items-end mb-2">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Financial Overview</h1>
          <p className="text-slate-500 font-medium mt-1">Track your multi-currency budget and recent activity.</p>
        </div>
        <button className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
          + Add Funds
        </button>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <ArrowUpRight size={14} /> 2.4%
            </span>
          </div>
          <p className="text-slate-500 font-bold text-sm mb-1">Total Trip Budget</p>
          <h2 className="text-3xl font-black text-slate-900">$4,250.00</h2>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <Activity size={20} />
            </div>
            <span className="flex items-center gap-1 text-sm font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
              <ArrowDownRight size={14} /> 12%
            </span>
          </div>
          <p className="text-slate-500 font-bold text-sm mb-1">Total Spent (This Week)</p>
          <h2 className="text-3xl font-black text-slate-900">$840.50</h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl border border-indigo-800 shadow-lg text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center">
              <Percent size={20} />
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-indigo-200 font-bold text-sm mb-1">Scam Markups Avoided</p>
            <h2 className="text-3xl font-black text-white">$142.00</h2>
            <p className="text-xs text-indigo-300 mt-2">Saved via Nova AI Scanner this trip.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-black text-slate-900 text-lg">Recent Transactions</h3>
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold">Transaction</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><CreditCard size={18}/></div>
                    <div><p className="font-bold text-slate-900">Café de Flore</p><p className="text-xs text-slate-500">Food & Dining</p></div>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">Oct 08, 2026</td>
                  <td className="p-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold">Completed</span></td>
                  <td className="p-4 font-black text-slate-900 text-right">-$24.50</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><CreditCard size={18}/></div>
                    <div><p className="font-bold text-slate-900">Euronet ATM Withdrawal</p><p className="text-xs text-slate-500">Cash</p></div>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">Oct 07, 2026</td>
                  <td className="p-4"><span className="px-2 py-1 bg-rose-50 text-rose-600 rounded text-xs font-bold">Flagged</span></td>
                  <td className="p-4 font-black text-slate-900 text-right">-$200.00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><DollarSign size={18}/></div>
                    <div><p className="font-bold text-slate-900">Wallet Top-up</p><p className="text-xs text-slate-500">Transfer</p></div>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">Oct 05, 2026</td>
                  <td className="p-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold">Completed</span></td>
                  <td className="p-4 font-black text-emerald-600 text-right">+$1,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Exchange Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-black text-slate-900 text-lg mb-6">Quick Exchange</h3>
          <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
              <p className="text-xs font-bold text-slate-500 mb-1">You Pay</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-2xl text-slate-900">1,000</span>
                <span className="font-bold text-slate-700 bg-white px-3 py-1 rounded-md border border-slate-200">USD</span>
              </div>
            </div>
            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-indigo-600 shadow-sm">
                <ArrowDownRight size={16} />
              </div>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
              <p className="text-xs font-bold text-slate-500 mb-1">You Receive</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-2xl text-slate-900">922.50</span>
                <span className="font-bold text-slate-700 bg-white px-3 py-1 rounded-md border border-slate-200">EUR</span>
              </div>
            </div>
            <button className="w-full py-3 mt-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
              Convert Now
            </button>
            <p className="text-center text-xs text-slate-500 font-medium mt-3">Guaranteed mid-market rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/dashboard/page.tsx', pageCode);

// 3. NEW FEATURE: ADVANCED BUDGET RIVER ANALYTICS
const budgetCode = `"use client";
import { TrendingDown, Activity, MapPin } from "lucide-react";

export default function BudgetRiverPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Budget River</h1>
        <p className="text-slate-500 font-medium mt-1">Advanced visual analytics of your trip spending.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-black text-slate-900 text-lg mb-8">Spending Flow (October 2026)</h3>
        
        {/* Visual River Graphic */}
        <div className="relative h-12 bg-slate-100 rounded-full overflow-hidden flex shadow-inner mb-6">
          <div className="h-full bg-indigo-500 w-[45%] flex items-center px-4"><span className="text-white text-xs font-bold">Food 45%</span></div>
          <div className="h-full bg-blue-400 w-[30%] flex items-center px-4"><span className="text-white text-xs font-bold">Hotels 30%</span></div>
          <div className="h-full bg-emerald-400 w-[15%] flex items-center px-4"><span className="text-white text-xs font-bold">Transport 15%</span></div>
          <div className="h-full bg-rose-400 w-[10%] flex items-center px-4"><span className="text-white text-xs font-bold">Misc 10%</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
             <p className="text-sm font-bold text-slate-500 mb-1">Food & Dining</p>
             <h4 className="text-xl font-black text-slate-900">$378.20</h4>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
             <p className="text-sm font-bold text-slate-500 mb-1">Accommodation</p>
             <h4 className="text-xl font-black text-slate-900">$252.15</h4>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
             <p className="text-sm font-bold text-slate-500 mb-1">Transportation</p>
             <h4 className="text-xl font-black text-slate-900">$126.00</h4>
          </div>
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
             <p className="text-sm font-bold text-slate-500 mb-1">Miscellaneous</p>
             <h4 className="text-xl font-black text-slate-900">$84.15</h4>
          </div>
        </div>
      </div>
    </div>
  );
}`;
fs.mkdirSync('src/app/dashboard/budget', { recursive: true });
fs.writeFileSync('src/app/dashboard/budget/page.tsx', budgetCode);

// 4. FIX NOVA SCANNER TO MATCH PROFESSIONAL THEME
const novaCode = `"use client";
import { useState } from "react";
import { Scan, Languages, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function NovaLensPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => { setIsScanning(false); setScanComplete(true); }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Nova AI Scanner</h1>
          <p className="text-slate-500 font-medium mt-1">Advanced OCR and real-time conversion intelligence.</p>
        </div>
        <div className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-sm border border-indigo-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
          System Active
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <Image src="/images/nova_scanner_menu.jpg" alt="Camera Feed" fill className="object-cover opacity-90" />

        {isScanning && (
          <div className="absolute inset-0 border-b-2 border-indigo-500 bg-gradient-to-b from-transparent to-indigo-500/20 z-10 animate-[scan_2s_linear_infinite]" />
        )}

        <div className="absolute inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white/80 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white/80 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white/80 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white/80 rounded-br-xl"></div>
        </div>

        {scanComplete && (
          <div className="absolute inset-0 z-20 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-slate-900">Translation Complete</h3>
                  <p className="text-xs font-bold text-slate-500">EUR (€) → USD ($)</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-800">Café au Lait</span>
                  <span className="font-black text-emerald-600">$4.50 <span className="text-xs text-slate-400 line-through ml-1">€4.20</span></span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-800">Croissant</span>
                  <span className="font-black text-emerald-600">$2.80 <span className="text-xs text-slate-400 line-through ml-1">€2.60</span></span>
                </div>
              </div>
              
              <button onClick={() => setScanComplete(false)} className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                New Scan
              </button>
            </div>
          </div>
        )}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          {!isScanning && !scanComplete && (
            <button onClick={handleScan} className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-black rounded-xl shadow-xl hover:scale-105 transition-transform border border-slate-100">
              <Scan size={20} className="text-indigo-600" /> Initialize Scan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/dashboard/nova/page.tsx', novaCode);

// 5. FIX LOGO ON LANDING PAGE TO MATCH VECTOR STYLE
let landingCode = fs.readFileSync('src/app/page.tsx', 'utf8');
// Use regex to replace the image logo with the vector logo in the Navbar
landingCode = landingCode.replace(/<Image src="\/images\/logo-brand\.png" alt="Logo" width=\{40\} height=\{40\} className="w-10 h-10 object-contain" \/>/g, 
  \`<div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200"><Globe className="text-white" size={22} /></div>\`);
landingCode = landingCode.replace(/import \{ ArrowRight/g, 'import { Globe, ArrowRight');
fs.writeFileSync('src/app/page.tsx', landingCode);

