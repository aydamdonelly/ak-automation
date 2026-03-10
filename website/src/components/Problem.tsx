"use client";

import { Reveal, Counter } from "./motion";

const problems = [
  {
    number: 30,
    suffix: "h",
    highlight: "pro Woche",
    title: "Manuelle Routinearbeit",
    description:
      "Copy-Paste, Datenabgleich, wiederkehrende E-Mails — Ihre Mitarbeiter verbringen Stunden mit Arbeit, die eine Maschine in Sekunden erledigt.",
  },
  {
    number: 5,
    suffix: "+",
    highlight: "Systeme",
    title: "Daten-Silos ohne Brücke",
    description:
      "CRM, E-Mail, Excel, ERP — Ihre Daten leben in Silos, die nicht miteinander sprechen. Jeder Transfer ist ein Fehlerrisiko.",
  },
  {
    number: 0,
    suffix: "",
    highlight: "Umsetzung",
    title: "AI-Hype, null Ergebnis",
    description:
      "Sie wissen, dass AI helfen könnte. Aber Ihr Team hat weder die Zeit noch das Know-how — und Berater liefern PowerPoints, keine Lösungen.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-32">
      {/* Contained heading */}
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-fg-dim">01</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight">
            Ihr Team arbeitet hart —<br />
            aber an den{" "}
            <span className="text-fg-muted">falschen Aufgaben.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-2xl text-lg text-fg-muted">
            Deutsche KMUs verlieren 20–30 Stunden pro Woche durch Prozesse,
            die längst automatisiert sein könnten.
          </p>
        </Reveal>
      </div>

      {/* Full-width scrolling ticker */}
      <div className="ticker-mask mb-20 overflow-hidden border-y border-border py-5">
        <div
          className="ticker-track flex"
          style={{
            width: "max-content",
            animation: "scroll-x 35s linear infinite",
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-8 pr-8 font-mono text-sm uppercase tracking-widest text-fg-muted"
            >
              <span>30h manuelle Arbeit</span>
              <span className="text-accent">·</span>
              <span>5+ isolierte Systeme</span>
              <span className="text-accent">·</span>
              <span>0 AI-Umsetzung</span>
              <span className="text-accent">·</span>
              <span>20-30h verschwendet</span>
              <span className="text-accent">·</span>
              <span>Copy-Paste-Schleifen</span>
              <span className="text-accent">·</span>
              <span>Fehlerrisiko bei jedem Transfer</span>
              <span className="text-accent">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial data rows — alternating alignment */}
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div
              className={`flex flex-col gap-6 border-t border-border py-12 lg:flex-row lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Large number */}
              <div className="shrink-0 lg:w-70">
                <span className="block text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-tighter">
                  <Counter target={p.number} duration={2} />
                  {p.suffix}
                </span>
                <span className="mt-2 block font-mono text-sm text-fg-dim">
                  {p.highlight}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-semibold lg:text-3xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-lg leading-relaxed text-fg-muted">
                  {p.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
