"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";

const problems = [
  {
    number: "30h",
    highlight: "/Woche",
    title: "Manuelle Routinearbeit",
    description:
      "Copy-Paste, Datenabgleich, wiederkehrende E-Mails — Ihre Mitarbeiter verbringen Stunden mit Arbeit, die eine Maschine in Sekunden erledigt.",
    visual: (
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(124,58,237,0.15)" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(124,58,237,0.6)" strokeWidth="2" strokeDasharray="220 94" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="8s" repeatCount="indefinite" />
        </circle>
        <text x="60" y="58" textAnchor="middle" fill="#888" fontSize="11" fontFamily="monospace">70%</text>
        <text x="60" y="72" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">automatable</text>
      </svg>
    ),
  },
  {
    number: "5+",
    highlight: "Systeme",
    title: "Daten-Silos ohne Brücke",
    description:
      "CRM, E-Mail, Excel, ERP — Ihre Daten leben in Silos, die nicht miteinander sprechen. Jeder Transfer ist ein Fehlerrisiko.",
    visual: (
      <svg viewBox="0 0 120 120" className="h-full w-full">
        {[
          { cx: 35, cy: 35 },
          { cx: 85, cy: 35 },
          { cx: 60, cy: 60 },
          { cx: 35, cy: 85 },
          { cx: 85, cy: 85 },
        ].map((pos, i) => (
          <g key={i}>
            <circle cx={pos.cx} cy={pos.cy} r="12" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
            <line x1={pos.cx} y1={pos.cy} x2="60" y2="60" stroke="rgba(124,58,237,0.15)" strokeWidth="1" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
            </line>
          </g>
        ))}
      </svg>
    ),
  },
  {
    number: "0",
    highlight: "Umsetzung",
    title: "AI-Hype, null Ergebnis",
    description:
      "Sie wissen, dass AI helfen könnte. Aber Ihr Team hat weder die Zeit noch das Know-how — und Berater liefern PowerPoints, keine Lösungen.",
    visual: (
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <line x1="20" y1="90" x2="100" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="20" y1="20" x2="20" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <polyline
          points="25,80 40,75 55,70 70,65 85,60 95,55"
          fill="none"
          stroke="rgba(124,58,237,0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <polyline
          points="25,80 40,78 55,77 70,76 85,75 95,74"
          fill="none"
          stroke="rgba(236,72,153,0.5)"
          strokeWidth="1.5"
        />
        <text x="100" y="50" fill="#555" fontSize="7" fontFamily="monospace">erwartet</text>
        <text x="100" y="72" fill="#555" fontSize="7" fontFamily="monospace">realität</text>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">// DAS PROBLEM</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ihr Team arbeitet hart —<br />
            aber an den{" "}
            <span className="text-fg-muted">falschen Aufgaben.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-20 max-w-xl text-lg text-fg-muted">
            Deutsche KMUs verlieren 20–30 Stunden pro Woche durch Prozesse,
            die längst automatisiert sein könnten.
          </p>
        </Reveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated p-8 transition-all duration-500 hover:border-border-hover hover:bg-bg-card">
                {/* SVG visual */}
                <div className="mb-6 h-28 w-28 opacity-60 transition-opacity group-hover:opacity-100">
                  {p.visual}
                </div>

                {/* Stat */}
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{p.number}</span>
                  <span className="text-sm text-fg-muted">{p.highlight}</span>
                </div>

                <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {p.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-linear-to-r from-accent/40 via-accent-pink/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
