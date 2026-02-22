'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

type DataPoint = { date: string; count: number }

export default function LeadsBarChart({ data }: { data: DataPoint[] }) {
    const hasData = data.some(d => d.count > 0)

    return (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm p-6 transition-colors">
            <h2 className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4">Leads — Last 30 Days</h2>
            <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barCategoryGap="30%">
                        <CartesianGrid vertical={false} stroke="#f5f5f4" />
                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 11, fill: '#a8a29e' }}
                            tickLine={false}
                            axisLine={false}
                            interval="preserveStartEnd"
                        />
                        <YAxis
                            allowDecimals={false}
                            tick={{ fontSize: 11, fill: '#a8a29e' }}
                            tickLine={false}
                            axisLine={false}
                            width={20}
                        />
                        <Tooltip
                            cursor={{ fill: '#f5f5f4' }}
                            contentStyle={{ borderRadius: '10px', border: '1px solid #e7e5e4', fontSize: '12px' }}
                            formatter={(value: number) => [value, 'Leads']}
                        />
                        <Bar
                            dataKey="count"
                            fill={hasData ? '#3b82f6' : '#e7e5e4'}
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {!hasData && (
                <p className="text-center text-xs text-stone-400 -mt-2">No leads in the last 30 days</p>
            )}
        </div>
    )
}
