import { createAdminClient } from '../../lib/supabase/admin'
import { format, subDays, eachDayOfInterval, startOfDay } from 'date-fns'
import PipelineDonut from './PipelineDonut'
import LeadsBarChart from './LeadsBarChart'

export default async function DashboardPage() {
    const admin = createAdminClient()
    const { data: leads } = await admin.from('leads').select('id, status, created_at')

    const total = leads?.length ?? 0
    const newLeads = leads?.filter(l => l.status === 'new').length ?? 0
    const contacted = leads?.filter(l => l.status === 'contacted').length ?? 0
    const qualified = leads?.filter(l => l.status === 'qualified').length ?? 0
    const closed = leads?.filter(l => l.status === 'closed').length ?? 0

    // Donut chart data
    const statusData = [
        { name: 'New', value: newLeads, color: '#3b82f6' },
        { name: 'Contacted', value: contacted, color: '#facc15' },
        { name: 'Qualified', value: qualified, color: '#22c55e' },
        { name: 'Closed', value: closed, color: '#a8a29e' },
    ]

    // Bar chart: leads per day over last 30 days
    const today = startOfDay(new Date())
    const thirtyDaysAgo = subDays(today, 29)
    const days = eachDayOfInterval({ start: thirtyDaysAgo, end: today })

    const countByDay: Record<string, number> = {}
    for (const lead of leads ?? []) {
        const day = format(new Date(lead.created_at), 'MMM d')
        countByDay[day] = (countByDay[day] ?? 0) + 1
    }

    const timeData = days.map(day => ({
        date: format(day, 'MMM d'),
        count: countByDay[format(day, 'MMM d')] ?? 0,
    }))

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-8">Dashboard</h1>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard label="Total Leads" value={total} />
                <StatCard label="New" value={newLeads} accent="blue" />
                <StatCard label="Contacted" value={contacted} accent="yellow" />
                <StatCard label="Qualified" value={qualified} accent="green" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PipelineDonut data={statusData} total={total} />
                <LeadsBarChart data={timeData} />
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
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm p-6 relative overflow-hidden transition-colors">
            {accent && (
                <div className={`absolute top-0 left-0 right-0 h-1 ${bar[accent]}`} />
            )}
            <p className="text-sm text-stone-700 dark:text-stone-200 mt-1">{label}</p>
            <p className="text-4xl font-bold text-stone-900 dark:text-stone-100 mt-2">{value}</p>
        </div>
    )
}
