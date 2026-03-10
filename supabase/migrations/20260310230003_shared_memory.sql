-- Shared memory: cross-agent knowledge store (backup for MCP Knowledge Graph)
create table if not exists public.shared_memory (
  id bigint generated always as identity primary key,
  key text not null,
  value text not null,
  category text not null check (category in ('decision', 'lead_fact', 'learning', 'ops_status')),
  source_agent text not null,
  updated_at timestamptz not null default now(),
  unique (key, category)
);

create index if not exists idx_shared_memory_category on public.shared_memory (category);
create index if not exists idx_shared_memory_updated on public.shared_memory (updated_at desc);

comment on table public.shared_memory is 'Confirmed facts shared between Claude Code and OpenClaw/Jarvis';
