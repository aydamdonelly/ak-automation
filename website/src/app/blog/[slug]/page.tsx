import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import { ScrollProgress, Reveal } from "@/components/motion";
import {
  getAllPosts,
  getPostBySlug,
  extractHeadings,
  extractFaqs,
  formatDate,
  slugify,
} from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

function getTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (node == null) return "";
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (typeof node === "object" && "props" in node) {
    return getTextContent(
      (node as React.ReactElement<{ children?: ReactNode }>).props.children
    );
  }
  return "";
}

const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => {
    const id = slugify(getTextContent(children));
    return (
      <h2 id={id} className="scroll-mt-28">
        {children}
      </h2>
    );
  },
  h3: ({ children }: { children?: ReactNode }) => {
    const id = slugify(getTextContent(children));
    return (
      <h3 id={id} className="scroll-mt-28">
        {children}
      </h3>
    );
  },
  table: ({ children }: { children?: ReactNode }) => (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (!href) return <span>{children}</span>;
    // CTA-style for booking/kontakt links
    if (href.includes("kontakt") || href.includes("erstgespraech")) {
      return (
        <Link
          href={href}
          className="not-prose mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white no-underline transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
        >
          {children}
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      );
    }
    // Anchor links
    if (href.startsWith("#")) {
      return <a href={href}>{children}</a>;
    }
    // Internal links
    if (href.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    // External links
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://kahirov.de/blog/${slug}`;

  return {
    title: `${post.title} | AK Automation Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Adam Kahirov"],
      tags: post.tags,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const faqs = extractFaqs(post.content);
  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const wordCount = post.content.split(/\s+/).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    author: {
      "@type": "Person",
      name: "Adam Kahirov",
      url: "https://linkedin.com/in/adam-kahirov",
      jobTitle: "AI-Automatisierungsberater",
    },
    publisher: {
      "@type": "Organization",
      name: "AK Automation",
      url: "https://kahirov.de",
      logo: { "@type": "ImageObject", url: "https://kahirov.de/logo-512.png" },
    },
    mainEntityOfPage: `https://kahirov.de/blog/${slug}`,
    inLanguage: "de",
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://kahirov.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kahirov.de/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://kahirov.de/blog/${slug}`,
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ScrollProgress />
      <BlogHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-linear-to-br from-accent/6 via-transparent to-accent-pink/4" />
        <div className="relative mx-auto max-w-350 px-6 pb-12 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-sm text-fg-dim">
              <span className="text-accent-light">{post.tags[0]}</span>
              <span className="text-border-hover">·</span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {post.readingTime}
              </span>
              <span className="text-border-hover">·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[13px] text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-pink text-sm font-bold text-white">
                AK
              </div>
              <div>
                <p className="text-sm font-medium text-fg">Adam Kahirov</p>
                <p className="text-xs text-fg-dim">
                  AI-Prozessautomatisierung
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content + TOC */}
      <section className="mx-auto max-w-350 px-6 py-12 lg:px-10 lg:py-20">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:gap-20">
          {/* TOC Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>

          {/* Article */}
          <div className="min-w-0">
            <article className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[#c4c4c4] prose-p:text-lg prose-p:leading-[1.85] prose-a:text-accent-light prose-a:underline prose-a:decoration-accent/30 prose-a:underline-offset-4 hover:prose-a:decoration-accent-light prose-strong:text-fg prose-li:text-[#c4c4c4] prose-li:text-lg prose-li:leading-[1.85] prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-xl prose-hr:border-border prose-hr:my-14 prose-img:rounded-xl prose-img:border prose-img:border-border">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>

            {/* End CTA */}
            <Reveal>
              <div className="relative mt-20 overflow-hidden rounded-2xl border border-border lg:mt-28">
                <div className="absolute inset-0">
                  <div className="absolute -left-1/4 top-0 h-full w-100 rounded-full bg-accent/10 blur-[150px]" />
                  <div className="absolute -right-1/4 bottom-0 h-full w-75 rounded-full bg-accent-pink/8 blur-[150px]" />
                </div>
                <div className="relative p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight lg:text-2xl">
                      Bereit, Ihren Prozess zu automatisieren?
                    </h3>
                    <p className="mt-3 max-w-lg text-[#b0b0b0]">
                      Kostenloser 30-Min AI-Readiness-Check. Kein
                      Verkaufsgespräch, nur eine ehrliche Einschätzung.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/kahirov/erstgespraech"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-light hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] lg:mt-0 lg:shrink-0"
                  >
                    Erstgespräch buchen
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Posts — editorial list, not cards */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-350 px-6 py-16 lg:px-10 lg:py-24">
            <Reveal>
              <h2 className="mb-8 text-lg font-semibold tracking-tight">
                Weitere Artikel
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="divide-y divide-border border-y border-border">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col gap-2 py-6 lg:flex-row lg:items-baseline lg:gap-8 lg:py-8"
                  >
                    <span className="shrink-0 font-mono text-xs text-fg-dim lg:w-32">
                      {formatDate(p.date, true)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-accent-light">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="font-mono text-xs text-accent-light">
                        {p.tags[0]}
                      </span>
                      <span className="font-mono text-xs text-fg-dim">
                        {p.readingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
