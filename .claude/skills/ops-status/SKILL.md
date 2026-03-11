---
name: ops-status
description: Status aller Systeme prüfen (Website, Supabase, OpenClaw, n8n). Trigger bei "Status?", "Läuft alles?" oder ähnlich.
allowed-tools: Read, Bash, Grep, Glob, mcp__supabase__*, mcp__playwright__*
---
Ich prüfe den aktuellen Status aller Systeme und gebe einen kompakten Report.

## Checks ausführen

### 1. Website (Next.js)
- `cd website && bun run build 2>&1 | tail -5` — Build OK?
- Prüfe ob Dev-Server läuft: `lsof -i :3000 -i :3001 | head -5`
- Wenn deployed: Playwright-Screenshot von der Live-URL

### 2. Supabase
- `mcp__supabase__get_project` — Status ACTIVE_HEALTHY?
- `mcp__supabase__list_tables` — Tabellen vorhanden?
- `mcp__supabase__get_logs` — Errors in den letzten 24h?

### 3. OpenClaw/Jarvis
- `pgrep -f "openclaw" | head -5` — Gateway läuft?
- Port 18789 aktiv? `lsof -i :18789 | head -3`
- Letzter Heartbeat: Lies ~/.openclaw/workspace/memory/ für heutiges Log

### 4. n8n (wenn deployed)
- VPS erreichbar? SSH-Check
- n8n-Port 5678 aktiv?
- Workflow-Status

### 5. Git
- `git status` — Uncommitted changes?
- `git log --oneline -5` — Letzte Commits

### 6. MCP-Server
- Memory-Server konfiguriert? Lies .mcp.json
- Alle MCP-Permissions in .claude/settings.json?

## Output-Format

## Ops Status — [Datum, Uhrzeit]

| System | Status | Details |
|--------|--------|---------|
| Website Build | OK/FAIL | [details] |
| Website Live | OK/FAIL/N/A | [URL oder "not deployed"] |
| Supabase | OK/FAIL | [project status] |
| OpenClaw | OK/FAIL | [gateway status] |
| n8n | OK/FAIL/N/A | [workflow status] |
| Git | Clean/Dirty | [uncommitted files count] |
| MCP Servers | X/Y active | [list] |

### Aktionen nötig
- [Liste aller Probleme die behoben werden müssen]
