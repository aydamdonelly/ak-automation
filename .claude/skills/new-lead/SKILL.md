---
name: new-lead
description: Neuen Lead in CRM anlegen. Trigger wenn User einen Firmennamen oder LinkedIn-URL gibt und einen Lead anlegen will.
argument-hint: "[Firmenname oder LinkedIn-URL]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*
---
Ich bekomme einen Firmennamen oder LinkedIn-URL.

1. Lies crm/leads.md und crm/pipeline.md (aktuellen Stand kennen)
2. Recherchiere die Firma (WebSearch oder Playwright):
   - Was macht die Firma? Branche, Größe, Standort
   - Wer ist der Entscheider? (Operations-Leiter, GF)
   - Gibt es Signale? (Job-Posts für Ops, Wachstum, Prozess-Pain)
   - Welcher Prozess könnte automatisiert werden? (Hypothese)
3. Trage in crm/leads.md ein:

## [Firmenname]
- **Status:** 🟡 Neu
- **Branche:**
- **Größe:** [X] MA
- **Standort:**
- **Entscheider:** [Name], [Titel]
- **LinkedIn:** [Profil-URL]
- **Kanal:** LinkedIn DM
- **Hypothese:** [Welcher Prozess, geschätzter Hebel in h/Woche]
- **Erstkontakt:** —
- **Follow-up:** —
- **Nächster Schritt:** DM-Draft vorbereiten
- **Notizen:**

4. Aktualisiere crm/pipeline.md Tabelle (neue Zeile)
5. Aktualisiere Pipeline-Metriken (Leads total +1)
