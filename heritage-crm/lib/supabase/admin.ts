import { createClient } from '@supabase/supabase-js'

// Admin client using service role key — server-side only, never expose to client
export function createAdminClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
}
