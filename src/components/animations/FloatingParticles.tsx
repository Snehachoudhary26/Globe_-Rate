"use client";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
  glow: string;
}

export default function FloatingParticles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const bubbleStyles = [
      {
        color: "from-[#FF007A]/50 via-[#FF1493]/30 to-[#7928CA]/40 border-[#FF007A]/80",
        glow: "shadow-[0_0_25px_rgba(255,0,122,0.8)]"
      },
      {
        color: "from-[#7928CA]/50 via-[#9333EA]/30 to-[#4338CA]/40 border-[#9333EA]/80",
        glow: "shadow-[0_0_25px_rgba(147,51,234,0.8)]"
      },
      {
        color: "from-[#FF007A]/60 to-[#9333EA]/40 border-[#FF007A]/90",
        glow: "shadow-[0_0_30px_rgba(255,0,122,0.9)]"
      },
      {
        color: "from-[#A855F7]/50 via-[#EC4899]/30 to-[#8B5CF6]/40 border-[#A855F7]/80",
        glow: "shadow-[0_0_25px_rgba(168,85,247,0.8)]"
      }
    ];

    const list: Bubble[] = Array.from({ length: 28 }).map((_, i) => {
      const style = bubbleStyles[i % bubbleStyles.length];
      return {
        id: i,
        size: Math.floor(Math.random() * 32) + 18, // 18px to 50px
        left: Math.random() * 100,
        duration: Math.floor(Math.random() * 10) + 14,
        delay: Math.random() * 8,
        color: style.color,
        glow: style.glow
      };
    });

    setBubbles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={`absolute rounded-full bg-gradient-to-tr border backdrop-blur-[1.5px] animate-float-bubble ${b.color} ${b.glow}`}
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: "-60px",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          {/* Specular light spot to look like real floating neon glass bubbles */}
          <div className="absolute top-[16%] left-[20%] w-[32%] h-[32%] bg-white/80 rounded-full blur-[0.4px]"></div>
        </div>
      ))}
      <style jsx global>{`
        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          50% {
            transform: translateY(-50vh) translateX(30px) scale(1.15);
            opacity: 1;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-115vh) translateX(-25px) scale(0.85);
            opacity: 0;
          }
        }
        .animate-float-bubble {
          animation-name: floatBubble;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}