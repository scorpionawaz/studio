"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  Code,
  GitBranch,
  Cloud,
  Lock,
  Cpu,
  Server,
  Database,
  Bot,
} from "lucide-react";

const icons = [
  { icon: <Code />, name: 'Code' },
  { icon: <GitBranch />, name: 'GitBranch' },
  { icon: <Cloud />, name: 'Cloud' },
  { icon: <Lock />, name: 'Lock' },
  { icon: <Cpu />, name: 'Cpu' },
  { icon: <Server />, name: 'Server' },
  { icon: <Database />, name: 'Database' },
  { icon: <Bot />, name: 'Bot' },
];

const WindyIcon = ({ icon, index }: { icon: React.ReactNode, index: number }) => {
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const top = `${Math.random() * 100}%`;
    const scale = `${Math.random() * 0.5 + 0.2}`;
    const animationDelay = `${Math.random() * 20}s`;
    const animationDuration = `${10 + Math.random() * 10}s`;

    setStyle({
      top,
      transform: `scale(${scale})`,
      animationDelay,
      animationDuration,
    });
  }, []);

  return (
    <div
      className="absolute text-muted-foreground/30 animate-wind-blow"
      style={style}
    >
      {icon}
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-screen flex items-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             {icons.map((item, index) => (
              <WindyIcon key={index} icon={item.icon} index={index}/>
            ))}
          </div>
          
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center z-10">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-6 text-left h-full justify-center">
              <div>
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
                  <div className="flex justify-start gap-4 mt-6">
                    <Link href="/projects">
                      <Button size="lg" variant="outline" className="hover:animate-electric-shock">
                        View My Work
                        <MoveRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
              </div>
            </div>

            {/* Right Column: Blended Image */}
            <div className="h-full flex items-center justify-center relative">
               <div className="w-full h-3/4 [mask-image:linear-gradient(to_left,black_60%,transparent)]">
                  <Image
                    src="https://placehold.co/800x600.png"
                    alt="Developer workspace"
                    width={800}
                    height={600}
                    data-ai-hint="modern developer workspace"
                    className="w-full h-full object-cover rounded-2xl"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Photo Slider Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
              A Glimpse Into My World
            </h2>
            <div className="w-full max-w-5xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
