# Cross-Agent Coordination

## Grundregel
Wenn ich etwas ändere das einen anderen Agenten betrifft, muss ich dessen Wissen updaten. Kein "ich merk mir das" — sondern konkretes Update.

## Session-History
Am Ende jeder Session schreibe ich eine kurze Zusammenfassung in `ops/tasks.md` unter "## Letzte Session":
- Was wurde gemacht (3-5 Bullet Points)
- Was ist offen geblieben
- Datum + Uhrzeit

Das wird automatisch zu Jarvis gesynct. So weiß Jarvis beim Morning Briefing was gestern in Claude Code passiert ist.

## Wann Jarvis updaten?

| Ich ändere... | → Jarvis braucht Update in... |
|---------------|-------------------------------|
| crm/leads.md oder crm/pipeline.md | Wird automatisch gesynct (scp cron alle 5 Min) |
| CRM-Workflow oder -Format | VPS: /root/.openclaw/workspace/CRM-WORKFLOW.md |
| Neue Skills die Jarvis kennen soll | VPS: /root/.openclaw/workspace/SOUL.md (Routing-Section) |
| Pricing/Angebot ändert sich | VPS: /root/.openclaw/workspace/TOOLS.md + MEMORY.md |
| Website-Struktur ändert sich | VPS: /root/.openclaw/workspace/TOOLS.md |
| Neues Tool/Service im Stack | VPS: /root/.openclaw/workspace/TOOLS.md |
| Entscheidung die beide betrifft | Shared Memory (.claude/shared-memory.json) + VPS MEMORY.md |

## Wie Jarvis updaten?

```bash
ssh -i ~/.ssh/id_ed25519_ibm root@204.168.130.38 "cat >> /root/.openclaw/workspace/MEMORY.md << 'EOF'
- [Neuer Eintrag]
EOF"
```

## Wann Shared Memory updaten?

Nur bei bestätigten Fakten in 4 Kategorien:
1. **decision** — Pricing, ICP, Stack-Entscheidung
2. **lead_fact** — Bestätigter Kontakt, Status, Ergebnis
3. **learning** — Was funktioniert/nicht funktioniert (bestätigt)
4. **ops_status** — Deploy-Status, Service-Ausfälle, Migrations

## Checkliste bei agentenübergreifenden Änderungen

- [ ] Betrifft die Änderung Jarvis? → VPS-Dateien updaten
- [ ] Ist es eine bestätigte Entscheidung? → shared-memory.json updaten
- [ ] Ändert sich die Datenstruktur? → Beide Seiten (Repo + VPS) updaten
- [ ] Neuer Sync-Bedarf? → sync-crm.sh erweitern oder neuen Sync anlegen
- [ ] Session-History in tasks.md geschrieben?
