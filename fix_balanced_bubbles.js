const fs = require('fs');

const balancedBubbleCode = `"use client";
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
    // Exactly 11 well-spaced bubbles: Framing corners, edges, and 2-3 in the open middle
    const balancedLayout: Particle[] = [
      // --- 4 CORNERS ---
      {
        id: 1,
        x: 4,  // Top-Left Corner
        y: 8,
        size: 24,
        duration: 11,
        delay: -2,
        bg: "rgba(255, 0, 122, 0.28)",
        border: "rgba(255, 0, 122, 0.60)",
        glow: "rgba(255, 0, 122, 0.20)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 2,
        x: 93, // Top-Right Corner
        y: 10,
        size: 24,
        duration: 12,
        delay: -4,
        bg: "rgba(168, 85, 247, 0.28)",
        border: "rgba(168, 85, 247, 0.60)",
        glow: "rgba(168, 85, 247, 0.20)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 3,
        x: 5,  // Bottom-Left Corner
        y: 88,
        size: 22,
        duration: 13,
        delay: -6,
        bg: "rgba(168, 85, 247, 0.28)",
        border: "rgba(168, 85, 247, 0.60)",
        glow: "rgba(168, 85, 247, 0.20)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 4,
        x: 94, // Bottom-Right Corner
        y: 86,
        size: 24,
        duration: 10,
        delay: -8,
        bg: "rgba(255, 0, 122, 0.28)",
        border: "rgba(255, 0, 122, 0.60)",
        glow: "rgba(255, 0, 122, 0.20)",
        animationType: "bubbleFloatUp",
      },

      // --- SIDE & TOP EDGES ---
      {
        id: 5,
        x: 6,  // Left Edge (Upper)
        y: 38,
        size: 22,
        duration: 10,
        delay: -3,
        bg: "rgba(6, 182, 212, 0.25)",
        border: "rgba(6, 182, 212, 0.55)",
        glow: "rgba(6, 182, 212, 0.15)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 6,
        x: 7,  // Left Edge (Lower)
        y: 62,
        size: 20,
        duration: 12,
        delay: -7,
        bg: "rgba(250, 204, 21, 0.25)",
        border: "rgba(250, 204, 21, 0.55)",
        glow: "rgba(250, 204, 21, 0.15)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 7,
        x: 91, // Right Edge (Upper)
        y: 36,
        size: 22,
        duration: 11,
        delay: -5,
        bg: "rgba(250, 204, 21, 0.25)",
        border: "rgba(250, 204, 21, 0.55)",
        glow: "rgba(250, 204, 21, 0.15)",
        animationType: "bubbleFloatSway",
      },
      {
        id: 8,
        x: 90, // Right Edge (Lower)
        y: 62,
        size: 20,
        duration: 13,
        delay: -1,
        bg: "rgba(6, 182, 212, 0.25)",
        border: "rgba(6, 182, 212, 0.55)",
        glow: "rgba(6, 182, 212, 0.15)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 9,
        x: 50, // Top Center Edge
        y: 5,
        size: 22,
        duration: 12,
        delay: -9,
        bg: "rgba(168, 85, 247, 0.26)",
        border: "rgba(168, 85, 247, 0.55)",
        glow: "rgba(168, 85, 247, 0.18)",
        animationType: "bubbleFloatUp",
      },

      // --- 2 BUBBLES IN OPEN MIDDLE WHITESPACE ---
      {
        id: 10,
        x: 34, // Gentle Upper-Center
        y: 28,
        size: 22,
        duration: 11,
        delay: -4,
        bg: "rgba(255, 0, 122, 0.26)",
        border: "rgba(255, 0, 122, 0.55)",
        glow: "rgba(255, 0, 122, 0.18)",
        animationType: "bubbleFloatUp",
      },
      {
        id: 11,
        x: 68, // Gentle Lower-Center
        y: 72,
        size: 22,
        duration: 13,
        delay: -6,
        bg: "rgba(168, 85, 247, 0.26)",
        border: "rgba(168, 85, 247, 0.55)",
        glow: "rgba(168, 85, 247, 0.18)",
        animationType: "bubbleFloatSway",
      },
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
            left: \`\${p.x}%\`,
            top: \`\${p.y}%\`,
            width: \`\${p.size}px\`,
            height: \`\${p.size}px\`,
            backgroundColor: p.bg,
            border: \`1.2px solid \${p.border}\`,
            boxShadow: \`0 0 14px \${p.glow}\`,
            animation: \`\${p.animationType} \${p.duration}s ease-in-out \${p.delay}s infinite alternate\`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
`;

fs.writeFileSync('src/components/animations/FloatingParticles.tsx', balancedBubbleCode);
console.log("✅ Set exactly 11 bubbles: corners, edges, and 2-3 in middle whitespace!");
