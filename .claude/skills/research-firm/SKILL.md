---
name: research-firm
description: Tiefenrecherche zu einer Firma fuer Sales. Trigger bei Firmennamen, LinkedIn-URLs oder "recherchier mal".
argument-hint: "[Firmenname oder LinkedIn-URL]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*, mcp__memory__*
---
Ich bekomme einen Firmennamen oder LinkedIn-URL und erstelle ein vollstaendiges Firmenprofil.

## Recherche-Prozess
1. Website der Firma finden und analysieren (Playwright)
2. Branche, Groesse, Standort, Gruendungsjahr identifizieren
3. Entscheider finden (GF, COO, Operations-Leiter, IT-Leiter)
4. LinkedIn-Profile der Entscheider pruefen
5. Offene Stellen analysieren (Hinweis auf Schmerzpunkte)
6. News/Pressemitteilungen der letzten 6 Monate
7. Tech-Stack identifizieren (BuiltWith, Karriereseite, Impressum)
8. Wettbewerber identifizieren

## Quellen-Prioritaet
1. Firmenwebsite (About, Team, Karriere, Impressum)
2. LinkedIn (Firma + Entscheider)
3. Handelsregister / North Data
4. News (Google News, Branchenportale)
5. Kununu / Glassdoor (Mitarbeiterzahl, Kultur)

## Output-Format
Erstelle research/[firmenname-slug].md mit:

## [Firmenname]
- **Website:**
- **Branche:**
- **Groesse:** MA
- **Standort:**
- **Gruendung:**
- **Umsatz (geschaetzt):**
- **Tech-Stack:**

### Entscheider
| Name | Titel | LinkedIn | Notizen |
|------|-------|----------|---------|

### Schmerzpunkt-Hypothesen
1. [Hypothese basierend auf offenen Stellen / Branche / Groesse]
2. [Hypothese basierend auf Tech-Stack / Prozessen]

### Automatisierungs-Potenzial
- **Prozess:** [konkreter Prozess]
- **Geschaetzte Zeitersparnis:** h/Woche
- **Confidence:** Hoch/Mittel/Niedrig

### Quellen
- [alle genutzten URLs]

## Nach Abschluss
- Speichere in research/[slug].md
- Falls Lead-worthy: empfehle /new-lead
