
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "Vortex OS",
    description: "A custom real-time operating system kernel built with Rust.",
    size: "large",
    github: "https://github.com",
    tags: ["Rust", "Systems", "x86"],
  },
  {
    id: "project-2",
    title: "GraphQ-LLM",
    description: "AI-driven GraphQL schema generator.",
    size: "small",
    github: "https://github.com",
    tags: ["GenAI", "Node.js"],
  },
  {
    id: "project-3",
    title: "Pulse DB",
    description: "Distributed key-value store with eventual consistency guarantees.",
    size: "small",
    github: "https://github.com",
    tags: ["Go", "Distributed"],
  },
];

export function BentoProjects() {
  return (
    <section className="py-16">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold font-headline">Vault & Contributions</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find((i) => i.id === project.id);
            return (
              <div 
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border bg-card hover:border-primary/50 transition-all ${
                  project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/800/600"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                    <div className="flex gap-3">
                      <Link href={project.github} className="p-2 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="p-2 hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-headline uppercase tracking-widest px-2 py-1 bg-secondary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
