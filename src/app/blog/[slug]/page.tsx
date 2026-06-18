import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = {
  "optimizing-distributed-state": {
    date: "May 12, 2024",
    title: "Optimizing Distributed State in Low-Latency Environments",
    category: "Architecture",
    readTime: "12 min read",
    content: `
      <p>In high-performance systems, managing state across a distributed network is one of the most significant challenges engineers face. The tension between consistency, availability, and partition tolerance—summarized by the CAP theorem—forces difficult trade-offs.</p>
      
      <h2>The CAP Theorem in Practice</h2>
      <p>When designing for low-latency, we often find ourselves leaning towards eventual consistency. However, in financial or transactional systems, linearizability is non-negotiable. This article explores how we can optimize consensus algorithms like Raft to minimize the performance impact of synchronized state.</p>
      
      <h3>Batching and Pipelining</h3>
      <p>One of the key optimizations involves batching consensus requests. Instead of waiting for a round-trip for every single state change, we group mutations into a single log entry. This reduces the pressure on the network stack and improves throughput significantly.</p>
      
      <p>Stay tuned for the second part of this series where we dive into lock-free data structures for local state management.</p>
    `
  },
  "deterministic-builds": {
    date: "April 08, 2024",
    title: "The Case for Deterministic Builds in Modern CI/CD",
    category: "Infrastructure",
    readTime: "8 min read",
    content: `
      <p>Deterministic builds—also known as reproducible builds—ensure that given the same source code and environment, the build output is byte-for-byte identical every single time.</p>
      
      <h2>Why Determinism Matters</h2>
      <p>Without determinism, troubleshooting production issues becomes a guessing game. "It works on my machine" is often the result of slight variances in build tool versions or environment variables. Hermetic toolchains remove these variables.</p>
      
      <h3>Implementing with Bazel or Nix</h3>
      <p>Tools like Bazel and Nix are specifically designed to provide hermetic environments. By isolating build processes and strictly managing dependencies by their cryptographic hashes, we achieve a level of reliability that standard build scripts cannot match.</p>
    `
  },
  "memory-safety": {
    date: "March 20, 2024",
    title: "Memory Safety in System Software: From C++ to Rust",
    category: "Systems",
    readTime: "15 min read",
    content: `
      <p>The transition from manual memory management in C++ to the ownership model in Rust represents a paradigm shift in system software development.</p>
      
      <h2>The Borrow Checker</h2>
      <p>Rust's borrow checker ensures that memory safety is guaranteed at compile time, eliminating a massive class of bugs like null pointer dereferences and use-after-free errors. This doesn't come for free; the "fighting the borrow checker" phase is a common hurdle for newcomers.</p>
      
      <h3>Performance Implications</h3>
      <p>Common myths suggest that safety comes with a performance penalty. In reality, Rust's zero-cost abstractions often result in code that is as fast as, or faster than, hand-optimized C++, because the compiler has more information about memory access patterns.</p>
    `
  },
  "zero-trust-networking": {
    date: "February 15, 2024",
    title: "Zero-Trust Networking with WireGuard and gRPC",
    category: "Security",
    readTime: "10 min read",
    content: `
      <p>Traditional perimeter-based security is no longer sufficient. Zero-trust models assume that the network is always compromised and require verification for every single request.</p>
      
      <h2>WireGuard as a Foundation</h2>
      <p>WireGuard provides a lean, high-performance VPN protocol that fits perfectly into modern microservice architectures. Its small codebase makes it easier to audit and its performance is superior to legacy protocols like OpenVPN or IPsec.</p>
      
      <h3>Secure Service Communication</h3>
      <p>By layering gRPC with mTLS over a WireGuard-secured network, we create a robust defense-in-depth strategy. This ensures that even if one component is compromised, the attacker cannot move laterally through the system without valid credentials and verified identities.</p>
    `
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar activePath="/blog" />

      <main className="container mx-auto px-6 max-w-4xl pt-24 pb-32">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-headline uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        <article className="space-y-12">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-headline uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 border rounded-full text-primary border-primary/20"><Tag className="w-3 h-3" /> {post.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
              {post.title}
            </h1>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none font-body leading-relaxed text-muted-foreground space-y-6 [&>h2]:text-foreground [&>h2]:font-headline [&>h2]:text-3xl [&>h2]:pt-8 [&>h3]:text-foreground [&>h3]:font-headline [&>h3]:text-xl [&>h3]:pt-4 [&>p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <section className="mt-24 pt-12 border-t">
          <div className="bg-card border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold font-headline">Have a project in mind?</h3>
              <p className="text-muted-foreground">I'm currently available for architecture reviews and systems engineering.</p>
            </div>
            <Button asChild className="rounded-full bg-primary text-primary-foreground font-headline px-10 h-14 uppercase tracking-widest">
              <a href="mailto:alex@example.com">Let's Talk</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
