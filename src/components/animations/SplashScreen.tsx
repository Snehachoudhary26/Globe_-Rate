"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 3.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999999] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F4EFFF] flex flex-col items-center justify-center"
        >
          {/* Spinning Logo */}
          <motion.div
            animate={{ rotateY: [0, 360, 360], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative w-48 h-48 drop-shadow-2xl"
          >
            <Image src="/images/logo.png" alt="GlobeRate Loading" fill className="object-contain" priority />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-4xl font-black text-slate-800 tracking-tight"
          >
            GlobeRate
          </motion.h1>

          {/* Loading Progress Bar */}
          <motion.div className="mt-6 w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sea-green to-purple-magenta"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
