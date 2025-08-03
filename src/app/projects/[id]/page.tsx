import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectById } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlayCircle, BookOpen } from "lucide-react";
import CodeAccessForm from "@/components/code-access-form";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  // In a real app, you would fetch this from a database or CMS
  const projects = [ {id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <main className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {/* Project Header */}
            <div className="space-y-4">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-accent/50 text-accent">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-lg text-muted-foreground">
                {project.longDescription}
              </p>
            </div>

            {/* Video Demo */}
            {project.videoDemoUrl && (
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-primary">
                    <PlayCircle className="h-6 w-6 text-accent" />
                    Video Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border">
                    <iframe
                      src={project.videoDemoUrl}
                      title="Project Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </AspectRatio>
                </CardContent>
              </Card>
            )}

             {/* Documentation */}
             <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-primary">
                    <BookOpen className="h-6 w-6 text-accent" />
                    Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none text-muted-foreground">
                    <p>
                        This section contains the technical documentation for {project.title}. It covers the architecture, setup process, and API endpoints. 
                        The goal was to ensure the project is maintainable and easy for other developers to contribute to.
                    </p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Feature A: Does this and that.</li>
                        <li>Feature B: Enables this and that.</li>
                        <li>Feature C: Allows for this and that.</li>
                    </ul>
                </CardContent>
              </Card>

          </div>

          <aside className="md:col-span-1 space-y-8">
             {/* Project Image */}
            <Card className="overflow-hidden bg-secondary">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={project.imageUrl}
                        alt={`Image of ${project.title}`}
                        fill
                        className="object-cover"
                        data-ai-hint="abstract screenshot"
                    />
                </AspectRatio>
            </Card>

            {/* Code Access */}
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="font-headline text-primary">Access Source Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeAccessForm 
                    accessCode={project.accessCode} 
                    sourceCodeUrl={project.sourceCodeUrl}
                />
              </CardContent>
            </Card>

          </aside>
        </main>
      </div>
    </div>
  );
}
