# AK Automation — AI-Prozess-Sprint

Ein Repo, ein Business. AI-Prozessautomatisierung als Festpreis-Service für deutsche KMUs.

## Das Angebot
- **Was:** AI-Prozess-Sprint — 1 Geschäftsprozess automatisiert in 10 Arbeitstagen
- **Für wen:** Operations-Leiter / GF deutscher KMUs (30-300 MA)
- **Preis:** 5.000 EUR netto Festpreis
- **Branchen:** E-Commerce, Professional Services, Fertigung
- **Ergebnis:** 20-30h/Woche Zeitersparnis pro automatisiertem Prozess

## Tech-Stack
- **AI:** Sonnet 4.6 (Default/Coding), Opus 4.6 (Architektur/Security), Haiku 4.5 (Klassifizierung/Jarvis)
- **Automation:** n8n self-hosted auf Hetzner VPS
- **DB:** Supabase (PostgreSQL + Auth + Edge Functions, ref: wyafvratcruyjyalwqih)
- **Website:** Next.js 16.1.6 + Tailwind v4 + Framer Motion 12, bun, Vercel
- **CRM:** crm/leads.md + crm/pipeline.md
- **Assistant:** OpenClaw/Jarvis (WhatsApp, Haiku primary)
- **Shared Memory:** MCP Knowledge Graph (.claude/shared-memory.json) + Supabase shared_memory Tabelle
- **Eval/Observability:** Supabase eval_runs + eval_error_classes Tabellen

## Aktuelle Phase
Phase: OUTREACH-READY — Website live (kahirov.de), mobile-optimiert, SEO komplett
Website deployed (Vercel), 7 Blog-Posts (MDX), Schema Markup, Supabase live.
CRM-Sync zu Jarvis aktiv (alle 5 Min). OpenClaw Gateway live auf VPS.
Nächstes Ziel: LinkedIn Outreach starten + n8n Demo-Workflows

## Regeln
@.claude/rules/code-style.md
@.claude/rules/communication.md
@.claude/rules/routing.md
@.claude/rules/verification.md
@.claude/rules/security.md
@.claude/rules/coordination.md

## Skills
- /deploy — Website auf Vercel deployen
- /new-lead — Lead in CRM anlegen
- /weekly-review — KPI-Übersicht
- /write-dm — Outreach-Nachricht schreiben
- /research-firm — Tiefenrecherche zu einer Firma
- /discovery-prep — Discovery-Call vorbereiten
- /ops-status — Status aller Systeme prüfen
- /sync-memory — Fakten in Shared Memory speichern
- /blog-publish — Blog-Post prüfen und publishen

## Referenz-Dateien

### Strategie (bei Business-Entscheidungen lesen)
- Acquisition Funnel: @ops/funnel.md
- SEO-Targets: @ops/seo-targets.md
- SEO-Blog-Strategie: @docs/seo-blog-strategy.md
- Pricing: @docs/pricing.md

### Operations
- Tasks (aktuelle Prios): @ops/tasks.md
- Entscheidungslog: @ops/decisions.md
- Learnings: @docs/learnings.md
- Stack & Zugänge: @ops/stack.md
- Kosten: @ops/costs.md
- Metriken: @ops/metrics.md
- VPS-Deploy: @ops/deploy-vps-gateway.sh

### CRM & Sales
- Leads: @crm/leads.md
- Pipeline: @crm/pipeline.md
- Templates: templates/
