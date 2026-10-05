"use client";

import { Globe2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white/40 backdrop-blur-lg border-t border-white/60 py-12 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sea-green flex items-center justify-center text-white">
              <Globe2 size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">GlobeRate</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} GlobeRate. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-bold text-slate-600">
          <Link href="#" className="hover:text-purple-magenta transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-purple-magenta transition-colors">Terms</Link>
          <Link href="#" className="hover:text-purple-magenta transition-colors">Contact</Link>
        </div>
        
      </div>
    </footer>
  );
}
