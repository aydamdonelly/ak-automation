"use client";

import { Reveal, MagneticButton } from "./motion";

export default function CTA() {
  return (
    <section id="kontakt" className="relative py-40">
      {/* Gradient mesh — intentionally bleeds upward beyond section */}
      <div className="pointer-events-none absolute -top-64 bottom-0 left-0 right-0">
        <div className="absolute bottom-0 left-1/4 h-200 w-250 rounded-full bg-accent/20 blur-[250px]" />
        <div className="absolute right-1/4 top-0 h-175 w-200 rounded-full bg-accent-pink/15 blur-[250px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="mb-8 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-tight">
              Bereit, 20+ Stunden{" "}
              <span className="gradient-text">zurückzugewinnen?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12 text-xl text-fg-muted">
              Kostenloser AI-Readiness-Check: In 30 Minuten zeige ich Ihnen,
              welcher Prozess das größte Automatisierungspotenzial hat.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <MagneticButton
              href="https://calendly.com"
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-fg px-14 text-base font-medium text-bg"
            >
              <span className="relative z-10">
                Kostenloses Erstgespräch buchen
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Kostenloses Erstgespräch buchen
              </span>
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-8 font-mono text-sm text-fg-muted">
              <span>30 Minuten</span>
              <span>&middot;</span>
              <span>Kein Verkaufsgespräch</span>
              <span>&middot;</span>
              <span>Konkreter Plan</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
