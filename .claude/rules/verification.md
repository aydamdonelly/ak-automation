# Verification Rules

## Code-Änderungen
- `npx tsc --noEmit` nach jedem TS/TSX-Edit (Hook macht das automatisch)
- `bun run build` vor jedem Commit — Build muss passen
- `bun run lint` nach Edits (Hook macht das automatisch)
- Diff reviewen vor Commit

## UI-Änderungen
- Playwright-Screenshot nach visuellen Änderungen
- Vergleich gegen Intent/Design-Vorgabe
- Responsive prüfen (mobile + desktop)

## Blog/Content (MDX)
- Build prüfen: MDX darf keinen Render-Error werfen
- Frontmatter validieren: YAML-Syntax korrekt (gray-matter)
- Interne Links prüfen: keine 404s

## Datenbank-Änderungen
- `mcp__supabase__get_advisors` VOR jeder Migration ausführen
- SQL reviewen: keine destructive operations ohne Bestätigung
- Type-Generierung nach Schema-Änderung

## Pre-Commit Checkliste
1. TypeScript: keine Errors
2. Lint: clean
3. Build: passed
4. Diff: reviewed, keine Secrets

## Post-Deploy Checkliste
1. Live URL antwortet (200)
2. Kritische Seiten laden (/, /blog, /impressum)
3. Screenshot-Vergleich bei UI-Änderungen
