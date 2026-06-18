import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Terminal } from "lucide-react";

const techStack = [
  "Go", "Rust", "PostgreSQL", "K8s", "gRPC", "Redis"
];

export function ProfileHero() {
  const portrait = PlaceHolderImages.find((img) => img.id === "profile-portrait");

  return (
    <div className="space-y-10">
      <div className="relative inline-block group">
        <div className="w-64 h-64 md:w-full md:aspect-square bg-muted rounded-xl overflow-hidden border">
          <Image
            src={portrait?.imageUrl || "https://picsum.photos/seed/alex/800"}
            alt="Alex Rivera"
            fill
            className="object-cover grayscale"
            data-ai-hint="developer portrait"
          />
        </div>
        
        {/* Status Badge */}
        <div className="absolute bottom-6 -right-4 bg-card border shadow-xl rounded-lg p-4 flex items-center gap-3 animate-in slide-in-from-bottom-2 duration-700">
          <div className="relative">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-headline uppercase tracking-widest text-muted-foreground mb-0.5">Status</span>
            <span className="text-[11px] font-bold text-accent whitespace-nowrap">Available for Hire</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl xl:text-5xl font-bold leading-[1.1]">
          Backend Engineer & <br />
          System Architect.
        </h1>
        <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
          Building robust, scalable distributed systems with Go, Rust, and Kubernetes. 
          Specialized in cloud-native infrastructure and high-performance APIs.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <div key={tech} className="px-3 py-1.5 border rounded-md text-[10px] font-headline uppercase tracking-wider bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}