
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";


const techIcons = [
  // Python
  { d: "M12.23,8.42L15.05,5.6L12.23,2.78L15.05,0H21.2V6.15L18.38,8.97L21.2,11.8V18H15.05L12.23,15.18L9.4,18H3.25V11.8L6.07,8.97L3.25,6.15V0H9.4L12.23,2.78L9.4,5.6L12.23,8.42ZM18.38,2.78V6.15L15.05,9.49V12.23L18.38,15.18V12.23H21.2V9.4H18.38V6.15H15.05L18.38,2.78ZM6.07,2.78L9.4,6.15V9.4H6.07V12.23L9.4,15.18V12.23H12.23V9.4H9.4V6.15L6.07,2.78Z", viewBox: "0 0 24 18" },
  // React
  { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.29-8.71a.996.996 0 0 1 1.41 0l3.59 3.59 8.29-8.29a.996.996 0 1 1 1.41 1.41l-9 9a.996.996 0 0 1-1.41 0l-4.29-4.29a.996.996 0 0 1 0-1.41z", viewBox: "0 0 24 24" },
  // Django
  { d: "M4 2h16v2H4zM4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z", viewBox: "0 0 24 24"},
  // Flask
  { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z", viewBox: "0 0 24 24"},
  // AWS
  { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z", viewBox: "0 0 24 24" },
  // LLM - using a brain icon
  { d: "M12 2C9.24 2 7 4.24 7 7v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7c0-3.31 2.69-6 6-6s6 2.69 6 6v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7c0-2.76-2.24-5-5-5zm-5 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm10 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", viewBox: "0 0 24 24" },
  // Next.js - simple N
  { d: "M10 4H4v16h6v-6.81l6 6.81V4h-6v6.19L8.19 4H10z", viewBox: "0 0 24 24"}
];

const SvgIcon = ({ d, size = 48, viewBox="0 0 24 24" }: { d: string; size?: number, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    fill="currentColor"
    className="text-accent/20"
  >
    <path d={d} />
  </svg>
);

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
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `scale(${0.5 + Math.random() * 0.5})`,
                },
            };
        });
        setIcons(generatedIcons);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className="absolute animate-fall"
                    style={icon.style}
                >
                    <SvgIcon d={icon.d} size={48} viewBox={icon.viewBox} />
                </div>
            ))}
        </div>
    );
};


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
               <IconRain />
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
