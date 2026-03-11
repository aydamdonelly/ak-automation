"use client";

import { Reveal } from "./motion";

const credentials = [
  { label: "IBM Research", detail: "Dublin · Almaden · Tokyo" },
  { label: "DHBW Stuttgart", detail: "BSc Business Informatics" },
  { label: "WEF Global Shaper", detail: "Stuttgart Hub" },
  { label: "Schwerpunkt", detail: "LLM · Retrieval · AI-Eval" },
];

export default function About() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        {/* Centered editorial intro */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-6 font-mono text-sm text-fg-dim">WER DAHINTER STEHT</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-8 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight">
              Adam Kahirov<span className="gradient-text">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-4 text-xl text-fg-muted lg:text-2xl">
              20, Stuttgart. Ehemaliger IBM Research Praktikant.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-20 text-lg leading-relaxed text-fg-muted">
              Drei Standorte, drei Länder. Mein Schwerpunkt: LLM-Systeme, die
              tatsächlich funktionieren. Jetzt helfe ich deutschen KMUs, AI dort
              einzusetzen, wo es sofort messbar wird.
            </p>
          </Reveal>
        </div>

        {/* Credentials as horizontal strip — like stats */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
            {credentials.map((c, i) => (
              <div
                key={c.label}
                className={`py-8 ${i > 0 ? "border-t border-border lg:border-l lg:border-t-0 lg:pl-8" : ""}`}
              >
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-fg-dim">
                  {c.label}
                </p>
                <p className="text-fg-muted">{c.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
