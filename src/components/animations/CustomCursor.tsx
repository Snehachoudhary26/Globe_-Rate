"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center border-2 border-white/50 bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
    >
      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
    </motion.div>
  );
}
