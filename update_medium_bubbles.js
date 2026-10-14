const fs = require('fs');

const bubbleComponentCode = `"use client";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Balanced medium palette: visible, elegant, but never distracting
    const colors = [
      "rgba(255, 0, 122, 0.22)",   // Medium Soft Rose Pink
      "rgba(168, 85, 247, 0.20)",  // Medium Soft Lavender Purple
      "rgba(6, 182, 212, 0.18)",   // Medium Soft Cyan/Teal
      "rgba(250, 204, 21, 0.16)",  // Subtle Warm Butter
    ];

    const generated: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 32 + 16, // Medium elegant size (16px - 48px)
      duration: Math.random() * 18 + 14, // Relaxing slow float (14s - 32s)
      delay: Math.random() * 6,
      color: colors[i % colors.length],
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[15] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full backdrop-blur-[2px] border border-white/15 shadow-sm"
          style={{
            left: \`\${p.x}%\`,
            top: \`\${p.y}%\`,
            width: \`\${p.size}px\`,
            height: \`\${p.size}px\`,
            backgroundColor: p.color,
            boxShadow: \`0 0 15px \${p.color}\`,
            animation: \`floatBubble \${p.duration}s ease-in-out \${p.delay}s infinite alternate\`,
          }}
        />
      ))}
      <style jsx>{\`
        @keyframes floatBubble {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-45px) translateX(25px) scale(1.08);
          }
          100% {
            transform: translateY(-90px) translateX(-20px) scale(0.95);
          }
        }
      \`}</style>
    </div>
  );
}
`;

fs.writeFileSync('src/components/animations/FloatingParticles.tsx', bubbleComponentCode);
console.log("✅ Successfully calibrated bubbles to the perfect medium intensity!");
