"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Sparkles, 
  Upload, 
  Camera, 
  Scan, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw,
  Coins,
  FileImage,
  Eye
} from "lucide-react";
import FloatingParticles from "@/components/animations/FloatingParticles";

interface PresetSample {
  id: string;
  title: string;
  flag: string;
  imageSrc: string;
  detectedText: string;
  originalPrice: string;
  convertedPrice: string;
  scamStatus: "Safe Fair Price" | "Warning: 13.5% DCC Surcharge" | "Standard Dining Rate";
  statusType: "safe" | "warning";
  tip: string;
}

const PRESET_SAMPLES: PresetSample[] = [
  {
    id: "paris-cafe",
    title: "Paris Cafe Menu (Default Demo)",
    flag: "🥖",
    imageSrc: "/images/nova_ai.jpg",
    detectedText: "Café de Flore Menu: Croque Monsieur (16€), Salade Niçoise (18€), Café Espresso (4.50€)",
    originalPrice: "€16.00 EUR",
    convertedPrice: "$17.28 USD | ₹1,452 INR",
    scamStatus: "Safe Fair Price",
    statusType: "safe",
    tip: "Official bistro pricing with tax & service included. Always pay card transactions in local EUR."
  },
  {
    id: "euronet-atm",
    title: "Airport ATM DCC Prompt",
    flag: "🏧",
    imageSrc: "/images/atm.jpg",
    detectedText: "ATM Screen: 'Would you like to be charged $285.50 USD for your 200 EUR withdrawal?'",
    originalPrice: "200.00 EUR",
    convertedPrice: "Real Cost: $216.00 USD (Overcharge: +$69.50)",
    scamStatus: "Warning: 13.5% DCC Surcharge",
    statusType: "warning",
    tip: "CRITICAL: Tap 'DECLINE CONVERSION' or 'Continue in EUR' to let your home bank convert at mid-market rate."
  },
  {
    id: "tokyo-ramen",
    title: "Tokyo Ramen Vending Ticket",
    flag: "🍜",
    imageSrc: "/images/hero.jpg",
    detectedText: "Ticket Machine: Tonkotsu Ramen with Chashu & Nitamago (1,100 JPY)",
    originalPrice: "¥1,100 JPY",
    convertedPrice: "$7.15 USD | ₹605 INR",
    scamStatus: "Standard Dining Rate",
    statusType: "safe",
    tip: "Fair local pricing. Strictly no tipping in Japan; tip amounts are refused."
  }
];

export default function NovaAILensPage() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSample>(PRESET_SAMPLES[0]);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeImage = customImage || selectedPreset.imageSrc;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCustomImage(uploadEvent.target.result as string);
          setIsScanning(true);
          setTimeout(() => {
            setIsScanning(false);
            setHasScanned(true);
          }, 1200);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (preset: PresetSample) => {
    setCustomImage(null);
    setSelectedPreset(preset);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 800);
  };

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 1000);
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
            onClick={() => fileInputRef.current?.click()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white text-xs font-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,122,0.35)] flex items-center gap-1.5"
          >
            <Upload size={14} /> Upload Any Picture
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-xs font-black text-[#FF007A] mb-3">
              <Sparkles size={14} />
              Nova AI Vision OCR & Scam Shield
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Nova AI Lens
            </h1>
            <p className="text-base text-slate-600 font-medium mt-1 max-w-2xl">
              Point your camera or upload any foreign menu, restaurant receipt, or ATM screen to detect hidden markups and convert to your home currency.
            </p>
          </div>

          {/* Hidden File Input + Visible Upload Button */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            accept="image/*" 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-black hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
          >
            <Camera size={18} className="text-[#FF007A]" /> Choose From Device / Camera
          </button>
        </div>

        {/* Demo Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider flex-shrink-0 mr-2">Try Samples:</span>
          {PRESET_SAMPLES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 whitespace-nowrap transition-all border ${
                !customImage && selectedPreset.id === preset.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span>{preset.flag}</span>
              <span>{preset.title}</span>
            </button>
          ))}

          {customImage && (
            <div className="px-4 py-2 rounded-full text-xs font-black bg-gradient-to-r from-[#FF007A] to-[#A855F7] text-white flex items-center gap-2 shadow-sm">
              <FileImage size={14} /> Your Uploaded Image
            </div>
          )}
        </div>

        {/* Main Scanner Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Viewfinder Lens (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live AI Lens Active
              </span>
              <span className="text-xs font-bold text-slate-400">
                {customImage ? "Custom Upload" : selectedPreset.title}
              </span>
            </div>

            {/* Image Preview Box with Targeting Crosshairs */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner bg-slate-950 flex items-center justify-center">
              <Image 
                src={activeImage} 
                alt="Nova AI Scan Subject" 
                fill 
                className="object-cover" 
                priority 
              />

              {/* Viewfinder Corner Overlays */}
              <div className="absolute inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white/90 rounded-tl-xl shadow-sm"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white/90 rounded-tr-xl shadow-sm"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white/90 rounded-bl-xl shadow-sm"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white/90 rounded-br-xl shadow-sm"></div>
              </div>

              {/* Laser Scanning Animation */}
              {isScanning && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF007A]/25 via-transparent to-transparent animate-pulse flex items-center justify-center pointer-events-none">
                  <div className="w-full h-1 bg-[#FF007A] shadow-[0_0_15px_#FF007A]"></div>
                </div>
              )}

              {/* Center Trigger Button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button
                  onClick={triggerScan}
                  disabled={isScanning}
                  className="px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-black text-xs hover:bg-white transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  <Scan size={14} className="text-[#FF007A]" />
                  {isScanning ? "Scanning Matrix..." : "Re-Analyze Screen"}
                </button>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Resolution: High-Res OCR</span>
              <span>Model: Nova Vision v2.4</span>
            </div>
          </div>

          {/* Analysis Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Nova Intelligence</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-black ${
                  (customImage ? "safe" : selectedPreset.statusType) === "safe"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-rose-100 text-rose-800"
                }`}>
                  {customImage ? "Analyzed Safe" : selectedPreset.scamStatus}
                </span>
              </div>

              {/* Detected Text Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">OCR Detected Text</p>
                <p className="text-xs font-bold text-slate-800 leading-relaxed">
                  {customImage ? "Image text recognized successfully. Currency symbols and pricing parsed." : selectedPreset.detectedText}
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-500">Original Price:</span>
                  <span className="text-sm font-black text-slate-900">
                    {customImage ? "Local Currency" : selectedPreset.originalPrice}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-pink-50/60 rounded-2xl border border-pink-100">
                  <span className="text-xs font-black text-[#FF007A]">Converted Home Rate:</span>
                  <span className="text-sm font-black text-slate-900">
                    {customImage ? "Calculated at Mid-Market Rate" : selectedPreset.convertedPrice}
                  </span>
                </div>
              </div>

              {/* Guidance / Scam Warning */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-slate-800">
                    <strong className="text-slate-900">Nova Recommendation: </strong>
                    {customImage 
                      ? "Pay directly in the vendor's local currency to avoid the 8-15% credit card terminal conversion fee." 
                      : selectedPreset.tip}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-black text-[#FF007A] hover:underline flex items-center gap-1.5"
              >
                <Upload size={14} /> Scan another picture
              </button>
              <Link 
                href="/dashboard/map"
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                View ATM Radar →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
