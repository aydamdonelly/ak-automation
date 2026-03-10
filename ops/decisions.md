# Entscheidungslog

| Datum | Entscheidung | Begründung | Ergebnis |
|-------|-------------|------------|----------|
| 2026-03-10 | 3-Tier Model Routing (Sonnet/Opus/Haiku) | Sonnet als Default-Workhorse, Opus nur fuer Architektur/Security, Haiku fuer Klassifizierung + Jarvis. Optimiert Kosten bei gleichbleibender Qualitaet fuer kritische Tasks. | Implementiert |
| 2026-03-10 | Verification-by-default fuer alle Aenderungen | TypeScript-Check + Lint + Build-Verification vor jedem Commit. Screenshot-Verification bei UI-Aenderungen. Hooks automatisieren tsc+lint. | Implementiert |
| 2026-03-10 | Security Hardening: keine hardcoded API Keys | start-gateway.sh sourced Env-Vars aus .zshrc statt hardcoded Keys. Alle API Keys in .env oder System-Env. | Implementiert |
| 2026-03-10 | MCP Knowledge Graph als Shared Memory | @modelcontextprotocol/server-memory fuer bestaetigte Fakten zwischen Claude Code + Jarvis. Nur 4 Kategorien: decision, lead_fact, learning, ops_status. Backup via Supabase shared_memory Tabelle. | Implementiert |
| 2026-03-10 | Eval/Observability via Supabase | eval_runs Tabelle trackt jeden Agent-Task (agent, model, status, cost, corrections, error_class). 10 Error-Klassen vordefiniert. Wochenreview per /weekly-review Skill. | Implementiert |
| 2026-03-10 | 9 Skills statt 4 | Neue Skills: /research-firm, /discovery-prep, /ops-status, /sync-memory, /blog-publish. Decken Sales-Funnel, Ops-Monitoring und Content-Pipeline ab. | Implementiert |
| 2026-03-10 | VPS-Deployment als Script | Beide SSH-IPs (158.176.6.15, 149.81.160.228) nicht erreichbar — vermutlich alte IBM Cloud. Hetzner VPS muss erst provisioniert werden. Deploy-Script bereit: ops/deploy-vps-gateway.sh | Vorbereitet |
