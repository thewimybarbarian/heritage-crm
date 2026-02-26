import { createAdminClient } from '../../../lib/supabase/admin'
import StatusBadge from '../StatusBadge'
import FilterTabs from '../FilterTabs'
import NotesField from '../NotesField'
import { Phone, Mail, MessageSquare } from 'lucide-react'
import { Suspense } from 'react'

type Lead = {
    id: string
    created_at: string
    name: string
    phone: string
    email: string
    situation: string
    address: string | null
    message: string | null
    status: string
    priority: string
    source: string
    notes: string | null
}

export default async function LeadsPage({
    searchParams,
}: {
    searchParams: Promise<{ status?: string }>
}) {
    const { status } = await searchParams
    const activeStatus = status ?? 'all'

    const admin = createAdminClient()

    // Fetch all leads for counts
    const { data: allLeads } = await admin
        .from('leads')
        .select('id, status')
        .order('created_at', { ascending: false })

    const counts: Record<string, number> = {}
    for (const lead of allLeads ?? []) {
        counts[lead.status] = (counts[lead.status] ?? 0) + 1
    }

    // Fetch filtered leads
    let query = admin.from('leads').select('*').order('created_at', { ascending: false })
    if (activeStatus !== 'all') {
        query = query.eq('status', activeStatus)
    }
    const { data: leads } = await query

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">Leads</h1>
                <span className="text-sm text-stone-700 dark:text-stone-200">{leads?.length ?? 0} shown</span>
            </div>

            <div className="mb-6">
                <Suspense>
                    <FilterTabs counts={counts} total={allLeads?.length ?? 0} />
                </Suspense>
            </div>

            {!leads || leads.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-900/50 h-64 flex flex-col items-center justify-center text-stone-700 dark:text-stone-300 gap-2">
                    <p className="text-lg font-serif">No leads here</p>
                    <p className="text-sm">
                        {activeStatus === 'all' ? 'Leads submitted from the website will appear here.' : `No leads with status "${activeStatus}".`}
                    </p>
                </div>
            ) : (
                <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 overflow-x-auto transition-colors">
                    <table className="min-w-full divide-y divide-stone-100 dark:divide-stone-800">
                        <thead className="bg-stone-50 dark:bg-stone-800/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Situation</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Notes</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Actions</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 dark:text-stone-200 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                            {leads.map((lead: Lead) => (
                                <tr key={lead.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-stone-900 dark:text-stone-100">{lead.name}</div>
                                        {lead.address && <div className="text-xs text-stone-700 dark:text-stone-300 mt-0.5">{lead.address}</div>}
                                        <div className="text-xs text-stone-700 dark:text-stone-300 mt-0.5">{lead.email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-stone-700 dark:text-stone-300 max-w-[160px]">
                                        {lead.situation}
                                        {lead.message && (
                                            <div className="text-xs text-stone-700 dark:text-stone-300 mt-1 truncate max-w-[140px]" title={lead.message}>
                                                {lead.message}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge leadId={lead.id} currentStatus={lead.status} />
                                        <div className="text-xs text-stone-700 dark:text-stone-300 mt-1">click to advance</div>
                                    </td>
                                    <td className="px-6 py-4 max-w-[180px]">
                                        <NotesField leadId={lead.id} initialNotes={lead.notes} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={`tel:${lead.phone}`}
                                                title={`Call ${lead.phone}`}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                                            >
                                                <Phone size={14} />
                                            </a>
                                            <a
                                                href={`sms:${lead.phone}`}
                                                title={`Text ${lead.phone}`}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                                            >
                                                <MessageSquare size={14} />
                                            </a>
                                            <a
                                                href={`mailto:${lead.email}`}
                                                title={`Email ${lead.email}`}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                                            >
                                                <Mail size={14} />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-stone-700 dark:text-stone-200 whitespace-nowrap">
                                        {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
