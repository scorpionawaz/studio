import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Menu, Mountain } from "lucide-react";

export default function Header() {
  const navLinks = [
    { href: "/#achievements", text: "Achievements" },
    { href: "/projects", text: "Projects" },
    { href: "/researches", text: "Researches" },
    { href: "/opensource", text: "Open Source" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-24 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-accent" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Evolvefolio
            </span>
          </Link>
          <nav className="flex items-center space-x-2 text-sm font-medium">
             <Link
              href="/"
              className="transition-all duration-300 text-foreground/80 hover:text-accent px-4 py-2 rounded-md inline-block hover:scale-110"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all duration-300 text-foreground/80 hover:text-accent px-4 py-2 rounded-md inline-block hover:scale-110"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline">Evolvefolio</span>
            </Link>
            <div className="mt-6 grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                 <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                >
                    {link.text}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
