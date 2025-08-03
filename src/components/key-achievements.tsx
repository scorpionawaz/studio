"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const achievements = [
  "Top 4 in 57,000+ Developers across India",
  "Finalist at Microsoft Powered Hackathon 'Code Cubicle'",
  "Regional Demo Day Pune SBI LIFE Hackathon (Only Solo Competitor)",
];

const KeyAchievements = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % achievements.length);
      setKey(prevKey => prevKey + 1);
    }, 4000); // Change achievement every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary border-b border-border/40 w-full h-20 flex items-center justify-center overflow-hidden">
        <div 
            key={key}
            className={cn(
                "text-center text-lg md:text-xl font-semibold text-foreground/80 animate-glitch"
            )}
        >
            <p>{achievements[index]}</p>
        </div>
    </div>
  );
};

export default KeyAchievements;
