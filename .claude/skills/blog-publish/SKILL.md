---
name: blog-publish
description: Blog-Post pruefen und publishen. Trigger bei "Post veroeffentlichen", "Blog live" oder aehnlich.
argument-hint: "[Post-Slug oder Dateiname]"
allowed-tools: Read, Edit, Bash, Glob, Grep, mcp__playwright__*
---
Ich pruefe einen Blog-Post auf Qualitaet und veroeffentliche ihn.

## Pre-Publish Checkliste

### 1. Frontmatter validieren
- Lies website/src/content/blog/[slug].mdx
- YAML-Syntax korrekt? (gray-matter)
- Pflichtfelder: title, description, date, slug, tags
- Meta description: Max 155 Zeichen, Keyword + CTA
- Slug: URL-freundlich, Keyword enthalten

### 2. Content pruefen
- Erster Absatz: Direkte Antwort auf die Kernfrage (AEO)
- H2/H3-Struktur logisch
- Interne Links: Mindestens 1 Link zur Pillar Page (/blog/prozesse-automatisieren-mittelstand)
- CTA vorhanden (Erstgespraech / Readiness-Check)
- Keine TODO-Marker oder Platzhalter
- Woerteranzahl zaehlen und melden

### 3. Build testen
```bash
cd website && bun run build 2>&1
```
- MDX darf keinen Render-Error werfen
- Keine 404s bei internen Links

### 4. Visuelle Pruefung
- Playwright-Screenshot der gerenderten Seite (Desktop + Mobile)
- Bilder/Grafiken laden korrekt
- Code-Bloecke korrekt formatiert
- Typografie sauber (Umlaute, Anfuehrungszeichen)

### 5. SEO-Check
- Schema markup vorhanden (Article, FAQ, HowTo je nach Post-Typ)
- Alt-Tags fuer alle Bilder
- Canonical URL korrekt
- Open Graph Tags (og:title, og:description, og:image)

## Publish-Prozess
1. Alle Checks bestanden? → Commit mit: `feat(blog): publish [post-title]`
2. Deploy: `cd website && npx vercel --prod`
3. Verify: Playwright-Screenshot der Live-URL
4. Melde: URL, Woerteranzahl, SEO-Score

## Falls Checks fehlschlagen
- Liste alle Probleme auf
- Schlage Fixes vor
- Fuehre Fixes aus nach Bestaetigung
- Wiederhole Checks
