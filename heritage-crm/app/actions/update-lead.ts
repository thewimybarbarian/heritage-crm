'use server'

import { createAdminClient } from '../../lib/supabase/admin'
import { revalidatePath } from 'next/cache'

const STATUS_CYCLE = ['new', 'contacted', 'qualified', 'closed']

export async function updateLeadStatus(leadId: string, currentStatus: string) {
    const currentIndex = STATUS_CYCLE.indexOf(currentStatus)
    const nextStatus = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length]

    const admin = createAdminClient()
    await admin
        .from('leads')
        .update({ status: nextStatus })
        .eq('id', leadId)

    revalidatePath('/dashboard/leads')
    revalidatePath('/dashboard')
}
