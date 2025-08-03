
"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Trophy } from "lucide-react";

const achievements = [
  "Top 4 in 57,000+ Developers across India",
  "Finalist at Microsoft Powered Hackathon 'Code Cubicle'",
  "Regional Demo Day Pune SBI LIFE Hackathon (Only Solo Competitor)",
];

const particleCount = 80;

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
          left: `${10 + Math.random() * 80}%`, // Distribute horizontally
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
      // Start of transition: show particles & start glitch
      setShowParticles(true);
      setIsAnimating(true);
  
      // Hide particles after a short burst
      setTimeout(() => {
        setShowParticles(false);
      }, 400); 
  
      // Middle of transition: change text after glitch animation has played
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        setKey(prevKey => prevKey + 1);
        setIsAnimating(false);
  
        // End of transition: show another burst of particles as new text settles
        setShowParticles(true);
        setTimeout(() => {
          setShowParticles(false);
        }, 400);
  
      }, 600); // This should match the glitch animation duration
  
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-center overflow-hidden relative">
        <div 
            key={key}
            className={cn(
                "text-center text-2xl md:text-3xl font-headline font-bold text-foreground/90 uppercase",
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
