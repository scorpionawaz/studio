import Link from "next/link";
import { Github, Linkedin, Mountain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border/40 backdrop-blur-lg">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Mountain className="h-6 w-6 text-accent" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Evolvefolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
