import Link from "next/link";
import { Star } from "lucide-react";

export function ContributionsList() {
  const contributions = [
    {
      repo: "andrewtavis / kwx",
      url: "https://github.com/andrewtavis/kwx",
      id: "CORE UTILITIES",
      label: "Contributor",
      stars: 77,
    },
    {
      repo: "activist-org / activist",
      url: "https://github.com/activist-org/activist",
      id: "DOCKER / ORM",
      label: "Contributor",
      stars: 693,
    },
    {
      repo: "tiangolo / fastapi",
      url: "https://github.com/tiangolo/fastapi",
      id: "FIX / CORE",
      label: "Contributor",
    },
    {
      repo: "django / django",
      url: "https://github.com/django/django",
      id: "CORE / REFACTOR",
      label: "Contributor",
    }
  ];

  return (
    <div className="space-y-4">
      {contributions.map((contribution) => (
        <div 
          key={contribution.repo} 
          className="flex items-center justify-between p-6 rounded-xl border bg-card/50 hover:bg-card transition-colors group"
        >
          <div className="flex flex-col gap-1">
            <Link 
              href={contribution.url} 
              target="_blank" 
              className="text-sm font-bold font-headline group-hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              {contribution.repo}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-headline text-muted-foreground/40 uppercase tracking-widest">
                {contribution.id}
              </span>
              {contribution.stars && (
                <span className="flex items-center gap-1 text-[10px] font-headline text-accent font-bold">
                  <Star className="w-3 h-3 fill-accent" />
                  {contribution.stars}
                </span>
              )}
            </div>
          </div>
          <div className="px-4 py-1 rounded-full text-[9px] font-headline uppercase tracking-widest bg-foreground text-background">
            {contribution.label}
          </div>
        </div>
      ))}
    </div>
  );
}
