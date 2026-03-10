"use client";

import { Reveal, MagneticButton } from "./motion";

export default function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden px-6 py-32 lg:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">// NÄCHSTER SCHRITT</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Bereit, 20+ Stunden pro Woche{" "}
            <span className="gradient-text">zurückzugewinnen?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-12 text-lg text-fg-muted">
            Kostenloser AI-Readiness-Check: In 30 Minuten zeige ich Ihnen,
            welcher Prozess das größte Automatisierungspotenzial hat.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <MagneticButton
            href="https://calendly.com"
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-fg px-14 text-base font-medium text-bg transition-transform"
          >
            <span className="relative z-10">Kostenloses Erstgespräch buchen</span>
            <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Kostenloses Erstgespräch buchen
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-fg-dim">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-fg-dim" />
              30 Minuten
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-fg-dim" />
              Kein Verkaufsgespräch
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-fg-dim" />
              Konkreter Plan
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
