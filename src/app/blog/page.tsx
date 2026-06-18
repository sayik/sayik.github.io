import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    slug: "optimizing-distributed-state",
    date: "2024.05.12",
    title: "Optimizing Distributed State in Low-Latency Environments",
    category: "Architecture",
    readTime: "12 min",
    excerpt: "Exploring the trade-offs between linearizability and availability in high-throughput messaging systems."
  },
  {
    slug: "deterministic-builds",
    date: "2024.04.08",
    title: "The Case for Deterministic Builds in Modern CI/CD",
    category: "Infrastructure",
    readTime: "8 min",
    excerpt: "Why hermetic toolchains are the foundation of reliable infrastructure deployment."
  },
  {
    slug: "memory-safety",
    date: "2024.03.20",
    title: "Memory Safety in System Software: From C++ to Rust",
    category: "Systems",
    readTime: "15 min",
    excerpt: "A technical transition guide for engineers moving to memory-safe language primitives."
  },
  {
    slug: "zero-trust-networking",
    date: "2024.02.15",
    title: "Zero-Trust Networking with WireGuard and gRPC",
    category: "Security",
    readTime: "10 min",
    excerpt: "Implementing secure service-to-service communication without the overhead of a traditional VPN."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar activePath="/blog" />

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-7xl pt-24 pb-32">
        <header className="mb-24 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter uppercase leading-[0.85]">
            Technical <br />
            Journal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            Essays on systems design, distributed infrastructure, and the pursuit of deterministic software development.
          </p>
        </header>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.title} className="group border-b pb-12 last:border-0">
              <Link href={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 text-[10px] font-headline uppercase tracking-widest text-muted-foreground pt-2">
                  {post.date}
                </div>
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-headline px-2 py-0.5 border rounded-full text-primary border-primary/20">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-headline text-muted-foreground/50">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-headline group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
