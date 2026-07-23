alter table public.people
  add column if not exists intent text;

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
