---
name: discovery-prep
description: Discovery-Call vorbereiten. Trigger bei "Call vorbereiten", "Meeting mit [Firma]" oder aehnlich.
argument-hint: "[Firmenname oder Lead-Name]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*, mcp__sequential-thinking__*
---
Ich bereite einen Discovery-Call mit einem potenziellen Kunden vor.

## Vorbereitung
1. Lies crm/leads.md fuer bestehenden Lead-Kontext
2. Lies research/[firmenname].md falls vorhanden (sonst: /research-firm zuerst ausfuehren)
3. Lies docs/pricing.md fuer aktuelle Preisstruktur
4. Lies templates/ fuer bewährte Fragensets

## ROI-Kalkulation erstellen
Nutze Sequential Thinking fuer die Berechnung:
- Geschaetzter manueller Aufwand (h/Woche) × Stundensatz (€50-80 fuer Sachbearbeiter)
- Zeitersparnis durch Automatisierung (konservativ: 60-80% des manuellen Aufwands)
- Jaehrliche Ersparnis = Zeitersparnis × 48 Wochen × Stundensatz
- ROI = (Jaehrliche Ersparnis - Sprint-Kosten) / Sprint-Kosten × 100

## Output: Discovery-Prep-Sheet

### [Firmenname] — Discovery-Call Prep

**Datum:**
**Teilnehmer:**
**Kanal:** (Zoom/Teams/Telefon)

### Firmenprofil (Kurzfassung)
- Branche, Groesse, Standort
- Was sie machen (1 Satz)
- Bekannte Schmerzpunkte

### Hypothese
- **Prozess:** [konkreter Prozess den wir automatisieren koennten]
- **Aktueller Aufwand:** ca. X h/Woche
- **Potenzielle Ersparnis:** X h/Woche = €X/Jahr

### Fragen fuer den Call (max 8)
1. Wie sieht [Prozess X] heute bei Ihnen aus?
2. Wie viele Personen sind daran beteiligt?
3. Was passiert wenn [Prozess] nicht sauber laeuft?
4. Haben Sie schon mal versucht das zu automatisieren?
5. Wer entscheidet ueber Investitionen in diesem Bereich?
6. Was waere fuer Sie ein Erfolg nach 10 Tagen?
7. [individuell basierend auf Research]
8. [individuell basierend auf Research]

### Objections vorbereiten
- "Ist 5.000 EUR nicht zu teuer?" → [ROI-Argument mit konkreten Zahlen]
- "Koennen Sie das garantieren?" → [Festpreis = kein Risiko, 50/50 Zahlung]
- "Wir haben kein IT-Team" → [Wir uebernehmen alles, Uebergabe mit Dokumentation]
- "Brauchen wir ueberhaupt KI?" → [Konkretes Beispiel aus der Branche]

### Demo-Idee
- Welchen Prozess koennten wir live zeigen?
- Welches Template / welche Demo passt?

## Nach Abschluss
- Speichere als clients/[firmenname]/discovery-prep.md
