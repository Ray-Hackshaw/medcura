"use client";

import React, { useEffect, useState } from "react";

const PulsingBackground = () => {
  const [lines, setLines] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = [];
      for (let i = 0; i < 20; i++) {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 20;
        const endY = startY + (Math.random() - 0.5) * 20;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        const opacity = 0.1 + Math.random() * 0.3;

        newLines.push(
          <line
            key={i}
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke="currentColor"
            strokeWidth="1"
            style={{
              animation: `pulse ${duration}s ${delay}s infinite alternate`,
              opacity: opacity,
            }}
          />
        );
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 z-[1] bg-gradient-to-r from-slate-100 to-slate-400 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full text-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines}
      </svg>
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default PulsingBackground;
