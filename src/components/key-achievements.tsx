"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Trophy } from "lucide-react";

const achievements = [
  "Top 4 in 57,000+ Developers across India",
  "Finalist at Microsoft Powered Hackathon 'Code Cubicle'",
  "Regional Demo Day Pune SBI LIFE Hackathon (Only Solo Competitor)",
];

const particleCount = 20;

const Particles = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => {
        const angle = (i / particleCount) * 2 * Math.PI;
        const x = Math.cos(angle);
        const y = Math.sin(angle);
        const style = {
          "--x": x,
          "--y": y,
          animationDelay: `${Math.random() * 200}ms`,
        } as React.CSSProperties;

        const Icon = Math.random() > 0.5 ? Star : Trophy;

        return (
          <div key={i} className="particle" style={style}>
            <Icon className="w-4 h-4" fill="currentColor" />
          </div>
        );
      })}
    </div>
  );
};


const KeyAchievements = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setShowParticles(true); // Start particles with glitch

      setTimeout(() => {
        setShowParticles(false); // End first burst
      }, 300);

      setTimeout(() => {
         setIndex((prevIndex) => (prevIndex + 1) % achievements.length);
         setKey(prevKey => prevKey + 1);
         setIsAnimating(false);
         
         // Second burst after text changes
         setShowParticles(true);
         setTimeout(() => {
            setShowParticles(false)
         }, 300);

      }, 600); // Duration of the glitch animation
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-center overflow-hidden relative">
        <div 
            key={key}
            className={cn(
                "text-center text-2xl md:text-3xl font-headline font-bold text-foreground/90",
                isAnimating && "animate-glitch"
            )}
             style={{
                textShadow: isAnimating ? 'none' : '0 0 8px hsl(var(--accent) / 0.8), 0 0 16px hsl(var(--accent) / 0.5)',
            }}
        >
            <p>{achievements[index]}</p>
        </div>
        <Particles active={showParticles} />
    </div>
  );
};

export default KeyAchievements;
