import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Logo from "@/components/Logo";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — AK Automation Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Dynamic import of MDX file
  let MDXContent;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-350 items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <Logo size={32} animate={false} />
          </a>
          <a
            href="/blog"
            className="font-mono text-sm text-fg-muted transition-colors hover:text-fg"
          >
            &larr; Alle Artikel
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-175 px-6 py-20 lg:px-10">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4 font-mono text-xs text-fg-dim">
            <span>{post.date}</span>
            {post.readingTime && (
              <>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          <h1 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="flex gap-2">
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
        </div>

        <article className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-fg-muted prose-p:leading-relaxed prose-a:text-accent prose-strong:text-fg prose-li:text-fg-muted prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3">
          <MDXContent />
        </article>

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-fg-muted">
            Bereit, Ihren Prozess zu automatisieren?{" "}
            <a href="/#kontakt" className="font-medium text-accent hover:underline">
              Kostenloses Erstgespräch buchen
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
