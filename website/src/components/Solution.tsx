"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";

const steps = [
  {
    number: "01",
    title: "Analyse",
    duration: "Tag 1–2",
    description:
      "Ich analysiere Ihren Prozess, identifiziere die größten Zeitfresser und definiere das Automatisierungsziel.",
    deliverable: "Automatisierungsplan",
  },
  {
    number: "02",
    title: "Build",
    duration: "Tag 3–8",
    description:
      "Ich baue die Automatisierung: KI-Workflows, Systemintegrationen und Daten-Pipelines. Tägliche Updates.",
    deliverable: "Funktionierender Workflow",
  },
  {
    number: "03",
    title: "Launch",
    duration: "Tag 9–10",
    description:
      "Go-Live mit Ihrem Team. Schulung, Dokumentation und Übergabe. Danach läuft der Prozess — ohne mich.",
    deliverable: "Übergabe + Dokumentation",
  },
];

export default function Solution() {
  return (
    <section id="loesung" className="relative px-6 py-32 lg:px-10">
      {/* Subtle background shift */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">// DIE LÖSUNG</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI-Prozess-Sprint.<br />
            <span className="text-fg-muted">1 Prozess. 10 Tage. Fertig.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-xl text-lg text-fg-muted">
            Kein monatelanges Projekt. Kein Berater-Deutsch.
            Ein klarer Sprint mit messbarem Ergebnis.
          </p>
        </Reveal>

        {/* Timeline */}
        <StaggerContainer className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-0 hidden h-full w-px bg-linear-to-b from-accent/50 via-accent-pink/30 to-transparent md:block" />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group relative flex gap-8 md:gap-12 md:py-12">
                  {/* Number circle */}
                  <div className="relative z-10 hidden md:block">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-bg-elevated transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]">
                      <span className="gradient-text text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-border bg-bg-elevated p-8 transition-all duration-500 group-hover:border-border-hover group-hover:bg-bg-card md:p-10">
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                      <span className="gradient-text text-2xl font-bold md:hidden">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-fg-muted">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mb-4 leading-relaxed text-fg-muted">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-fg-dim">Ergebnis: {step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
