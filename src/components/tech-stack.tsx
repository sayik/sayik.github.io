
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Server, Globe, Shield, Zap } from "lucide-react";

const stack = [
  { name: "Node.js", category: "Runtime", icon: <Server className="w-4 h-4" /> },
  { name: "PostgreSQL", category: "Database", icon: <Database className="w-4 h-4" /> },
  { name: "TypeScript", category: "Language", icon: <Cpu className="w-4 h-4" /> },
  { name: "Kubernetes", category: "DevOps", icon: <Zap className="w-4 h-4" /> },
  { name: "Redis", category: "Caching", icon: <Zap className="w-4 h-4" /> },
  { name: "Docker", category: "Containerization", icon: <Zap className="w-4 h-4" /> },
  { name: "Next.js", category: "Frontend", icon: <Globe className="w-4 h-4" /> },
  { name: "Rust", category: "Systems", icon: <Shield className="w-4 h-4" /> },
  { name: "GraphQL", category: "API", icon: <Server className="w-4 h-4" /> },
  { name: "AWS", category: "Cloud", icon: <Globe className="w-4 h-4" /> },
];

export function TechStack() {
  return (
    <section className="py-16">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold font-headline">Technical Stack</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {stack.map((tech) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-start gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="p-2 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {tech.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-base font-bold tracking-tight">{tech.name}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
