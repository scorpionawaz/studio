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
import { MoveRight } from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "award certificate",
    title: "Innovative Project Award",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "team collaboration",
    title: "Top Performer Recognition",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "github contribution graph",
    title: "Open Source Contributor",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "public speaking tech",
    title: "Tech Conference Speaker",
  },
  {
    imageUrl: "https://placehold.co/400x600.png",
    hint: "hackathon winner",
    title: "Hackathon Winner",
  },
];

// Duplicate achievements to create a seamless loop for the scrolling animation
const extendedAchievements = [...achievements, ...achievements];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-screen flex items-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-black to-background animate-background-pan [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_40%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>

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

            {/* Right Column: Achievements Scroller */}
            <div className="h-[500px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <div className="flex flex-col gap-4 animate-up-scroll">
                {extendedAchievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-secondary/30 backdrop-blur-sm border-accent/20 overflow-hidden animate-electric-shock"
                     style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <Image
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      width={400}
                      height={600}
                      data-ai-hint={achievement.hint}
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                ))}
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
