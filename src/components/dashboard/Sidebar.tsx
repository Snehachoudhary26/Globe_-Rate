"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShieldAlert, 
  Anchor, 
  Droplets, 
  MapPin, 
  Camera, 
  Globe2,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard, color: "text-sea-blue", bg: "bg-pale-aqua" },
    { name: "SnapAsk AI", href: "/dashboard/snapask", icon: Camera, color: "text-purple-magenta", bg: "bg-pale-purple" },
    { name: "Scam Detector", href: "/dashboard/scam-detector", icon: ShieldAlert, color: "text-coral-pink", bg: "bg-blush-pink" },
    { name: "Price Anchor", href: "/dashboard/price-anchor", icon: Anchor, color: "text-amber-500", bg: "bg-butter-yellow" },
    { name: "Budget River", href: "/dashboard/budget", icon: Droplets, color: "text-sea-green", bg: "bg-soft-mint" },
    { name: "ATM Locator", href: "/dashboard/atm-finder", icon: MapPin, color: "text-slate-500", bg: "bg-slate-100" },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-6 sticky top-0">
      {/* App Logo */}
      <Link href="/" className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 rounded-full bg-sea-green flex items-center justify-center text-white">
          <Globe2 size={18} />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800">GlobeRate</span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
          Travel Tools
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm ${
                isActive 
                  ? `${item.bg} ${item.color}` 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon size={18} className={isActive ? "" : "text-slate-400"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-slate-100 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all font-medium text-sm">
          <Settings size={18} className="text-slate-400" /> Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-coral-pink hover:bg-rose-pink/10 transition-all font-medium text-sm">
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </aside>
  );
}
