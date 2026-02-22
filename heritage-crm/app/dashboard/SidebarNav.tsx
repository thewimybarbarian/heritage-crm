'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Kanban } from 'lucide-react'

const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { href: '/dashboard/pipeline', label: 'Pipeline', icon: Kanban, exact: false },
    { href: '/dashboard/leads', label: 'Leads', icon: Users, exact: false },
]

export default function SidebarNav() {
    const pathname = usePathname()

    return (
        <nav className="flex-1 p-3 space-y-0.5">
            {links.map(({ href, label, icon: Icon, exact }) => {
                const active = exact ? pathname === href : pathname.startsWith(href)
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            active
                                ? 'bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-100'
                                : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-200'
                        }`}
                    >
                        <Icon size={15} />
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}
