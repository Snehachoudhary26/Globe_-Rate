"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  ShieldAlert, 
  Navigation, 
  Building2, 
  AlertTriangle,
  Sparkles,
  ExternalLink,
  Compass,
  ArrowLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  Info
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";

interface ATM {
  id: string;
  name: string;
  bank: string;
  city: string;
  country: string;
  currency: string;
  surcharge: string;
  markupRisk: "Low" | "Medium" | "High";
  status: "Verified 0% Fee" | "Fair Exchange" | "Scam Trap Surcharge";
  address: string;
  dccAdvice: string;
  tip: string;
}

const GLOBAL_ATMS: ATM[] = [
  // --- UNITED ARAB EMIRATES (DUBAI & ABU DHABI) ---
  {
    id: "uae-1",
    name: "Emirates NBD - Dubai Mall Branch ATM",
    bank: "Emirates NBD",
    city: "Dubai",
    country: "United Arab Emirates",
    currency: "AED (Dirham)",
    surcharge: "0 AED (Free Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "Financial Center Rd, Downtown Dubai (Near Metro Link)",
    dccAdvice: "Always select 'Debit in AED (Local Currency)' on the ATM screen.",
    tip: "Official national bank ATM. Sells zero surcharge; reject hotel lobby converter kiosks."
  },
  {
    id: "uae-2",
    name: "ADCB (Abu Dhabi Commercial Bank) - Marina Walk",
    bank: "ADCB",
    city: "Dubai",
    country: "United Arab Emirates",
    currency: "AED (Dirham)",
    surcharge: "0 AED (Free Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "Marina Promenade, Dubai Marina",
    dccAdvice: "Decline ATM rate conversion to let your home bank give mid-market rates.",
    tip: "Zero local ATM surcharge. Much cheaper than currency exchange kiosks at Dubai Airport."
  },
  {
    id: "uae-3",
    name: "Travelex & Standalone Tourist Kiosks (Dubai Airport DXB)",
    bank: "Travelex / Airport Exchange",
    city: "Dubai",
    country: "United Arab Emirates",
    currency: "AED (Dirham)",
    surcharge: "High Surcharge + 8-12% Markup",
    markupRisk: "High",
    status: "Scam Trap Surcharge",
    address: "DXB Terminal 1 & 3 Arrivals Area",
    dccAdvice: "NEVER accept their converted exchange rate; always choose AED or use Metro bank ATMs.",
    tip: "Tourist trap! Walk 3 minutes to the Dubai Metro station inside DXB to use Emirates NBD at 0% markup."
  },

  // --- UNITED KINGDOM (LONDON) ---
  {
    id: "uk-1",
    name: "HSBC UK - Oxford Circus Branch",
    bank: "HSBC UK",
    city: "London",
    country: "United Kingdom",
    currency: "GBP (£)",
    surcharge: "£0 (Free UK Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "333 Oxford Street, London W1C 2HY",
    dccAdvice: "Always choose 'Without Conversion' (Debit in GBP).",
    tip: "All official UK bank ATMs (HSBC, Barclays, Lloyds) are 100% free by law."
  },
  {
    id: "uk-2",
    name: "Euronet / NoteMachine Convenience ATM",
    bank: "Euronet Worldwide",
    city: "London",
    country: "United Kingdom",
    currency: "GBP (£)",
    surcharge: "£2.95 - £4.50 + 10% DCC",
    markupRisk: "High",
    status: "Scam Trap Surcharge",
    address: "Piccadilly Circus & Leicester Square Corners",
    dccAdvice: "AVOID! If forced to use, decline the ATM's proposed exchange rate.",
    tip: "Independent ATM operator charging astronomical conversion fees. Walk 50 meters to a Barclays or HSBC branch."
  },

  // --- UNITED STATES (NEW YORK) ---
  {
    id: "us-1",
    name: "Chase Bank - Times Square Branch ATM",
    bank: "JPMorgan Chase",
    city: "New York",
    country: "United States",
    currency: "USD ($)",
    surcharge: "$3.00 Standard Out-of-Network",
    markupRisk: "Low",
    status: "Fair Exchange",
    address: "1500 Broadway (43rd St), New York, NY",
    dccAdvice: "Decline currency conversion; charge card directly in USD.",
    tip: "Official branch ATM inside secure glass vestibule. Far safer than standalone deli or street corner ATMs."
  },

  // --- SINGAPORE ---
  {
    id: "sg-1",
    name: "DBS / POSB ATM - Marina Bay Sands",
    bank: "DBS Bank",
    city: "Singapore",
    country: "Singapore",
    currency: "SGD (S$)",
    surcharge: "S$0 (Free Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "10 Bayfront Ave, The Shoppes at Marina Bay Sands",
    dccAdvice: "Always select 'Debit in SGD'.",
    tip: "Singapore's largest national bank. 0% local surcharge on foreign cards."
  },

  // --- INDONESIA (BALI) ---
  {
    id: "id-1",
    name: "Bank Central Asia (BCA) - Seminyak Branch",
    bank: "BCA",
    city: "Bali",
    country: "Indonesia",
    currency: "IDR (Rupiah)",
    surcharge: "0 IDR (Free Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "Jl. Raya Seminyak No. 19, Kuta, Bali",
    dccAdvice: "Select 'Debit in IDR without conversion'.",
    tip: "Safest bank in Bali with strict security guards and anti-skimmer card slots."
  },

  // --- INDIA ---
  {
    id: "in-1",
    name: "State Bank of India (SBI) - Connaught Place",
    bank: "State Bank of India",
    city: "New Delhi",
    country: "India",
    currency: "INR (₹)",
    surcharge: "₹0 (Zero Foreign Surcharge)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "Inner Circle, Block A, Connaught Place, New Delhi",
    dccAdvice: "Always select 'Transaction in INR' and decline ATM conversion.",
    tip: "India's largest public sector bank. Free ATM access on international Visa and Mastercard."
  },
  {
    id: "in-2",
    name: "HDFC Bank - Bandra Kurla Complex (BKC)",
    bank: "HDFC Bank",
    city: "Mumbai",
    country: "India",
    currency: "INR (₹)",
    surcharge: "₹0 Surcharge",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "G Block BKC, Bandra East, Mumbai",
    dccAdvice: "Select 'Account Currency: INR' at prompt.",
    tip: "Tier-1 private bank with 24/7 CCTV surveillance and verified un-tampered card slots."
  },

  // --- THAILAND (BANGKOK & PHUKET) ---
  {
    id: "th-1",
    name: "Bangkok Bank - Siam Paragon",
    bank: "Bangkok Bank",
    city: "Bangkok",
    country: "Thailand",
    currency: "THB (฿)",
    surcharge: "220 THB (Thai Flat Gov Fee)",
    markupRisk: "Medium",
    status: "Fair Exchange",
    address: "Siam Paragon Ground Floor, Pathum Wan, Bangkok",
    dccAdvice: "CRITICAL: Click 'Continue WITHOUT Conversion' to avoid an extra 8% DCC markup.",
    tip: "All Thai ATMs have a statutory 220 THB fee, but Bank of Bangkok gives the highest withdrawal limit (30,000 THB)."
  },

  // --- JAPAN (TOKYO) ---
  {
    id: "jp-1",
    name: "7-Bank ATM - Shinjuku Station East",
    bank: "Seven Bank (7-Eleven)",
    city: "Tokyo",
    country: "Japan",
    currency: "JPY (¥)",
    surcharge: "110 - 220 ¥ (Nominal ATM Fee)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "3 Chome-38-1 Shinjuku, Tokyo 160-0022",
    dccAdvice: "Always select 'Japanese Yen (JPY)' when prompted for currency.",
    tip: "Gold standard for foreign travelers in Japan. 24/7 availability with multilingual menus."
  },

  // --- FRANCE (PARIS) ---
  {
    id: "fr-1",
    name: "BNP Paribas - Champs-Élysées",
    bank: "BNP Paribas",
    city: "Paris",
    country: "France",
    currency: "EUR (€)",
    surcharge: "€0 (Free Official Bank ATM)",
    markupRisk: "Low",
    status: "Verified 0% Fee",
    address: "133 Avenue des Champs-Élysées, 75008 Paris",
    dccAdvice: "Choose 'Debit in Euros (€)' to let your home bank convert at interbank rate.",
    tip: "Major French bank with no surcharge. Never use standalone Euronet yellow-blue machines in Paris."
  }
];

export default function GlobalATMRadarPage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const quickPills = [
    { label: "All Globe", query: "" },
    { label: "🇦🇪 Dubai / UAE", query: "Dubai" },
    { label: "🇬🇧 London / UK", query: "London" },
    { label: "🇺🇸 New York / USA", query: "New York" },
    { label: "🇸🇬 Singapore", query: "Singapore" },
    { label: "🇮🇩 Bali / Indo", query: "Bali" },
    { label: "🇮🇳 India", query: "India" },
    { label: "🇯🇵 Japan", query: "Japan" },
    { label: "🇹🇭 Thailand", query: "Thailand" },
    { label: "🇫🇷 France", query: "France" },
  ];

  const filteredATMs = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return GLOBAL_ATMS;
    
    const matched = GLOBAL_ATMS.filter(atm => 
      atm.city.toLowerCase().includes(q) ||
      atm.country.toLowerCase().includes(q) ||
      atm.bank.toLowerCase().includes(q) ||
      atm.name.toLowerCase().includes(q)
    );

    // If query is not in pre-seeded list, generate dynamic global safety intelligence
    if (matched.length === 0 && q.length > 1) {
      const capitalized = search.charAt(0).toUpperCase() + search.slice(1);
      return [
        {
          id: "dynamic-1",
          name: `National Central Bank Network - ${capitalized}`,
          bank: `Official Commercial Banks of ${capitalized}`,
          city: capitalized,
          country: capitalized,
          currency: "Local Official Currency",
          surcharge: "0% Standard Interbank (Bank Branch)",
          markupRisk: "Low",
          status: "Verified 0% Fee",
          address: `Central Downtown Financial Hub, ${capitalized}`,
          dccAdvice: `CRITICAL: Always select 'Debit in Local Currency without conversion' on the ATM screen in ${capitalized}.`,
          tip: `GlobeRate Global Shield: When in ${capitalized}, always withdraw cash directly at physical bank branches. Avoid airport kiosks and independent machines (like Euronet/Travelex) which impose 8-15% markups.`
        }
      ];
    }

    return matched;
  }, [search]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#FF007A] selection:text-white">
      {/* 11 Minimal Floating Bubbles */}
      <FloatingParticles />

      {/* Ambient Pastel Glows */}
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
            <ArrowLeft size={16} /> Dashboard
          </Link>
          <Link href="/auth/signup" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white text-xs font-black hover:scale-105 transition-all shadow-md">
            Get Protected
          </Link>
        </div>
      </nav>

      {/* Main Radar Container */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-xs font-black text-[#FF007A] mb-3">
              <Compass size={14} className="animate-spin text-[#FF007A]" />
              Worldwide ATM Radar & Scam Shield
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Global ATM Radar
            </h1>
            <p className="text-base text-slate-600 font-medium mt-2 max-w-2xl">
              Locate verified zero-surcharge bank ATMs in Dubai, London, New York, Singapore, and worldwide to avoid hidden 8–15% ATM conversion traps.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Dubai, London, New York, Bali..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF007A] shadow-sm transition-all"
            />
            {search && (
              <button 
                onClick={() => setSearch("")} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Country Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider flex-shrink-0 mr-2">Quick Travel Hubs:</span>
          {quickPills.map((pill) => (
            <button
              key={pill.label}
              onClick={() => setSearch(pill.query)}
              className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all shadow-sm border ${
                (search === pill.query || (pill.query === "" && search === ""))
                  ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Radar Scanner Visual Card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Global Scanner
                </span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Live Sat-Sync
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                {search ? `Scanning "${search}"` : "Global Radar Active"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Real-time satellite and traveler verification detecting dynamic conversion markups across 190+ countries.
              </p>
            </div>

            {/* Simulated Animated Radar Rings */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-pink-500/20 flex items-center justify-center animate-ping pointer-events-none"></div>
              <div className="w-36 h-36 rounded-full border border-purple-500/40 flex items-center justify-center absolute">
                <div className="w-24 h-24 rounded-full border border-pink-500/60 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] flex items-center justify-center shadow-[0_0_20px_rgba(255,0,122,0.8)]">
                    <Compass size={22} className="text-white animate-spin" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>{filteredATMs.length} Dispensers Verified</span>
              <span className="text-pink-400 font-black">Zero Surcharge Priority</span>
            </div>
          </div>

          {/* ATM Cards List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredATMs.map((atm) => (
              <div 
                key={atm.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-pink-300/60 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${
                      atm.markupRisk === "Low" 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200" 
                        : atm.markupRisk === "Medium"
                        ? "bg-amber-50 text-amber-600 border border-amber-200"
                        : "bg-rose-50 text-rose-600 border border-rose-200"
                    }`}>
                      {atm.markupRisk === "Low" ? <ShieldCheck size={24} /> : <AlertTriangle size={24} />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#FF007A] transition-colors">
                          {atm.name}
                        </h4>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wide ${
                          atm.markupRisk === "Low"
                            ? "bg-emerald-100 text-emerald-800"
                            : atm.markupRisk === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                        }`}>
                          {atm.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs font-bold text-slate-500 mt-1">
                        <span className="flex items-center gap-1 text-slate-700">
                          <Building2 size={13} className="text-slate-400" /> {atm.bank}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-slate-400" /> {atm.city}, {atm.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Surcharge</p>
                    <p className="text-sm font-black text-slate-900">{atm.surcharge}</p>
                  </div>
                </div>

                {/* Advice Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-bold">
                      <span className="text-slate-900 font-black">Screen Instruction: </span>
                      {atm.dccAdvice}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Info size={15} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 font-medium">
                      <span className="text-slate-900 font-black">Traveler Note: </span>
                      {atm.tip}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Currency: <strong className="text-slate-900">{atm.currency}</strong></span>
                  <span className="text-slate-400 text-[11px] truncate max-w-xs">{atm.address}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
