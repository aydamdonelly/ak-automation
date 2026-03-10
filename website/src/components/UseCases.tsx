"use client";

import { Reveal, StaggerContainer, StaggerItem, Counter } from "./motion";

const useCases = [
  {
    tag: "E-Commerce",
    title: "AI-Angebotsassistent",
    before: "3 Stunden",
    after: "10 Minuten",
    afterNum: 10,
    unit: "Min",
    description:
      "Kundenanfragen kommen rein → AI erstellt Angebote basierend auf Ihrem Produktkatalog → Mitarbeiter prüft und klickt 'Senden'.",
    flow: ["Anfrage", "AI-Analyse", "Angebot", "Prüfung", "Versand"],
  },
  {
    tag: "Professional Services",
    title: "E-Mail-Klassifizierung",
    before: "45 Minuten",
    after: "0 Minuten",
    afterNum: 0,
    unit: "Min",
    description:
      "AI liest eingehende E-Mails, erkennt Dringlichkeit und Kategorie, routet an die richtige Abteilung und legt Tickets an.",
    flow: ["E-Mail", "AI-Parsing", "Kategorie", "Routing", "Ticket"],
  },
  {
    tag: "Fertigung",
    title: "Bestell-Pipeline",
    before: "2 Stunden",
    after: "5 Minuten",
    afterNum: 5,
    unit: "Min",
    description:
      "Bestellungen aus verschiedenen Kanälen werden automatisch erfasst, abgeglichen und ins ERP übertragen.",
    flow: ["Bestellung", "Erfassung", "Abgleich", "Validierung", "ERP"],
  },
];

export default function UseCases() {
  return (
    <section id="anwendungen" className="relative px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">// ANWENDUNGEN</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Prozesse, die wir{" "}
            <span className="gradient-text">automatisieren.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-xl text-lg text-fg-muted">
            Drei typische Beispiele. Ihr Prozess kann anders aussehen —
            im Erstgespräch finden wir den richtigen.
          </p>
        </Reveal>

        {/* Bento grid */}
        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <StaggerItem key={uc.title}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated transition-all duration-500 hover:border-border-hover hover:bg-bg-card">
                {/* Header */}
                <div className="border-b border-border p-6 pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                      {uc.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-fg-dim">
                      <span className="line-through">{uc.before}</span>
                      <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="font-semibold text-accent">{uc.after}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{uc.title}</h3>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-fg-muted">
                    {uc.description}
                  </p>

                  {/* Flow visualization */}
                  <div className="flex items-center gap-1 overflow-x-auto">
                    {uc.flow.map((step, i) => (
                      <div key={step} className="flex items-center gap-1">
                        <span className="whitespace-nowrap rounded-md bg-bg px-2.5 py-1.5 font-mono text-[10px] text-fg-dim transition-colors group-hover:text-fg-muted">
                          {step}
                        </span>
                        {i < uc.flow.length - 1 && (
                          <svg className="h-3 w-3 shrink-0 text-fg-dim/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
