"use client";
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
}