'use server'

import { createAdminClient } from '../../lib/supabase/admin'
import { revalidatePath } from 'next/cache'

const VALID_STATUSES = ['new', 'contacted', 'qualified', 'closed']

export async function setLeadStatus(leadId: string, status: string) {
    if (!VALID_STATUSES.includes(status)) return

    const admin = createAdminClient()
    await admin.from('leads').update({ status }).eq('id', leadId)

    revalidatePath('/dashboard/pipeline')
    revalidatePath('/dashboard/leads')
    revalidatePath('/dashboard')
}
