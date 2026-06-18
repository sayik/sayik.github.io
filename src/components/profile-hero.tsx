import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "Go", level: "Expert" },
  { name: "Rust", level: "Expert" },
  { name: "PostgreSQL", level: "Expert" },
  { name: "Kubernetes", level: "Expert" },
  { name: "gRPC", level: "Advanced" },
  { name: "Redis", level: "Advanced" }
];

export function ProfileHero() {
  const portrait = PlaceHolderImages.find((img) => img.id === "profile-portrait");

  return (
    <div className="space-y-12">
      <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[420px] lg:max-w-none mx-auto lg:mx-0">
        <div className="w-full h-full bg-muted rounded-none overflow-hidden border-4 border-foreground relative">
          <Image
            src={portrait?.imageUrl || "https://picsum.photos/seed/alex/800"}
            alt="Alex Rivera"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            data-ai-hint="developer portrait"
          />
        </div>
        
        {/* Status Badge */}
        <div className="absolute -bottom-4 -right-4 bg-accent border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-4 flex items-center gap-3 z-10">
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-headline uppercase tracking-[0.2em] text-white font-black mb-0.5">Status</span>
            <span className="text-[12px] font-black text-white uppercase whitespace-nowrap">Available for hire</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h1 className="text-5xl xl:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
          Backend <br />
          Engineer <br />
          <span className="text-primary">& Architect.</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed text-base font-medium max-w-sm">
          Designing and implementing high-availability distributed systems. Expert in cloud-native infrastructure and deterministic software.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-headline uppercase tracking-[0.3em] text-foreground font-black border-b-2 border-foreground pb-2 flex justify-between">
          <span>Core Stack</span>
          <span className="text-muted-foreground">Systems Architect</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex flex-col p-4 border-2 border-foreground bg-card hover:bg-foreground hover:text-background transition-colors cursor-default"
            >
              <span className="text-sm font-black font-headline uppercase tracking-tight">
                {tech.name}
              </span>
              <span className="text-[9px] font-headline uppercase tracking-widest opacity-60 mt-1">
                {tech.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}