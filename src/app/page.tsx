import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Award,
  Github,
  Linkedin,
  MoveRight,
  Star,
  Code,
  Component,
  Database,
  PenTool,
  ArrowDown,
  Lock,
  BrainCircuit,
  Server,
  Cloud,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { SiPython, SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";


const orbitingSkills = [
  { icon: SiPython, name: "Python", size: 48 },
  { icon: SiNextdotjs, name: "Next.js", size: 48 },
  { icon: SiTypescript, name: "TypeScript", size: 44 },
  { icon: BrainCircuit, name: "LLMs", size: 48 },
  { icon: Lock, name: "Security", size: 48 },
  { icon: SiFirebase, name: "Firebase", size: 48 },
  { icon: Server, name: "SDKs", size: 48 },
  { icon: SiTailwindcss, name: "Tailwind", size: 48 },
];

const achievements = [
  {
    icon: Award,
    title: "Innovative Project Award",
    description: "Awarded for creating a project with significant real-world impact.",
  },
  {
    icon: Star,
    title: "Top Performer",
    description: "Recognized for outstanding performance and contributions.",
  },
  {
    icon: Github,
    title: "Open Source Contributor",
    description: "Active contributor to several popular open-source projects.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-screen flex items-center justify-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-zinc-800/20 animate-background-pan [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          
          <div className="relative flex flex-col items-center justify-center space-y-4">
              {/* Orbiting Skills */}
              <div className="absolute w-[500px] h-[500px] border-2 border-dashed border-accent/20 rounded-full animate-[spin_40s_linear_infinite]">
                {orbitingSkills.map((skill, index) => {
                  const angle = (index / orbitingSkills.length) * 360;
                  return (
                    <div
                      key={skill.name}
                      className="absolute top-1/2 left-1/2 -m-6 flex flex-col items-center"
                      style={{
                        transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`,
                      }}
                    >
                      <div className="w-20 h-20 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-accent/30 shadow-lg hover:border-accent transition-all hover:scale-110">
                        <skill.icon size={skill.size} className="text-accent" />
                      </div>
                      <span className="mt-2 text-xs font-semibold text-primary/80 bg-background/50 px-2 py-1 rounded-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Central Text */}
              <div className="text-center z-10 bg-background/50 backdrop-blur-sm p-8 rounded-full border border-zinc-800">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  John Doe
                </h1>
                <p className="text-2xl text-accent font-medium tracking-wider">
                  Software Engineer & Designer
                </p>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mt-4">
                  I build beautiful, responsive, and highly performant web
                  applications with a focus on user experience and clean code.
                </p>
                 <div className="flex justify-center gap-4 pt-6">
                    <Link href="/projects">
                      <Button size="lg" variant="outline">
                        View My Work
                        <MoveRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
              </div>
          </div>
           <div className="absolute bottom-10 animate-bounce">
              <ArrowDown className="h-8 w-8 text-accent"/>
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

        {/* Achievements Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
              My Achievements
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="bg-background border-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <achievement.icon className="h-10 w-10 text-accent" />
                    <CardTitle className="font-headline text-primary">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
