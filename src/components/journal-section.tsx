import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "optimizing-distributed-state",
    title: "Optimizing Distributed State in Low-Latency Environments",
    date: "May 12, 2024",
    readTime: "12 min read",
    excerpt: "Exploring the trade-offs between linearizability and availability in high-throughput messaging systems.",
  },
  {
    slug: "deterministic-builds",
    title: "The Case for Deterministic Builds in Modern CI/CD",
    date: "April 08, 2024",
    readTime: "8 min read",
    excerpt: "Why hermetic toolchains are the foundation of reliable infrastructure deployment.",
  },
  {
    slug: "memory-safety",
    title: "Memory Safety in System Software: From C++ to Rust",
    date: "March 20, 2024",
    readTime: "15 min read",
    excerpt: "A technical transition guide for engineers moving to memory-safe language primitives.",
  },
];

export function JournalSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold font-headline">Technical Journal</h2>
            <div className="h-px w-32 bg-border"></div>
          </div>
          <Link href="/blog" className="text-sm font-headline uppercase tracking-widest text-primary flex items-center gap-2 hover:opacity-70 transition-opacity">
            View All Entries <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <Link href={`/blog/${article.slug}`} className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                <div className="md:w-32 flex flex-col pt-1">
                  <span className="text-sm font-headline uppercase tracking-tighter text-muted-foreground">{article.date}</span>
                  <span className="text-xs text-muted-foreground/60">{article.readTime}</span>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
