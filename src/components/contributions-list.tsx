export function ContributionsList() {
  const contributions = [
    {
      repo: "tokio-rs / tokio",
      id: "PR #4321",
      label: "Merged",
      type: "main"
    },
    {
      repo: "kubernetes / client-go",
      id: "FEATURE / REFACTOR",
      label: "Core",
      type: "secondary"
    }
  ];

  return (
    <div className="space-y-4">
      {contributions.map((contribution) => (
        <div 
          key={contribution.repo} 
          className="flex items-center justify-between p-6 rounded-xl border bg-card/50 hover:bg-card transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold font-headline group-hover:text-primary transition-colors">{contribution.repo}</span>
            <span className="text-[10px] font-headline text-muted-foreground/40 uppercase tracking-widest">{contribution.id}</span>
          </div>
          <div className={`px-4 py-1 rounded-full text-[9px] font-headline uppercase tracking-widest ${
            contribution.type === 'main' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'
          }`}>
            {contribution.label}
          </div>
        </div>
      ))}
    </div>
  );
}