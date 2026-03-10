export default function About() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-accent">Über mich</p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Adam Kahirov
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted">
            21, Stuttgart. Ehemaliger IBM Research Praktikant — drei Standorte,
            drei Länder (Dublin, Almaden, Tokyo). Mein Schwerpunkt: LLM-Systeme,
            die tatsächlich funktionieren.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            Ich studiere Business Informatics an der DHBW Stuttgart und bin
            Member der WEF Global Shapers. Jetzt helfe ich deutschen KMUs,
            AI dort einzusetzen, wo es sofort messbar wird.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["IBM Research", "DHBW Stuttgart", "WEF Global Shaper", "LLM-Systeme"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
