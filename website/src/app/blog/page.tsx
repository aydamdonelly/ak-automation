import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AK Automation",
  description:
    "Praxiswissen zu AI-Automatisierung, Prozessoptimierung und KI-Einsatz in deutschen KMUs.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-350 items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <Logo size={32} animate={false} />
          </a>
          <a
            href="/#kontakt"
            className="rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            Gespräch buchen
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-200 px-6 py-20 lg:px-10">
        <p className="mb-4 font-mono text-sm text-fg-dim">BLOG</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Praxiswissen AI-Automatisierung<span className="gradient-text">.</span>
        </h1>
        <p className="mb-16 max-w-xl text-lg text-fg-muted">
          Konkrete Einblicke, keine Buzzwords. Wie deutsche KMUs AI
          tatsächlich einsetzen.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-lg border border-border py-16 text-center">
            <p className="text-fg-muted">
              Erste Artikel erscheinen in Kürze.
            </p>
          </div>
        ) : (
          <div className="border-t border-border">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-b border-border py-8 transition-colors hover:bg-bg-elevated"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-fg-muted line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 font-mono text-xs text-fg-dim">
                    {post.readingTime && <span>{post.readingTime}</span>}
                    <span>{post.date}</span>
                  </div>
                </div>
                {post.tags.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-0.5 font-mono text-xs text-fg-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
