"use client";
import { useEffect, useState } from "react";

interface Particle {
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

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // 11 continuous floating & swaying bubbles in Aubergine & Mauve Grey (Zero pink, zero purple!)
    const balancedLayout: Particle[] = [
      { id: 1,  x: 4,  y: 8,  size: 24, duration: 11, delay: -2, bg: "rgba(73, 38, 63, 0.40)",   border: "rgba(73, 38, 63, 0.65)",   glow: "rgba(73, 38, 63, 0.25)",   animationType: "bubbleFloatUp" },
      { id: 2,  x: 93, y: 10, size: 24, duration: 12, delay: -4, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
      { id: 3,  x: 5,  y: 88, size: 22, duration: 13, delay: -6, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
      { id: 4,  x: 94, y: 86, size: 24, duration: 10, delay: -8, bg: "rgba(73, 38, 63, 0.40)",   border: "rgba(73, 38, 63, 0.65)",   glow: "rgba(73, 38, 63, 0.25)",   animationType: "bubbleFloatUp" },
      { id: 5,  x: 6,  y: 38, size: 22, duration: 10, delay: -3, bg: "rgba(138, 123, 133, 0.40)", border: "rgba(138, 123, 133, 0.65)", glow: "rgba(138, 123, 133, 0.20)", animationType: "bubbleFloatUp" },
      { id: 6,  x: 7,  y: 62, size: 20, duration: 12, delay: -7, bg: "rgba(209, 199, 189, 0.45)", border: "rgba(209, 199, 189, 0.70)", glow: "rgba(209, 199, 189, 0.20)", animationType: "bubbleFloatSway" },
      { id: 7,  x: 91, y: 36, size: 22, duration: 11, delay: -5, bg: "rgba(209, 199, 189, 0.45)", border: "rgba(209, 199, 189, 0.70)", glow: "rgba(209, 199, 189, 0.20)", animationType: "bubbleFloatSway" },
      { id: 8,  x: 90, y: 62, size: 20, duration: 13, delay: -1, bg: "rgba(138, 123, 133, 0.40)", border: "rgba(138, 123, 133, 0.65)", glow: "rgba(138, 123, 133, 0.20)", animationType: "bubbleFloatUp" },
      { id: 9,  x: 50, y: 5,  size: 22, duration: 12, delay: -9, bg: "rgba(73, 38, 63, 0.35)",   border: "rgba(73, 38, 63, 0.60)",   glow: "rgba(73, 38, 63, 0.20)",   animationType: "bubbleFloatUp" },
      { id: 10, x: 34, y: 28, size: 22, duration: 11, delay: -4, bg: "rgba(73, 38, 63, 0.40)",   border: "rgba(73, 38, 63, 0.65)",   glow: "rgba(73, 38, 63, 0.25)",   animationType: "bubbleFloatUp" },
      { id: 11, x: 68, y: 72, size: 22, duration: 13, delay: -6, bg: "rgba(184, 173, 181, 0.45)", border: "rgba(184, 173, 181, 0.70)", glow: "rgba(184, 173, 181, 0.25)", animationType: "bubbleFloatSway" },
    ];
    setParticles(balancedLayout);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
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
  );
}
