
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";


const SvgIcon = ({ d, size = 48, viewBox="0 0 24 24" }: { d: string; size?: number, viewBox?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} />
  </svg>
);

const FallingIcons = () => {
    const icons = [
        { name: 'Python', icon: <SvgIcon d="M16.25 8.5C16.25 11.25 13.75 12.25 12 12.25C10.25 12.25 7.75 11.25 7.75 8.5C7.75 5.75 10.25 5.5 12 5.5C13.75 5.5 16.25 5.75 16.25 8.5ZM12 1C11.75 1 11.75 1.25 11.75 1.25V4.5H12C14.75 4.5 17.25 5 17.25 8.5C17.25 12 14.75 13.25 12 13.25C9.25 13.25 6.75 12 6.75 8.5C6.75 5 9.25 4.5 12 4.5H12.25V1.25C12.25 1.25 12.25 1 12 1Z M7.75 15.5C7.75 12.75 10.25 11.75 12 11.75C13.75 11.75 16.25 12.75 16.25 15.5C16.25 18.25 13.75 18.5 12 18.5C10.25 18.5 7.75 18.25 7.75 15.5ZM12 23C12.25 23 12.25 22.75 12.25 22.75V19.5H12C9.25 19.5 6.75 19 6.75 15.5C6.75 12 9.25 10.75 12 10.75C14.75 10.75 17.25 12 17.25 15.5C17.25 19 14.75 19.5 12 19.5H11.75V22.75C11.75 22.75 11.75 23 12 23Z"/> },
        { name: 'React', icon: <SvgIcon d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z M12 6.46411L13.7321 7.46411L14.7321 9.23205L12 10.7321L9.26795 9.23205L10.2679 7.46411L12 6.46411Z M6.46411 12L7.46411 10.2679L9.23205 9.26795L10.7321 12L9.23205 14.7321L7.46411 13.7321L6.46411 12Z M17.5359 12L16.5359 13.7321L14.7679 14.7321L13.2679 12L14.7679 9.26795L16.5359 10.2679L17.5359 12Z M12 17.5359L10.2679 16.5359L9.26795 14.7679L12 13.2679L14.7321 14.7679L13.7321 16.5359L12 17.5359Z"/> },
        { name: 'Flask', icon: <SvgIcon d="M12 2C10.3431 2 9 3.34315 9 5V8H6C4.34315 8 3 9.34315 3 11V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V11C21 9.34315 19.6569 8 18 8H15V5C15 3.34315 13.6569 2 12 2ZM12 4C12.5523 4 13 4.44772 13 5V8H11V5C11 4.44772 11.4477 4 12 4ZM5 11C5 10.4477 5.44772 10 6 10H18C18.5523 10 19 10.4477 19 11V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z M8 13V16H10V13H8ZM14 13V16H16V13H14Z"/>},
        { name: 'AWS', icon: <SvgIcon viewBox="0 0 48 48" d="M24.31,4.11a2.35,2.35,0,0,0-1.87-.21,2.4,2.4,0,0,0-1.4,1.4L13.3,23.54a2.3,2.3,0,0,0-.1,1.82,2.34,2.34,0,0,0,1.43,1.54l14.4,6.2a2.4,2.4,0,0,0,2.15-.1,2.37,2.37,0,0,0,1.29-1.58L39.89,9.15a2.37,2.37,0,0,0-2.37-2.83H26.31ZM22.7,35.19l-5.46-2.35L24,14.6,29.42,32.84Z M8.11,32.84,4,34.58a2.37,2.37,0,0,0-1.29,1.58L.1,43.43A2.37,2.37,0,0,0,2.47,46.26H13.69a2.37,2.37,0,0,0,2.37-2.83L14.24,36.56a2.37,2.37,0,0,0-1.43-1.54l-3-1.29A2.3,2.3,0,0,0,8.11,32.84Z"/> },
        { name: 'GCP', icon: <SvgIcon d="M11.19,15.11s-2-2.79-1.95-3.69,1-1.61,1-1.61,2.1-1.8,2.83-2.18,1.41-1,1.41-1l-2.06,3.4S11.19,15.11,11.19,15.11Zm2.62.42,1.31,2.21,2.09-3.4-1.23-.25ZM10.5,18.42l3,5.19,3.31-5.42-3.1-1.87Zm-3.19-9.08a7.3,7.3,0,0,0-1.12,4.46.27.27,0,0,1,0,.19,7.3,7.3,0,1,0,7.3-7.3A.27.27,0,0,1,16.29,7a7.3,7.3,0,0,0-8.98-2.3Zm13.43,5.19a5.19,5.19,0,1,1-10.38,0,5.19,5.19,0,0,1,10.38,0Z"/>},
        { name: 'Networking', icon: <SvgIcon d="M19,8a1,1,0,0,0-1-1H14.41l-2-2a1,1,0,0,0-.71-.29H11.59l-2,2H6A1,1,0,0,0,5,8v3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1Zm-4,9a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1Zm5-5a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1Zm-7,6H12v2h1Zm2,0h1v2H15Z"/>},
        { name: 'LLM', icon: <SvgIcon viewBox="0 0 512 512" d="M304 32C195.8 32 104.9 91.2 64 167.3c-2.7 5.2-1.2 11.5 3.5 14.9L128 224l-32 96c-4.2 12.5 4.3 25.5 17.5 27.5s25.5-4.3 27.5-17.5l25.1-75.3C185.7 300.9 243.3 336 312 336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm-56 224h-48v-32h48v32zm0-64h-48v-32h48v32zm0-64h-48v-32h48v32zm120-13.8V288c0 4.4-3.6 8-8 8s-8-3.6-8-8v-17.8c-23.4-12.2-40-36.4-40-64.2s16.6-52 40-64.2V128c0-4.4 3.6-8 8-8s8 3.6 8 8v13.8c23.4 12.2 40 36.4 40 64.2s-16.6 52-40 64.2zM392 192c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h16c44.2 0 80 35.8 80 80s-35.8 80-80 80H80c-26.5 0-48-21.5-48-48s21.5-48 48-48h32v-32H80c-44.2 0-80-35.8-80-80s35.8-80 80-80h16v32H64zM240 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80zm192-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"/>},
        { name: 'Security', icon: <SvgIcon d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>},
    ].flatMap(el => [el,el,el,el]); // Quadruple the icons for a denser feel

  const [styles, setStyles] = React.useState<React.CSSProperties[]>([]);

  React.useEffect(() => {
    setStyles(
      icons.map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 25}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      {styles.length > 0 && icons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-fall"
          style={styles[index]}
        >
          <div className="text-muted-foreground transform-gpu transition-transform hover:scale-110">
            {item.icon}
          </div>
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
            {/* Left Column: Text Content & Falling Icons */}
            <div className="relative flex flex-col space-y-6 text-left h-full justify-center">
               <div className="absolute -inset-8 z-0 w-full h-full [mask-image:linear-gradient(to_left,white,transparent_75%)]">
                <FallingIcons />
              </div>

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
            <div className="h-[500px] flex items-center justify-center relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)]">
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
