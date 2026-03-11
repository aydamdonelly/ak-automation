import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/motion";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AK Automation",
  description:
    "Praxiswissen zu AI-Automatisierung, Prozessoptimierung und KI-Einsatz in deutschen KMUs.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <BlogHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/6 blur-[200px]" />
          </div>
          <div className="relative mx-auto max-w-350 px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
            <Reveal>
              <p className="mb-4 font-mono text-sm tracking-wider text-accent-light">
                BLOG
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
                Praxiswissen AI-Automatisierung
                <span className="gradient-text">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted lg:text-xl">
                Konkrete Einblicke, keine Buzzwords. Wie deutsche KMUs AI
                tatsächlich einsetzen — mit echten Zahlen und Anleitungen.
              </p>
            </Reveal>
          </div>
        </section>

        {posts.length === 0 ? (
          <div className="mx-auto max-w-350 px-6 lg:px-10">
            <div className="border-t border-border py-24 text-center">
              <p className="text-lg text-fg-muted">
                Erste Artikel erscheinen in Kürze.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Article — editorial, full-width section */}
            {featured && (
              <section className="border-y border-border">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block"
                >
                  <div className="mx-auto max-w-350 px-6 lg:px-10">
                    <div className="grid gap-6 py-12 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-20">
                      <Reveal>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-sm lg:flex-col lg:items-start lg:gap-4">
                          <span className="text-accent-light">
                            Neuester Artikel
                          </span>
                          <span className="text-fg-dim">
                            {formatDate(featured.date)}
                          </span>
                          <span className="text-fg-dim">
                            {featured.readingTime}
                          </span>
                        </div>
                      </Reveal>
                      <Reveal delay={0.15}>
                        <div>
                          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight transition-colors duration-300 group-hover:text-accent-light">
                            {featured.title}
                          </h2>
                          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
                            {featured.description}
                          </p>
                          <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-medium text-accent-light transition-all duration-300 group-hover:gap-3">
                            Artikel lesen
                            <svg
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* All Articles — editorial rows with stagger */}
            {rest.length > 0 && (
              <section className="mx-auto max-w-350 px-6 py-16 lg:px-10 lg:py-24">
                <Reveal>
                  <div className="mb-12 flex items-baseline justify-between">
                    <h2 className="text-lg font-semibold tracking-tight">
                      Alle Artikel
                    </h2>
                    <span className="font-mono text-xs text-fg-dim">
                      {posts.length} Artikel
                    </span>
                  </div>
                </Reveal>

                <StaggerContainer className="divide-y divide-border border-y border-border">
                  {rest.map((post) => (
                    <StaggerItem key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-3 py-8 lg:py-10"
                      >
                        {/* Mobile meta */}
                        <div className="flex items-center gap-3 font-mono text-xs lg:hidden">
                          <span className="text-accent-light">
                            {post.tags[0]}
                          </span>
                          <span className="text-fg-dim">·</span>
                          <span className="text-fg-dim">
                            {post.readingTime}
                          </span>
                          <span className="text-fg-dim">·</span>
                          <span className="text-fg-dim">
                            {formatDate(post.date, true)}
                          </span>
                        </div>

                        {/* Desktop row */}
                        <div className="hidden lg:grid lg:grid-cols-[160px_1fr_auto] lg:items-baseline lg:gap-8">
                          <span className="font-mono text-sm text-fg-dim">
                            {formatDate(post.date, true)}
                          </span>
                          <div>
                            <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-accent-light">
                              {post.title}
                            </h3>
                            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-fg-muted line-clamp-1">
                              {post.description}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-6">
                            <span className="font-mono text-xs text-accent-light">
                              {post.tags[0]}
                            </span>
                            <span className="font-mono text-xs text-fg-dim">
                              {post.readingTime}
                            </span>
                            <svg
                              className="h-4 w-4 text-fg-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-light"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Mobile title + description */}
                        <div className="lg:hidden">
                          <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-accent-light">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            )}

            {/* CTA — gradient mesh background */}
            <section className="relative overflow-hidden border-t border-border">
              <div className="absolute inset-0">
                <div className="absolute -left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent/8 blur-[250px]" />
                <div className="absolute -right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent-pink/6 blur-[250px]" />
              </div>
              <div className="relative mx-auto max-w-350 px-6 py-24 text-center lg:px-10 lg:py-32">
                <Reveal>
                  <p className="font-mono text-xs tracking-wider text-accent-light">
                    AI-READINESS-CHECK
                  </p>
                  <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">
                    Bereit für AI-Automatisierung?
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
                    Kostenloser 30-Min Check — kein Verkaufsgespräch, nur
                    eine ehrliche Einschätzung ob und wo AI in Ihrem
                    Unternehmen Stunden spart.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 flex justify-center">
                    <MagneticButton
                      href="https://calendly.com/kahirov/erstgespraech"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
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
                    </MagneticButton>
                  </div>
                </Reveal>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
