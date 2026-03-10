-- Eval error classes for categorizing agent failures
create table if not exists public.eval_error_classes (
  id bigint generated always as identity primary key,
  name text not null unique,
  description text,
  severity text not null check (severity in ('low', 'medium', 'high', 'critical')),
  created_at timestamptz not null default now()
);

-- Seed default error classes
insert into public.eval_error_classes (name, description, severity) values
  ('wrong_output', 'Agent produced incorrect or incomplete output', 'medium'),
  ('tool_failure', 'MCP tool or external service call failed', 'medium'),
  ('hallucination', 'Agent fabricated facts or references', 'high'),
  ('timeout', 'Task exceeded expected duration', 'low'),
  ('user_correction', 'Human had to manually fix agent output', 'medium'),
  ('security_violation', 'Agent attempted forbidden action or leaked secrets', 'critical')
on conflict (name) do nothing;

comment on table public.eval_error_classes is 'Categories for classifying agent task failures';
