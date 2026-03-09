# AK Automation — AI-Prozess-Sprint

## Was ist das hier?
Ein Repo, ein Business. Ich (Adam Kahirov) verkaufe AI-Prozessautomatisierung
als Festpreis-Service an deutsche KMUs. Alles — Website, Demos, CRM, Outreach,
Client-Projekte, Content — lebt in diesem Repo.

## Das Angebot
- **Was:** AI-Prozess-Sprint — 1 Geschäftsprozess automatisiert in 10 Arbeitstagen
- **Für wen:** Operations-Leiter / GF deutscher KMUs (30–300 MA)
- **Preis:** €5.000 netto Festpreis
- **Branchen:** E-Commerce → Professional Services → Fertigung
- **Ergebnis:** 20–30h/Woche Zeitersparnis pro automatisiertem Prozess

## Mein Profil (für Outreach/Content)
- Adam Kahirov, 21, Stuttgart
- IBM Research Alumnus (Dublin, Almaden, Tokyo)
- Schwerpunkt: LLM-Systeme, Quantisierung, Retrieval, AI-Evaluation
- BSc Business Informatics – Data Science, DHBW Stuttgart (Abschluss Sept 2026)
- WEF Global Shaper Stuttgart Hub
- Sprachen: Deutsch, Englisch, Russisch

## Tech-Stack
- **AI:** Claude Sonnet 4.6 API (Generation), Haiku 4.5 (Klassifizierung)
- **Automation:** n8n self-hosted auf Hetzner VPS
- **DB:** Supabase (PostgreSQL + Auth + Edge Functions)
- **Website:** Next.js 15 + Tailwind auf Vercel
- **CRM:** crm/leads.md + crm/pipeline.md in diesem Repo

## Aktuelle Phase
Phase: Setup + MVP-Build
Woche: 1 von 14
Nächstes Ziel: Landing Page live + Demo #1 funktionsfähig
Blocker: Keiner
Offene Entscheidung: -

## Code-Konventionen
- TypeScript strict, keine any
- Conventional Commits (englisch)
- Kundenrelevante Texte: Deutsch
- Code-Kommentare: Englisch
- Claude API nur über Supabase Edge Functions (nie direkt vom Client)
- Alle API-Keys in .env (nie committen)

## Kommunikations-Stil
- Deutsch, Sie-Form für Kunden
- Direkt, respektvoll, konkret
- Nie: "digitale Transformation", "Synergien", "AI-Revolution", "Game-Changer"
- Immer: konkretes Problem + konkreter Nutzen + konkrete Zahl
- Max 5 Sätze für DMs, max 8 für E-Mails

## Agenten
- @outreach — DMs, E-Mails, Follow-ups
- @builder — n8n Workflows, Supabase, APIs
- @content — LinkedIn Posts, Case Studies, Website-Texte
- @researcher — Lead Research, Firmenanalyse

## Slash Commands
- /project:new-lead — Neuen Lead anlegen
- /project:write-dm — Personalisierte DM
- /project:weekly-review — KPIs checken
- /project:deploy — Website deployen

## Referenz-Dateien
- Masterplan: docs/playbook.md
- Pricing: docs/pricing.md
- Templates: templates/
- Leads: crm/leads.md
- Pipeline: crm/pipeline.md
- Learnings: docs/learnings.md
- Entscheidungslog: ops/decisions.md
