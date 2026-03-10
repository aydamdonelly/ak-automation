# Learnings

## Was funktioniert
- next-mdx-remote/rsc fuer MDX Blog-Posts (gray-matter fuer Frontmatter)
- OpenClaw mit Haiku primary Model (20x guenstiger als Sonnet, ~$0.001/Call)
- nohup + pgrep guard in .zshrc fuer auto-start OpenClaw Gateway
- Tailwind v4 kanonische Klassen (max-w-350) statt arbitrary values
- PostToolUse Hooks fuer automatischen tsc+lint Check
- Session-Log via Stop Hook (ops/session-log.txt)

## Was nicht funktioniert
- @next/mdx kann kein YAML frontmatter parsen → next-mdx-remote/rsc nutzen
- macOS LaunchAgent + Node.js = SIGKILL → nohup + pgrep guard statt LaunchAgent
- OpenClaw Gateway crashed nach model-switch ("model failed") → config validieren vor Switch
- OpenClaw Shell-Approval: nur sichtbar in Desktop-UI, nicht ueber WhatsApp

## Ueberraschungen
- Sonnet kostet ~50ct pro Chat-Session auf OpenClaw → Haiku ist essential fuer Daily Ops
- OpenClaw hooks.enabled braucht hooks.token → Token muss zuerst generiert werden
- Context7 MCP kaum genutzt trotz Installation → Routing-Regeln erzwingen jetzt Nutzung
- Zu viele Probleme in einer Session verursacht → weniger Masse, mehr Qualitaet
