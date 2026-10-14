const fs = require('fs');

// 1. Update globals.css to remove the 0.18 opacity crushing
const globalsCssPath = 'src/app/globals.css';
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

// Replace keyframes with full-brightness smooth float
const cleanKeyframes = `
/* --- REAL VISIBLE BUBBLE FLOAT ANIMATIONS --- */
@keyframes bubbleFloatUp {
  0% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  50% {
    transform: translateY(-50px) translateX(30px) scale(1.08);
  }
  100% {
    transform: translateY(-110px) translateX(-20px) scale(0.96);
  }
}

@keyframes bubbleFloatSway {
  0% {
    transform: translateY(0px) translateX(0px) scale(0.96);
  }
  50% {
    transform: translateY(-60px) translateX(-35px) scale(1.1);
  }
  100% {
    transform: translateY(-120px) translateX(25px) scale(1);
  }
}
`;

// Remove old crushed keyframes if present, and append clean ones
globalsCss = globalsCss.replace(/\/\* --- REAL BUBBLE FLOAT ANIMATIONS --- \*\/[\s\S]*?@keyframes bubbleFloatSway[\s\S]*?\n\}/g, '');
globalsCss += cleanKeyframes;
fs.writeFileSync(globalsCssPath, globalsCss);
console.log("✅ Removed double-dimming in globals.css");

// 2. Re-write FloatingParticles with visible medium glass bubbles
const bubbleCode = `"use client";
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
            left: \`\${p.x}%\`,
            top: \`\${p.y}%\`,
            width: \`\${p.size}px\`,
            height: \`\${p.size}px\`,
            backgroundColor: p.bg,
            border: \`1.5px solid \${p.border}\`,
            boxShadow: \`0 0 22px \${p.glow}, inset 0 0 10px rgba(255, 255, 255, 0.25)\`,
            animation: \`\${p.animationType} \${p.duration}s ease-in-out \${p.delay}s infinite alternate\`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
`;

fs.writeFileSync('src/components/animations/FloatingParticles.tsx', bubbleCode);
console.log("✅ FloatingParticles updated with medium-sized visible glass bubbles!");
