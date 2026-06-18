"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Open Source", href: "/#open-source" },
    { name: "Activity", href: "/#activity" },
    { name: "Blog", href: "/blog" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-foreground/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-4">
          <Link href="/" className="w-9 h-9 bg-foreground rounded-none flex items-center justify-center text-background font-headline font-black text-lg">
            S
          </Link>
          <span className="font-headline font-black tracking-tighter text-xl uppercase hidden sm:block">Sayi Krishna PK</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 mr-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`nav-link ${activePath === link.href || (activePath === '/' && link.href.startsWith('/#')) ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:flex rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-headline font-bold text-xs px-6 h-9 border-none shadow-none">
              <a href="/cv.pdf" target="_blank">GET CV</a>
            </Button>
            
            {/* Mobile Nav Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-none w-10 h-10 border-2 border-transparent hover:border-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[450px] bg-background border-l-4 border-foreground p-0 flex flex-col">
                <SheetHeader className="p-8 border-b-2 border-foreground text-left">
                  <SheetTitle className="font-headline font-black uppercase tracking-tighter text-3xl">Navigation</SheetTitle>
                  <SheetDescription className="text-xs text-muted-foreground uppercase tracking-widest font-headline font-bold">
                    BACKEND ENGINEER // SAYI KRISHNA PK
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 flex flex-col p-8 gap-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      onClick={closeMenu}
                      className="text-6xl font-black font-headline uppercase tracking-tighter hover:text-primary transition-all active:scale-95"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="mt-auto pt-10 border-t-2 border-foreground space-y-6">
                    <p className="text-[10px] font-headline uppercase tracking-[0.3em] text-muted-foreground font-bold">Available for hire</p>
                    <Button asChild className="w-full rounded-none bg-primary text-primary-foreground font-headline font-black h-16 text-2xl uppercase tracking-tighter shadow-none">
                      <a href="/cv.pdf" target="_blank">Download CV</a>
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
