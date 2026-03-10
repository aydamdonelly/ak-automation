const steps = [
  {
    number: "01",
    title: "Analyse",
    duration: "Tag 1–2",
    description:
      "Ich analysiere Ihren Prozess, identifiziere die größten Zeitfresser und definiere das Automatisierungsziel. Sie bekommen einen klaren Plan.",
  },
  {
    number: "02",
    title: "Build",
    duration: "Tag 3–8",
    description:
      "Ich baue die Automatisierung: KI-Workflows, Systemintegrationen und Daten-Pipelines. Tägliche Updates, keine Blackbox.",
  },
  {
    number: "03",
    title: "Launch",
    duration: "Tag 9–10",
    description:
      "Go-Live mit Ihrem Team. Schulung, Dokumentation und Übergabe. Danach läuft der Prozess — ohne mich.",
  },
];

export default function Solution() {
  return (
    <section id="loesung" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-accent">Die Lösung</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          AI-Prozess-Sprint: 1 Prozess, 10 Tage, fertig.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          Kein monatelanges Projekt. Kein Berater-Deutsch. Ein klarer Sprint mit
          messbarem Ergebnis.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="mb-4 block bg-gradient-to-r from-accent to-accent-pink bg-clip-text text-5xl font-bold text-transparent">
                {step.number}
              </span>
              <div className="mb-2 flex items-center gap-3">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <span className="rounded-full border border-border px-3 py-0.5 text-xs text-muted">
                  {step.duration}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
