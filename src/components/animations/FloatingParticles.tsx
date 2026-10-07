"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingParticles() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Generate 15 random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    xStart: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-50px] rounded-full bg-white/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white/50"
          style={{ 
            width: p.size, 
            height: p.size,
            left: `${p.xStart}%` 
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            rotate: [0, 360]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
