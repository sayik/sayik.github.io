
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

export function ProfileHero() {
  const portrait = PlaceHolderImages.find((img) => img.id === "profile-portrait");

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card p-2 rounded-2xl border-2 border-primary/20 overflow-hidden w-64 h-64 md:w-80 md:h-80">
              <Image
                src={portrait?.imageUrl || "https://picsum.photos/400"}
                alt="Developer Portrait"
                width={400}
                height={400}
                className="rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-ai-hint="developer portrait"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-2">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-headline uppercase tracking-widest">Systems Architect</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            I build <span className="text-primary italic">resilient</span> infrastructures.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Alex Systemic is a software engineer specializing in high-concurrency 
            distributed systems and cloud architectures. Focused on extreme legibility, 
            performance, and systemic scalability.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Badge variant="outline" className="px-4 py-1 text-sm font-medium border-primary/30">Available for Contract</Badge>
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">Remote OK</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
