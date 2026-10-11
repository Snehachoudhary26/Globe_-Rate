"use client";
import { useState } from "react";
import { Scan, Languages } from "lucide-react";
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
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Nova AI Lens</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Point your camera at any foreign menu or ATM screen.</p>
        </div>
        <div className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-bold rounded-lg text-sm border border-indigo-100 dark:border-indigo-500/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
          Live Translation Active
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
        <Image src="/images/nova_scanner_menu.jpg" alt="Camera Feed" fill className="object-cover opacity-90" />

        {isScanning && (
          <div className="absolute inset-0 border-b-2 border-indigo-500 bg-gradient-to-b from-transparent to-indigo-500/40 z-10 animate-[scan_2s_linear_infinite]" />
        )}

        <div className="absolute inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white/80 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white/80 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white/80 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white/80 rounded-br-xl"></div>
        </div>

        {scanComplete && (
          <div className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-slate-900 dark:text-white">Translation Complete</h3>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">EUR (€) → USD ($)</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Café au Lait</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">$4.50 <span className="text-xs text-slate-400 dark:text-slate-500 line-through ml-1">€4.20</span></span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Croissant</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">$2.80 <span className="text-xs text-slate-400 dark:text-slate-500 line-through ml-1">€2.60</span></span>
                </div>
              </div>
              
              <button onClick={() => setScanComplete(false)} className="w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                New Scan
              </button>
            </div>
          </div>
        )}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          {!isScanning && !scanComplete && (
            <button onClick={handleScan} className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-black rounded-xl shadow-xl hover:scale-105 transition-transform border border-slate-100">
              <Scan size={20} className="text-indigo-600" /> Analyze Screen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}