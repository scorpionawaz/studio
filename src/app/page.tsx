"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";
import { cn } from "@/lib/utils";

const SvgIcon = ({ d, size = 48 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
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
        { name: 'Django', icon: <SvgIcon d="M4 2H20V4H4V2ZM4 5H20V7H4V5ZM4 8H20V10H4V8ZM4 11H20V13H4V11ZM4 14H20V16H4V14ZM4 17H20V19H4V17ZM4 20H20V22H4V20Z"/>},
        { name: 'Flask', icon: <SvgIcon d="M12 2C10.3431 2 9 3.34315 9 5V8H6C4.34315 8 3 9.34315 3 11V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V11C21 9.34315 19.6569 8 18 8H15V5C15 3.34315 13.6569 2 12 2ZM12 4C12.5523 4 13 4.44772 13 5V8H11V5C11 4.44772 11.4477 4 12 4ZM5 11C5 10.4477 5.44772 10 6 10H18C18.5523 10 19 10.4477 19 11V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z M8 13V16H10V13H8ZM14 13V16H16V13H14Z"/>},
        { name: 'SQL', icon: <SvgIcon d="M4 3H20C20.5523 3 21 3.44772 21 4V6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6V4C3 3.44772 3.44772 3 4 3ZM4 9H20C20.5523 9 21 9.44772 21 10V12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12V10C3 9.44772 3.44772 9 4 9ZM4 15H20C20.5523 15 21 15.4477 21 16V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V16C3 15.4477 3.44772 15 4 15Z"/>},
        { name: 'Google SDK', icon: <SvgIcon d="M12.0001 1.99999C11.6389 1.99615 11.2829 2.11544 10.9922 2.3396L3.29311 8.23259C2.71961 8.68009 2.68411 9.50859 3.20811 10.0326L7.00911 13.8336C7.53311 14.3576 8.36161 14.3221 8.80911 13.7486L12.0001 9.94759L15.1911 13.7486C15.6386 14.3221 16.4671 14.3576 16.9911 13.8336L20.7921 10.0326C21.3161 9.50859 21.2816 8.68009 20.7071 8.23259L13.0081 2.3396C12.7174 2.11544 12.3614 1.99615 12.0001 1.99999Z M12.0001 11.0526L8.14011 14.9116C7.61611 15.4356 7.65161 16.2641 8.22511 16.7116L12.0001 20.0526L15.7751 16.7116C16.3486 16.2641 16.3841 15.4356 15.8601 14.9116L12.0001 11.0526Z" /> },
        { name: 'LLaMA', icon: <SvgIcon d="M4 5V19H6V14L8 15V13L6 12H11V5H4ZM13 5V19H15V14L17 15V13L15 12H20V5H13Z" />},
    ].flatMap(el => [el,el,el,el]); // Quadruple the icons for a denser feel

  const [styles, setStyles] = React.useState<React.CSSProperties[]>([]);

  React.useEffect(() => {
    setStyles(
      icons.map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (styles.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      {icons.map((item, index) => (
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
      img: "https://placehold.co/600x400.png",
      dataAiHint: "certificate award",
      desc: "Awarded 'Innovator of the Year' for my work on Project Alpha.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "code screen",
      desc: "Lead developer on a project that reached 1 million active users.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "team collaboration",
      desc: "Successfully managed and delivered three major products ahead of schedule.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "presentation stage",
      desc: "Keynote speaker at the International Developer Conference 2023.",
    },
    {
      img: "https://placehold.co/600x400.png",
      dataAiHint: "open source logo",
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
    <div className="flex flex-col min-h-screen">
       <KeyAchievements />
      <main className="flex-1">
        <section id="achievements" className="w-full h-[calc(100vh-80px)] flex items-center bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center z-10">
            {/* Left Column: Text Content & Floating Icons */}
            <div className="relative flex flex-col space-y-6 text-left h-full justify-center">
              <div className="absolute -inset-8 z-0 w-[120%] h-full [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]">
                <FallingIcons />
              </div>

              <div className="relative z-10">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
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
            <div className="h-[500px] flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-full h-full flex items-center justify-center">
                    {isMounted && achievements.map((achievement, index) => {
                        const offset = (index - currentIndex + achievements.length) % achievements.length;
                        
                        const isVisible = offset < 3;
                        const isCenter = offset === 1;

                        const x = isVisible ? (offset - 1) * 50 : (offset > achievements.length / 2 ? -50 : 50);
                        const scale = isVisible ? (isCenter ? 1.2 : 0.9) : 0.8;
                        const opacity = isVisible ? 1 : 0;
                        
                        let maskImage = 'none';
                        if (offset === 0) { // previous card (left)
                            maskImage = 'linear-gradient(to right, transparent 0%, black 50%)';
                        } else if (offset === 2) { // next card (right)
                             maskImage = 'linear-gradient(to left, transparent 0%, black 50%)';
                        }

                        return (
                            <div
                                key={index}
                                className="absolute w-[450px] transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(${x}%) scale(${scale})`,
                                    opacity: opacity,
                                    zIndex: isCenter ? 10 : 1,
                                    WebkitMaskImage: maskImage,
                                    maskImage: maskImage,
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
                        );
                    })}
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
