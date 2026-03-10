const included = [
  "Prozessanalyse + Automatisierungsplan",
  "KI-Workflow-Entwicklung",
  "Systemintegration (CRM, E-Mail, ERP, etc.)",
  "Tägliche Fortschritts-Updates",
  "Team-Schulung + Dokumentation",
  "30 Tage Support nach Go-Live",
];

export default function Pricing() {
  return (
    <section id="preis" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-accent">Preis</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Transparent. Kein Stundensatz.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          Sie wissen vorher, was es kostet. Keine versteckten Gebühren,
          keine Überraschungen.
        </p>

        <div className="mx-auto max-w-lg rounded-2xl border border-accent/30 bg-card p-10">
          <div className="mb-8 text-center">
            <p className="mb-1 text-sm text-muted">AI-Prozess-Sprint</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold">€5.000</span>
              <span className="text-muted">netto</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Einmalig · Festpreis · 50/50 Zahlung
            </p>
          </div>

          <ul className="mb-10 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-pink text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Jetzt Platz sichern
          </a>
        </div>
      </div>
    </section>
  );
}
