"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Code, BrainCircuit, ShieldCheck, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { type EmblaCarouselType } from 'embla-carousel-react';

const icons = [
  { icon: <Code className="h-10 w-10 text-accent" />, name: "Python" },
  { icon: <BrainCircuit className="h-10 w-10 text-accent" />, name: "LLMs" },
  { icon: <ShieldCheck className="h-10 w-10 text-accent" />, name: "Security" },
  { icon: <TerminalSquare className="h-10 w-10 text-accent" />, name: "SDKs" },
  { icon: <Code className="h-10 w-10 text-accent" />, name: "Next.js" },
  { icon: <BrainCircuit className="h-10 w-10 text-accent" />, name: "AI" },
];

const achievementsData = [
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "award certificate",
    title: "Innovative Project Award",
    description: "Recognized for developing a groundbreaking AI-driven data analysis tool.",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "team collaboration",
    title: "Top Performer Recognition",
    description: "Awarded for exceptional performance and leadership in a fast-paced team environment.",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "github contribution graph",
    title: "Open Source Contributor",
    description: "Active contributor to major open-source projects, including React and Next.js.",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "public speaking tech",
    title: "Tech Conference Speaker",
    description: "Invited to speak at international conferences on the future of web development.",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "hackathon winner",
    title: "Hackathon Winner",
    description: "First place in a 24-hour hackathon for creating a real-time collaborative coding app.",
  },
];

// Particle Component
const Particle = ({ onComplete }: { onComplete: () => void }) => {
  const timeToLive = 1000;
  
  useEffect(() => {
    const timer = setTimeout(onComplete, timeToLive);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 5 + 2}px`,
    height: `${Math.random() * 5 + 2}px`,
    background: `hsl(${Math.random() * 360}, 100%, 70%)`,
    borderRadius: '50%',
    animation: `particle-burst ${timeToLive / 1000}s ease-out forwards`,
  };

  return <div style={style}></div>;
};

// Celebration Effect Component
const CelebrationEffect = ({ trigger }: { trigger: any }) => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    if (trigger > 0) {
      const newParticles = Array.from({ length: 30 }, (_, i) => Date.now() + i);
      setParticles(newParticles);
    }
  }, [trigger]);

  const handleComplete = (id: number) => {
    setParticles(prev => prev.filter(pId => pId !== id));
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((id) => (
        <Particle key={id} onComplete={() => handleComplete(id)} />
      ))}
    </div>
  );
};


export default function Home() {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [celebrationTrigger, setCelebrationTrigger] = useState(0);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      if(newIndex !== current) {
         setCurrent(newIndex);
         setCelebrationTrigger(prev => prev + 1);
      }
    };

    api.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api, scrollNext, current]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-screen flex items-center bg-background relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>
          
           {/* Falling Icons */}
           <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            {icons.map((item, index) => (
                <div
                key={index}
                className="absolute animate-fall"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                }}
                >
                {item.icon}
                </div>
            ))}
          </div>


          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center z-10">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-6 text-left">
              <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                John Doe
              </h1>
              <p className="text-2xl text-accent font-medium tracking-wider">
                Greater Software Developer
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build beautiful, responsive, and highly performant web
                applications with a focus on user experience and clean code.
              </p>
              <div className="flex justify-start gap-4">
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="hover:animate-electric-shock">
                    View My Work
                    <MoveRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Achievements Carousel */}
            <div className="h-[600px] flex items-center justify-center">
                 <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                        axis: 'y',
                    }}
                    orientation="vertical"
                    className="w-full max-w-md h-full"
                >
                    <CarouselContent className="h-full">
                    {achievementsData.map((achievement, index) => (
                        <CarouselItem key={index} className="pt-4 md:basis-1/3">
                            <div className="p-1 h-full flex items-center justify-center relative" ref={index === current ? carouselWrapperRef : null}>
                                <Card
                                    className={cn(
                                        "w-[80%] h-auto bg-card/30 backdrop-blur-md border border-accent/20 overflow-hidden transition-all duration-500 ease-in-out shadow-lg shadow-accent/10",
                                        index === current ? "scale-110 opacity-100" : "scale-75 opacity-40"
                                    )}
                                >
                                    <CardContent className="flex flex-col items-center justify-center p-0">
                                      <Image
                                          src={achievement.imageUrl}
                                          alt={achievement.title}
                                          width={400}
                                          height={600}
                                          data-ai-hint={achievement.hint}
                                          className="w-full h-auto object-cover"
                                      />
                                      <div className="p-4 text-center">
                                          <h3 className="font-bold text-lg text-primary">{achievement.title}</h3>
                                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                      </div>
                                    </CardContent>
                                </Card>
                                 {index === current && <CelebrationEffect trigger={celebrationTrigger} />}
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
          </div>
        </section>

        {/* Photo Slider Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
              A Glimpse Into My World
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden bg-secondary border-border hover:border-accent transition-colors">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Image
                          src="https://placehold.co/600x400.png"
                          alt="Photo of John Doe"
                          width={600}
                          height={400}
                          data-ai-hint="professional headshot"
                          className="w-full h-auto object-cover aspect-square"
                        />
                        <div className="p-6 text-center">
                          <p className="text-muted-foreground">
                            A passionate developer, always exploring new horizons in technology and design.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card className="overflow-hidden bg-secondary border-border hover:border-accent transition-colors">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Image
                          src="https://placehold.co/600x400.png"
                          alt="Workspace"
                          width={600}
                          height={400}
                          data-ai-hint="modern workspace"
                          className="w-full h-auto object-cover aspect-square"
                        />
                         <div className="p-6 text-center">
                          <p className="text-muted-foreground">
                            My creative space where ideas come to life. Clean, minimal, and focused.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden bg-secondary border-border hover:border-accent transition-colors">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Image
                          src="https://placehold.co/600x400.png"
                          alt="Side Project"
                          width={600}
                          height={400}
                          data-ai-hint="laptop code"
                          className="w-full h-auto object-cover aspect-square"
                        />
                         <div className="p-6 text-center">
                          <p className="text-muted-foreground">
                           When not coding professionally, I love working on personal projects that challenge me.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

      </main>
    </div>
  );
}
