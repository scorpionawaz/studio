
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";
import { FaPython, FaReact, FaAws, FaGoogle, FaBrain, FaGears } from 'react-icons/fa6';


const techIcons = [
    { name: "Python", component: FaPython },
    { name: "React", component: FaReact },
    { name: "AWS", component: FaAws },
    { name: "Google", component: FaGoogle },
    { name: "LLM", component: FaBrain },
    { name: "Machine Learning", component: FaGears },
];

const IconComponent = ({ component, size = 48 }: { component: React.ElementType; size?: number; }) => {
    const Component = component;
    return (
        <Component
            size={size}
            className="text-accent/20"
        />
    );
};

const IconRain = () => {
    const [icons, setIcons] = React.useState<any[]>([]);

    React.useEffect(() => {
        const generatedIcons = Array.from({ length: 30 }).map((_, index) => {
            const baseIcon = techIcons[index % techIcons.length];
            return {
                ...baseIcon,
                id: index,
                style: {
                    left: `${Math.random() * 100}vw`,
                    animationDuration: `${5 + Math.random() * 5}s`,
                    animationDelay: `-${Math.random() * 10}s`,
                    transform: `scale(${0.5 + Math.random() * 0.5})`,
                },
            };
        });
        setIcons(generatedIcons);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className="absolute animate-fall"
                    style={icon.style}
                >
                    <IconComponent component={icon.component} size={48} />
                </div>
            ))}
        </div>
    );
};


export default function Home() {
  const achievements = [
    {
      img: "/nawaz.jpeg",
      dataAiHint: "Google Cloud hackathon winner",
      desc: "Awarded 'Break Through Concept Award' for Project AI-Charya.",
    },
    {
      img: "/nawaz.jpeg",
      dataAiHint: "developer award",
      desc: "Lead developer on a project that reached 1 million active users.",
    },
    {
      img: "/nawaz.jpeg",
      dataAiHint: "hackathon winner",
      desc: "Successfully managed and delivered three major products ahead of schedule.",
    },
    {
      img: "/nawaz.jpeg",
      dataAiHint: "developer award",
      desc: "Keynote speaker at the International Developer Conference 2023.",
    },
    {
      img: "/nawaz.jpeg",
      dataAiHint: "hackathon winner",
      desc: "Top contributor to a popular open-source machine learning library.",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);
  const [glitchKey, setGlitchKey] = React.useState(0);

  React.useEffect(() => {
    setIsMounted(true);
    const glitchInterval = setInterval(() => {
      setGlitchKey(key => key + 1);
    }, 5000); // Re-trigger glitch every 5 seconds
    return () => clearInterval(glitchInterval);
  }, []);

  React.useEffect(() => {
     if (!isMounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMounted, achievements.length]);

  return (
    <div>
       <IconRain />
       <KeyAchievements />
      <main className="flex-1">
        <section id="achievements" className="w-full h-[calc(100vh-80px)] flex items-center">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-6 text-left h-full justify-center">
              <div className="z-10">
                <h1 key={glitchKey} className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none text-accent">
                  Nawaz Sayyad
                </h1>
                <p className="text-2xl text-accent font-medium tracking-wider">
                  Software System Architect
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I build beautiful, responsive, and highly performant web
                  applications with a focus on user experience and clean code.
                </p>
                <div className="flex justify-start gap-4 mt-6">
                  <Link href="/projects">
                    <Button size="lg" variant="outline">
                      View My Work
                      <MoveRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Achievement Carousel */}
            <div className="h-[500px] flex items-center justify-center relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
               <div className="absolute w-full h-full flex items-center justify-center">
                    {isMounted && achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="absolute w-[450px] transition-all duration-700 ease-in-out"
                            style={{
                                transform: `translateX(${(index - currentIndex) * 100}%) scale(${1 - Math.abs(index - currentIndex) * 0.2})`,
                                opacity: Math.abs(index - currentIndex) < 2 ? 1 : 0,
                                zIndex: achievements.length - Math.abs(index - currentIndex),
                            }}
                        >
                            <Card className="overflow-hidden bg-secondary/30 backdrop-blur-sm border-accent/20 animate-subtle-glow">
                                <CardContent className="p-0">
                                    <Image
                                        src={achievement.img}
                                        alt={achievement.desc}
                                        width={600}
                                        height={400}
                                        data-ai-hint={achievement.dataAiHint}
                                        className="w-full h-auto object-cover aspect-[4/3]"
                                    />
                                    <div className="p-4">
                                        <p className="text-muted-foreground text-sm text-center">
                                            {achievement.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );

    

}
