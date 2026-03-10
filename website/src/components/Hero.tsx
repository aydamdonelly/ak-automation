export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-[128px]" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-pink/15 blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Aktuell 2 Plätze frei
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Ich automatisiere Ihren{" "}
          <span className="bg-gradient-to-r from-accent to-accent-pink bg-clip-text text-transparent">
            zeitfressendsten Prozess
          </span>
          {" "}— in 2 Wochen.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted sm:text-xl">
          KI-gestützte Prozessautomatisierung für deutsche KMUs.
          Festpreis. Messbares Ergebnis. Kein Risiko.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="inline-flex h-12 items-center rounded-lg bg-gradient-to-r from-accent to-accent-pink px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Kostenloses Erstgespräch
          </a>
          <a
            href="#loesung"
            className="inline-flex h-12 items-center rounded-lg border border-border px-8 text-sm font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            So funktioniert&apos;s
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">20–30h</span>
            Zeitersparnis / Woche
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">10</span>
            Arbeitstage
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">€5.000</span>
            Festpreis
          </div>
        </div>
      </div>
    </section>
  );
}
