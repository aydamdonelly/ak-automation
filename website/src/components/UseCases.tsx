"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const useCases = [
  {
    tag: "E-Commerce",
    title: "AI-Angebotsassistent",
    before: "3 Stunden",
    after: "10 Minuten",
    description:
      "Kundenanfragen kommen rein → AI erstellt Angebote basierend auf Ihrem Produktkatalog → Mitarbeiter prüft und klickt 'Senden'.",
    flow: ["Anfrage", "AI-Analyse", "Angebot", "Prüfung", "Versand"],
  },
  {
    tag: "Professional Services",
    title: "E-Mail-Klassifizierung",
    before: "45 Minuten",
    after: "0 Minuten",
    description:
      "AI liest eingehende E-Mails, erkennt Dringlichkeit und Kategorie, routet an die richtige Abteilung und legt Tickets an.",
    flow: ["E-Mail", "AI-Parsing", "Kategorie", "Routing", "Ticket"],
  },
  {
    tag: "Fertigung",
    title: "Bestell-Pipeline",
    before: "2 Stunden",
    after: "5 Minuten",
    description:
      "Bestellungen aus verschiedenen Kanälen werden automatisch erfasst, abgeglichen und ins ERP übertragen.",
    flow: ["Bestellung", "Erfassung", "Abgleich", "Validierung", "ERP"],
  },
];

export default function UseCases() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="anwendungen" className="py-32">
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        <Reveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-sm text-fg-dim">FIG 1.0</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight">
            Prozesse, die wir{" "}
            <span className="gradient-text">automatisieren.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-2xl text-lg text-fg-muted">
            Drei typische Beispiele. Ihr Prozess kann anders aussehen, im
            Erstgespräch finden wir den richtigen.
          </p>
        </Reveal>

        {/* Accordion */}
        <div className="border-t border-border">
          {useCases.map((uc, i) => (
            <Reveal key={uc.title} delay={i * 0.05}>
              <div className="border-b border-border">
                {/* Row header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-fg lg:py-8"
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    <span className="font-mono text-sm text-fg-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden rounded-full border border-accent/20 px-3 py-0.5 font-mono text-xs text-accent sm:inline-block">
                      {uc.tag}
                    </span>
                    <span className="text-lg font-semibold lg:text-2xl">
                      {uc.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="hidden items-center gap-3 text-sm text-fg-dim sm:flex">
                      <span className="line-through">{uc.before}</span>
                      <span className="text-accent">&rarr;</span>
                      <span className="font-semibold text-accent">
                        {uc.after}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 items-center justify-center"
                    >
                      <svg
                        className="h-5 w-5 text-fg-dim"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.4, 0, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 lg:grid-cols-[1fr_auto] lg:pl-13">
                        <div>
                          {/* Mobile tag + time */}
                          <div className="mb-4 flex items-center gap-3 sm:hidden">
                            <span className="rounded-full border border-accent/20 px-3 py-0.5 font-mono text-xs text-accent">
                              {uc.tag}
                            </span>
                            <span className="text-sm text-fg-dim">
                              <span className="line-through">{uc.before}</span>{" "}
                              &rarr;{" "}
                              <span className="font-semibold text-accent">
                                {uc.after}
                              </span>
                            </span>
                          </div>

                          <p className="mb-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                            {uc.description}
                          </p>

                          {/* Flow visualization */}
                          <div className="flex flex-wrap items-center gap-3">
                            {uc.flow.map((step, j) => (
                              <div key={step} className="flex items-center gap-3">
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: j * 0.06 }}
                                  className="rounded-full border border-border px-4 py-2 font-mono text-xs text-fg-muted"
                                >
                                  {step}
                                </motion.span>
                                {j < uc.flow.length - 1 && (
                                  <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: j * 0.06 + 0.03 }}
                                    className="text-fg-dim"
                                  >
                                    &rarr;
                                  </motion.span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
