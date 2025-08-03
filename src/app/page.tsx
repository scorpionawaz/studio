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
  BrainCircuit,
  Lock,
  Server,
} from "lucide-react";
import Link from "next/link";
import { SiPython, SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";


const skills = [
  { icon: SiPython, size: 48 },
  { icon: SiNextdotjs, size: 48 },
  { icon: SiTypescript, size: 44 },
  { icon: BrainCircuit, size: 48 },
  { icon: Lock, size: 48 },
  { icon: SiFirebase, size: 48 },
  { icon: Server, size: 48 },
  { icon: SiTailwindcss, size: 48 },
];

const achievements = [
  {
    icon: Award,
    title: "Innovative Project Award",
    description: "Awarded for creating a project with significant real-world impact.",
    delay: "0s"
  },
  {
    icon: Star,
    title: "Top Performer",
    description: "Recognized for outstanding performance and contributions.",
    delay: "0.2s"
  },
  {
    icon: Github,
    title: "Open Source Contributor",
    description: "Active contributor to several popular open-source projects.",
    delay: "0.4s"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-screen flex items-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent)]"></div>

          {/* Reverse Rain Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {skills.map((Skill, index) => (
              <Skill.icon
                key={index}
                className="absolute text-accent/20 animate-rise"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                  width: `${24 + Math.random() * 24}px`,
                  height: `${24 + Math.random() * 24}px`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-6 text-left">
              <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                John Doe
              </h1>
              <p className="text-2xl text-accent font-medium tracking-wider">
                Software Engineer & Designer
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build beautiful, responsive, and highly performant web
                applications with a focus on user experience and clean code.
              </p>
              <div className="flex justify-start gap-4">
                <Link href="/projects">
                  <Button size="lg" variant="outline">
                    View My Work
                    <MoveRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Achievements */}
            <div className="flex flex-col space-y-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className="bg-secondary/50 backdrop-blur-sm border-accent/20 animate-slide-in-right animate-electric-shock"
                  style={{ animationDelay: achievement.delay }}
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <achievement.icon className="h-10 w-10 text-accent" />
                    <div>
                      <CardTitle className="font-headline text-primary text-xl">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
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
