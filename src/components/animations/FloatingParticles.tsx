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
    // Medium, clearly visible luminous glass palette
    const themes = [
      {
        bg: "rgba(255, 0, 122, 0.35)",     // Neon Rose Pink (visible, translucent)
        border: "rgba(255, 120, 180, 0.65)", // Crisp glowing rim
        glow: "rgba(255, 0, 122, 0.45)",
      },
      {
        bg: "rgba(168, 85, 247, 0.35)",    // Neon Violet / Purple
        border: "rgba(210, 150, 255, 0.65)",
        glow: "rgba(168, 85, 247, 0.45)",
      },
      {
        bg: "rgba(6, 182, 212, 0.32)",     // Electric Cyan / Teal
        border: "rgba(120, 235, 255, 0.65)",
        glow: "rgba(6, 182, 212, 0.40)",
      },
      {
        bg: "rgba(250, 204, 21, 0.28)",    // Warm Butter Yellow
        border: "rgba(255, 235, 130, 0.60)",
        glow: "rgba(250, 204, 21, 0.35)",
      },
    ];

    const generated: Particle[] = Array.from({ length: 20 }).map((_, i) => {
      const t = themes[i % themes.length];
      return {
        id: i,
        x: Math.random() * 94 + 3,        // Keep nicely on screen (3% - 97%)
        y: Math.random() * 88 + 6,
        size: Math.random() * 30 + 35,    // Medium size: 35px to 65px!
        duration: Math.random() * 6 + 9,  // 9s to 15s gentle float
        delay: -(Math.random() * 10),     // Active immediately on page load
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
          className="absolute rounded-full backdrop-blur-[3px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.bg,
            border: `1.5px solid ${p.border}`,
            boxShadow: `0 0 22px ${p.glow}, inset 0 0 10px rgba(255, 255, 255, 0.25)`,
            animation: `${p.animationType} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
