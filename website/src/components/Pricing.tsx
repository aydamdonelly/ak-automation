"use client";

import { Reveal, Counter, MagneticButton } from "./motion";

const included = [
  "Prozessanalyse + Automatisierungsplan",
  "KI-Workflow-Entwicklung",
  "Systemintegration (CRM, E-Mail, ERP, etc.)",
  "Tägliche Fortschritts-Updates",
  "Team-Schulung + Dokumentation",
  "30 Tage Support nach Go-Live",
];

export default function Pricing() {
  return (
    <section id="preis" className="relative px-6 py-32 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">// PREIS</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Transparent.{" "}
            <span className="text-fg-muted">Kein Stundensatz.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-xl text-lg text-fg-muted">
            Sie wissen vorher, was es kostet. Keine versteckten Gebühren.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-accent/20">
            {/* Price header */}
            <div className="relative bg-linear-to-br from-accent/10 via-bg-elevated to-accent-pink/5 p-10 text-center">
              <p className="mb-2 font-mono text-sm text-fg-muted">AI-Prozess-Sprint</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold tracking-tight">
                  €<Counter target={5000} duration={2} />
                </span>
                <span className="text-fg-muted">netto</span>
              </div>
              <p className="mt-3 text-sm text-fg-dim">
                Einmalig · Festpreis · 50% bei Start, 50% bei Go-Live
              </p>
            </div>

            {/* Included */}
            <div className="border-t border-border bg-bg-elevated p-10">
              <p className="mb-6 font-mono text-xs text-fg-dim">INKLUSIVE</p>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[15px] text-fg-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton
                  href="#kontakt"
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-fg text-[15px] font-medium text-bg transition-transform"
                >
                  <span className="relative z-10">Jetzt Platz sichern</span>
                  <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Jetzt Platz sichern
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
