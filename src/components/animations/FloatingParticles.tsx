"use client";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Elegant, subtle, transparent glass bubbles (not loud or distracting)
    const list: Bubble[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 26) + 16, // 16px to 42px
      left: Math.random() * 100,
      duration: Math.floor(Math.random() * 10) + 18, // Slow, peaceful float
      delay: Math.random() * 8,
    }));

    setBubbles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[20] overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-white/[0.04] border border-rose-300/20 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,255,255,0.08)] animate-float-gentle"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: "-50px",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          {/* Subtle reflection glint */}
          <div className="absolute top-[20%] left-[22%] w-[25%] h-[25%] bg-white/40 rounded-full blur-[0.5px]"></div>
        </div>
      ))}
      <style jsx global>{`
        @keyframes floatGentle {
          0% {
            transform: translateY(0) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          50% {
            transform: translateY(-55vh) scale(1.05);
            opacity: 0.55;
          }
          85% {
            opacity: 0.45;
          }
          100% {
            transform: translateY(-115vh) scale(0.9);
            opacity: 0;
          }
        }
        .animate-float-gentle {
          animation-name: floatGentle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}