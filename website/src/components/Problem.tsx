const problems = [
  {
    icon: "⏱",
    title: "Manuelle Routinearbeit",
    description:
      "Ihre Mitarbeiter verbringen Stunden mit Copy-Paste, Datenabgleich und wiederkehrenden E-Mails — statt mit wertschöpfender Arbeit.",
  },
  {
    icon: "📊",
    title: "Daten-Silos überall",
    description:
      "CRM, E-Mail, Excel, ERP — Ihre Daten leben in 5+ Systemen, die nicht miteinander sprechen. Fehler sind vorprogrammiert.",
  },
  {
    icon: "🔥",
    title: "AI-Hype, null Umsetzung",
    description:
      "Sie wissen, dass AI helfen könnte — aber Ihr Team hat weder Zeit noch Know-how für die Umsetzung. Und Berater reden nur.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-accent">Das Problem</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Ihr Team arbeitet hart — aber an den falschen Aufgaben.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          Deutsche KMUs verlieren 20–30 Stunden pro Woche durch Prozesse, die
          längst automatisiert sein könnten.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <span className="mb-4 block text-3xl">{problem.icon}</span>
              <h3 className="mb-3 text-lg font-semibold">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
