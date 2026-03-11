---
name: blog-publish
description: Blog-Post prüfen und publishen. Trigger bei "Post veröffentlichen", "Blog live" oder ähnlich.
argument-hint: "[Post-Slug oder Dateiname]"
allowed-tools: Read, Edit, Bash, Glob, Grep, mcp__playwright__*
---
Ich prüfe einen Blog-Post auf Qualität und veröffentliche ihn.

## Pre-Publish Checkliste

### 1. Frontmatter validieren
- Lies website/src/content/blog/[slug].mdx
- YAML-Syntax korrekt? (gray-matter)
- Pflichtfelder: title, description, date, slug, tags
- Meta description: Max 155 Zeichen, Keyword + CTA
- Slug: URL-freundlich, Keyword enthalten

### 2. Content prüfen
- Erster Absatz: Direkte Antwort auf die Kernfrage (AEO)
- H2/H3-Struktur logisch
- Interne Links: Mindestens 1 Link zur Pillar Page (/blog/prozesse-automatisieren-mittelstand)
- CTA vorhanden (Erstgespräch / Readiness-Check)
- Keine TODO-Marker oder Platzhalter
- Wörteranzahl zählen und melden

### 3. Build testen
```bash
cd website && bun run build 2>&1
```
- MDX darf keinen Render-Error werfen
- Keine 404s bei internen Links

### 4. Visuelle Prüfung
- Playwright-Screenshot der gerenderten Seite (Desktop + Mobile)
- Bilder/Grafiken laden korrekt
- Code-Blöcke korrekt formatiert
- Typografie sauber (Umlaute, Anführungszeichen)

### 5. SEO-Check
- Schema markup vorhanden (Article, FAQ, HowTo je nach Post-Typ)
- Alt-Tags für alle Bilder
- Canonical URL korrekt
- Open Graph Tags (og:title, og:description, og:image)

## Publish-Prozess
1. Alle Checks bestanden? → Commit mit: `feat(blog): publish [post-title]`
2. Deploy: `cd website && npx vercel --prod`
3. Verify: Playwright-Screenshot der Live-URL
4. Melde: URL, Wörteranzahl, SEO-Score

## Falls Checks fehlschlagen
- Liste alle Probleme auf
- Schlage Fixes vor
- Führe Fixes aus nach Bestätigung
- Wiederhole Checks
