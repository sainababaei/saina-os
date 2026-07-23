create extension if not exists "pgcrypto";
create type person_stage as enum ('lead','contact','member','client','partner','alumni');
create table if not exists people (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  full_name text,
  email text,
  phone text,
  intent text,
  stage person_stage not null default 'lead',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.people enable row level security;
revoke all on table public.people from anon;
grant insert (full_name, email, phone, intent, stage) on public.people to anon;
drop policy if exists people_anon_insert_leads on public.people;
create policy people_anon_insert_leads
  on public.people
  for insert
  to anon
  with check (
    stage = 'lead'::person_stage
    and auth_user_id is null
    and coalesce(length(btrim(full_name)), 0) > 0
    and coalesce(length(btrim(intent)), 0) > 0
    and (
      (email is not null and phone is null)
      or (email is null and phone is not null)
    )
  );
create table if not exists profile_evidence (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references people(id) on delete cascade,
  source_type text not null,
  capability text not null,
  score_delta integer default 0,
  visibility text not null default 'private',
  consent_status text not null default 'pending',
  created_at timestamptz not null default now()
);
create table if not exists interactions (
  id uuid primary key default gen_random_uuid(),
  person_id uuid references people(id) on delete cascade,
  interaction_type text not null,
  summary text,
  occurred_at timestamptz not null default now()
);
create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  status text not null default 'draft',
  body jsonb not null default '{}'::jsonb,
  seo jsonb not null default '{}'::jsonb,
  aeo jsonb not null default '{}'::jsonb,
  geo jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  updated_at timestamptz not null default now()
);
create table if not exists match_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid references people(id),
  desired_role text,
  context text,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);
