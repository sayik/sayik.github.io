import Link from "next/link";
import { RecentPostCard } from "@/components/recent-post-card";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background font-headline font-bold text-sm">
                S
              </div>
              <span className="font-headline font-bold tracking-tight text-lg uppercase">Sayi Krishna PK</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Backend Engineer specializing in high-performance distributed systems, Python, and cloud infrastructure.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">Index</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/#work" className="text-sm hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/#open-source" className="text-sm hover:text-primary transition-colors">Open Source</Link></li>
              <li><Link href="/cv.pdf" target="_blank" className="text-sm hover:text-primary transition-colors">Curriculum Vitae</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">Social</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="https://github.com/sayik" className="text-sm hover:text-primary transition-colors" target="_blank">Github</Link></li>
              <li><Link href="https://x.com/sayikrishna_pk" className="text-sm hover:text-primary transition-colors" target="_blank">Twitter / X</Link></li>
              <li><Link href="https://www.linkedin.com/in/sayi-krishna-pk" className="text-sm hover:text-primary transition-colors" target="_blank">LinkedIn</Link></li>
              <li><Link href="mailto:sayi_pk@outlook.com" className="text-sm hover:text-primary transition-colors">Email</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-end justify-start">
             <RecentPostCard />
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground/60">
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
            <span>&copy; {currentYear} Sayi Krishna PK</span>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
