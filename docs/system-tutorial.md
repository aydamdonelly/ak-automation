# AK Automation — System Tutorial

Dieses Dokument ist dein Lexikon. Alles was du brauchst um das System zu bedienen, Leads zu finden, und den ersten Kunden zu landen.

---

## Teil 1: Wie das System funktioniert

### Die zwei Assistenten

**Claude Code** (dieses Terminal) ist dein Builder:
- Code schreiben, Website ändern, Blog-Posts publishen
- Supabase Migrations, Edge Functions, n8n Workflows
- CRM-Einträge anlegen (`/new-lead`)
- Commits, Deploys, Reviews

**Jarvis** (WhatsApp) ist dein mobiler Operator:
- Lead-Research auf Anfrage
- DM-Drafts schreiben
- Follow-up Reminders
- Morning Briefing jeden Tag um 9:00
- Tagesbriefings und Pipeline-Updates

### Was beide wissen

| Datei | Claude Code | Jarvis | Sync |
|-------|-------------|--------|------|
| `crm/leads.md` | Liest + editiert | Liest (read-only) | Alle 5 Min via scp |
| `crm/pipeline.md` | Liest + editiert | Liest (read-only) | Alle 5 Min via scp |
| `ops/tasks.md` | Liest + editiert | Liest (read-only) | Alle 5 Min via scp |
| Operator Playbook | Kennt es (du hast es gesendet) | Kennt CRM-Workflow + DM-Regeln | Manuell |
| Pricing | `docs/pricing.md` | TOOLS.md + MEMORY.md | Manuell |

### Wie der Sync funktioniert

```
Dein Mac (Repo)          →  scp alle 5 Min  →  VPS (Jarvis Workspace)
crm/leads.md             →                  →  /root/.openclaw/workspace/leads.md
crm/pipeline.md          →                  →  /root/.openclaw/workspace/pipeline.md
ops/tasks.md             →                  →  /root/.openclaw/workspace/tasks.md
```

Script: `~/.openclaw/sync-crm.sh`
Cron: `*/5 * * * *`

---

## Teil 2: Tagesablauf

### 09:00 — Morning Briefing (automatisch)
Jarvis schickt dir auf WhatsApp:
- Offene Tasks aus `tasks.md`
- Pipeline-Status
- Fällige Follow-ups
- Top-3 Aktionen für heute

### Tagsüber — So arbeitest du

**Leads finden:**
1. Öffne LinkedIn Sales Navigator
2. Filtere: Operations-Leiter / GF, 30-300 MA, Deutschland, E-Commerce / Professional Services / Fertigung
3. Schick Jarvis den Firmennamen: "Recherchier [Firma]"
4. Jarvis liefert: Branche, Größe, Entscheider, Signale, Hypothese, DM-Draft

**DM senden:**
1. Jarvis schickt dir den Draft
2. Du prüfst und passt an
3. Du sendest die DM manuell auf LinkedIn
4. Sag Claude Code: `/new-lead [Firma]` → CRM-Eintrag wird angelegt
5. Sag Jarvis: "DM gesendet an [Firma]" → er notiert Follow-up

**Antwort kommt:**
1. Sag Jarvis: "[Firma] hat geantwortet: [was sie gesagt haben]"
2. Jarvis updated seinen Kontext
3. Sag Claude Code: Status in leads.md updaten (oder mach es selbst)

**Call buchen:**
1. Schick Calendly-Link
2. Sag Claude Code: `/discovery-prep [Firma]` → bekommst Prep-Sheet

### Abends — Tasks updaten
Öffne `ops/tasks.md`, hak erledigtes ab, füg neue Tasks hinzu.
Wird automatisch zu Jarvis gesynct.

---

## Teil 3: Alle Commands (Copy-Paste)

### Claude Code Skills

```
/new-lead [Firma]         → Lead recherchieren + CRM-Eintrag anlegen
/research-firm [Firma]    → Tiefenrecherche ohne CRM-Eintrag
/write-dm [Lead]          → Personalisierte DM/Email schreiben
/discovery-prep [Firma]   → Discovery-Call vorbereiten (Prep-Sheet + ROI)
/deploy                   → Website auf Vercel deployen
/ops-status               → Status aller Systeme prüfen
/weekly-review            → Wöchentliche KPI-Übersicht
/sync-memory              → Fakt in Shared Memory speichern
/blog-publish [slug]      → Blog-Post prüfen und publishen
```

### Jarvis Commands (WhatsApp)

```
/reset                    → Neue Session starten (lädt alle Dateien neu)
/model sonnet             → Auf Sonnet wechseln (für komplexe Tasks)
/model haiku              → Zurück auf Haiku (Standard, günstiger)
```

### Jarvis Anfragen (natürliche Sprache)

```
"Recherchier [Firma]"                    → Deep-Dive Research
"Draft DM für [Lead]"                    → DM-Entwurf
"DM gesendet an [Firma]"                → Status-Update + Follow-up planen
"[Firma] hat geantwortet"                → Status auf Replied
"Was steht heute an?"                    → Tages-Briefing
"Wie viele Leads haben wir?"             → Pipeline-Status
"Check Follow-ups"                       → Fällige Erinnerungen
```

### VPS / Infrastruktur

```bash
# SSH zum VPS
ssh -i ~/.ssh/id_ed25519_ibm root@204.168.130.38

# Gateway-Status prüfen
curl http://204.168.130.38:18789/health
# → {"ok":true,"status":"live"}

# n8n öffnen (im Browser)
http://204.168.130.38:5678

# Manueller CRM-Sync
~/.openclaw/sync-crm.sh

# Jarvis Cron-Jobs anzeigen (auf VPS)
openclaw cron list

# Jarvis Logs (auf VPS)
journalctl -u openclaw-gateway -f
```

### Supabase

```
Dashboard: https://supabase.com/dashboard/project/wyafvratcruyjyalwqih

Tabellen:
- eval_error_classes  → 13 Fehlerklassen
- eval_runs           → Task-Tracking (agent, model, status, cost)
- shared_memory       → Bestätigte Fakten (decision, lead_fact, learning, ops_status)

Edge Functions:
- claude-proxy        → API Gateway für Claude (Model-Whitelist, Token-Cap)
- eval-log            → Task-Logging Endpoint
```

---

## Teil 4: Der Sales-Prozess (Schritt für Schritt)

### Phase 1: Leads finden (Woche 1-2)

**Sales Navigator Filter:**
- Titel: Operations-Leiter, COO, Geschäftsführer, Leiter Vertrieb
- Unternehmen: 30-300 Mitarbeiter
- Standort: Deutschland (Stuttgart/BW priorisieren)
- Branche: E-Commerce, Steuerberatung/Recht, Fertigung

**Prozess pro Lead:**
1. Namen in Sales Nav finden
2. Jarvis: "Recherchier [Firma]"
3. Jarvis liefert: Research + DM-Draft
4. Du prüfst den Draft
5. Du sendest auf LinkedIn
6. Claude Code: `/new-lead [Firma]`
7. Warte 5 Werktage → Jarvis erinnert dich

### Phase 2: Erste Calls (Woche 2-3)

**Wenn jemand antwortet:**
1. Positiv → Calendly-Link schicken
2. Neutral → Follow-up mit Mehrwert (nicht "nur nachfragen")
3. Negativ → Notieren, weitermachen

**Discovery Call vorbereiten:**
```
Claude Code: /discovery-prep [Firma]
```
Du bekommst: Firmenprofil, ROI-Kalkulation, 8 Fragen, Objection-Handling, Demo-Vorschlag

**Call-Struktur (30 Min):**
- 0-5 Min: Rapport ("Was hat Sie zum Termin bewogen?")
- 5-15 Min: Problem-Discovery (sie reden, du hörst)
- 15-20 Min: Quantifizierung (h/Woche × Stundensatz = Kosten)
- 20-25 Min: Demo zeigen + Lösung skizzieren
- 25-30 Min: Nächste Schritte + Angebot ankündigen

### Phase 3: Angebot + Close (Woche 3-4)

**Angebot schreiben:**
```
## [Firmenname] — AI-Prozess-Sprint

Ausgangslage: [2-3 Sätze aus dem Call]
Ziel: [Konkretes messbares Ergebnis]
Lösung: [Was gebaut wird]

Ablauf:
- Woche 1, Tag 1-2: Prozessanalyse und Systemdesign
- Woche 1, Tag 3-5: Implementierung Kern-Automation
- Woche 2, Tag 6-8: Integration + Testing
- Woche 2, Tag 9-10: Übergabe, Doku, Schulung

Investition: EUR 5.000 netto
Zahlung: 50% bei Auftragserteilung, 50% bei Übergabe
Gültig: 14 Tage
```

### Go/Kill-Signale (nach 14 Tagen)

**Weitermachen wenn:**
- 3+ von 30 DMs führen zu Call
- 2+ von 5 Calls führen zu "schick Angebot"
- 1+ unterschriebenes Angebot in 30 Tagen

**Pivoten wenn:**
- <2 Antworten auf 30 DMs
- Calls laufen gut aber niemand zahlt
- 0 zahlende Kunden nach 30 Tagen

---

## Teil 5: DM-Templates (Copy-Paste)

### Variante 1 — Direkt (E-Commerce)
```
Hallo [Vorname],

kurze Frage: Wie viele Stunden verbringt Ihr Team pro Woche
mit der manuellen Bearbeitung von Kundenanfragen und Bestellungen?

Ich habe gerade für ein ähnliches Unternehmen die
Angebotserstellung von 2h auf 15 Min automatisiert — mit AI,
integriert in die bestehenden Tools.

Falls das relevant klingt: Ich biete einen kostenlosen
30-Min AI-Readiness-Check an. Kein Verkaufsgespräch,
nur eine ehrliche Einschätzung.

Interesse?

Adam
```

### Variante 2 — Pain-Point (Professional Services)
```
Hallo [Vorname],

ich arbeite gerade mit Kanzleien/Beratungen, die das gleiche
Problem haben: Gute Leute verbringen zu viel Zeit mit
Dokumentensortierung und Standardkommunikation.

Ich automatisiere solche Prozesse in 2 Wochen mit AI —
Festpreis, kein Consulting-Marathon.

Wenn Fachkräftemangel und Routinearbeit bei Ihnen
Themen sind: Kurzes Gespräch wert?

Adam
```

### Variante 3 — Neugier (branchenübergreifend)
```
Hallo [Vorname],

ich habe mir [Firmenname] angeschaut und eine Hypothese:
Ihre [Abteilung/Prozess] könnte mit AI-Automation
[X] Stunden pro Woche einsparen.

Bin ich komplett daneben, oder trifft das ungefähr zu?

Falls ja: Ich mache kostenlose 30-Min-Checks,
wo ich das konkret durchrechne.

Adam
```

### Follow-up (nach 5 Tagen, kein Reply)
```
Hallo [Vorname],

kurzes Follow-up zu meiner Nachricht letzte Woche.

Ich habe seitdem [konkretes Beispiel oder neuen Insight] —
passt gut zu dem, was ich bei [Firmenname] sehe.

Falls das Thema gerade nicht passt: kein Problem.
Falls doch: 15 Minuten reichen für einen Quick-Check.

Adam
```

---

## Teil 6: Die Demos

### Demo #1: AI-Angebotsassistent
**Was es macht:** Kundenanfrage rein (Email/PDF) → Claude extrahiert Anforderungen → generiert Angebot als PDF
**Stack:** n8n + Claude API + Supabase
**Status:** Noch nicht gebaut (braucht n8n Workflow + ANTHROPIC_API_KEY)

**Demo-Skript (5 Min, für Discovery Call):**
```
"Hier kommt eine Anfrage rein: '500 Stück Artikel X, Lieferung KW 20, Sonderkonditionen?'

Das System extrahiert automatisch: Artikel, Menge, Liefertermin, Sonderwünsche.
Gleicht mit Preisliste und Verfügbarkeit ab.
Generiert ein strukturiertes Angebot.

30 Sekunden statt 2 Stunden. Ihr Vertrieb muss nur noch prüfen und absenden."
```

### Demo #2: E-Mail-Klassifizierung
**Was es macht:** Eingehende E-Mails → Claude klassifiziert (Anfrage/Beschwerde/Bestellung/Intern) → Auto-Drafts
**Stack:** n8n + Claude API + Gmail/Outlook-Integration
**Status:** Noch nicht gebaut

### Idee: Live-Demo auf der Website

Ein interaktiver "AI-Readiness-Check" direkt auf der Landing Page:
- User gibt einen Beispiel-Prozess ein (Textfeld)
- Claude analysiert und gibt eine Einschätzung:
  - Automatisierbarkeit (Hoch/Mittel/Niedrig)
  - Geschätzte Zeitersparnis
  - Empfohlener Ansatz
- Am Ende: "Wollen Sie das konkret durchrechnen? → Calendly"

Das wäre ein Lead-Magnet der gleichzeitig die Technologie zeigt.
Braucht: claude-proxy Edge Function (deployed) + einfaches Frontend.

---

## Teil 7: Alle Dateien im System

### Repo-Struktur (was wichtig ist)

```
ak-automation/
├── CLAUDE.md                          ← Hauptkonfiguration Claude Code
├── .claude/
│   ├── settings.json                  ← Hooks + MCP Permissions
│   ├── shared-memory.json             ← Knowledge Graph (bestätigte Fakten)
│   ├── rules/
│   │   ├── code-style.md              ← TypeScript, Tailwind, bun
│   │   ├── communication.md           ← Dein Profil + Ton
│   │   ├── routing.md                 ← Model/Tool/Agent Routing
│   │   ├── verification.md            ← Build/Lint/Test Checks
│   │   ├── security.md                ← API Keys, Netzwerk, Git
│   │   └── coordination.md            ← Cross-Agent Sync Regeln
│   ├── agents/
│   │   ├── builder.md                 ← n8n + Supabase Builder
│   │   ├── content.md                 ← LinkedIn + Blog Writer
│   │   ├── outreach.md                ← DM/Email Drafting
│   │   └── researcher.md              ← Lead + Firmen Research
│   └── skills/
│       ├── new-lead/SKILL.md          ← /new-lead
│       ├── research-firm/SKILL.md     ← /research-firm
│       ├── write-dm/SKILL.md          ← /write-dm
│       ├── discovery-prep/SKILL.md    ← /discovery-prep
│       ├── deploy/SKILL.md            ← /deploy
│       ├── ops-status/SKILL.md        ← /ops-status
│       ├── weekly-review/SKILL.md     ← /weekly-review
│       ├── sync-memory/SKILL.md       ← /sync-memory
│       └── blog-publish/SKILL.md      ← /blog-publish
├── crm/
│   ├── leads.md                       ← Alle Leads
│   └── pipeline.md                    ← Pipeline-Tabelle + Metriken
├── ops/
│   ├── tasks.md                       ← Tages-Tasks (synced zu Jarvis)
│   ├── stack.md                       ← Alle Zugänge + URLs
│   ├── decisions.md                   ← Entscheidungslog
│   ├── costs.md                       ← Monatliche Kosten
│   ├── metrics.md                     ← KPI-Ziele pro Woche
│   └── session-log.txt                ← Automatisches Session-Log
├── docs/
│   ├── pricing.md                     ← Preise + Experimente
│   ├── learnings.md                   ← Was funktioniert / nicht
│   ├── seo-blog-strategy.md           ← Blog-Strategie (7 Posts)
│   └── system-tutorial.md             ← DIESES DOKUMENT
├── supabase/
│   ├── migrations/                    ← SQL Migrations (applied)
│   └── functions/
│       ├── claude-proxy/index.ts      ← API Gateway
│       └── eval-log/index.ts          ← Task-Logging
└── website/                           ← Next.js 16 + Tailwind v4
```

### VPS-Dateien (Jarvis Workspace)

```
/root/.openclaw/
├── openclaw.json                      ← Gateway Config
└── workspace/
    ├── IDENTITY.md                    ← Jarvis Name + Theme
    ├── SOUL.md                        ← Persönlichkeit, Routing, Tagesablauf
    ├── USER.md                        ← Infos über Adam
    ├── TOOLS.md                       ← Tech-Stack + Services
    ├── MEMORY.md                      ← Dauerhaftes Wissen
    ├── HEARTBEAT.md                   ← Heartbeat-Config
    ├── AGENTS.md                      ← 4-Agenten-Modi
    ├── CRM-WORKFLOW.md                ← CRM-Prozess + Research-Format
    ├── leads.md                       ← (synced von Mac, alle 5 Min)
    ├── pipeline.md                    ← (synced von Mac, alle 5 Min)
    ├── tasks.md                       ← (synced von Mac, alle 5 Min)
    └── memory/
        └── YYYY-MM-DD.md             ← Tages-Notizen
```

### Lokale Dateien (Mac, nicht im Repo)

```
~/.openclaw/
├── openclaw.json                      ← Lokale Config (Gateway disabled)
├── sync-crm.sh                        ← Sync-Script (cron alle 5 Min)
└── logs/

~/Library/LaunchAgents/
└── ai.openclaw.gateway.plist          ← LaunchAgent (disabled)
```

---

## Teil 8: Meine Empfehlung — Was du JETZT tun solltest

### Option A: Sofort Leads jagen (empfohlen)

Die Infra steht. Du hast alles. Keine Ausreden mehr.

1. **Heute:** Sales Nav öffnen, 10 Kontakte finden
2. **Heute:** Jarvis die ersten 3 schicken ("Recherchier [Firma]")
3. **Heute:** Erste 3 DMs senden (Jarvis draftet, du sendest)
4. **Morgen:** 10 weitere DMs
5. **Diese Woche:** 30 DMs draußen

Die Demos kannst du parallel bauen. Aber Outreach wartet nicht auf perfekte Demos — dein Discovery Call ist die Demo.

### Option B: Demos zuerst

Wenn du dich sicherer fühlst mit einer Live-Demo:

1. **Tag 1:** ANTHROPIC_API_KEY in n8n setzen
2. **Tag 1-2:** Demo #1 (Angebotsassistent) in n8n bauen
3. **Tag 3:** Demo #2 (E-Mail-Klassifizierung)
4. **Tag 4+:** Outreach starten mit Demo-Link

### Option C: Website-Showcase (Live-Demo auf Landing Page)

Der interaktive AI-Readiness-Check:
- User gibt Prozess-Beschreibung ein
- Claude analysiert Automatisierungspotenzial
- Ergebnis + Calendly-CTA

Das ist ein starker Lead-Magnet, braucht aber 1-2 Tage Build.
Mach das NACH den ersten 10 DMs, nicht davor.

### Meine Meinung

**Option A.** Starte mit Outreach, bau Demos nebenbei. Der Grund:

1. Du lernst aus echten Gesprächen was Leute wirklich brauchen
2. Die ersten Antworten dauern 3-5 Tage — in der Zeit baust du die Demos
3. Perfekte Demos ohne Kunden-Feedback sind verschwendete Zeit
4. Dein Discovery Call IST die Demo — du zeigst was du kannst indem du zuhörst und konkret wirst

---

## Teil 9: Quick Reference Card

```
┌─────────────────────────────────────────────────────┐
│           AK AUTOMATION — QUICK REFERENCE           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  LEADS FINDEN                                       │
│  1. Sales Nav → Kontakt finden                      │
│  2. WhatsApp: "Recherchier [Firma]"                 │
│  3. Jarvis liefert Research + DM-Draft              │
│  4. DM manuell senden                              │
│  5. Claude Code: /new-lead [Firma]                  │
│                                                     │
│  CALLS VORBEREITEN                                  │
│  Claude Code: /discovery-prep [Firma]               │
│                                                     │
│  STATUS CHECKEN                                     │
│  Claude Code: /ops-status                           │
│  Claude Code: /weekly-review                        │
│  WhatsApp: "Was steht heute an?"                    │
│                                                     │
│  WEBSITE DEPLOYEN                                   │
│  Claude Code: /deploy                               │
│                                                     │
│  WICHTIGE URLS                                      │
│  Website: website-iota-drab-70.vercel.app           │
│  Supabase: supabase.com/dashboard/project/          │
│            wyafvratcruyjyalwqih                     │
│  n8n: 204.168.130.38:5678                           │
│  VPS: ssh -i ~/.ssh/id_ed25519_ibm                  │
│       root@204.168.130.38                           │
│                                                     │
│  BEI PROBLEMEN                                      │
│  Claude Code: /ops-status                           │
│  Jarvis resetten: /reset (WhatsApp)                 │
│  Manueller Sync: ~/.openclaw/sync-crm.sh            │
│                                                     │
└─────────────────────────────────────────────────────┘
```
