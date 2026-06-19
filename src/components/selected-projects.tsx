import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "High-Performance API",
    title: "Veloce Gateway",
    description: "A high-performance API gateway built with FastAPI and Redis, designed to handle 500k+ requests per minute with sub-10ms latency and automated rate limiting.",
    tags: ["#PYTHON", "#FASTAPI", "#REDIS"],
    link: "https://github.com/sayik"
  },
  {
    category: "AI-Based Knowledge Infrastructure",
    title: "Clavis",
    description: "An intelligent personal knowledge and productivity management platform that combines secure cloud storage, note management, and AI-assisted organization into a single backend system.",
    tags: ["#FASTAPI", "#AWS", "#AI", "#POSTGRES"],
    link: "https://github.com/sayik/clavis"
  }
];

export function SelectedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.title} className="group relative border-2 border-foreground p-8 bg-card hover:bg-muted transition-all duration-300 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary font-black">
                {project.category}
              </span>
              <Link href={project.link} target="_blank">
                <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
            <Link href={project.link} target="_blank" className="block">
              <h3 className="text-2xl font-black font-headline uppercase tracking-tighter leading-none group-hover:text-primary transition-colors text-foreground">
                {project.title}
              </h3>
            </Link>
            <p className="text-sm text-foreground leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-headline font-black text-muted-foreground tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
