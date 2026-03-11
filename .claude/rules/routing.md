# Routing-Regeln

## Model-Routing

| Modell | Wann | Beispiele |
|--------|------|-----------|
| **Sonnet 4.6** (Default) | Coding, Refactoring, Bugfixing, Agent-Arbeit | Feature bauen, Bug fixen, Tests schreiben, Reviews |
| **Opus 4.6** | Architektur, Security Reviews, harte Refactors, Multi-Agent-Koordination | System-Design, Migration planen, Security Audit, knifflige Bugs |
| **Haiku 4.5** | Klassifikation, Vorselektion, kurze Summaries | Triage, einfache Fragen, Routing, Jarvis Daily Ops |

## Tool-Routing (Standard-Verhalten, nicht optional)

- **Context7**: Standard bei Library/SDK-Arbeit. Docs holen BEVOR Code geschrieben wird. Nicht bei trivialen/bekannten APIs
- **Sequential Thinking**: Standard bei mehrstufigen Tasks, Trade-off-Entscheidungen, Migrations, Security, Architektur. Lieber einmal zu viel als einmal zu wenig
- **Playwright**: UI-Verifikation (Screenshots nach visuellen Änderungen), Scraping, Website-QA, Firmen-Research
- **Supabase MCP**: IMMER existierendes Schema prüfen (execute_sql/list_tables) BEVOR Migrations geschrieben werden. Nie blind Tabellen anlegen
- **GitHub MCP**: PRs, Issues, Repo-Management
- **Memory MCP**: Bestätigte Fakten speichern/abrufen (nur: decision, lead_fact, learning, ops_status)
- **WebSearch**: Bei externen Tools, Services, ToS-Fragen, aktuellen Versionen — nicht raten, recherchieren

## Fehler-Prävention

- VOR jeder Migration: `mcp__supabase__execute_sql` → Schema prüfen
- VOR jeder Library-Nutzung: Context7 → Docs holen (wenn nicht trivial)
- VOR jeder riskanten Entscheidung: Sequential Thinking → durchdenken
- NACH jedem Deploy: Health-Check / Smoke-Test ausführen
- NIE Annahmen über DB-Schema, API-Versionen oder Config treffen — immer verifizieren

## Agent-Routing

**Claude Code** (ich) ist zuständig für:
- Code schreiben, editieren, refactoren
- Tests, Lint, Build, Diffs
- Supabase Migrations + Edge Functions
- n8n Workflow-Konfiguration
- Commits, Deploys (Vercel)
- Reviews und Architektur

**OpenClaw/Jarvis** ist zuständig für:
- Mobile/WhatsApp-Anfragen
- Zeitgesteuerte Tasks (Cron, Heartbeat)
- Research (Firmen, Leads, Markt)
- CRM-Pflege und Follow-ups
- DM/Email-Drafts
- Tages-/Wochenbriefings

**Regel:** Wenn Adam über Jarvis Code-Arbeit anfragt → Jarvis verweist an Claude Code.

## Cost-Awareness
- Opus nur wenn der Task es rechtfertigt (~$0.10/Call)
- Sonnet als Workhorse (~$0.01/Call)
- Haiku für alles unter 100 Tokens Output (~$0.001/Call)
