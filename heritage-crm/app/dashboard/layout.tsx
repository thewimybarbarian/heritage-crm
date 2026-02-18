import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import { Logo } from '../../components/Logo'
import LogoutButton from './LogoutButton'
import SidebarNav from './SidebarNav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect('/')

    return (
        <div className="min-h-screen flex bg-stone-50">
            {/* Sidebar */}
            <aside className="w-56 bg-white border-r border-stone-100 flex flex-col flex-shrink-0">
                <div className="p-5 border-b border-stone-100">
                    <Logo />
                </div>
                <SidebarNav />
                <div className="p-4 border-t border-stone-100">
                    <p className="text-xs text-stone-400 mb-3 truncate">{user.email}</p>
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
