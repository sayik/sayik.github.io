import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileHero } from "@/components/profile-hero";
import { SelectedProjects } from "@/components/selected-projects";
import { ContributionsList } from "@/components/contributions-list";
import { RecentPostCard } from "@/components/recent-post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-headline font-bold text-sm">
              A
            </div>
            <span className="font-headline font-bold tracking-tight text-lg">ALEX RIVERA</span>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="nav-link">Work</Link>
              <Link href="#" className="nav-link">Open Source</Link>
              <Link href="#" className="nav-link nav-link-active">Blog</Link>
              <Link href="#" className="nav-link">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-headline text-xs px-6 h-9">
                CV.PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-7xl pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Left Column: Profile & Info */}
          <aside className="lg:col-span-4 space-y-12">
            <ProfileHero />
          </aside>

          {/* Right Column: Projects & Contributions */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <div className="flex items-center justify-between mb-8 border-b pb-4">
                <h2 className="text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">Selected Projects</h2>
                <span className="text-[10px] font-headline text-muted-foreground/40">2022 — 2024</span>
              </div>
              <SelectedProjects />
            </section>

            <section>
              <div className="flex items-center justify-between mb-8 border-b pb-4">
                <h2 className="text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">Open Source Contributions</h2>
                <Link href="#" className="text-[10px] font-headline uppercase tracking-[0.2em] hover:text-primary transition-colors">Github &rarr;</Link>
              </div>
              <ContributionsList />
            </section>

            <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8 border-t">
              <div className="flex gap-8 text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">
                <Link href="#" className="hover:text-foreground">Twitter</Link>
                <Link href="#" className="hover:text-foreground">Github</Link>
                <Link href="#" className="hover:text-foreground">Linkedin</Link>
              </div>
              <RecentPostCard />
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}