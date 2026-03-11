# Tasks — AK Automation

## Heute (2026-03-12)

### Prio 1: SEO + Discoverability
- [x] Google Search Console einrichten + Sitemap submitten (11 Seiten indexed)
- [x] Schema Markup implementieren (ProfessionalService, FAQPage, Article+wordCount, BreadcrumbList, contactPoint)
- [x] Internal Linking zwischen 7 Blog Posts (alle Posts verlinken untereinander + Weiterführend-Sections)

### Prio 2: LinkedIn + Outreach
- [ ] LinkedIn Profil optimieren (Headline, About, Featured)
- [ ] Outreach-Strategie definieren (ICP, Messaging, Sequenz)
- [ ] Erste 30 Ziel-Kontakte via Sales Navigator recherchieren
- [ ] Erste 10 InMails senden

### Prio 3: Demo-Workflows
- [ ] Demo #1: AI-Angebotsassistent (n8n + Claude API) — Design + Build
- [ ] Demo #2: E-Mail-Klassifizierung (n8n + Claude API) — Design + Build
- [ ] ANTHROPIC_API_KEY als Supabase Secret setzen (für Demos)

## Erledigt
- [x] Mobile Responsive Optimierung (Hero, CTA, FAQ, Pricing, Solution, Blog)
- [x] Horizontal Scroll Fix (overflow-x hidden auf html + body)
- [x] Direct Calendly Links überall (Header, Hero, Pricing, Blog CTAs)
- [x] CTA Gradient Mesh fix (kein overflow-hidden, bleed in FAQ erhalten)
- [x] Blog Table Scroll Wrapper (MDX tables auf mobile scrollbar)
- [x] AI Stack Overhaul (Rules, Agents, Skills, CLAUDE.md rewrite)
- [x] V3 Stack operational (alle 6 Schichten live)
- [x] CRM-Sync zu Jarvis (alle 5 Min)
- [x] Edge Functions deployed (claude-proxy, eval-log)
- [x] Supabase Tabellen live (eval_error_classes, eval_runs, shared_memory)
- [x] Coordination-Rule erstellt
- [x] WhatsApp connected, Jarvis antwortet
- [x] Website deployed auf Vercel
- [x] 7 Blog-Posts live
- [x] Blog Design v2 (editorial, Animationen, keine Cards)
- [x] Domain kahirov.de live (IONOS, DNS → Vercel, SSL)
- [x] Email adam@kahirov.de (IONOS)
- [x] Calendly eingerichtet (calendly.com/kahirov/erstgespraech)
- [x] Favicon mit AK Logo deployed
- [x] Impressum + Datenschutz aktualisiert (Privatperson, kein Gewerbe)
- [x] Vercel Analytics + Speed Insights live

## Blockiert
- n8n Demos brauchen ANTHROPIC_API_KEY in Supabase (oder direkt in n8n env)

## Notizen
- Operator Playbook definiert den kompletten Go-to-Market
- Tagesablauf: Jarvis Briefing 9:00 → Tasks abarbeiten → Session-Log abends
- Adam updated tasks.md, Jarvis und Claude Code lesen es

## Erledigt (2026-03-12)
- [x] Schema Markup: FAQPage (Landing), Article+wordCount, BreadcrumbList, Organization+contactPoint
- [x] GSC eingerichtet, 11 Seiten indexiert, Sitemap submitted
- [x] Internal Linking zwischen allen 7 Blog Posts
- [x] SEO-Strategie definiert: ops/seo-targets.md + ops/funnel.md
- [x] Playbook Kerninfos in Memory gespeichert
- [x] OpenClaw/Jarvis Overhaul: MEMORY.md, SOUL.md, HEARTBEAT.md, TOOLS.md aktualisiert
- [x] Gateway Watchdog + Auto-Restart auf VPS (crontab alle 5 Min)
- [x] CRM-Sync verifiziert + manuell getriggert

## Letzte Session
- **Datum:** 2026-03-12
- Schema Markup implementiert (FAQPage, Article, BreadcrumbList, Organization)
- SEO-Strategie: Funnel (4 Tiers) + SEO Targets (Quartals-Ziele) definiert
- Playbook-Kerninfos persistent gespeichert (memory/playbook.md)
- OpenClaw/Jarvis komplett überarbeitet: alle VPS-Workspace-Dateien aktualisiert
  - MEMORY.md: Fakten korrigiert, Funnel + Constraints + Go/Kill hinzugefügt
  - SOUL.md: Behavior Rules (keine Emojis, kurze Antworten, nie "soll ich" fragen)
  - HEARTBEAT.md: Morning Briefing Format (tasks.md zuerst lesen, Gestern/Offen/Heute)
  - TOOLS.md: Aktuelle Services, CRM-Sync Details
- Gateway Watchdog eingerichtet (VPS crontab, auto-restart bei Crash)
- CRM-Sync funktioniert (Mac crontab alle 5 Min → VPS)
- **Offen:** LinkedIn Profil, Outreach-Strategie, n8n Demos
