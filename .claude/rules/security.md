# Security Boundaries

## API Keys & Secrets
- Nie in Code oder Scripts hardcoden — immer in `.env` oder System-Env
- Nie committen: `.env`, Credentials, API-Keys, Tokens
- `.gitignore` muss `.env`, `.env.local`, `.env.production` abdecken
- Bei Fund eines hardcoded Keys: sofort melden + fixen

## Netzwerk
- Kein `0.0.0.0` expose ohne Auth
- OpenClaw Gateway nur auf localhost oder hinter Auth-Token
- Supabase Edge Functions als API-Gateway fuer Claude API (nie direkt vom Client)

## Dependencies
- Max 3 externe Dependencies pro Workflow
- Vor dem Hinzufuegen: kurzer Audit (Maintainer, Downloads, letzte Updates)
- Keine unbekannten/unmaintained Packages

## Git
- Nie `.env`, Credentials oder API-Keys committen
- Sensitive Dateien in `.gitignore` pruefen
- Keine Secrets in Commit-Messages

## OpenClaw
- Gateway Auth Token required
- WhatsApp DM-only Allowlist
- Shell-Exec nur mit Approval (ask-on-miss)
- configWrites nur fuer Jarvis selbst, nicht fuer externe Agenten
