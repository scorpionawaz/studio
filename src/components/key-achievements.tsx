
"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Trophy } from "lucide-react";

const achievements = [
  "🏆Top 4 in 57,000+ Developers across India🏆",
  "🏆Finalist at Microsoft Powered Hackathon 'Code Cubicle'🏆",
  "🏆Regional Demo Day Pune SBI LIFE Hackathon (Only Solo Competitor)🏆",
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
  const [animationClass, setAnimationClass] = useState("animate-fade-in-scale");
  const [showParticles, setShowParticles] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("animate-fade-out-scale");

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        setAnimationClass("animate-fade-in-scale");
        setIsGlitching(true); 
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 800);
        setTimeout(() => setIsGlitching(false), 400);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-center overflow-hidden relative">
        <div 
            className={cn(
                "text-center text-4xl font-headline font-bold text-foreground/90 uppercase",
                animationClass,
                isGlitching && "animate-glitch"
            )}
        >
            <p>{achievements[index]}</p>
        </div>
        <Particles active={showParticles} />
    </div>
  );
};

export default KeyAchievements;
