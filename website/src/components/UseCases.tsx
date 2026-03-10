const useCases = [
  {
    tag: "E-Commerce",
    title: "AI-Angebotsassistent",
    description:
      "Kundenanfragen kommen rein, AI erstellt Angebote in Sekunden basierend auf Ihrem Produktkatalog. Mitarbeiter prüft nur noch und klickt 'Senden'.",
    metric: "3h → 10 Min pro Angebot",
  },
  {
    tag: "Professional Services",
    title: "E-Mail-Klassifizierung",
    description:
      "AI liest eingehende E-Mails, erkennt Dringlichkeit und Kategorie, routet automatisch an die richtige Abteilung und legt Tickets an.",
    metric: "45 Min → 0 Min täglich",
  },
  {
    tag: "Fertigung",
    title: "Bestell-Pipeline",
    description:
      "Bestellungen aus verschiedenen Kanälen werden automatisch erfasst, abgeglichen und ins ERP übertragen. Keine manuelle Dateneingabe mehr.",
    metric: "2h → 5 Min pro Bestellung",
  },
];

export default function UseCases() {
  return (
    <section id="anwendungen" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-accent">Anwendungen</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Prozesse, die wir automatisieren.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          Drei typische Beispiele — Ihr Prozess kann anders aussehen.
          Im Erstgespräch finden wir den richtigen.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <div>
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {uc.tag}
                </span>
                <h3 className="mb-3 text-lg font-semibold">{uc.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  {uc.description}
                </p>
              </div>
              <div className="rounded-xl bg-background p-4 text-center">
                <span className="text-sm font-semibold text-accent">
                  {uc.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
