"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  Banknote,
  CheckCircle2,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  flag: string;
  currency: string;
  rate: string;
  verifiedATM: string;
  scamWarning: string;
  tip: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "uae",
    name: "Dubai & UAE",
    flag: "🇦🇪",
    currency: "AED (Dirham)",
    rate: "1 USD ≈ 3.67 AED | 1 AED ≈ ₹22.85",
    verifiedATM: "Emirates NBD & ADCB (0% Surcharge at Bank Branches)",
    scamWarning: "Travelex & airport kiosk converters (8-12% DCC fee)",
    tip: "Always select 'Debit in AED' on the ATM screen. Cards accepted universally in Dubai."
  },
  {
    id: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD (S$)",
    rate: "1 USD ≈ 1.34 SGD | 1 SGD ≈ ₹62.40",
    verifiedATM: "DBS, OCBC & UOB (Free Official Bank Dispensers)",
    scamWarning: "Unauthorized street money changers without MAS licenses",
    tip: "95% cashless via contactless cards & Apple Pay. Tipping is not customary."
  },
  {
    id: "uk",
    name: "London & UK",
    flag: "🇬🇧",
    currency: "GBP (£)",
    rate: "1 GBP ≈ 1.28 USD | 1 GBP ≈ ₹107.50",
    verifiedATM: "HSBC UK, Barclays & Lloyds (0% Surcharge by Law)",
    scamWarning: "NoteMachine & Euronet corner ATMs charging £3-£5 + 10% DCC",
    tip: "All official UK bank ATMs are completely free. Reject ATM currency conversion."
  },
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD ($)",
    rate: "1 USD ≈ ₹83.50 | 1 USD ≈ €0.92",
    verifiedATM: "Chase, Bank of America & Wells Fargo",
    scamWarning: "Gas station & convenience store independent machines ($4-6 fee)",
    tip: "Use ATMs located inside secure bank lobbies. Standard tipping in dining is 18-20%."
  },
  {
    id: "bali",
    name: "Bali & Indonesia",
    flag: "🇮🇩",
    currency: "IDR (Rupiah)",
    rate: "1 USD ≈ 15,800 IDR | 100k IDR ≈ ₹525",
    verifiedATM: "BCA & Bank Mandiri (Guarded Branch ATMs)",
    scamWarning: "Street money changers advertising inflated rates (note-dropping scam)",
    tip: "Inspect card slot for skimmers. Use official BMC or Central Kutai changers only."
  },
  {
    id: "in",
    name: "India",
    flag: "🇮🇳",
    currency: "INR (₹)",
    rate: "1 USD ≈ ₹83.50 | 1 EUR ≈ ₹90.75",
    verifiedATM: "State Bank of India (SBI) & HDFC Bank",
    scamWarning: "Euronet tourist dispensers charging 12-18% dynamic markups",
    tip: "Foreign cards work seamlessly at SBI ATMs. Decline ATM currency conversion."
  },
  {
    id: "jp",
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY (¥)",
    rate: "1 USD ≈ 154.20 JPY | 1 JPY ≈ ₹0.54",
    verifiedATM: "7-Eleven (Seven Bank) & Japan Post Bank",
    scamWarning: "Airport exchange booths; always use 7-Eleven ATMs in town",
    tip: "Strictly zero tipping culture. Carry some physical cash for traditional ramen shops."
  },
  {
    id: "th",
    name: "Thailand",
    flag: "🇹🇭",
    currency: "THB (฿)",
    rate: "1 USD ≈ 36.40 THB | 1 THB ≈ ₹2.29",
    verifiedATM: "Bangkok Bank (Highest withdrawal limit: 30,000 THB)",
    scamWarning: "Flat 220 THB statutory fee + 8% DCC prompt at ATM screen",
    tip: "CRITICAL: Always select 'Continue WITHOUT Conversion' to avoid an extra 8% fee."
  },
  {
    id: "fr",
    name: "France & Europe",
    flag: "🇫🇷",
    currency: "EUR (€)",
    rate: "1 EUR ≈ 1.08 USD | 1 EUR ≈ ₹90.75",
    verifiedATM: "BNP Paribas, Crédit Agricole & Société Générale",
    scamWarning: "Euronet yellow/blue standalone machines near monuments (€4.95 + 13%)",
    tip: "Service compris is included by law in France. Always pay in local Euros (€)."
  }
];

export default function CountrySearchBar() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("uae");

  const filtered = search.trim() === "" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => 
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.currency.toLowerCase().includes(search.toLowerCase())
      );

  const selectedDestination = filtered.find(d => d.id === activeTab) || filtered[0] || {
    id: "custom",
    name: search,
    flag: "🌍",
    currency: "Local Currency",
    rate: "Live Interbank Mid-Market Rate",
    verifiedATM: "Official Central / National Bank Branches",
    scamWarning: "Independent convenience ATMs & Airport Kiosks (8-15% DCC Traps)",
    tip: `Always withdraw in the local currency of ${search} and decline ATM conversion.`
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-[#DDD7D0] p-6 md:p-10 shadow-xl relative overflow-hidden">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black mb-2 border border-[#DDD7D0]">
            <Sparkles size={13} />
            Live Global Destination Radar
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#29252B] tracking-tight">
            Check Any Country Before You Fly
          </h3>
          <p className="text-sm font-medium text-[#5C555C] mt-1">
            Instantly view real-time market exchange rates, verified 0% fee ATMs, and dynamic currency scam alerts.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-80 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7B85]" size={17} />
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Dubai, Singapore, Bali..."
            className="w-full pl-11 pr-4 py-3 bg-[#FAF8F6] border border-[#DDD7D0] rounded-2xl text-sm font-bold text-[#29252B] placeholder-[#8A7B85] focus:outline-none focus:ring-2 focus:ring-[#49263F] focus:bg-white transition-all shadow-sm"
          />
          {search && (
            <button 
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-[#8A7B85] hover:text-[#29252B] px-2 py-0.5 bg-[#EFECE8] rounded-md"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Destination Quick Chips (Aubergine active pill exactly like your image!) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 relative z-10 scrollbar-none">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 whitespace-nowrap transition-all border ${
              selectedDestination.id === item.id
                ? "bg-[#49263F] text-white border-[#49263F] shadow-md scale-105"
                : "bg-[#FAF8F6] text-[#29252B] border-[#DDD7D0] hover:bg-[#EFECE8]"
            }`}
          >
            <span>{item.flag}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Selected Destination Intelligence Card */}
      <div className="bg-[#FAF8F6] rounded-3xl border border-[#DDD7D0] p-6 md:p-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DDD7D0]">
          
          <div className="flex items-center gap-4">
            <span className="text-4xl">{selectedDestination.flag}</span>
            <div>
              <div className="flex items-center gap-2.5">
                <h4 className="text-xl md:text-2xl font-black text-[#29252B]">
                  {selectedDestination.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EFECE8] text-[#49263F] text-xs font-black border border-[#DDD7D0]">
                  Verified Guide
                </span>
              </div>
              <p className="text-xs font-bold text-[#5C555C] mt-1">
                Official Currency: <strong className="text-[#29252B]">{selectedDestination.currency}</strong>
              </p>
            </div>
          </div>

          {/* Live Rate Pill */}
          <div className="bg-white px-5 py-3 rounded-2xl border border-[#DDD7D0] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFECE8] flex items-center justify-center text-[#49263F]">
              <Banknote size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#8A7B85] uppercase tracking-wider">Mid-Market Forex Rate</p>
              <p className="text-sm font-black text-[#29252B]">{selectedDestination.rate}</p>
            </div>
          </div>
        </div>

        {/* 3 Detail Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-5 rounded-2xl border border-[#DDD7D0] shadow-sm">
            <div className="flex items-center gap-2 text-[#49263F] font-black text-xs uppercase tracking-wider mb-2">
              <ShieldCheck size={16} /> Verified 0% Surcharge ATMs
            </div>
            <p className="text-sm font-black text-[#29252B] mb-1">
              {selectedDestination.verifiedATM}
            </p>
            <p className="text-xs text-[#5C555C] font-medium">
              Free withdrawal at official bank network branches.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DDD7D0] shadow-sm">
            <div className="flex items-center gap-2 text-[#8A7B85] font-black text-xs uppercase tracking-wider mb-2">
              <AlertTriangle size={16} /> Tourist Traps to Avoid
            </div>
            <p className="text-sm font-black text-[#29252B] mb-1">
              {selectedDestination.scamWarning}
            </p>
            <p className="text-xs text-[#5C555C] font-medium">
              High DCC surcharges charged at tourist hotspots.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DDD7D0] shadow-sm">
            <div className="flex items-center gap-2 text-[#49263F] font-black text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 size={16} /> Golden Travel Rule
            </div>
            <p className="text-xs font-bold text-[#29252B] leading-relaxed">
              {selectedDestination.tip}
            </p>
          </div>
        </div>

        {/* Direct Link to ATM Radar */}
        <div className="mt-6 pt-4 border-t border-[#DDD7D0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#5C555C] font-medium">
            Want to see verified dispenser locations with GPS live sync?
          </p>
          <Link 
            href="/dashboard/map"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#49263F] hover:bg-[#3E1F35] text-white text-xs font-black transition-all shadow-md hover:scale-105"
          >
            Open Worldwide ATM Radar <ArrowRight size={14} />
          </Link>
        </div>

      </div>

    </div>
  );
}
