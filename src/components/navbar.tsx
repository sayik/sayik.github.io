"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function Navbar({ activePath }: { activePath: string }) {
  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Open Source", href: "/#open-source" },
    { name: "AI Tools", href: "/#ai-tools" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "mailto:alex@example.com" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-headline font-bold text-sm">
            A
          </Link>
          <span className="font-headline font-bold tracking-tight text-lg uppercase">Alex Rivera</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 mr-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`nav-link ${activePath === link.href ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:flex rounded-full bg-foreground text-background hover:bg-foreground/90 font-headline text-xs px-6 h-9">
              <a href="mailto:alex@example.com">HIRE ME</a>
            </Button>
            
            {/* Mobile Nav Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full w-10 h-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l p-0 flex flex-col">
                <SheetHeader className="p-6 border-b text-left">
                  <SheetTitle className="font-headline font-bold uppercase tracking-tighter text-xl">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate through the portfolio and technical journal.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 flex flex-col p-8 gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      className={`text-5xl font-bold font-headline uppercase tracking-tighter hover:text-primary transition-colors ${activePath === link.href ? 'text-primary' : 'text-foreground'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="mt-auto pt-10 border-t space-y-4">
                    <p className="text-[10px] font-headline uppercase tracking-widest text-muted-foreground">Available for projects</p>
                    <Button asChild className="w-full rounded-full bg-foreground text-background font-headline h-14 text-lg uppercase tracking-tighter">
                      <a href="mailto:alex@example.com">Hire Alex Rivera</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
