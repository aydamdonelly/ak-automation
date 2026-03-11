# Stack & Zugänge

| Service | URL | Status |
|---------|-----|--------|
| Hetzner VPS | 204.168.130.38 (SSH: `ssh -i ~/.ssh/id_ed25519_ibm root@204.168.130.38`) | ✅ Live |
| n8n | http://204.168.130.38:5678 | ✅ Service läuft, keine Workflows |
| Supabase | https://supabase.com/dashboard/project/wyafvratcruyjyalwqih | ✅ Live |
| Vercel | https://vercel.com/ataladams-projects/website | ✅ Deployed |
| Website | https://website-iota-drab-70.vercel.app | ✅ Live |
| OpenClaw Gateway | VPS Port 18789 (hinter Caddy) | ✅ Live |
| Calendly | — | ⬜ Noch nicht eingerichtet |
| Domain | — | ⬜ Noch nicht gekauft |
| Claude API | https://console.anthropic.com | ✅ Vorhanden |

## CRM-Sync
- Script: `~/.openclaw/sync-crm.sh`
- Frequenz: alle 5 Minuten (cron)
- Synct: `crm/leads.md` + `crm/pipeline.md` → VPS `/root/.openclaw/workspace/`
