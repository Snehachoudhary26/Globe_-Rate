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
    <>
      {/* Outer Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[100000] border-2 border-sea-green bg-sea-green/10 backdrop-blur-sm"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 600, damping: 40, mass: 0.1 }}
      />
      {/* Inner Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100000] bg-purple-magenta shadow-[0_0_15px_#D3A9FF]"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "spring", stiffness: 1500, damping: 20, mass: 0.05 }}
      />
    </>
  );
}
