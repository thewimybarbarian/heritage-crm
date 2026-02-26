'use client'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

type Segment = { name: string; value: number; color: string }

export default function PipelineDonut({ data, total }: { data: Segment[]; total: number }) {
    const hasData = data.some(d => d.value > 0)

    return (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm p-6 transition-colors">
            <h2 className="text-sm font-medium text-stone-700 dark:text-stone-200 mb-4">Pipeline Breakdown</h2>
            <div className="flex items-center gap-6">
                <div className="relative w-40 h-40 flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={hasData ? data : [{ name: 'No leads', value: 1, color: '#e7e5e4' }]}
                                cx="50%"
                                cy="50%"
                                innerRadius={44}
                                outerRadius={64}
                                paddingAngle={hasData ? 3 : 0}
                                dataKey="value"
                                strokeWidth={0}
                            >
                                {(hasData ? data : [{ color: '#e7e5e4' }]).map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            {hasData && (
                                <Tooltip
                                    formatter={(value: number, name: string) => [value, name]}
                                    contentStyle={{ borderRadius: '10px', border: '1px solid #e7e5e4', fontSize: '12px' }}
                                />
                            )}
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-bold text-stone-900 dark:text-stone-100">{total}</span>
                        <span className="text-xs text-stone-700 dark:text-stone-300">total</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2.5 flex-1">
                    {data.map(item => (
                        <div key={item.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                                <span className="text-sm text-stone-800 dark:text-stone-200">{item.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
