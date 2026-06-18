import { Navbar } from "@/components/navbar";
import { ProfileHero } from "@/components/profile-hero";
import { SelectedProjects } from "@/components/selected-projects";
import { ContributionsList } from "@/components/contributions-list";
import { GitHubContributionGraph } from "@/components/github-contribution-graph";
import { Footer } from "@/components/footer";
import { CvCta } from "@/components/cv-cta";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePath="/" />

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-7xl pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Left Column: Profile & Info */}
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-32 h-fit">
            <ProfileHero />
          </aside>

          {/* Right Column: Projects & Contributions */}
          <div className="lg:col-span-8 space-y-32">
            <section id="work">
              <div className="flex items-center justify-between mb-12 border-b-2 border-foreground pb-4">
                <h2 className="text-xs font-headline uppercase tracking-[0.4em] font-black">Selected Projects</h2>
                <span className="text-[10px] font-headline text-muted-foreground/40 font-bold tracking-widest">2022 — 2024</span>
              </div>
              <SelectedProjects />
            </section>

            <section id="open-source">
              <div className="flex items-center justify-between mb-12 border-b-2 border-foreground pb-4">
                <h2 className="text-xs font-headline uppercase tracking-[0.4em] font-black">Open Source Contributions</h2>
                <Link href="https://github.com" className="text-[10px] font-headline uppercase tracking-widest hover:text-primary transition-all font-black">GITHUB &rarr;</Link>
              </div>
              <ContributionsList />
            </section>

            <section id="activity">
               <div className="flex items-center justify-between mb-12 border-b-2 border-foreground pb-4">
                <h2 className="text-xs font-headline uppercase tracking-[0.4em] font-black">Activity Heatmap</h2>
                <span className="text-[10px] font-headline text-muted-foreground/40 font-bold tracking-widest uppercase">Last 12 Months</span>
              </div>
              <GitHubContributionGraph />
            </section>
          </div>
        </div>
      </main>

      <CvCta />
      <Footer />
    </div>
  );
}