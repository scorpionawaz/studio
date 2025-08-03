import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { MoveRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            My Projects
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            A selection of my best work. Each project is a story of challenges, learning, and creation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
             <div key={project.id} className="group relative">
              <Card className="flex flex-col overflow-hidden bg-secondary border-2 border-transparent group-hover:border-accent transition-all duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint="abstract technology"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-accent/50 text-accent">{tech}</Badge>
                    ))}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6">
                  <Link href={`/projects/${project.id}`} className="w-full">
                    <Button className="w-full" variant="outline">
                      View Project
                      <MoveRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <div className="absolute inset-0 rounded-lg bg-accent/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
