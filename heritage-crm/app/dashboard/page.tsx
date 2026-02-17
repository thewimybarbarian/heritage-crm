import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import { Logo } from '../../components/Logo'
import LogoutButton from './LogoutButton'

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
}

const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    qualified: 'bg-green-100 text-green-800',
    closed: 'bg-stone-100 text-stone-600',
}

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect('/')

    const { data: leads } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="min-h-screen bg-stone-50">
            <nav className="bg-white shadow-sm border-b border-stone-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 justify-between">
                        <div className="flex items-center">
                            <Logo />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-stone-500 hidden md:block">
                                {user.email}
                            </span>
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold font-serif text-stone-900">Leads</h1>
                        <span className="text-sm text-stone-500">{leads?.length ?? 0} total</span>
                    </div>

                    {!leads || leads.length === 0 ? (
                        <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/50 h-64 flex flex-col items-center justify-center text-stone-400 gap-2">
                            <p className="text-lg font-serif">No leads yet</p>
                            <p className="text-sm">Leads submitted from the website will appear here.</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                            <table className="min-w-full divide-y divide-stone-100">
                                <thead className="bg-stone-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Situation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    {leads.map((lead: Lead) => (
                                        <tr key={lead.id} className="hover:bg-stone-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-stone-900">{lead.name}</div>
                                                {lead.address && <div className="text-xs text-stone-400 mt-0.5">{lead.address}</div>}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-stone-700">{lead.phone}</div>
                                                <div className="text-xs text-stone-400">{lead.email}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-700">{lead.situation}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[lead.status] ?? 'bg-stone-100 text-stone-600'}`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-500">
                                                {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
