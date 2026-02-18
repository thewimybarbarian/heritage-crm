-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/lkwvcolbaaetgwlfabvw/sql

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes text NULL;
