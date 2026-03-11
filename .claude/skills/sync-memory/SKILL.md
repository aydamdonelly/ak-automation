---
name: sync-memory
description: Bestätigte Fakten in Shared Memory (Knowledge Graph) speichern. Trigger bei "merk dir", "speicher das", "sync memory".
allowed-tools: Read, Edit, mcp__memory__*
---
Ich synchronisiere bestätigte Fakten in den Shared Memory Knowledge Graph.

## Was in Shared Memory gehört (NUR diese 4 Kategorien)

### 1. Entscheidungen
Beispiele: Pricing geändert, CTA geändert, ICP geschärft, Outreach-Regel geändert
Format: decision:[thema] — [was wurde entschieden] — [datum]

### 2. Bestätigte Lead-/Kundenfakten
Beispiele: Ansprechpartner, Schmerzpunkt, Toolstack, Status, Follow-up-Datum
Format: lead:[firmenname] — [fakt] — [datum]

### 3. Wiederverwendbare Learnings
Beispiele: Welche DM-Patterns funktionieren, welche Demo-Fragen oft kommen, Objections
Format: learning:[thema] — [erkenntnis] — [quelle]

### 4. Ops-Status
Beispiele: Deploy fehlgeschlagen, Vercel-Warnung, n8n-Workflow broken, Migration pending
Format: ops:[system] — [status] — [datum]

## Was NICHT in Shared Memory gehört
- Keine kompletten Chats
- Keine Rohgedanken oder Entwürfe
- Keine langen Recherchedumps
- Keine Duplikation von CLAUDE.md, MEMORY.md oder CRM-Dateien

## Prozess
1. User gibt mir einen Fakt oder eine Entscheidung
2. Ich klassifiziere: decision / lead / learning / ops
3. Ich erstelle eine Entity im Knowledge Graph mit:
   - Name: [kategorie]:[thema]
   - Type: decision | lead_fact | learning | ops_status
   - Observations: [die konkreten Fakten]
4. Ich verknüpfe mit bestehenden Entities (Relations) wenn sinnvoll
5. Ich bestätige dem User was gespeichert wurde

## Lesen aus Shared Memory
- Bei Bedarf: `mcp__memory__search_nodes` um bestehende Fakten abzurufen
- Vor dem Schreiben: prüfen ob Entity schon existiert (update statt duplicate)
