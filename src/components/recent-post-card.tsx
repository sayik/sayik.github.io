import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function RecentPostCard() {
  return (
    <Link href="/blog/optimizing-distributed-state" className="block w-full max-w-sm ml-auto">
      <div className="bg-foreground text-background rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:bg-foreground/95 transition-all">
        <div className="flex flex-col gap-1 pl-2 overflow-hidden">
          <span className="text-[8px] font-headline uppercase tracking-[0.2em] text-background/60">Recent Post</span>
          <span className="text-sm font-bold font-headline truncate">Optimizing Distributed State</span>
        </div>
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <ArrowRight className="w-5 h-5 text-background" />
        </div>
      </div>
    </Link>
  );
}
