import { createAdminClient } from '../../lib/supabase/admin'

export default async function DashboardPage() {
    const admin = createAdminClient()
    const { data: leads } = await admin.from('leads').select('id, status')

    const total = leads?.length ?? 0
    const newLeads = leads?.filter(l => l.status === 'new').length ?? 0
    const contacted = leads?.filter(l => l.status === 'contacted').length ?? 0
    const qualified = leads?.filter(l => l.status === 'qualified').length ?? 0
    const closed = leads?.filter(l => l.status === 'closed').length ?? 0

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold font-serif text-stone-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Leads" value={total} />
                <StatCard label="New" value={newLeads} accent="blue" />
                <StatCard label="Contacted" value={contacted} accent="yellow" />
                <StatCard label="Qualified" value={qualified} accent="green" />
            </div>
        </div>
    )
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: string }) {
    const bar: Record<string, string> = {
        blue: 'bg-blue-500',
        yellow: 'bg-yellow-400',
        green: 'bg-green-500',
    }

    return (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 relative overflow-hidden">
            {accent && (
                <div className={`absolute top-0 left-0 right-0 h-1 ${bar[accent]}`} />
            )}
            <p className="text-sm text-stone-500 mt-1">{label}</p>
            <p className="text-4xl font-bold text-stone-900 mt-2">{value}</p>
        </div>
    )
}
