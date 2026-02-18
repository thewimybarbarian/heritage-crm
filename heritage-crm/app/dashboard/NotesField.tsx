'use client'

import { useState, useTransition } from 'react'
import { updateLeadNotes } from '../actions/update-notes'
import { Check, Pencil } from 'lucide-react'

export default function NotesField({ leadId, initialNotes }: { leadId: string; initialNotes: string | null }) {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(initialNotes ?? '')
    const [isPending, startTransition] = useTransition()

    const handleSave = () => {
        startTransition(() => {
            updateLeadNotes(leadId, value)
        })
        setEditing(false)
    }

    if (editing) {
        return (
            <div className="flex items-start gap-1 mt-1">
                <textarea
                    autoFocus
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && e.metaKey) handleSave() }}
                    rows={2}
                    className="text-xs text-stone-700 bg-stone-50 border border-stone-300 rounded px-2 py-1 w-full resize-none focus:outline-none focus:ring-1 focus:ring-stone-400"
                    placeholder="Add call notes..."
                />
                <button onClick={handleSave} className="text-green-600 hover:text-green-700 mt-1 flex-shrink-0">
                    <Check size={14} />
                </button>
            </div>
        )
    }

    return (
        <button
            onClick={() => setEditing(true)}
            disabled={isPending}
            className="flex items-start gap-1 mt-1 text-left group w-full"
        >
            <span className={`text-xs ${value ? 'text-stone-500' : 'text-stone-300 italic'} group-hover:text-stone-700 transition-colors leading-snug`}>
                {isPending ? 'Saving...' : (value || 'Add notes...')}
            </span>
            <Pencil size={10} className="text-stone-300 group-hover:text-stone-500 mt-0.5 flex-shrink-0 transition-colors" />
        </button>
    )
}
