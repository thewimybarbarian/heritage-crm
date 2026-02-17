-- Create a table for leads
create table public.leads (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  situation text not null,
  address text null,
  message text null,
  status text not null default 'new'::text,
  priority text not null default 'medium'::text,
  source text not null default 'website'::text,
  constraint leads_pkey primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create a policy that allows the service role to do everything
-- This is needed because our Next.js API route will use the service role key
create policy "Enable all access for service role" on public.leads
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

-- Create a policy to allow public inserts (if we wanted to bypass the API route, but we're going via API)
-- keeping it strict to service_role for now for security.
