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
    // Exact Pink and Purple Palette (Vibrant on White)
    const themes = [
      {
        bg: "rgba(255, 0, 122, 0.35)",     // Neon Rose Pink
        border: "rgba(255, 0, 122, 0.65)", // Crisp Pink Border
        glow: "rgba(255, 0, 122, 0.25)",
      },
      {
        bg: "rgba(168, 85, 247, 0.35)",    // Neon Lavender Purple
        border: "rgba(168, 85, 247, 0.65)", // Crisp Purple Border
        glow: "rgba(168, 85, 247, 0.25)",
      },
      {
        bg: "rgba(6, 182, 212, 0.30)",     // Soft Cyan Accent
        border: "rgba(6, 182, 212, 0.60)",
        glow: "rgba(6, 182, 212, 0.20)",
      },
      {
        bg: "rgba(250, 204, 21, 0.30)",    // Soft Butter Accent
        border: "rgba(250, 204, 21, 0.60)",
        glow: "rgba(250, 204, 21, 0.20)",
      },
    ];

    const generated: Particle[] = Array.from({ length: 22 }).map((_, i) => {
      const t = themes[i % themes.length];
      return {
        id: i,
        x: Math.random() * 94 + 3,
        y: Math.random() * 88 + 6,
        size: Math.random() * 30 + 35, // 35px to 65px medium size
        duration: Math.random() * 6 + 9,
        delay: -(Math.random() * 10),
        bg: t.bg,
        border: t.border,
        glow: t.glow,
        animationType: i % 2 === 0 ? "bubbleFloatUp" : "bubbleFloatSway",
      };
    });

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full backdrop-blur-[2px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.bg,
            border: `1.5px solid ${p.border}`,
            boxShadow: `0 0 20px ${p.glow}, inset 0 0 8px rgba(255, 255, 255, 0.6)`,
            animation: `${p.animationType} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
