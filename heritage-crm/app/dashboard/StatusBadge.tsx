'use client'

import { useTransition } from 'react'
import { updateLeadStatus } from '../actions/update-lead'

const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    contacted: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    qualified: 'bg-green-100 text-green-800 hover:bg-green-200',
    closed: 'bg-stone-200 text-stone-800 hover:bg-stone-200',
}

const statusLabels: Record<string, string> = {
    new: 'New',
    contacted: 'Contacted',
    qualified: 'Qualified',
    closed: 'Closed',
}

export default function StatusBadge({ leadId, currentStatus }: { leadId: string; currentStatus: string }) {
    const [isPending, startTransition] = useTransition()

    const handleClick = () => {
        startTransition(() => {
            updateLeadStatus(leadId, currentStatus)
        })
    }

    return (
        <button
            onClick={handleClick}
            disabled={isPending}
            title="Click to advance status"
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors cursor-pointer disabled:opacity-60 ${statusColors[currentStatus] ?? 'bg-stone-200 text-stone-800'}`}
        >
            {isPending ? '...' : (statusLabels[currentStatus] ?? currentStatus)}
        </button>
    )
}
