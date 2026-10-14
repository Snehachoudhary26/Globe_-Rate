const fs = require('fs');

const minimalBubbleCode = `"use client";
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
    // Exactly 8 minimal, well-separated bubbles positioned gently around the screen margins
    const separatedBubbles: Particle[] = [
      {
        id: 1,
        x: 3, // Far left top
        y: 18,
        size: 22,
        duration: 10,
        delay: -2,
        bg: "rgba(255, 0, 122, 0.28)",
        border: "rgba(255, 0, 122, 0.55)",
        glow: "rgba(255, 0, 122, 0.20)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 2,
        x: 6, // Far left bottom
        y: 74,
        size: 24,
        duration: 12,
        delay: -5,
        bg: "rgba(168, 85, 247, 0.28)",
        border: "rgba(168, 85, 247, 0.55)",
        glow: "rgba(168, 85, 247, 0.20)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 3,
        x: 93, // Far right top
        y: 16,
        size: 24,
        duration: 11,
        delay: -3,
        bg: "rgba(168, 85, 247, 0.28)",
        border: "rgba(168, 85, 247, 0.55)",
        glow: "rgba(168, 85, 247, 0.20)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 4,
        x: 95, // Far right bottom
        y: 72,
        size: 22,
        duration: 13,
        delay: -7,
        bg: "rgba(255, 0, 122, 0.28)",
        border: "rgba(255, 0, 122, 0.55)",
        glow: "rgba(255, 0, 122, 0.20)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 5,
        x: 88, // Right middle margin
        y: 44,
        size: 20,
        duration: 9,
        delay: -4,
        bg: "rgba(6, 182, 212, 0.25)",
        border: "rgba(6, 182, 212, 0.50)",
        glow: "rgba(6, 182, 212, 0.15)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 6,
        x: 10, // Left middle margin
        y: 46,
        size: 20,
        duration: 11,
        delay: -6,
        bg: "rgba(250, 204, 21, 0.25)",
        border: "rgba(250, 204, 21, 0.50)",
        glow: "rgba(250, 204, 21, 0.15)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 7,
        x: 48, // Top center whitespace
        y: 6,
        size: 24,
        duration: 10,
        delay: -1,
        bg: "rgba(255, 0, 122, 0.26)",
        border: "rgba(255, 0, 122, 0.50)",
        glow: "rgba(255, 0, 122, 0.18)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 8,
        x: 52, // Bottom center whitespace
        y: 92,
        size: 22,
        duration: 12,
        delay: -8,
        bg: "rgba(168, 85, 247, 0.26)",
        border: "rgba(168, 85, 247, 0.50)",
        glow: "rgba(168, 85, 247, 0.18)",
        animationType: "bubbleFloatSway",
      },
    ];

    setParticles(separatedBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full backdrop-blur-[1px]"
          style={{
            left: \`\${p.x}%\`,
            top: \`\${p.y}%\`,
            width: \`\${p.size}px\`,
            height: \`\${p.size}px\`,
            backgroundColor: p.bg,
            border: \`1.2px solid \${p.border}\`,
            boxShadow: \`0 0 12px \${p.glow}\`,
            animation: \`\${p.animationType} \${p.duration}s ease-in-out \${p.delay}s infinite alternate\`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
`;

fs.writeFileSync('src/components/animations/FloatingParticles.tsx', minimalBubbleCode);
console.log("✅ Replaced cluster with 8 minimal, well-separated medium-small bubbles!");
