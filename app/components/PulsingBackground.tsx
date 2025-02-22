"use client";

import React, { useEffect, useState } from "react";

const PulsingBackground = () => {
  const [dots, setDots] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 50; i++) {
        const cx = Math.random() * 100;
        const cy = Math.random() * 100;
        const r = 2 + Math.random() * 3;
        const duration = 6 + Math.random() * 10;
        const delay = Math.random() * 5;
        const opacity = 0.1 + Math.random() * 0.4;

        newDots.push(
          <circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r={r}
            fill="currentColor"
            style={{
              animation: `pulse ${duration}s ${delay}s infinite alternate`,
              opacity: opacity,
            }}
          />
        );
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 z-[1] bg-gradient-to-r from-slate-100 to-slate-400 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full text-slate-200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dots}
      </svg>
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default PulsingBackground;
