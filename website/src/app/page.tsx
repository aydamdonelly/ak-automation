import { ScrollProgress } from "@/components/motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was genau bekomme ich für €5.000?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einen vollständig automatisierten Geschäftsprozess. Inkl. Analyse, KI-Workflow-Entwicklung, Integration in Ihre bestehenden Systeme, Team-Schulung und 30 Tage Support nach Go-Live.",
      },
    },
    {
      "@type": "Question",
      name: "Funktioniert das auch in meiner Branche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn Ihr Team wiederkehrende, regelbasierte Aufgaben hat — ja. E-Commerce, Professional Services, Fertigung und viele weitere Branchen profitieren. Im kostenlosen Erstgespräch prüfe ich Ihren konkreten Fall.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn der Sprint nicht das versprochene Ergebnis liefert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sprint-Garantie: Wenn wir das vereinbarte Ergebnis nicht erreichen, arbeite ich kostenlos weiter, bis es steht. Kein Risiko für Sie.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich technisches Wissen in meinem Team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Ich baue alles auf, schule Ihr Team und übergebe eine verständliche Dokumentation. Ihre Mitarbeiter nutzen das System — sie müssen es nicht verstehen.",
      },
    },
    {
      "@type": "Question",
      name: "Warum 10 Tage und nicht 3 Monate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weil 80% der Beratungszeit für Meetings, Reports und Alignment draufgeht. Ich arbeite allein, fokussiert und mit klarem Scope. Ein Prozess, fertig.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert nach dem Sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das System läuft eigenständig. Sie bekommen 30 Tage Support, Dokumentation und eine Schulung. Danach brauchen Sie mich nicht mehr — es sei denn, Sie wollen den nächsten Prozess automatisieren.",
      },
    },
    {
      "@type": "Question",
      name: "Wie unterscheidet sich das von einem klassischen Berater?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berater liefern Konzepte. Ich liefere ein funktionierendes System. Festpreis statt Tagessatz, konkretes Ergebnis statt PowerPoint.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <UseCases />
        <Pricing />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
