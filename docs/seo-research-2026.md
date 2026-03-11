# SEO Research 2026 -- kahirov.de

Recherche-Datum: 2026-03-11
Kontext: B2B-Consulting-Website, Next.js 16, Vercel, .de-Domain (IONOS), 7 deutsche Blog-Posts ueber AI-Automatisierung fuer KMUs (30-300 MA).

---

## 1. Schema Markup -- Welche Typen sind am wirkungsvollsten?

### Prioritaet 1: Bereits implementiert (pruefen/erweitern)

**Organization / ProfessionalService (sitewide)**
- Bereits in `layout.tsx` als ProfessionalService implementiert. Gut.
- Ergaenzungen empfohlen:
  - `sameAs` Array mit LinkedIn-Profil, GitHub, etc.
  - `hasOfferCatalog` mit dem AI-Prozess-Sprint als `Offer` (Preis, Waehrung, Beschreibung)
  - `contactPoint` mit Telefon/E-Mail
  - `knowsAbout` Array: ["AI-Automatisierung", "Prozessoptimierung", "n8n", ...]
- Quelle: https://martech.org/schema-markup-b2b-enterprise/

**Article / BlogPosting (pro Blog-Post)**
- FEHLT aktuell. `generateMetadata` in `[slug]/page.tsx` setzt nur title + description, aber kein JSON-LD.
- Muss pro Post hinzugefuegt werden mit: headline, author (Person), datePublished, dateModified, publisher (Organization), image, description.
- Person-Schema im author-Feld staerkt E-E-A-T-Signale erheblich.
- Quelle: https://nextjs.org/docs/app/guides/json-ld

### Prioritaet 2: Neue Schemas hinzufuegen

**FAQPage**
- Hoechste Wirkung fuer AEO: Seiten mit FAQ-Schema sind 3.2x wahrscheinlicher in Google AI Overviews.
- `extractFaqs()` existiert bereits in `blog.ts` -- wird aber nirgends als JSON-LD ausgegeben.
- Fuer jeden Post der eine "Haeufig gestellte Fragen"-Section hat: FAQPage-Schema generieren.
- Quelle: https://www.frase.io/blog/faq-schema-ai-search-geo-aeo/

**HowTo**
- Ideal fuer Post 1 (Leitfaden) und Post 7 (Prozess-Audit) -- beide haben Schritt-fuer-Schritt-Anleitungen.
- Ergibt Rich Results mit nummerierten Steps in der SERP.
- Quelle: https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/

**Service**
- Fuer die Hauptseite (Landing Page): Den AI-Prozess-Sprint als Service beschreiben.
- Properties: name, description, provider, areaServed, offers (Preis).
- Quelle: https://www.atakinteractive.com/blog/the-complete-guide-to-schema-markup-for-b2b-companies

### Kombinations-Effekt

Seiten mit 3+ Schema-Typen zeigen signifikant hoehere AI-Citation-Rates. Ziel fuer jeden Blog-Post: Article + FAQPage (wenn FAQ vorhanden) + BreadcrumbList. Ziel fuer Landing Page: Organization + Service + FAQPage.

Quelle: https://www.airops.com/blog/schema-markup-aeo

### Implementierung in Next.js

JSON-LD wird als `<script type="application/ld+json">` im Page-Component gerendert, nicht ueber `generateMetadata`. Der aktuelle Ansatz in `layout.tsx` ist korrekt. Fuer Blog-Posts muss das gleiche Muster in `[slug]/page.tsx` angewendet werden.

```typescript
// Beispiel: Blog-Post mit Article + FAQ Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  author: {
    '@type': 'Person',
    name: 'Adam Kahirov',
    url: 'https://linkedin.com/in/adam-kahirov',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AK Automation',
    logo: { '@type': 'ImageObject', url: 'https://kahirov.de/logo-512.png' },
  },
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: `https://kahirov.de/blog/${post.slug}`,
  inLanguage: 'de',
};

// FAQPage nur wenn extractFaqs() Ergebnisse liefert
const faqs = extractFaqs(post.content);
const faqSchema = faqs.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
} : null;
```

Quelle: https://nextjs.org/docs/app/guides/json-ld

---

## 2. Google Search Console Setup -- Gotchas fuer .de auf Vercel

### Empfohlener Ablauf

1. **Domain-Property waehlen** (nicht URL-Prefix): Verifiziert alles unter kahirov.de inkl. Subdomains und http/https.

2. **DNS-TXT-Record bei IONOS setzen:**
   - In IONOS Konto einloggen -> Domains & SSL -> kahirov.de -> DNS-Einstellungen
   - Neuen TXT-Record anlegen: Name leer lassen (oder @), Wert = der Google-Verifizierungscode
   - Kann bis zu 72 Stunden dauern, oft aber unter 1 Stunde
   - Quelle: https://www.ionos.com/help/domains/connecting-a-domain-with-an-external-service/google-search-console-confirming-domain-property-ownership/

3. **Sitemap submitten:** `https://kahirov.de/sitemap.xml` (bereits korrekt generiert)

### Gotchas spezifisch fuer Vercel + .de

**Duplicate-Content-Problem:**
- Vercel macht die Site auch unter `ataladams-projects-website.vercel.app` erreichbar
- Das kann zu Duplicate Content fuehren
- Loesung (3-stufig):
  1. Canonical Tags (bereits in layout.tsx als `alternates.canonical`)
  2. Vercel setzt automatisch `X-Robots-Tag: noindex` auf Preview-Deployments
  3. Empfohlen: WAF Custom Rule in Vercel Dashboard -> Project -> Firewall -> "Redirect to canonical" anlegen, die Requests an *.vercel.app auf kahirov.de redirected
- Quelle: https://vercel.com/kb/guide/avoiding-duplicate-content-with-vercel-app-urls

**Canonical URLs pro Blog-Post:**
- `generateMetadata` in `[slug]/page.tsx` setzt aktuell KEINE canonical URL pro Post.
- Muss ergaenzt werden:
  ```typescript
  alternates: {
    canonical: `https://kahirov.de/blog/${slug}`,
  },
  ```
- Ohne das erbt jeder Post die canonical URL der Layout-Root (`https://kahirov.de`).

**IONOS DNS vs. Vercel DNS:**
- Da die Domain bei IONOS liegt und Vercel per CNAME/A-Record angebunden ist, muss der GSC-TXT-Record bei IONOS gesetzt werden (nicht bei Vercel).
- Die DNS-Verwaltung bleibt bei IONOS, Vercel ist nur Hosting-Ziel.

### Nach Verifizierung

- Sitemap submitten
- URL-Inspektion fuer / und /blog laufen lassen
- "Index Coverage" nach 1-2 Wochen pruefen
- Core Web Vitals Report aktivieren

---

## 3. Technische SEO-Faktoren fuer Next.js (2026)

### Rendering (bereits gut)

- SSG via `generateStaticParams` fuer Blog-Posts -- korrekt implementiert.
- Alle Seiten liefern vollstaendiges HTML ohne JS-Abhaengigkeit. Ideal fuer Crawling.
- `next/image` fuer automatische Bildoptimierung nutzen (pruefen ob in Blog-Posts verwendet).
- Quelle: https://www.djamware.com/post/nextjs-seo-optimization-guide-2026-edition

### Core Web Vitals (Ranking-Faktor)

**LCP (Largest Contentful Paint) -- Ziel: < 2.5s**
- Kritischster Metric, nur 62% der mobilen Seiten bestehen ihn.
- Haeufigste Blocker: Webfonts, Hero-Images, unkritisches CSS.
- Geist-Fonts werden via `next/font/google` geladen -- das ist optimal (preload + font-display: swap automatisch).
- Pruefen: Framer Motion Bundle-Groesse. Bei vielen Animationen kann das LCP verzoegern.
- Quelle: https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide

**INP (Interaction to Next Paint) -- Ziel: < 200ms**
- Ersetzt FID seit Maerz 2024. 43% der Websites fallen durch.
- Framer Motion Animationen sollten `will-change` und GPU-beschleunigte Properties nutzen (transform, opacity).
- Event-Handler in Blog-Posts (TOC-Klicks, etc.) sollten keine langen JS-Tasks ausloesen.

**CLS (Cumulative Layout Shift) -- Ziel: < 0.1**
- Alle Bilder brauchen explizite width/height Attribute.
- Font-Loading: Durch `next/font` bereits abgedeckt (kein FOUT/FOIT).
- Die ScrollProgress-Komponente und Reveal-Animationen auf Layout-Shifts pruefen.

### Metadata API

- `generateMetadata` ist korrekt implementiert fuer Blog-Posts.
- Fehlend: Open Graph Image pro Post (og:image). Ohne das wird beim Teilen kein Vorschaubild angezeigt.
- Fehlend: Per-Post canonical URLs (siehe oben).
- Quelle: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

### Weitere technische Faktoren

| Faktor | Status | Aktion |
|--------|--------|--------|
| sitemap.xml | OK | Bereits dynamisch generiert |
| robots.txt | OK | Allow all, Sitemap-Referenz |
| Canonical URLs | Teilweise | Pro Blog-Post ergaenzen |
| HTML lang | OK | `<html lang="de">` gesetzt |
| Semantic HTML | OK | h1/h2/h3 Hierarchie in Posts |
| Alt-Tags | Pruefen | In MDX-Posts pruefen |
| 404-Page | Pruefen | Custom 404 mit Navigation? |
| Trailing Slashes | Pruefen | Konsistenz sicherstellen |
| HTTPS | OK | Vercel erzwingt HTTPS |

Quellen:
- https://nextjs.org/learn/seo
- https://jamstack.consulting/posts/nextjs-seo

---

## 4. Internal Linking -- Best Practices fuer 7-Post-Cluster

### Hub-and-Spoke Modell

Fuer eine kleine Blog-Struktur (<100 Seiten) ist das Hub-and-Spoke-Modell optimal. Post 1 (Pillar Page "Prozesse automatisieren im Mittelstand") ist der Hub, die anderen 6 Posts sind Spokes.

```
                    Landing Page (/)
                         |
                    Blog Index (/blog)
                         |
              Post 1 (PILLAR PAGE)
              /    |    |    |    \    \
          Post 2  Post 3  Post 4  Post 5  Post 6  Post 7
```

Quelle: https://www.maviklabs.com/blog/internal-linking-strategy-2026

### Konkrete Linking-Matrix fuer die 7 Posts

Jeder Post sollte 2-5 kontextuelle Links zu anderen Posts enthalten (pro 1.000 Woerter).

| Von (Post) | Linkt zu | Kontext fuer den Link |
|------------|----------|----------------------|
| Post 1 (Pillar: Leitfaden) | 2, 3, 5, 6, 7 | Verweist auf Kosten, Beispiele, Tools, Audit |
| Post 2 (Kosten) | 1, 3, 4 | "Welche Prozesse?" -> Post 1/3, "Ergebnisse" -> Post 4 |
| Post 3 (10 Prozesse) | 1, 2, 6 | Pillar, Kosten, Tool-Vergleich |
| Post 4 (Praxisbeispiele) | 1, 2, 7 | Pillar, "Was kostet das?", Audit-Framework |
| Post 5 (Fachkraeftemangel) | 1, 3, 4 | Pillar, konkrete Prozesse, Ergebnisse |
| Post 6 (Tool-Vergleich) | 1, 3 | Pillar, "Welche Prozesse damit automatisieren?" |
| Post 7 (Prozess-Audit) | 1, 2, 3 | Pillar, Kosten, Prozess-Beispiele |

### Regeln

1. **Jeder Spoke linkt zum Pillar** -- Das ist die wichtigste Regel. Staerkt die topical authority des Pillar-Posts.
2. **Der Pillar linkt zu jedem Spoke** -- Im Fliesstext, nicht nur in einer Liste am Ende.
3. **Cross-Links zwischen verwandten Spokes** -- Maximal 1-3 pro Post, nur wo inhaltlich sinnvoll.
4. **Jeder Post linkt zur Landing Page CTA** -- Bereits implementiert als End-CTA-Box.
5. **Anchor-Texte variieren** -- Nicht immer den Post-Titel verwenden. Natuerliche Formulierungen wie "die Kosten fuer KI-Automatisierung" statt "KI-Automatisierung Kosten: Was zahlen deutsche KMUs wirklich?".
6. **Links im oberen Drittel platzieren** -- 44.2% der AI-Citations kommen aus den ersten 30% des Contents.

### Blog-Index-Seite

- Pillar-Post visuell hervorheben (groesser, oben, ggf. "Empfohlen"-Label).
- Sortierung: Pillar zuerst, dann nach Datum.

Quellen:
- https://rankingstudios.com/your-2026-guide-to-internal-linking-best-practices-for-seo/
- https://topicalmap.ai/blog/auto/internal-linking-strategy-guide-2026

---

## 5. Deutsche SEO-Besonderheiten

### .de Domain = Staerkstes Geo-Signal

- Eine ccTLD wie kahirov.de sendet das klarste Geo-Targeting-Signal an Google. Deutsche User vertrauen .de-Domains mehr als .com/de-Varianten.
- Kein zusaetzliches Geo-Targeting in GSC noetig -- die .de-Domain reicht.
- Quelle: https://collaborator.pro/blog/seo-german-speaking-markets

### Hreflang fuer Single-Language-Site

- Bei einer rein deutschsprachigen Site auf einer .de-Domain ist hreflang NICHT zwingend noetig.
- Es schadet aber nicht, einen selbstreferenzierenden hreflang-Tag zu setzen:
  ```html
  <link rel="alternate" hreflang="de" href="https://kahirov.de/aktuelle-seite" />
  <link rel="alternate" hreflang="x-default" href="https://kahirov.de/aktuelle-seite" />
  ```
- Empfehlung: Noch nicht implementieren. Erst relevant wenn englische Inhalte hinzukommen.
- Quelle: https://developers.google.com/search/docs/specialty/international/localized-versions

### HTML lang Attribut

- `<html lang="de">` ist bereits korrekt gesetzt. Google nutzt es nicht primaer fuer die Spracherkennung (verwendet sichtbaren Content), aber es ist Best Practice fuer Accessibility und andere Crawler.

### Umlaute in URLs

- Bereits korrekt gehandhabt: `slugify()` in `blog.ts` ersetzt ae/oe/ue/ss.
- Regel: Keine Umlaute in URLs. Browser kodieren sie zu `%C3%A4` etc., was beim Kopieren unleserlich wird.
- Quelle: https://reply42.com/blog/seo-url

### Content-Sprache konsistent halten

- Google erkennt die Sprache am sichtbaren Content, nicht an Meta-Tags.
- Navigation, Buttons, Footer, Error-Messages -- alles auf Deutsch halten.
- Englische Fachbegriffe (AI, KI, n8n) sind OK, aber der Fliesstext muss Deutsch bleiben.
- Quelle: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

### Deutsche Keyword-Besonderheiten

- Deutsche Keywords sind laenger als englische (Komposita: "Geschaeftsprozessautomatisierung").
- Meta Descriptions auf 155 Zeichen begrenzen -- deutsche Woerter sind laenger, daher weniger Woerter moeglich.
- Quelle: https://germanyseo.com/how-to-do-german-seo-and-marketing

---

## 6. AEO (Answer Engine Optimization) -- Zitiert werden von ChatGPT, Perplexity, Google AI Overviews

### Warum AEO kritisch ist

- SEO-Ziel: Auf Seite 1 ranken. AEO-Ziel: Als Quelle in AI-generierten Antworten zitiert werden.
- Ueberlappung zwischen AI-Citations und Google Top 10 ist nur 12%. ChatGPT: nur 8% Ueberlappung mit Google-Rankings.
- AEO ist ein separates Spiel mit eigenen Regeln.
- Zeitrahmen: 2-3 Monate bis erste Citations, 6 Monate bis signifikante Sichtbarkeit.
- Quelle: https://www.thevccorner.com/p/geo-aeo-how-to-rank-when-ai-answers

### Die 7 AEO-Hebel fuer kahirov.de

**1. Structured Data (Schema Markup)**
- LLMs erreichen 300% hoehere Genauigkeit bei strukturierten vs. unstrukturierten Daten.
- FAQ-Schema ist der wichtigste AEO-Schema-Typ: Das Q&A-Format spiegelt exakt wider, wie AI-Plattformen Informationen praesentieren.
- Entity Confidence Score: Seiten mit validiertem Schema erreichen >85%, plain text faellt unter die Citation-Schwelle.
- Quelle: https://www.airops.com/blog/schema-markup-aeo

**2. Content-Struktur: Direkte Antworten zuerst**
- 44.2% der AI-Citations kommen aus den ersten 30% des Contents.
- Jeder Blog-Post sollte im ersten Absatz eine klare, direkte Antwort auf die Kernfrage geben.
- Beispiel Post 2 (Kosten): "Ein AI-Prozess-Sprint kostet zwischen 3.000 und 15.000 EUR. Der Median liegt bei 5.000 EUR Festpreis fuer einen automatisierten Geschaeftsprozess."
- Quelle: https://sapt.ai/insights/ai-search-optimization-complete-guide-chatgpt-perplexity-citations

**3. Klare Definitionen und nummerierte Listen**
- AI-Systeme bevorzugen Inhalte mit klaren Definitionen, nummerierten Schritten und logischem Aufbau.
- Listicles (Post 3: "10 Geschaeftsprozesse") sind die besten AEO-Kandidaten -- jeder Punkt muss eigenstaendig verstaendlich sein.
- Vergleichstabellen (Post 6: n8n vs. Make vs. Zapier) werden haeufig von AI zitiert.
- Quelle: https://blog.hubspot.com/marketing/aeo-page-structure

**4. E-E-A-T Signale staerken**
- Author-Schema (Person) mit dem Article-Schema verbinden.
- Adam Kahirov's IBM Research Hintergrund, WEF Global Shaper Status und DHBW-Studium sind starke E-E-A-T-Signale.
- LinkedIn-Profil, GitHub, ggf. Publikationen als `sameAs` im Person-Schema verlinken.
- Author-Bio unter jedem Post mit Credentials.
- Quelle: https://martech.org/schema-markup-b2b-enterprise/

**5. Consensus Signals aufbauen**
- AI-Plattformen scannen nach Uebereinstimmung ueber mehrere unabhaengige Quellen.
- Wenn kahirov.de + LinkedIn-Posts + Reddit-Diskussionen + Gastbeitraege die gleiche Positionierung haben, steigt die Citation-Wahrscheinlichkeit.
- Konkret: Blog-Content auf LinkedIn repurposen, in deutschen AI/Automation-Subreddits diskutieren, auf relevanten Plattformen kommentieren.
- Quelle: https://www.thevccorner.com/p/geo-aeo-how-to-rank-when-ai-answers

**6. Regelmaessige Content-Updates**
- AI-Plattformen bevorzugen aktuelle Inhalte. Quartalsweise Updates empfohlen.
- dateModified im Article-Schema immer aktuell halten.
- "Stand: Maerz 2026" oder "Aktualisiert: Q1 2026" im Content sichtbar machen.
- Quelle: https://llmrefs.com/answer-engine-optimization

**7. Deutsche Nische nutzen**
- Deutsche AI-Automatisierungs-Inhalte sind noch duenn -- das ist die groesste Chance.
- Wer jetzt die definitive deutsche Ressource fuer "KI-Automatisierung KMU" wird, bekommt die AI-Citations auf Jahre.
- Englischsprachige Konkurrenz ist irrelevant fuer deutsche Suchanfragen.

### AEO-Checkliste pro Blog-Post

- [ ] Direkte Antwort im ersten Absatz
- [ ] Article + FAQPage Schema (JSON-LD)
- [ ] Nummerierte Listen / klare Definitionen
- [ ] Vergleichstabellen wo sinnvoll
- [ ] Author-Bio mit E-E-A-T-Signalen
- [ ] datePublished + dateModified im Schema
- [ ] Konkrete Zahlen (EUR, Stunden, Prozent)
- [ ] Eigenstaendige, zitierbare Absaetze

### Wie Fortschritt messen?

1. Manuell: Regelmaessig ChatGPT, Perplexity und Google AI Overviews nach relevanten Keywords fragen und pruefen ob kahirov.de zitiert wird.
2. Google Search Console: "Search Appearance" -> "AI Overviews" (falls verfuegbar).
3. Brand Mentions tracken: Google Alerts fuer "AK Automation" und "kahirov.de".

---

## Zusammenfassung: Priorisierte Aktionsliste

### Sofort (diese Woche)

1. **Google Search Console einrichten**
   - Domain-Property "kahirov.de" anlegen
   - TXT-Record bei IONOS setzen
   - Sitemap submitten
   - WAF-Rule in Vercel fuer Canonical-Redirect

2. **Canonical URLs pro Blog-Post**
   - In `generateMetadata` von `[slug]/page.tsx` ergaenzen:
     `alternates: { canonical: \`https://kahirov.de/blog/${slug}\` }`

3. **Article + FAQ Schema pro Blog-Post**
   - JSON-LD Script in `[slug]/page.tsx` hinzufuegen
   - `extractFaqs()` nutzen fuer automatische FAQ-Schema-Generierung

### Kurzfristig (naechste 2 Wochen)

4. **Internal Linking aufbauen**
   - Jeden der 7 Posts durchgehen und 2-5 kontextuelle Links einfuegen
   - Pillar-Post (Post 1) als Hub verlinken

5. **Organization Schema erweitern**
   - sameAs, hasOfferCatalog, contactPoint hinzufuegen

6. **Open Graph Images pro Post**
   - Fuer Social Sharing und hoehere CTR in SERPs

### Mittelfristig (naechster Monat)

7. **AEO-Optimierung der Blog-Posts**
   - Direkte Antworten im ersten Absatz sicherstellen
   - Author-Bio mit E-E-A-T unter jedem Post
   - dateModified im Schema pflegen

8. **Consensus Signals**
   - LinkedIn-Posts aus Blog-Content erstellen
   - In relevanten Communities diskutieren

9. **Core Web Vitals pruefen**
   - PageSpeed Insights fuer / und /blog laufen lassen
   - Framer Motion Bundle-Groesse evaluieren

---

## Quellen

### Schema Markup
- https://martech.org/schema-markup-b2b-enterprise/
- https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/
- https://www.atakinteractive.com/blog/the-complete-guide-to-schema-markup-for-b2b-companies
- https://www.visalytica.com/blog/schema-markup-best-practices

### Google Search Console + Vercel
- https://www.ionos.com/help/domains/connecting-a-domain-with-an-external-service/google-search-console-confirming-domain-property-ownership/
- https://vercel.com/kb/guide/avoiding-duplicate-content-with-vercel-app-urls
- https://www.lukaspolak.com/blog/how-to-verify-google-search-console-domain-with-vercel

### Next.js SEO
- https://nextjs.org/docs/app/guides/json-ld
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- https://www.djamware.com/post/nextjs-seo-optimization-guide-2026-edition
- https://jamstack.consulting/posts/nextjs-seo

### Internal Linking
- https://www.maviklabs.com/blog/internal-linking-strategy-2026
- https://rankingstudios.com/your-2026-guide-to-internal-linking-best-practices-for-seo/
- https://topicalmap.ai/blog/auto/internal-linking-strategy-guide-2026

### German SEO
- https://collaborator.pro/blog/seo-german-speaking-markets
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://reply42.com/blog/seo-url
- https://germanyseo.com/how-to-do-german-seo-and-marketing

### AEO
- https://www.thevccorner.com/p/geo-aeo-how-to-rank-when-ai-answers
- https://sapt.ai/insights/ai-search-optimization-complete-guide-chatgpt-perplexity-citations
- https://www.airops.com/blog/schema-markup-aeo
- https://www.frase.io/blog/faq-schema-ai-search-geo-aeo
- https://llmrefs.com/answer-engine-optimization
- https://blog.hubspot.com/marketing/aeo-page-structure

### Core Web Vitals
- https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide
- https://www.corewebvitals.io/core-web-vitals
