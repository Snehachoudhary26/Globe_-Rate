"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ShieldCheck, 
  ShieldAlert, 
  ArrowRight, 
  Coins, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Compass,
  X
} from "lucide-react";

interface CountryInfo {
  name: string;
  flag: string;
  currencyCode: string;
  currencyName: string;
  symbol: string;
  liveRateUSD: number;
  liveRateEUR: number;
  safeATMs: string[];
  scamWarning: string;
  dccAlert: string;
  goldenRule: string;
  cashTip: string;
}

const COUNTRIES: CountryInfo[] = [
  {
    name: "India",
    flag: "🇮🇳",
    currencyCode: "INR",
    currencyName: "Indian Rupee",
    symbol: "₹",
    liveRateUSD: 86.85,
    liveRateEUR: 95.90,
    safeATMs: ["State Bank of India (SBI)", "HDFC Bank", "ICICI Bank", "Bank of Baroda"],
    scamWarning: "Airport Euronet & private white-label ATMs charge up to 12% DCC markups.",
    dccAlert: "When machine asks 'Debit in USD or INR?', always choose INR (Local Currency).",
    goldenRule: "Decline conversion on ATM screen. Let your home card issuer do the FX.",
    cashTip: "Carry ₹100 & ₹500 notes for street vendors and auto-rickshaws; UPI is dominant for locals."
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    currencyCode: "THB",
    currencyName: "Thai Baht",
    symbol: "฿",
    liveRateUSD: 36.15,
    liveRateEUR: 39.80,
    safeATMs: ["Bangkok Bank", "Kasikorn Bank (K-Bank)", "Siam Commercial Bank (SCB)"],
    scamWarning: "All Thai ATMs charge a mandatory 220 THB local fee. Euronet adds an extra 10% DCC on top.",
    dccAlert: "Always withdraw maximum allowed cash (20,000 to 30,000 THB) in one go to dilute the 220 THB fee.",
    goldenRule: "Select 'Without Conversion' on screen. Never accept the guaranteed conversion rate.",
    cashTip: "Cash is mandatory for street food, night markets, and island longtail boats."
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    currencyCode: "JPY",
    currencyName: "Japanese Yen",
    symbol: "¥",
    liveRateUSD: 152.40,
    liveRateEUR: 167.50,
    safeATMs: ["7-Eleven (Seven Bank)", "FamilyMart (E-Net)", "Japan Post Bank (Yucho)"],
    scamWarning: "Airport exchange booths take up to 8% spread. Standalone hotel kiosks charge heavy DCC.",
    dccAlert: "Seven Bank ATMs offer zero-surcharge withdrawals for foreign Visa & Mastercard.",
    goldenRule: "Always select 'JPY' when asked for currency choice. Decline dynamic conversion.",
    cashTip: "Many traditional ramen shops, ticket machines, and temples only accept physical Yen coins & notes."
  },
  {
    name: "France",
    flag: "🇫🇷",
    currencyCode: "EUR",
    currencyName: "Euro",
    symbol: "€",
    liveRateUSD: 0.92,
    liveRateEUR: 1.00,
    safeATMs: ["BNP Paribas", "Crédit Agricole", "Société Générale", "La Banque Postale"],
    scamWarning: "Tourist areas (Eiffel Tower, Louvre) are crowded with Euronet blue/yellow kiosks charging 13% markup.",
    dccAlert: "Never use an ATM that doesn't belong to an official French bank branch.",
    goldenRule: "Always choose 'Continue without conversion' to avoid the dynamic currency conversion fee.",
    cashTip: "Contactless card payments are accepted almost everywhere; keep 20-50 Euros for small bakeries."
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    currencyCode: "GBP",
    currencyName: "British Pound",
    symbol: "£",
    liveRateUSD: 0.78,
    liveRateEUR: 0.85,
    safeATMs: ["Barclays", "HSBC UK", "NatWest", "Lloyds Bank"],
    scamWarning: "Convenience store ATMs often charge £2.50 to £5.00 fixed surcharge plus DCC.",
    dccAlert: "Look for ATMs with the official 'LINK - Free cash withdrawals' green badge.",
    goldenRule: "London is virtually cashless. You rarely need physical cash; tap-to-pay works on all Tube & buses.",
    cashTip: "TfL (London Underground) does not accept cash; use contactless bank card or phone directly."
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    currencyCode: "AED",
    currencyName: "UAE Dirham",
    symbol: "د.إ",
    liveRateUSD: 3.67,
    liveRateEUR: 4.02,
    safeATMs: ["Emirates NBD", "Dubai Islamic Bank", "ADCB (Abu Dhabi Commercial Bank)"],
    scamWarning: "Airport and shopping mall currency exchange booths add 6%–10% hidden spread.",
    dccAlert: "At Dubai Mall or airport duty-free, card terminals default to home currency. Instruct cashier: 'Charge in AED'.",
    goldenRule: "Dubai Dirham is officially pegged to USD ($1 = 3.6725 AED). Any rate lower than 3.65 is a rip-off.",
    cashTip: "Card payments are accepted everywhere from taxis to souks; carry small AED for abra boat rides."
  }
];

export default function CountrySearchBar() {
  const [query, setQuery] = useState("");
  const [activeCountry, setActiveCountry] = useState<CountryInfo>(COUNTRIES[0]); // Defaults to India

  const filteredCountries = query.trim() === "" 
    ? COUNTRIES 
    : COUNTRIES.filter(c => 
        c.name.toLowerCase().includes(query.toLowerCase()) || 
        c.currencyCode.toLowerCase().includes(query.toLowerCase())
      );

  const selectCountry = (country: CountryInfo) => {
    setActiveCountry(country);
    setQuery("");
  };

  return (
    <div className="w-full bg-white rounded-[2.5rem] p-6 md:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
      
      {/* Header Label */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF007A]/10 text-[#FF007A] text-xs font-black uppercase tracking-wider mb-2 border border-[#FF007A]/20">
            <Compass size={14} /> Instant Destination Intelligence
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Search your destination. <span className="text-[#A855F7]">Know the rate.</span>
          </h3>
          <p className="text-slate-600 text-sm md:text-base font-medium mt-1">
            Real institutional rates, verified 0% bank ATMs, and local scam alerts before you withdraw cash.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Forex Feeds Connected
        </div>
      </div>

      {/* SEARCH BAR INPUT */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
          <Search size={22} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type any country (e.g. India, Japan, Thailand, France, UK)..."
          className="w-full pl-14 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-bold text-base md:text-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:bg-white transition-all shadow-inner"
        />
        {query && (
          <button 
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* QUICK COUNTRY SELECTION CHIPS */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-black text-slate-400 uppercase tracking-wider mr-1">Popular:</span>
        {COUNTRIES.map((country) => {
          const isSelected = activeCountry.name === country.name;
          return (
            <button
              key={country.name}
              onClick={() => selectCountry(country)}
              className={"px-4 py-2 rounded-full text-sm font-black transition-all flex items-center gap-1.5 " + 
                (isSelected 
                  ? "bg-slate-900 text-white shadow-md scale-105" 
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                )}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE DESTINATION INTEL CARD */}
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md">
        
        {/* Top Destination Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <span className="text-4xl md:text-5xl">{activeCountry.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">
                  {activeCountry.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-700 text-xs font-black">
                  {activeCountry.currencyCode} ({activeCountry.symbol})
                </span>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-500">
                Official Currency: {activeCountry.currencyName}
              </p>
            </div>
          </div>

          {/* Live Rates */}
          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Live Mid-Market</p>
              <p className="text-lg md:text-xl font-black text-slate-900">
                $1 USD = <span className="text-[#FF007A]">{activeCountry.symbol}{activeCountry.liveRateUSD}</span>
              </p>
            </div>
            <div className="border-l border-slate-200 pl-4 hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Euro Rate</p>
              <p className="text-sm font-black text-slate-700">
                €1 = {activeCountry.symbol}{activeCountry.liveRateEUR}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Detail Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          {/* Safe ATMs */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 font-black text-sm mb-3">
              <ShieldCheck size={18} /> Verified 0% Surcharge Banks
            </div>
            <ul className="space-y-2">
              {activeCountry.safeATMs.map((atm, i) => (
                <li key={i} className="text-xs md:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                  {atm}
                </li>
              ))}
            </ul>
          </div>

          {/* Scam & DCC Alert */}
          <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
            <div className="flex items-center gap-2 text-rose-600 font-black text-sm mb-2">
              <ShieldAlert size={18} /> Predatory ATM Trap to Avoid
            </div>
            <p className="text-xs md:text-sm font-bold text-slate-800 mb-2">
              {activeCountry.scamWarning}
            </p>
            <p className="text-[11px] font-semibold text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-100">
              ⚠️ {activeCountry.dccAlert}
            </p>
          </div>

          {/* Golden Rule & Cash Tip */}
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-700 font-black text-sm mb-2">
                <Lightbulb size={18} /> Golden Traveler Rule
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-800 mb-3 leading-relaxed">
                {activeCountry.goldenRule}
              </p>
            </div>
            <p className="text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              💡 <b>Cash Tip:</b> {activeCountry.cashTip}
            </p>
          </div>

        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-200">
          <p className="text-xs font-bold text-slate-500 text-center sm:text-left">
            Need real-time GPS locations and exact street navigation?
          </p>
          <Link
            href="/dashboard/map"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 text-white text-xs md:text-sm font-black flex items-center justify-center gap-2 hover:bg-[#FF007A] transition-colors shadow-md"
          >
            Open {activeCountry.name} on Country Radar <ArrowRight size={16} />
          </Link>
        </div>

      </div>

    </div>
  );
}
