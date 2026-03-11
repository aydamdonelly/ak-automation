import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Impressum — Adam Kahirov",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-350">
          <a href="/" className="inline-flex items-center gap-2">
            <Logo size={32} animate={false} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-200 px-6 py-20 lg:px-10">
        <h1 className="mb-12 text-4xl font-bold tracking-tight">Impressum</h1>

        <div className="space-y-8 text-fg-muted leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Adam Kahirov
              <br />
              Gymnasiumstr. 52
              <br />
              70174 Stuttgart, Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">Kontakt</h2>
            <p>
              E-Mail: adam@kahirov.de
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Adam Kahirov
              <br />
              Gymnasiumstr. 52
              <br />
              70174 Stuttgart, Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              Haftungsausschluss
            </h2>

            <h3 className="mb-2 mt-4 font-medium text-fg">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="mb-2 mt-4 font-medium text-fg">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="mb-2 mt-4 font-medium text-fg">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
