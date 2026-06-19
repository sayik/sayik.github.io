export function GitHubContributionGraph() {
  /**
   * DEVELOPER NOTE: DATA SOURCE
   * 
   * Currently, this graph uses mock data generated randomly for UI presentation.
   * To display real GitHub contributions:
   * 1. Use the GitHub GraphQL API (User -> contributionsCollection -> contributionCalendar)
   * 2. Or use a library like 'react-github-calendar' or 'github-calendar-api'
   * 3. Replace the 'contributionGrid' map below with your fetched data.
   */
  
  const weeks = 52;
  const daysPerWeek = 7;
  const contributionGrid = Array.from({ length: weeks * daysPerWeek }).map(() => {
    const level = Math.floor(Math.random() * 5); // 0 to 4
    return level;
  });

  return (
    <div className="space-y-8">
      {/* commit github counter */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <span className="text-[9px] font-headline uppercase tracking-[0.2em] text-muted-foreground font-bold">Total Commits</span>
          <p className="text-2xl font-bold font-headline text-foreground">2,481</p>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-headline uppercase tracking-[0.2em] text-muted-foreground font-bold">Longest Streak</span>
          <p className="text-2xl font-bold font-headline text-foreground">42 Days</p>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-headline uppercase tracking-[0.2em] text-muted-foreground font-bold">Public Repos</span>
          <p className="text-2xl font-bold font-headline text-foreground">64</p>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-headline uppercase tracking-[0.2em] text-muted-foreground font-bold">PRs Merged</span>
          <p className="text-2xl font-bold font-headline text-foreground">112</p>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-[3px]">
          {Array.from({ length: weeks }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {Array.from({ length: daysPerWeek }).map((_, dayIndex) => {
                const level = contributionGrid[weekIndex * daysPerWeek + dayIndex];
                const opacity = level === 0 ? 'bg-muted/30' : 
                               level === 1 ? 'bg-accent/30' :
                               level === 2 ? 'bg-accent/50' :
                               level === 3 ? 'bg-accent/80' : 'bg-accent';
                return (
                  <div 
                    key={dayIndex} 
                    className={`w-[11px] h-[11px] rounded-none ${opacity} hover:ring-1 hover:ring-primary transition-all duration-300`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-[9px] font-headline uppercase text-muted-foreground font-bold max-w-[150px]">
          <span>Less</span>
          <div className="flex gap-[3px]">
            <div className="w-[10px] h-[10px] bg-muted/30"></div>
            <div className="w-[10px] h-[10px] bg-accent/30"></div>
            <div className="w-[10px] h-[10px] bg-accent/50"></div>
            <div className="w-[10px] h-[10px] bg-accent/80"></div>
            <div className="w-[10px] h-[10px] bg-accent"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
