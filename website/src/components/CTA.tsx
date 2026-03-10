export default function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden px-6 py-24">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Bereit, 20+ Stunden pro Woche zurückzugewinnen?
        </h2>
        <p className="mb-10 text-lg text-muted">
          Kostenloser AI-Readiness-Check: In 30 Minuten zeige ich Ihnen, welcher
          Prozess das größte Automatisierungspotenzial hat.
        </p>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center rounded-lg bg-gradient-to-r from-accent to-accent-pink px-10 text-base font-medium text-white transition-opacity hover:opacity-90"
        >
          Kostenloses Erstgespräch buchen
        </a>

        <p className="mt-6 text-sm text-muted">
          30 Min · Kein Verkaufsgespräch · Konkreter Automatisierungsplan
        </p>
      </div>
    </section>
  );
}
