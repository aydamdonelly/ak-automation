# Verification Rules

## Code-Aenderungen
- `npx tsc --noEmit` nach jedem TS/TSX-Edit (Hook macht das automatisch)
- `bun run build` vor jedem Commit — Build muss passen
- `bun run lint` nach Edits (Hook macht das automatisch)
- Diff reviewen vor Commit

## UI-Aenderungen
- Playwright-Screenshot nach visuellen Aenderungen
- Vergleich gegen Intent/Design-Vorgabe
- Responsive pruefen (mobile + desktop)

## Blog/Content (MDX)
- Build pruefen: MDX darf keinen Render-Error werfen
- Frontmatter validieren: YAML-Syntax korrekt (gray-matter)
- Interne Links pruefen: keine 404s

## Datenbank-Aenderungen
- `mcp__supabase__get_advisors` VOR jeder Migration ausfuehren
- SQL reviewen: keine destructive operations ohne Bestaetigung
- Type-Generierung nach Schema-Aenderung

## Pre-Commit Checkliste
1. TypeScript: keine Errors
2. Lint: clean
3. Build: passed
4. Diff: reviewed, keine Secrets

## Post-Deploy Checkliste
1. Live URL antwortet (200)
2. Kritische Seiten laden (/, /blog, /impressum)
3. Screenshot-Vergleich bei UI-Aenderungen
