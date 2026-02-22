import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import { Logo } from '../../components/Logo'
import LogoutButton from './LogoutButton'
import SidebarNav from './SidebarNav'
import DarkModeToggle from './DarkModeToggle'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect('/')

    return (
        <div className="min-h-screen flex bg-stone-50 dark:bg-stone-950 transition-colors">
            {/* Sidebar */}
            <aside className="w-56 bg-white dark:bg-stone-900 border-r border-stone-100 dark:border-stone-800 flex flex-col flex-shrink-0 transition-colors">
                <div className="p-5 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <Logo />
                    <DarkModeToggle />
                </div>
                <SidebarNav />
                <div className="p-4 border-t border-stone-100 dark:border-stone-800">
                    <p className="text-xs text-stone-400 dark:text-stone-500 mb-3 truncate">{user.email}</p>
                    <LogoutButton />
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}
