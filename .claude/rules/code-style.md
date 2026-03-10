---
paths:
  - "**/*.ts"
  - "**/*.tsx"
  - "**/*.js"
---
# Code-Konventionen
- TypeScript strict, keine any
- Conventional Commits (englisch)
- Code-Kommentare: Englisch
- Claude API nur ueber Supabase Edge Functions (nie direkt vom Client)
- Alle API-Keys in .env (nie committen)
- Max 3 externe Dependencies pro Workflow
- Vor Commit: `bun run build` muss passen, `bun run lint` muss clean sein
- Context7 MCP bei unbekannten Library-APIs nutzen (Docs holen vor Implementierung)
- Tailwind v4: `@import "tailwindcss"`, `@plugin`, `@theme` inline, kanonische Klassen (max-w-350 statt arbitrary)
- Package Manager: bun (nicht npm, nicht yarn)
