'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const TABS = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'Closed', value: 'closed' },
]

type Props = {
    counts: Record<string, number>
    total: number
}

export default function FilterTabs({ counts, total }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const active = searchParams.get('status') ?? 'all'

    const handleTab = (value: string) => {
        const params = new URLSearchParams()
        if (value !== 'all') params.set('status', value)
        router.push('/dashboard' + (params.toString() ? '?' + params.toString() : ''))
    }

    return (
        <div className="flex gap-1 flex-wrap">
            {TABS.map(tab => {
                const count = tab.value === 'all' ? total : (counts[tab.value] ?? 0)
                const isActive = active === tab.value
                return (
                    <button
                        key={tab.value}
                        onClick={() => handleTab(tab.value)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                            isActive
                                ? 'bg-stone-800 text-white'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                        }`}
                    >
                        {tab.label}
                        <span className={`text-xs rounded-full px-1.5 py-0.5 ${isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'}`}>
                            {count}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
