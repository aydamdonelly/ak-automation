-- Eval runs: tracks every significant agent task for observability
create table if not exists public.eval_runs (
  id bigint generated always as identity primary key,
  agent text not null,
  model text not null,
  task text not null,
  status text not null check (status in ('success', 'partial', 'failure')),
  cost_usd numeric(8, 4),
  duration_ms integer,
  corrections integer not null default 0,
  error_class text references public.eval_error_classes(name),
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists idx_eval_runs_agent on public.eval_runs (agent);
create index if not exists idx_eval_runs_created on public.eval_runs (created_at desc);
create index if not exists idx_eval_runs_status on public.eval_runs (status);

comment on table public.eval_runs is 'Log of agent task executions for eval and observability';
