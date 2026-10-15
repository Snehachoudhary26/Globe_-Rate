"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Plus, 
  Droplets, 
  Sparkles, 
  Hotel, 
  Utensils, 
  Train, 
  Ticket, 
  TrendingDown, 
  Calendar,
  Wallet,
  ShieldCheck,
  Compass,
  X,
  CreditCard,
  CheckCircle2
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";

interface Expense {
  id: string;
  title: string;
  category: "hotels" | "food" | "transport" | "misc";
  amount: number;
  currency: string;
  date: string;
}

export default function BudgetRiverPage() {
  const [totalBudget, setTotalBudget] = useState(5000);
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", title: "Grand Plaza Hotel (Paris)", category: "hotels", amount: 980, currency: "USD", date: "Today, 10:30 AM" },
    { id: "2", title: "Bistro Paul Bert Dinner", category: "food", amount: 240, currency: "USD", date: "Yesterday, 8:15 PM" },
    { id: "3", title: "Eurostar High-speed Rail", category: "transport", amount: 320, currency: "USD", date: "14 Oct, 2:00 PM" },
    { id: "4", title: "Louvre Museum Tickets", category: "misc", amount: 110, currency: "USD", date: "13 Oct, 11:00 AM" },
    { id: "5", title: "Cafe de Flore & Gelato", category: "food", amount: 400, currency: "USD", date: "12 Oct, 4:45 PM" },
    { id: "6", title: "Seine River Cruise Tour", category: "misc", amount: 100, currency: "USD", date: "11 Oct, 6:30 PM" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState<"hotels" | "food" | "transport" | "misc">("food");

  // Calculations
  const spentTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = Math.max(0, totalBudget - spentTotal);
  const spentPercent = Math.min(100, Math.round((spentTotal / totalBudget) * 100));
  const safePercent = 100 - spentPercent;

  // Breakdown amounts
  const hotelTotal = expenses.filter(e => e.category === "hotels").reduce((acc, e) => acc + e.amount, 0);
  const foodTotal = expenses.filter(e => e.category === "food").reduce((acc, e) => acc + e.amount, 0);
  const transportTotal = expenses.filter(e => e.category === "transport").reduce((acc, e) => acc + e.amount, 0);
  const miscTotal = expenses.filter(e => e.category === "misc").reduce((acc, e) => acc + e.amount, 0);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newAmount || isNaN(Number(newAmount))) return;

    const newExpense: Expense = {
      id: Date.now().toString(),
      title: newTitle,
      category: newCategory,
      amount: Number(newAmount),
      currency: "USD",
      date: "Just now"
    };

    setExpenses([newExpense, ...expenses]);
    setNewTitle("");
    setNewAmount("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      {/* 11 Minimal Floating Bubbles */}
      <FloatingParticles />

      {/* Pastel Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-pink-200/35 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/35 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-slate-200">
            <Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            GlobeRate
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#49263F] hover:bg-[#3E1F35] text-white text-xs font-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,122,0.35)] flex items-center gap-1.5"
          >
            <Plus size={15} /> Log Expense
          </button>
        </div>
      </nav>

      {/* Main Budget Container */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE8] border border-[#DDD7D0] text-xs font-black text-[#49263F] mb-3">
              <span className="flex h-2 w-2 rounded-full bg-[#FF007A] animate-pulse"></span>
              ACTIVE TRIP: EURO TOUR
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              Budget River <Droplets size={34} className="text-[#49263F]" />
            </h1>
            <p className="text-base text-slate-600 font-medium mt-2 max-w-2xl">
              Real-time dynamic spending flow and multi-currency burn rate monitoring to prevent overspending abroad.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto px-6 py-3 rounded-2xl bg-[#49263F] hover:bg-[#3E1F35] text-white text-sm font-black hover:opacity-95 transition-all shadow-[0_0_25px_rgba(255,0,122,0.3)] flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Log Expense
            </button>
          </div>
        </div>

        {/* 1. Main River Flow Metric Card (Light Glassmorphism) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 md:p-10 shadow-xl mb-10 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                Remaining Budget
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                  $${remainingBudget.toLocaleString()}
                </span>
                <span className="text-base font-black text-slate-500">USD</span>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                Total Allocated
              </p>
              <div className="flex items-baseline md:justify-end gap-2">
                <span className="text-2xl md:text-3xl font-black text-slate-700">
                  $${totalBudget.toLocaleString()}
                </span>
                <span className="text-xs font-black text-slate-400">USD</span>
              </div>
            </div>
          </div>

          {/* The Dynamic River Bar */}
          <div className="space-y-3">
            <div className="h-7 w-full bg-slate-100 rounded-full p-1 border border-slate-200/80 flex items-center overflow-hidden">
              <div 
                style={{ width: `${spentPercent}%` }}
                className="h-full rounded-full bg-[#49263F] hover:bg-[#3E1F35] text-[11px] font-black text-white flex items-center justify-center transition-all duration-700 shadow-sm"
              >
                {spentPercent > 12 && `${spentPercent}% Spent`}
              </div>
              <div 
                style={{ width: `${safePercent}%` }}
                className="h-full rounded-full bg-emerald-400 text-[11px] font-black text-slate-950 flex items-center justify-center transition-all duration-700 ml-1 shadow-sm"
              >
                {safePercent > 12 && `${safePercent}% Safe`}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
              <span>Spent: <strong className="text-slate-900">$${spentTotal.toLocaleString()}</strong></span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-black">
                <CheckCircle2 size={13} /> Safe Daily Allowance: $95/day
              </span>
            </div>
          </div>

        </div>

        {/* 2. Four Category Breakdown Cards (Light Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Hotels & Stays */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4 shadow-sm">
              <Hotel size={22} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hotels & Stays</p>
            <p className="text-3xl font-black text-slate-900 mt-1">$${hotelTotal.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Accommodations & Lodging</p>
          </div>

          {/* Food & Dining */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#EFECE8] text-[#49263F] border border-[#DDD7D0] flex items-center justify-center mb-4 shadow-sm">
              <Utensils size={22} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Food & Dining</p>
            <p className="text-3xl font-black text-slate-900 mt-1">$${foodTotal.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Cafes, Dinners & Groceries</p>
          </div>

          {/* Transport & Trains */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
              <Train size={22} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transport & Trains</p>
            <p className="text-3xl font-black text-slate-900 mt-1">$${transportTotal.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Metro, Eurail & Rides</p>
          </div>

          {/* Activities & Misc */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#49263F] border border-purple-200 flex items-center justify-center mb-4 shadow-sm">
              <Ticket size={22} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Activities & Misc</p>
            <p className="text-3xl font-black text-slate-900 mt-1">$${miscTotal.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Museums, Tours & Souvenirs</p>
          </div>

        </div>

        {/* 3. Live Expense River Stream (Recent Transactions) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Recent Trip Expenses</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time expenditure stream logged during Euro Tour.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-black text-[#49263F] hover:underline flex items-center gap-1"
            >
              + Quick Add
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <div key={expense.id} className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    expense.category === "hotels" ? "bg-blue-50 text-blue-600" :
                    expense.category === "food" ? "bg-[#EFECE8] text-[#49263F]" :
                    expense.category === "transport" ? "bg-emerald-50 text-emerald-600" :
                    "bg-purple-50 text-[#49263F]"
                  }`}>
                    {expense.category === "hotels" && <Hotel size={18} />}
                    {expense.category === "food" && <Utensils size={18} />}
                    {expense.category === "transport" && <Train size={18} />}
                    {expense.category === "misc" && <Ticket size={18} />}
                  </div>

                  <div>
                    <p className="text-sm font-black text-slate-900">{expense.title}</p>
                    <p className="text-xs text-slate-400 font-bold">{expense.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-black text-slate-900">
                    -$${expense.amount.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-slate-400 ml-1">USD</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Log Expense Modal (Light Theme Glassmorphism) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 w-full max-w-md shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black mb-2">
                <Plus size={13} /> Add to River
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Log New Expense</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Amount is automatically deducted from your safe allowance.</p>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Expense Description</label>
                <input 
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Dinner at Trattoria, Metro Pass"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Amount (USD)</label>
                <input 
                  type="number"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="e.g. 85"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "hotels", label: "Hotels", icon: Hotel },
                    { id: "food", label: "Food", icon: Utensils },
                    { id: "transport", label: "Transport", icon: Train },
                    { id: "misc", label: "Activities", icon: Ticket },
                  ].map((cat) => {
                    const IconComp = cat.icon;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setNewCategory(cat.id as any)}
                        className={`p-3 rounded-2xl border text-xs font-black flex items-center gap-2 transition-all ${
                          newCategory === cat.id 
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <IconComp size={15} /> {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#49263F] hover:bg-[#3E1F35] text-white text-sm font-black hover:opacity-95 transition-all shadow-[0_0_20px_rgba(255,0,122,0.4)]"
                >
                  Confirm & Update River
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
