
import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileHero } from "@/components/profile-hero";
import { TechStack } from "@/components/tech-stack";
import { BentoProjects } from "@/components/bento-projects";
import { ImpactSynthesizer } from "@/components/impact-synthesizer";
import { JournalSection } from "@/components/journal-section";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-headline font-bold text-primary-foreground">
              S
            </div>
            <span className="font-headline font-bold tracking-tighter hidden sm:block">SYSTEMIC.ID</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 font-headline text-xs uppercase tracking-widest">
              <Link href="#vault" className="hover:text-primary transition-colors">Vault</Link>
              <Link href="#journal" className="hover:text-primary transition-colors">Journal</Link>
              <Link href="#impact" className="hover:text-primary transition-colors">Impact</Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild size="sm" className="hidden sm:flex font-headline h-9 text-xs">
                <Link href="#">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  CV Terminal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-7xl pb-32">
        <ProfileHero />
        
        <div className="space-y-32">
          <TechStack />
          
          <div id="vault">
            <BentoProjects />
          </div>

          <div id="impact">
            <ImpactSynthesizer />
          </div>

          <div id="journal">
            <JournalSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-headline font-bold text-primary-foreground">
                  S
                </div>
                <span className="font-headline text-xl font-bold tracking-tighter">SYSTEMIC.ID</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Engineering resilient systems and high-performance identities. 
                Built with precision, powered by automation.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="p-2 bg-secondary rounded-lg hover:text-primary transition-all">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-secondary rounded-lg hover:text-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-secondary rounded-lg hover:text-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs">Environment</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Schematic Profile</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Tech Stack</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Project Vault</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Technical Journal</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs">Access Terminal</h4>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start font-headline text-xs w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  DOWNLOAD_CV.PDF
                </Button>
                <Button className="justify-start font-headline text-xs w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  CONTACT_INIT
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-headline text-muted-foreground/60 uppercase tracking-widest">
            <p>© 2024 SYSTEMIC IDENTITY - ALL RIGHTS RESERVED</p>
            <p>DESIGNED FOR LEGIBILITY // BUILT FOR SCALE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
