"use client";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  animationType: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Medium-intensity translucent colors (not loud, not invisible)
    const colors = [
      "rgba(255, 0, 122, 0.24)",  // Medium Soft Rose Pink
      "rgba(168, 85, 247, 0.22)", // Medium Soft Lavender Purple
      "rgba(6, 182, 212, 0.20)",  // Medium Soft Cyan/Teal
      "rgba(250, 204, 21, 0.18)", // Medium Soft Butter Yellow
    ];

    const generated: Particle[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 96 + 2,   // Keep within 2% - 98% width
      y: Math.random() * 90 + 5,   // Keep within 5% - 95% height
      size: Math.random() * 32 + 18, // 18px to 50px
      duration: Math.random() * 6 + 8, // 8s to 14s (clearly visible float)
      delay: -(Math.random() * 10),    // Negative delay so they are ALREADY moving on load!
      color: colors[i % colors.length],
      animationType: i % 2 === 0 ? "bubbleFloatUp" : "bubbleFloatSway",
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full backdrop-blur-[2px] border border-white/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 20px ${p.color}`,
            animation: `${p.animationType} ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
