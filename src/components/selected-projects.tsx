import Link from "next/link";

const projects = [
  {
    category: "High-Load API",
    title: "StreamGrid Engine",
    description: "Real-time data ingestion service handling 2M+ events per second with 99.9% uptime.",
    tags: ["#go", "#kafka", "#redis"]
  },
  {
    category: "Infrastructure",
    title: "AuthSentinel",
    description: "A custom OAuth2/OIDC provider designed for microservice environments with mTLS.",
    tags: ["#rust", "#oauth", "#postgres"]
  }
];

export function SelectedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.title} className="group border rounded-xl p-8 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
          <div className="space-y-4">
            <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">
              {project.category}
            </span>
            <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-4 pt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-headline text-muted-foreground/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}