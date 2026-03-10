"use client";

import { Reveal } from "./motion";

const credentials = [
  { label: "IBM Research", detail: "Dublin · Almaden · Tokyo" },
  { label: "DHBW Stuttgart", detail: "BSc Business Informatics" },
  { label: "WEF Global Shaper", detail: "Stuttgart Hub" },
  { label: "Schwerpunkt", detail: "LLM-Systeme · Retrieval · AI-Evaluation" },
];

export default function About() {
  return (
    <section className="relative px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: visual element */}
          <Reveal>
            <div className="relative aspect-square max-w-md">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-3xl border border-border" />
              <div className="absolute inset-4 rounded-2xl border border-border" />
              <div className="absolute inset-8 rounded-xl border border-border" />
              <div className="absolute inset-12 flex items-center justify-center rounded-lg border border-accent/20 bg-bg-elevated">
                <div className="text-center">
                  <p className="text-5xl font-bold">AK</p>
                  <p className="mt-2 font-mono text-xs text-fg-dim">Stuttgart, DE</p>
                </div>
              </div>
              {/* Orbiting dot */}
              <div className="absolute inset-0" style={{ animation: "rotate-slow 20s linear infinite" }}>
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              </div>
            </div>
          </Reveal>

          {/* Right: text */}
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-sm text-accent">// ÜBER MICH</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Adam Kahirov, 20.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-4 text-lg leading-relaxed text-fg-muted">
                Ehemaliger IBM Research Praktikant — drei Standorte, drei Länder.
                Mein Schwerpunkt: LLM-Systeme, die tatsächlich funktionieren.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mb-10 text-lg leading-relaxed text-fg-muted">
                Jetzt helfe ich deutschen KMUs, AI dort einzusetzen, wo es
                sofort messbar wird. Keine Theorie — Ergebnisse.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl border border-border bg-bg-elevated p-4 transition-colors hover:border-border-hover"
                  >
                    <p className="mb-1 text-sm font-semibold">{c.label}</p>
                    <p className="text-xs text-fg-dim">{c.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
