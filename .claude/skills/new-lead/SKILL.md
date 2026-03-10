---
name: new-lead
description: Neuen Lead in CRM anlegen. Trigger wenn User einen Firmennamen oder LinkedIn-URL gibt und einen Lead anlegen will.
argument-hint: "[Firmenname oder LinkedIn-URL]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*
---
Ich bekomme einen Firmennamen oder LinkedIn-URL.
1. Recherchiere die Firma (nutze WebSearch oder Playwright)
2. Trage in crm/leads.md ein:

## [Firmenname]
- **Status:** Neu
- **Branche:**
- **Groesse:** MA
- **Standort:**
- **Entscheider:** [Name], [Titel]
- **LinkedIn:**
- **Hypothese:** [Welcher Prozess, geschaetzter Hebel]
- **Naechster Schritt:** DM senden
- **Notizen:**
