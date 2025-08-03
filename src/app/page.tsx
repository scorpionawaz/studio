
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";


export default function Home() {
  const achievements = [
    {
      img: "/nawaz.png",
      dataAiHint: "Google Cloud hackathon winner",
      desc: "Awarded 'Break Through Concept Award' for Project AI-Charya.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "developer award",
      desc: "Lead developer on a project that reached 1 million active users.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "hackathon winner",
      desc: "Successfully managed and delivered three major products ahead of schedule.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "developer award",
      desc: "Keynote speaker at the International Developer Conference 2023.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "hackathon winner",
      desc: "Top contributor to a popular open-source machine learning library.",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
     if (!isMounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMounted, achievements.length]);

  return (
    <div className="flex flex-col min-h-screen bg-background/95">
       <KeyAchievements />
      <main className="flex-1">
        <section id="achievements" className="w-full h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="relative flex flex-col space-y-6 text-left h-full justify-center">
              <div className="relative z-10">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none">
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
