"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  bg: string;
  border: string;
  glow: string;
  animationType: string;
}

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<SplashParticle[]>([]);

  useEffect(() => {
    // 10 floating bubbles tailored in Aubergine, Mauve, and Warm Stone
    const splashBubbles: SplashParticle[] = [
      { id: 1,  x: 8,  y: 12, size: 26, duration: 10, delay: -1, bg: "rgba(73, 38, 63, 0.40)",   border: "rgba(73, 38, 63, 0.65)",   glow: "rgba(73, 38, 63, 0.25)",   animationType: "bubbleFloatUp" },
      { id: 2,  x: 88, y: 14, size: 28, duration: 12, delay: -3, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
      { id: 3,  x: 12, y: 48, size: 22, duration: 11, delay: -5, bg: "rgba(138, 123, 133, 0.40)", border: "rgba(138, 123, 133, 0.65)", glow: "rgba(138, 123, 133, 0.20)", animationType: "bubbleFloatUp" },
      { id: 4,  x: 86, y: 46, size: 24, duration: 13, delay: -2, bg: "rgba(209, 199, 189, 0.45)", border: "rgba(209, 199, 189, 0.70)", glow: "rgba(209, 199, 189, 0.20)", animationType: "bubbleFloatSway" },
      { id: 5,  x: 10, y: 82, size: 25, duration: 11, delay: -4, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
      { id: 6,  x: 90, y: 80, size: 26, duration: 10, delay: -6, bg: "rgba(73, 38, 63, 0.40)",   border: "rgba(73, 38, 63, 0.65)",   glow: "rgba(73, 38, 63, 0.25)",   animationType: "bubbleFloatUp" },
      { id: 7,  x: 24, y: 22, size: 20, duration: 12, delay: -7, bg: "rgba(209, 199, 189, 0.45)", border: "rgba(209, 199, 189, 0.70)", glow: "rgba(209, 199, 189, 0.20)", animationType: "bubbleFloatSway" },
      { id: 8,  x: 76, y: 20, size: 22, duration: 11, delay: -3, bg: "rgba(73, 38, 63, 0.35)",   border: "rgba(73, 38, 63, 0.60)",   glow: "rgba(73, 38, 63, 0.20)",   animationType: "bubbleFloatUp" },
      { id: 9,  x: 22, y: 76, size: 22, duration: 13, delay: -2, bg: "rgba(138, 123, 133, 0.40)", border: "rgba(138, 123, 133, 0.65)", glow: "rgba(138, 123, 133, 0.20)", animationType: "bubbleFloatUp" },
      { id: 10, x: 78, y: 78, size: 24, duration: 12, delay: -5, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
    ];
    setParticles(splashBubbles);

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
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,38,63,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Floating Moving Bubbles in Aubergine & Mauve Theme */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full backdrop-blur-[1px]"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.bg,
                  border: `1.2px solid ${p.border}`,
                  boxShadow: `0 0 14px ${p.glow}`,
                  animation: `${p.animationType} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
                  willChange: "transform",
                }}
              />
            ))}
          </div>

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
