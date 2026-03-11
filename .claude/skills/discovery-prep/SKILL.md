---
name: discovery-prep
description: Discovery-Call vorbereiten. Trigger bei "Call vorbereiten", "Meeting mit [Firma]" oder ähnlich.
argument-hint: "[Firmenname oder Lead-Name]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*, mcp__sequential-thinking__*
---
Ich bereite einen Discovery-Call mit einem potenziellen Kunden vor.

## Vorbereitung
1. Lies crm/leads.md für bestehenden Lead-Kontext
2. Lies research/[firmenname].md falls vorhanden (sonst: /research-firm zuerst ausführen)
3. Lies docs/pricing.md für aktuelle Preisstruktur
4. Lies templates/ für bewährte Fragensets

## ROI-Kalkulation erstellen
Nutze Sequential Thinking für die Berechnung:
- Geschätzter manueller Aufwand (h/Woche) × Stundensatz (€50-80 für Sachbearbeiter)
- Zeitersparnis durch Automatisierung (konservativ: 60-80% des manuellen Aufwands)
- Jährliche Ersparnis = Zeitersparnis × 48 Wochen × Stundensatz
- ROI = (Jährliche Ersparnis - Sprint-Kosten) / Sprint-Kosten × 100

## Output: Discovery-Prep-Sheet

### [Firmenname] — Discovery-Call Prep

**Datum:**
**Teilnehmer:**
**Kanal:** (Zoom/Teams/Telefon)

### Firmenprofil (Kurzfassung)
- Branche, Größe, Standort
- Was sie machen (1 Satz)
- Bekannte Schmerzpunkte

### Hypothese
- **Prozess:** [konkreter Prozess den wir automatisieren könnten]
- **Aktueller Aufwand:** ca. X h/Woche
- **Potenzielle Ersparnis:** X h/Woche = €X/Jahr

### Fragen für den Call (max 8)
1. Wie sieht [Prozess X] heute bei Ihnen aus?
2. Wie viele Personen sind daran beteiligt?
3. Was passiert wenn [Prozess] nicht sauber läuft?
4. Haben Sie schon mal versucht das zu automatisieren?
5. Wer entscheidet über Investitionen in diesem Bereich?
6. Was wäre für Sie ein Erfolg nach 10 Tagen?
7. [individuell basierend auf Research]
8. [individuell basierend auf Research]

### Objections vorbereiten
- "Ist 5.000 EUR nicht zu teuer?" → [ROI-Argument mit konkreten Zahlen]
- "Können Sie das garantieren?" → [Festpreis = kein Risiko, 50/50 Zahlung]
- "Wir haben kein IT-Team" → [Wir übernehmen alles, Übergabe mit Dokumentation]
- "Brauchen wir überhaupt KI?" → [Konkretes Beispiel aus der Branche]

### Demo-Idee
- Welchen Prozess könnten wir live zeigen?
- Welches Template / welche Demo passt?

## Nach Abschluss
- Speichere als clients/[firmenname]/discovery-prep.md
