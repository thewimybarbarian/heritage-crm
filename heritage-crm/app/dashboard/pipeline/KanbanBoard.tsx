'use client'

import { useState, useTransition } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { setLeadStatus } from '../../actions/set-lead-status'
import { Phone } from 'lucide-react'

type Lead = {
    id: string
    name: string
    phone: string
    email: string
    situation: string
    status: string
    created_at: string
}

const COLUMNS = [
    { id: 'new', label: 'New', header: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
    { id: 'contacted', label: 'Contacted', header: 'bg-yellow-400', badge: 'bg-yellow-100 text-yellow-700' },
    { id: 'qualified', label: 'Qualified', header: 'bg-green-500', badge: 'bg-green-100 text-green-700' },
    { id: 'closed', label: 'Closed', header: 'bg-stone-400', badge: 'bg-stone-200 text-stone-800' },
]

export default function KanbanBoard({ initialLeads }: { initialLeads: Lead[] }) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads)
    const [, startTransition] = useTransition()

    const onDragEnd = (result: DropResult) => {
        const { source, destination, draggableId } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId) return

        const newStatus = destination.droppableId

        // Optimistic update
        setLeads(prev =>
            prev.map(l => l.id === draggableId ? { ...l, status: newStatus } : l)
        )

        // Persist to Supabase
        startTransition(() => {
            setLeadStatus(draggableId, newStatus)
        })
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-4 flex-1 overflow-x-auto pb-4">
                {COLUMNS.map(col => {
                    const colLeads = leads.filter(l => l.status === col.id)
                    return (
                        <div key={col.id} className="flex flex-col w-72 flex-shrink-0">
                            {/* Column header */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className={`w-2.5 h-2.5 rounded-full ${col.header}`} />
                                <span className="font-medium text-stone-700 dark:text-stone-300 text-sm">{col.label}</span>
                                <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${col.badge}`}>
                                    {colLeads.length}
                                </span>
                            </div>

                            {/* Droppable column */}
                            <Droppable droppableId={col.id}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`flex-1 rounded-2xl p-2 min-h-[200px] transition-colors ${
                                            snapshot.isDraggingOver
                                                ? 'bg-stone-200 dark:bg-stone-700'
                                                : 'bg-stone-100/60 dark:bg-stone-800/40'
                                        }`}
                                    >
                                        <div className="space-y-2">
                                            {colLeads.map((lead, index) => (
                                                <Draggable key={lead.id} draggableId={lead.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`bg-white dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-700 p-3.5 shadow-sm transition-shadow ${
                                                                snapshot.isDragging
                                                                    ? 'shadow-lg rotate-1 border-stone-200 dark:border-stone-600'
                                                                    : 'hover:shadow-md'
                                                            }`}
                                                        >
                                                            <div className="font-medium text-stone-900 dark:text-stone-100 text-sm leading-tight">
                                                                {lead.name}
                                                            </div>
                                                            <div className="text-xs text-stone-700 dark:text-stone-200 mt-1 leading-snug">
                                                                {lead.situation}
                                                            </div>
                                                            <div className="flex items-center justify-between mt-3">
                                                                <a
                                                                    href={`tel:${lead.phone}`}
                                                                    onClick={e => e.stopPropagation()}
                                                                    className="inline-flex items-center gap-1.5 text-xs text-stone-700 dark:text-stone-200 hover:text-green-700 dark:hover:text-green-400 transition-colors"
                                                                >
                                                                    <Phone size={11} />
                                                                    {lead.phone}
                                                                </a>
                                                                <span className="text-xs text-stone-600 dark:text-stone-600">
                                                                    {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    )
                })}
            </div>
        </DragDropContext>
    )
}
