import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "High-Load API",
    title: "StreamGrid Engine",
    description: "Real-time data ingestion service handling 2M+ events per second with 99.9% uptime. Optimized for extreme throughput.",
    tags: ["#GO", "#KAFKA", "#REDIS"]
  },
  {
    category: "Infrastructure",
    title: "AuthSentinel",
    description: "Custom OAuth2 provider designed for microservice environments using mTLS and hardware security modules.",
    tags: ["#RUST", "#OAUTH", "#POSTGRES"]
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
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <h3 className="text-2xl font-black font-headline uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-headline font-black text-foreground/40 tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}