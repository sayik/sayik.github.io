import { ArrowRight } from "lucide-react";

export function RecentPostCard() {
  return (
    <div className="bg-foreground text-background rounded-2xl p-4 flex items-center gap-6 group cursor-pointer hover:bg-foreground/95 transition-all">
      <div className="flex flex-col gap-1 pl-2">
        <span className="text-[8px] font-headline uppercase tracking-[0.2em] text-background/60">Recent Post</span>
        <span className="text-sm font-bold font-headline whitespace-nowrap">Optimizing Rust binaries for Lambda</span>
      </div>
      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
        <ArrowRight className="w-5 h-5 text-background" />
      </div>
    </div>
  );
}