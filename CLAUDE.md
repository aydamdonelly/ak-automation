# AK Automation — AI-Prozess-Sprint

Ein Repo, ein Business. AI-Prozessautomatisierung als Festpreis-Service fuer deutsche KMUs.

## Das Angebot
- **Was:** AI-Prozess-Sprint — 1 Geschaeftsprozess automatisiert in 10 Arbeitstagen
- **Fuer wen:** Operations-Leiter / GF deutscher KMUs (30-300 MA)
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
Phase: Setup + MVP-Build
Website laeuft lokal, 7 Blog-Posts (MDX), noch nicht deployed.
Naechstes Ziel: Blog-Design Overhaul + Vercel Deployment + Demo #1

## Regeln
@.claude/rules/code-style.md
@.claude/rules/communication.md
@.claude/rules/routing.md
@.claude/rules/verification.md
@.claude/rules/security.md

## Skills
- /deploy — Website auf Vercel deployen
- /new-lead — Lead in CRM anlegen
- /weekly-review — KPI-Uebersicht
- /write-dm — Outreach-Nachricht schreiben
- /research-firm — Tiefenrecherche zu einer Firma
- /discovery-prep — Discovery-Call vorbereiten
- /ops-status — Status aller Systeme pruefen
- /sync-memory — Fakten in Shared Memory speichern
- /blog-publish — Blog-Post pruefen und publishen

## Referenz-Dateien
- Pricing: @docs/pricing.md
- SEO-Strategie: @docs/seo-blog-strategy.md
- Templates: templates/
- Leads: crm/leads.md
- Pipeline: crm/pipeline.md
- Learnings: docs/learnings.md
- Entscheidungslog: ops/decisions.md
- Stack & Zugaenge: ops/stack.md
- Kosten: ops/costs.md
- Metriken: ops/metrics.md
- VPS-Deploy: ops/deploy-vps-gateway.sh
