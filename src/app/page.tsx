
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import KeyAchievements from "@/components/key-achievements";


const techIcons = [
    { name: "Python", component: () => <path d="M41.4 1.4c-3.1-1.9-6.4-1.9-9.5 0l-28.5 16.5c-3.1 1.9-4.8 5.4-4.8 9.2v33c0 3.8 1.6 7.3 4.8 9.2l28.5 16.5c3.1 1.9 6.4 1.9 9.5 0l28.5-16.5c3.1-1.9 4.8-5.4 4.8-9.2v-33c0-3.8-1.6-7.3-4.8-9.2L41.4 1.4zM36.7 13.9c2.6 0 4.8 2.1 4.8 4.8v9.5c0 2.6-2.1 4.8-4.8 4.8h-4.8V13.9h4.8zM36.7 41.4h-9.5V28.5h-9.5v17.6c0 2.6-2.1 4.8-4.8 4.8H8.2c-2.6 0-4.8-2.1-4.8-4.8V41.4H13c2.6 0 4.8-2.1 4.8-4.8v-4.8h9.5v-9.5h-9.5v-4.8h4.8c2.6 0 4.8-2.1 4.8-4.8v-4.8h4.8c2.6 0 4.8 2.1 4.8 4.8l-0.1 9.6zM61.8 46.1c0 2.6-2.1 4.8-4.8 4.8h-4.8V36.7h4.8c2.6 0 4.8 2.1 4.8 4.8v4.6zM52.3 28.5v9.5h9.5V23.8c0-2.6 2.1-4.8 4.8-4.8h4.8c2.6 0 4.8 2.1 4.8 4.8v4.8H57.1c-2.6 0-4.8 2.1-4.8 4.8v4.8h-9.5v9.5h9.5v4.8h-4.8c-2.6 0-4.8 2.1-4.8 4.8v4.8h-4.8c-2.6 0-4.8-2.1-4.8-4.8v-9.5l0.1-0.2z"/>, viewBox: "0 0 80 80" },
    { name: "React", component: () => <g><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g><ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" fill="none"/><ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1" fill="none"/><ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1" fill="none"/></g></g>, viewBox: "-12 -12 24 24" },
    { name: "Django", component: () => <path d="M14.4 0H2.2C.4 0-.4 1.2.2 2.8l5.8 15.2.1.2c.4 1 1.2 1.6 2.2 1.6h12.2c1.8 0 2.7-1.2 2.2-2.8l-5.8-15.3-0.1-0.2C18.4 1 17.6.4 16.6.4L16.6.4c-1.2 0-2.3 1-2.2 2.2V2.8c.2 1.4 1.4 2.4 2.8 2.4h2.2L16 14.8c-.6 1.6-1.8 1.6-2.4 0L2.8 3.8h11.6V2.2C14.4 1 13.2 0 11.8 0H10c-1.2 0-2.2 1-2.2 2.2v.6h6.6v-.6C14.4 1 15.6 0 17 0h2.4c1.2 0 2.2 1 2.2 2.2v.6h-3.4c-1.4 0-2.4 1-2.4 2.4v.2c0 1.2 1 2.2 2.2 2.2h3.4c1.4 0 2.4-1 2.4-2.4v-2c0-1.8-1-3-2.6-3h-2.4c-1.2 0-2.2-1-2.2-2.2V2.8c0-1.2 1-2.2 2.2-2.2z"/>, viewBox: "0 0 20 20" },
    { name: "Flask", component: () => <path d="M17.58.42H6.42C2.88.42.42 2.88.42 6.42v11.16c0 3.54 2.46 6 6 6h11.16c3.54 0 6-2.46 6-6V6.42c0-3.54-2.46-6-6-6zm-3.57 18.25c-1.48 0-2.9-1.07-3.4-2.62l-2.07-5.91h2.89l1.17 3.65c.18.52.6.84 1.13.84.62 0 1.09-.43 1.28-1.01l1.1-3.48h2.9l-2.07 5.91c-.5 1.55-1.92 2.62-3.4 2.62zm5.72-8.3h-2.9l-1.05-3.3c-0.19-.58-0.66-1-1.28-1-.53 0-.95.32-1.13.84l-1.12 3.46h-2.9l2.08-5.9c.5-1.55 1.92-2.63 3.4-2.63s2.9 1.08 3.4 2.63l2.08 5.9z"/>, viewBox: "0 0 24 24"},
    { name: "AWS", component: () => <path d="M12.98.25a.3.3 0 00-.23.09L.36 12.02a.3.3 0 00-.01.4l5.36 6.37a.3.3 0 00.46.02l2.3-1.93a.3.3 0 00.03-.43l-3.2-3.8a.3.3 0 01-.02-.4L12.56.34a.3.3 0 00.42-.09zM23.65 11.64a.3.3 0 00-.24-.1L11.02.26a.3.3 0 00-.42.1l-2.1 2.48a.3.3 0 00.04.42l3.2 3.82a.3.3 0 01.02.4L6.4 18.84a.3.3 0 00-.03.43l2.3 1.93a.3.3 0 00.46-.02l14.52-17.2a.3.3 0 000-.41v-.33zM15.4 12.31a.3.3 0 00-.4-.02l-2.1 1.76a.3.3 0 000 .48l1.45 1.2a.3.3 0 00.38-.04l2.5-3a.3.3 0 00-.23-.48zM9.54 13.6a.3.3 0 00-.4.02L7.04 15.4a.3.3 0 000 .48l1.45 1.2a.3.3 0 00.38-.04l2.5-3a.3.3 0 00-.23-.48z M12.47 8.24a.3.3 0 00-.39.02l-2.1 1.76a.3.3 0 000 .48l1.45 1.2a.3.3 0 00.38-.04l2.5-3a.3.3 0 00-.23-.48z"/>, viewBox: "0 0 24 24"},
    { name: "LLM", component: () => <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5s-2.24-5-5-5h-1.5c-.83 0-1.5.67-1.5 1.5 0 .38.15.73.38.99.24.27.39.62.39 1.01 0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5c0-.38.15-.73.38-.99C10.62 6.24 10.77 5.89 10.77 5.5c0-.83-.67-1.5-1.5-1.5H8c-2.76 0-5 2.24-5 5s2.24 5 5 5h1.5c.83 0 1.5-.67 1.5-1.5z"/>, viewBox: "0 0 24 24" },
    { name: "Next.js", component: () => <path d="M9.13,17.52l-2.06,0l0-6.94l-2.3,6.94l-1.56,0l-2.33-6.94l0,6.94l-1.95,0l0-11.04l3.1,0l2.16,6.58l2.25-6.58l3.02,0l0,11.04Zm7.83-11.04l-3.33,11.04l-1.97,0l3.3-11.04l1.99,0Z"/>, viewBox: "0 0 24 24" }
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
    <div className="flex flex-col min-h-screen bg-background/95 relative">
       <IconRain />
       <KeyAchievements />
      <main className="flex-1">
        <section id="achievements" className="w-full h-[calc(100vh-80px)] flex items-center relative">
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
