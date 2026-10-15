"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999999] bg-[#FAF8F6] flex flex-col items-center justify-center overflow-hidden font-sans"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,38,63,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Perfect Circle Logo with Luxury Aubergine Border Ring */}
          <motion.div
            animate={{ rotateY: [0, 360, 360], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(73,38,63,0.18)] border-4 border-[#DDD7D0] bg-white ring-4 ring-[#49263F]/10 z-10"
          >
            <Image src="/images/logo-brand.png" alt="GlobeRate Loading" fill className="object-cover scale-100" priority />
          </motion.div>
          
          {/* Night Ink Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-4xl font-black text-[#29252B] tracking-tight z-10"
          >
            GlobeRate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8A7B85] z-10"
          >
            Smart Global Travel Finance
          </motion.p>
          
          {/* Editorial Aubergine-to-Mauve Progress Bar (Zero Pink / Zero Rainbow) */}
          <motion.div className="mt-6 w-56 h-2 bg-[#EFECE8] border border-[#DDD7D0] rounded-full overflow-hidden p-0.5 shadow-inner z-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#49263F] via-[#653757] to-[#8A7B85] shadow-[0_0_12px_rgba(73,38,63,0.35)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
