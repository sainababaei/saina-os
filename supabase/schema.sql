-- Phase 2 database blueprint. Run after creating the Supabase project.
create extension if not exists pgcrypto;

create type public.person_stage as enum ('lead','contact','member','client','partner');
create type public.content_status as enum ('draft','scheduled','published','archived');

create table public.people (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  full_name text,
  email text,
  phone text,
  stage public.person_stage not null default 'lead',
  current_role text,
  dynamic_identity text,
  profile_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.interactions (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.people(id) on delete cascade,
  interaction_type text not null,
  title text not null,
  occurred_at timestamptz not null default now(),
  private_notes text,
  member_visible_summary text,
  created_at timestamptz not null default now()
);

create table public.identity_evidence (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.people(id) on delete cascade,
  source_type text not null,
  capability text not null,
  score_delta integer,
  evidence_text text not null,
  consent_status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  status public.content_status not null default 'draft',
  seo_title text,
  meta_description text,
  direct_answer text,
  faq jsonb not null default '[]'::jsonb,
  entities jsonb not null default '[]'::jsonb,
  sources jsonb not null default '[]'::jsonb,
  published_at timestamptz,
  updated_at timestamptz not null default now()
);

create table public.match_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.people(id) on delete cascade,
  target_type text not null,
  context text not null,
  status text not null default 'submitted',
  curator_notes text,
  created_at timestamptz not null default now()
);
