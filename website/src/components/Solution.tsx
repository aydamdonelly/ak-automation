"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const steps = [
  {
    id: "analyse",
    number: "01",
    title: "Analyse",
    duration: "Tag 1–2",
    description:
      "Ich analysiere Ihren Prozess, identifiziere die größten Zeitfresser und definiere das Automatisierungsziel.",
    deliverable: "Automatisierungsplan",
    terminal: [
      { type: "cmd", text: "$ ak-automation analyse --prozess bestellungen" },
      { type: "out", text: "Scanning workflow..." },
      { type: "out", text: "├── Manuelle Dateneingabe: 12h/Woche" },
      { type: "out", text: "├── E-Mail-Routing: 8h/Woche" },
      { type: "out", text: "├── Datenabgleich CRM ↔ ERP: 6h/Woche" },
      { type: "out", text: "└── Reporting: 4h/Woche" },
      { type: "ok", text: "✓ Automatisierungspotenzial: 30h/Woche" },
      { type: "ok", text: "✓ ROI nach Sprint: 6x in 3 Monaten" },
    ],
  },
  {
    id: "build",
    number: "02",
    title: "Build",
    duration: "Tag 3–8",
    description:
      "Ich baue die Automatisierung: KI-Workflows, Systemintegrationen und Daten-Pipelines. Tägliche Updates.",
    deliverable: "Funktionierender Workflow",
    terminal: [
      { type: "cmd", text: "$ ak-automation build --sprint aktiv" },
      { type: "out", text: "Tag 3: E-Mail-Parser konfiguriert ✓" },
      { type: "out", text: "Tag 4: CRM-Integration live ✓" },
      { type: "out", text: "Tag 5: AI-Klassifizierung trainiert ✓" },
      { type: "out", text: "Tag 6: ERP-Bridge deployed ✓" },
      { type: "out", text: "Tag 7: End-to-End Tests passed ✓" },
      { type: "out", text: "Tag 8: Performance-Optimierung ✓" },
      { type: "ok", text: "✓ Workflow bereit für Go-Live" },
    ],
  },
  {
    id: "launch",
    number: "03",
    title: "Launch",
    duration: "Tag 9–10",
    description:
      "Go-Live mit Ihrem Team. Schulung, Dokumentation und Übergabe. Danach läuft der Prozess — ohne mich.",
    deliverable: "Übergabe + Dokumentation",
    terminal: [
      { type: "cmd", text: "$ ak-automation deploy --production" },
      { type: "out", text: "Deploying to production..." },
      { type: "out", text: "├── Workflow: aktiv" },
      { type: "out", text: "├── Monitoring: konfiguriert" },
      { type: "out", text: "├── Schulung: abgeschlossen" },
      { type: "out", text: "└── Dokumentation: übergeben" },
      { type: "ok", text: "✓ System live — 30h/Woche automatisiert" },
      { type: "ok", text: "✓ 30 Tage Support aktiv" },
    ],
  },
];

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0);
  const step = steps[activeTab];

  return (
    <section id="loesung" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent" />

      <div className="relative mx-auto max-w-350 px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">
            // SO FUNKTIONIERT&apos;S
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight">
            AI-Prozess-Sprint.
            <br />
            <span className="text-fg-muted">1 Prozess. 10 Tage. Fertig.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-16 max-w-2xl text-lg text-fg-muted">
            Kein monatelanges Projekt. Kein Berater-Deutsch. Ein klarer Sprint
            mit messbarem Ergebnis.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.3}>
          <div className="mb-12 flex gap-1">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(i)}
                className={`relative rounded-lg px-6 py-3 font-mono text-sm transition-colors ${
                  activeTab === i
                    ? "text-fg"
                    : "text-fg-dim hover:text-fg-muted"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg border border-border bg-bg-elevated"
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {s.number} {s.title}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab content */}
        <Reveal delay={0.4}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-[1fr_1.2fr]"
            >
              {/* Left: description */}
              <div className="flex flex-col justify-center">
                <span className="mb-4 inline-block w-fit rounded-full border border-border px-3 py-1 font-mono text-xs text-fg-muted">
                  {step.duration}
                </span>
                <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mb-6 text-lg leading-relaxed text-fg-muted">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-fg-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Ergebnis: {step.deliverable}
                </div>
              </div>

              {/* Right: terminal mockup */}
              <div className="overflow-hidden rounded-xl border border-border bg-[#0a0a0a]">
                {/* Terminal chrome */}
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-4 font-mono text-xs text-fg-dim">
                    ak-automation
                  </span>
                </div>
                {/* Terminal body */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  {step.terminal.map((line, j) => (
                    <motion.div
                      key={`${step.id}-${j}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.08, duration: 0.3 }}
                      className={`mb-1 ${
                        line.type === "cmd"
                          ? "text-fg"
                          : line.type === "ok"
                            ? "text-emerald-400"
                            : "text-fg-dim"
                      }`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
