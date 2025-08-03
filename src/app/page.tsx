
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";


const techIcons = [
    { name: "Python", component: () => <path d="M49.4,25.9L49.4,25.9l0.1-0.1c0,0-0.1,0-0.1,0.1L19.2,1.3C18.6,0.5,17.7,0,16.7,0H8.3C7.4,0,6.5,0.5,5.9,1.3l-5.9,8v19.4 l5.9,8C6.5,47.5,7.4,48,8.3,48h8.3c1,0,1.9-0.5,2.5-1.3l14.6-14.6v0l0,0V32v-0.1h0v-0.1h0v-12h0v-0.1h0V19.8l0,0v0L49.4,25.9z M19.4,4.2l7.7,7.7h-7.2L19.4,4.2z M12.8,29.3H5.2v-7.1h7.7L12.8,29.3z M17.2,11.8l-7.7-7.7h7.2L17.2,11.8z M12.8,4.2l-7.7,7.7 h-4l7.7-7.7H12.8z M5.2,14.8v7.1h7.7l-7.7,7.7V14.8z M8.8,43.8l-7.7-7.7h4l7.7,7.7H8.8z M19.4,43.8l-7.7-7.7h7.2L19.4,43.8z M17.2,36.2l7.7,7.7h-7.2L17.2,36.2z M29.8,29.3l-7.7-7.7h7.7L29.8,29.3z M29.8,18.7l-7.7,7.7h-7.7l7.7-7.7H29.8z M34.2,21.6 l7.7-7.7h-4L34.2,21.6z M38.6,36.2l-7.7,7.7h-4l7.7-7.7H38.6z M43.1,14.8l-7.7-7.7h4l7.7,7.7H43.1z M40.1,22.2l-7.7,7.7h-4 l7.7-7.7H40.1z M32.5,4.2l7.7,7.7h-7.7L32.5,4.2z M32.5,43.8l7.7-7.7h-7.7L32.5,43.8z"/>, viewBox: "0 0 49.4 48" },
    { name: "React", component: () => <g><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g><ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" fill="none"/><ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1" fill="none"/><ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1" fill="none"/></g></g>, viewBox: "-12 -12 24 24" },
    { name: "AWS", component: () => <path d="M18.4,21.8c0.3,0.3,0.5,0.5,0.5,0.8c0,0.4-0.2,0.7-0.5,0.9c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.7-0.1-1-0.4l-1.3-1.1 c-0.4-0.4-0.6-0.8-0.6-1.3c0-0.3,0.1-0.7,0.4-1l7.2-6.5c0.3-0.2,0.6-0.4,1-0.4c0.4,0,0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1 c0,0.4-0.1,0.7-0.4,1l-5,4.6c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7L18.4,21.8z M13,24.1c-0.3-0.3-0.5-0.5-0.5-0.8 c0-0.4,0.2-0.7,0.5-0.9c0.2-0.2,0.5-0.3,0.8-0.3c0.4,0,0.7,0.1,1,0.4l1.3,1.1c0.4,0.4,0.6,0.8,0.6,1.3c0,0.3-0.1,0.7-0.4,1 L9.6,31.4c-0.3,0.2-0.6,0.4-1,0.4c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.7,0.4-1l5-4.6c0.2-0.2,0.3-0.5,0.3-0.7 S13.2,24.3,13,24.1z M27.2,14.3c0.3-0.3,0.5-0.5,0.5-0.8c0-0.4-0.2-0.7-0.5-0.9c-0.2-0.2-0.5-0.3-0.8-0.3c-0.4,0-0.7,0.1-1,0.4 l-1.3,1.1c-0.4,0.4-0.6,0.8-0.6,1.3c0,0.3,0.1,0.7,0.4,1l7.2,6.5c0.3,0.2,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1 c0,0.4-0.1,0.7-0.4,1l-5,4.6c-0.2,0.2-0.3,0.5-0.3,0.7c0,0.2,0.1,0.5,0.3,0.7l0.8,0.7c0.3,0.3,0.5,0.5,0.5,0.8 c0,0.4-0.2,0.7-0.5,0.9c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.7-0.1-1-0.4l-7.2-6.5c-0.3-0.2-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4 l-7.2,6.5c-0.3,0.3-0.6,0.4-1,0.4c-0.3,0-0.6-0.1-0.8-0.3c-0.3-0.2-0.5-0.5-0.5-0.9c0-0.3,0.2-0.6,0.5-0.8l0.8-0.7 c0.2-0.2,0.3-0.5,0.3-0.7c0-0.2-0.1-0.5-0.3-0.7l-5-4.6c-0.3-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.6-0.4,1-0.4 c0.3,0,0.7,0.2,1,0.4l7.2,6.5c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4l1.3-1.1c0.4-0.4,0.6-0.8,0.6-1.3c0-0.3-0.1-0.7-0.4-1 L18.1,5c-0.3-0.2-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4C15.8,5.7,15.7,6,15.7,6.4c0,0.4,0.1,0.7,0.4,1l5,4.6c0.2,0.2,0.3,0.5,0.3,0.7 s-0.1,0.5-0.3,0.7l-0.8,0.7c-0.3,0.3-0.5,0.5-0.5,0.8c0,0.4,0.2,0.7,0.5,0.9c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.1,1-0.4l7.2-6.5 C26.6,8.2,26.9,8,27.2,8s0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.1,0.7-0.4,1l-5,4.6c-0.2,0.2-0.3,0.5-0.3,0.7 C23,13.9,23,14.1,23.2,14.3L27.2,14.3z"/>, viewBox: "0 0 38.4 38.4"},
    { name: "Google", component: () => <path d="M12.0001 5.82422C12.0001 5.23438 11.9493 4.65625 11.8595 4.09766H6.15241V6.70312H9.36335C9.20319 7.42188 8.78913 8.35156 8.07038 8.81641V10.6055H9.98054C11.1993 9.47656 11.8359 7.94531 11.8359 6.15234H12.0001V5.82422Z M12.0001 12C10.1563 12 8.59382 11.0859 8.07038 9.64844H6.10163V11.4375C7.03132 13.2539 9.33991 14.5 12.0001 14.5C14.6602 14.5 16.9688 13.2539 17.8985 11.4375V9.64844H15.9297C15.4063 11.0859 13.8438 12 12.0001 12Z M4.5 12C4.5 10.5 4.9375 9.125 5.67969 8.01562V6.15234H3.75C2.8125 7.625 2.25 9.75 2.25 12C2.25 14.25 2.8125 16.375 3.75 17.8477H5.67969V15.9844C4.9375 14.875 4.5 13.5 4.5 12Z M12 3.5C13.9375 3.5 15.5 4.125 16.5 5.09375L14.75 6.75C14.25 6.25 13.25 5.75 12 5.75C10.1875 5.75 8.625 6.75 8.0625 8.3125H6.125V6.5C7.0625 4.6875 9.375 3.5 12 3.5Z" />, viewBox: "0 0 20 20"},
    { name: "LLM", component: () => <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5s-2.24-5-5-5h-1.5c-.83 0-1.5.67-1.5 1.5 0 .38.15.73.38.99.24.27.39.62.39 1.01 0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5c0-.38.15-.73.38-.99C10.62 6.24 10.77 5.89 10.77 5.5c0-.83-.67-1.5-1.5-1.5H8c-2.76 0-5 2.24-5 5s2.24 5 5 5h1.5c.83 0 1.5-.67 1.5-1.5z"/>, viewBox: "0 0 24 24" },
    { name: "Next.js", component: () => <path d="M9.13,17.52l-2.06,0l0-6.94l-2.3,6.94l-1.56,0l-2.33-6.94l0,6.94l-1.95,0l0-11.04l3.1,0l2.16,6.58l2.25-6.58l3.02,0l0,11.04Zm7.83-11.04l-3.33,11.04l-1.97,0l3.3-11.04l1.99,0Z"/>, viewBox: "0 0 24 24" },
    { name: "Machine Learning", component: () => <path d="M19.5 12.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-7 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-7 0c-1.38 0-2.5 1.12-2.5 2.5S3.12 17.5 4.5 17.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM19.5 4.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 9.5c1.38 0 2.5-1.12 2.5-2.5S13.38 4.5 12 4.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm-5-5C8.38 4.5 9.5 5.62 9.5 7s-1.12 2.5-2.5 2.5S4.5 8.38 4.5 7 5.62 4.5 7 4.5zM12.5 19.5l-1-2h-3l-1 2H5.5l5-10h3l5 10z"/>, viewBox: "0 0 24 24" },
];

const SvgIcon = ({ component, size = 48, viewBox = "0 0 24 24" }: { component: React.FC; size?: number; viewBox?: string }) => {
    const Component = component;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            fill="currentColor"
            className="text-accent/20"
        >
            <Component />
        </svg>
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
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {icons.map((icon) => (
                <div
                    key={icon.id}
                    className="absolute animate-fall"
                    style={icon.style}
                >
                    <SvgIcon component={icon.component} size={48} viewBox={icon.viewBox} />
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
      img: "https://placehold.co/600x401.png",
      dataAiHint: "developer award",
      desc: "Lead developer on a project that reached 1 million active users.",
    },
    {
      img: "https://placehold.co/600x402.png",
      dataAiHint: "hackathon winner",
      desc: "Successfully managed and delivered three major products ahead of schedule.",
    },
    {
      img: "https://placehold.co/600x403.png",
      dataAiHint: "developer award",
      desc: "Keynote speaker at the International Developer Conference 2023.",
    },
    {
      img: "https://placehold.co/600x404.png",
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
    <div className="flex flex-col min-h-screen bg-background/95 relative">
       <IconRain />
       <KeyAchievements />
      <main className="flex-1">
        <section id="achievements" className="w-full h-[calc(100vh-80px)] flex items-center relative">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="relative flex flex-col space-y-6 text-left h-full justify-center">
              <div className="relative z-10 [mask-image:linear-gradient(to_left,white_20%,transparent_80%)]">
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
