import { createAdminClient } from '../../../lib/supabase/admin'
import KanbanBoard from './KanbanBoard'

export default async function PipelinePage() {
    const admin = createAdminClient()
    const { data: leads } = await admin
        .from('leads')
        .select('id, name, phone, email, situation, status, created_at')
        .order('created_at', { ascending: false })

    return (
        <div className="p-8 h-full flex flex-col">
            <h1 className="text-2xl font-bold font-serif text-stone-900 mb-6">Pipeline</h1>
            <KanbanBoard initialLeads={leads ?? []} />
        </div>
    )
}
