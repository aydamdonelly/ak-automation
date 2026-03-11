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

## Agent-Routing (v3 Architektur)

**Claude Code** (ich) — Builder:
- Code, Tests, Lint, Build, Diffs, Commits, Deploys
- Supabase Migrations + Edge Functions
- n8n Workflow-Konfiguration
- Reviews, Architektur, Security
- GTM-Strategie + Skill-gestützte Planung (solo-founder-gtm, positioning-icp, gtm-metrics)

**Jarvis Agent 1: Operator** — Mobiler Haupteinstieg:
- Kurzfragen, Routing, Status-Checks
- "Mach X und gib mir Ergebnis"

**Jarvis Agent 2: Website Patch Runner:**
- Kleine Copy-/CTA-Änderungen, Build, Screenshot zurück
- Grenze: keine großen Refactors → an Claude Code verweisen

**Jarvis Agent 3: Sales Research & Drafting:**
- Firmen-Research (Brave + linkedin-cli)
- Lead-Briefs, DM-/Mail-Drafts (cold-outreach, cold-email-writer)
- Discovery-Prep
- Grenze: kein LinkedIn-Autosend

**Jarvis Agent 4: KPI / CRM Assistant:**
- Tagesbriefing (HEARTBEAT.md Format)
- Follow-up-Liste, Wochenreview
- CRM-Pflege (leads.md, pipeline.md)

**Regeln:**
- Code-Arbeit über WhatsApp → Jarvis verweist an Claude Code
- Skills kombinieren wenn sinnvoll (z.B. /write-dm zieht social-selling + cold-outreach + CRM-Daten)

## Skill-Routing (Claude Code)

| Skill | Wann nutzen | Beispiel-Trigger |
|-------|------------|------------------|
| `solo-founder-gtm` | GTM-Strategie, Time-Split, Stage-Entscheidungen, Hiring-Fragen | "Wie soll ich meine Zeit aufteilen?", "Wann erste Hire?" |
| `positioning-icp` | ICP schaerfen, Messaging-Architektur, PMF-Validierung | "Wer ist mein idealer Kunde?", "Passt der ICP?" |
| `social-selling` | LinkedIn-Profil, DM-Sequenzen, Content-Strategie, Algorithm | "LinkedIn optimieren", "DM-Sequenz bauen" |
| `lead-enrichment` | Lead-Daten anreichern, ICP-Scoring, Waterfall-Design | "Lead scoren", "Daten anreichern" |
| `gtm-metrics` | KPIs definieren, Dashboard bauen, Weekly Review | "Welche Metriken tracken?", "Weekly Review" |
| `ai-sdr` | SDR-Workflow designen, Qualification-Automation | "Outreach automatisieren", "SDR aufsetzen" |
| `write-dm` | Konkrete DM/Email fuer einen Lead draftten | "Schreib DM fuer [Firma]" |
| `research-firm` | Tiefenrecherche zu einer spezifischen Firma | "Recherchier [Firma]" |
| `discovery-prep` | Call-Vorbereitung fuer einen konkreten Lead | "Call mit [Firma] vorbereiten" |

**Regel:** Skills kombinieren wenn sinnvoll. Beispiel: `/write-dm` zieht automatisch `social-selling` (DM-Framework) + `cold-outreach` (Personalisierung) + Lead-Daten aus CRM.

## Cost-Awareness
- Opus nur wenn der Task es rechtfertigt (~$0.10/Call)
- Sonnet als Workhorse (~$0.01/Call)
- Haiku für alles unter 100 Tokens Output (~$0.001/Call)
