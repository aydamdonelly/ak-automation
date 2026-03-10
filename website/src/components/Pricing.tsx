"use client";

import { Reveal, Counter, MagneticButton } from "./motion";

const included = [
  "Prozessanalyse + Automatisierungsplan",
  "KI-Workflow-Entwicklung",
  "Systemintegration (CRM, E-Mail, ERP)",
  "Tägliche Fortschritts-Updates",
  "Team-Schulung + Dokumentation",
  "30 Tage Support nach Go-Live",
];

export default function Pricing() {
  return (
    <section id="preis" className="relative">
      {/* Full-width elevated band */}
      <div className="bg-bg-elevated">
        <div className="mx-auto max-w-350 px-6 py-32 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[2fr_3fr]">
            {/* Left: Price — sticky on scroll */}
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="mb-6 font-mono text-sm text-fg-dim">INVESTMENT</p>
                <div className="mb-4">
                  <span className="text-[clamp(4rem,8vw,7rem)] font-bold leading-none tracking-tighter">
                    &euro;<Counter target={5000} duration={2} />
                  </span>
                </div>
                <p className="mb-2 text-lg text-fg-muted">
                  netto &middot; einmalig &middot; Festpreis
                </p>
                <p className="text-sm text-fg-dim">
                  50% bei Start, 50% bei Go-Live
                </p>

                <p className="mt-6 text-sm text-fg-muted">
                  <span className="text-accent">&#10003;</span>{" "}
                  <span className="font-medium text-fg">Sprint-Garantie</span>{" "}
                  — Ergebnis nicht erreicht? Ich arbeite kostenlos weiter.
                </p>

                <div className="mt-10">
                  <MagneticButton
                    href="#kontakt"
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-fg px-10 text-[15px] font-medium text-bg"
                  >
                    <span className="relative z-10">Jetzt Platz sichern</span>
                    <span className="absolute inset-0 bg-linear-to-r from-accent to-accent-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Jetzt Platz sichern
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            {/* Right: What's included — numbered list */}
            <div>
              <Reveal>
                <p className="mb-8 font-mono text-sm text-fg-dim">
                  AI-PROZESS-SPRINT BEINHALTET
                </p>
              </Reveal>
              <div>
                {included.map((item, i) => (
                  <Reveal key={item} delay={i * 0.05}>
                    <div className="flex items-center gap-4 border-b border-border py-5">
                      <span className="font-mono text-sm text-fg-dim">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg text-fg-muted">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
