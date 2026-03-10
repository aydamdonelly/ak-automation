"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const faqs = [
  {
    q: "Was genau bekomme ich für €5.000?",
    a: "Einen vollständig automatisierten Geschäftsprozess. Inkl. Analyse, KI-Workflow-Entwicklung, Integration in Ihre bestehenden Systeme, Team-Schulung und 30 Tage Support nach Go-Live.",
  },
  {
    q: "Funktioniert das auch in meiner Branche?",
    a: "Wenn Ihr Team wiederkehrende, regelbasierte Aufgaben hat — ja. E-Commerce, Professional Services, Fertigung und viele weitere Branchen profitieren. Im kostenlosen Erstgespräch prüfe ich Ihren konkreten Fall.",
  },
  {
    q: "Was passiert, wenn der Sprint nicht das versprochene Ergebnis liefert?",
    a: "Sprint-Garantie: Wenn wir das vereinbarte Ergebnis nicht erreichen, arbeite ich kostenlos weiter, bis es steht. Kein Risiko für Sie.",
  },
  {
    q: "Brauche ich technisches Wissen in meinem Team?",
    a: "Nein. Ich baue alles auf, schule Ihr Team und übergebe eine verständliche Dokumentation. Ihre Mitarbeiter nutzen das System — sie müssen es nicht verstehen.",
  },
  {
    q: "Warum 10 Tage und nicht 3 Monate?",
    a: "Weil 80% der Beratungszeit für Meetings, Reports und Alignment draufgeht. Ich arbeite allein, fokussiert und mit klarem Scope. Ein Prozess, fertig.",
  },
  {
    q: "Was passiert nach dem Sprint?",
    a: "Das System läuft eigenständig. Sie bekommen 30 Tage Support, Dokumentation und eine Schulung. Danach brauchen Sie mich nicht mehr — es sei denn, Sie wollen den nächsten Prozess automatisieren.",
  },
  {
    q: "Wie unterscheidet sich das von einem klassischen Berater?",
    a: "Berater liefern Konzepte. Ich liefere ein funktionierendes System. Festpreis statt Tagessatz, konkretes Ergebnis statt PowerPoint.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Left: heading — sticky */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 font-mono text-sm text-fg-dim">FAQ</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Häufige
                <br />
                Fragen<span className="gradient-text">.</span>
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Die wichtigsten Antworten, bevor Sie sich entscheiden.
              </p>
            </div>
          </Reveal>

          {/* Right: FAQ items */}
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.03}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-fg"
                  >
                    <span className="text-lg font-medium text-fg-muted">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-xl text-fg-dim"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.4, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-fg-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
