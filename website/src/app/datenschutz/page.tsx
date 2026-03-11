import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Adam Kahirov",
};

export default function Datenschutz() {
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
        <h1 className="mb-12 text-4xl font-bold tracking-tight">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-fg-muted leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mb-2 mt-4 font-medium text-fg">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Adam Kahirov
              <br />
              Gymnasiumstr. 52
              <br />
              70174 Stuttgart, Deutschland
              <br />
              E-Mail: adam@kahirov.de
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mb-2 mt-4 font-medium text-fg">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="mb-2 mt-4 font-medium text-fg">Hosting</h3>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Details zum Umgang
              mit Ihren Daten entnehmen Sie der Datenschutzerklärung von
              Vercel.
            </p>

            <h3 className="mb-2 mt-4 font-medium text-fg">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren,
              wird Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten zum Zwecke der Bearbeitung bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              4. Externe Dienste
            </h2>

            <h3 className="mb-2 mt-4 font-medium text-fg">Calendly</h3>
            <p>
              Für die Terminbuchung nutzen wir Calendly. Wenn Sie einen Termin
              buchen, werden Ihre eingegebenen Daten von Calendly verarbeitet.
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Calendly.
            </p>

            <h3 className="mb-2 mt-4 font-medium text-fg">Google Fonts</h3>
            <p>
              Diese Seite nutzt Schriftarten von Google (Geist). Die Fonts
              werden lokal eingebunden, es findet keine Verbindung zu
              Google-Servern statt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              5. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt, haben Sie das Recht, sich bei der
              zuständigen Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-fg">
              6. Aktualität
            </h2>
            <p>
              Stand: März 2026. Wir behalten uns vor, diese Datenschutzerklärung
              anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
