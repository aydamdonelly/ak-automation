---
name: write-dm
description: Personalisierte DM oder E-Mail fuer einen Lead schreiben. Trigger wenn User eine Outreach-Nachricht braucht.
argument-hint: "[Lead-Name oder Firma]"
allowed-tools: Read, Write, Edit, WebSearch, mcp__playwright__*
---
1. Lies crm/leads.md fuer Lead-Kontext
2. Lies templates/ fuer bewährte Vorlagen
3. Wenn Firma unbekannt: Recherchiere mit WebSearch oder Playwright

Regeln:
- Deutsch, Sie-Form. Direkt, respektvoll, konkret.
- Nie: "digitale Transformation", "Synergien", "KI-Revolution"
- Immer: Konkretes Problem + konkreter Nutzen + konkrete Zahl + CTA
- DMs: Max 5 Saetze. E-Mails: Max 8 Saetze.
- CTA: Entweder Frage ODER Calendly-Link. Nie beides.
- Personalisierung: Mindestens 1 Hook (Prozess, offene Stelle, Branche, LinkedIn-Post)

Nach dem Schreiben: Trage Aktion in crm/outreach-log.md ein.
