'use server'

import { createAdminClient } from '../../lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function updateLeadNotes(leadId: string, notes: string) {
    const admin = createAdminClient()
    await admin
        .from('leads')
        .update({ notes })
        .eq('id', leadId)

    revalidatePath('/dashboard')
}
