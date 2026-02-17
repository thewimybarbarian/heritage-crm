'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Logo } from '../../components/Logo'

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                // Bypass for dev
                console.log('No user found, using dev bypass')
                setUser({ email: 'dev@heritage.com', id: 'dev-bypass' })
            } else {
                setUser(user)
            }
            setLoading(false)
        }
        getUser()
    }, [router, supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-stone-50 text-sage-800">Loading...</div>
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-stone-50">
            <nav className="bg-white shadow-sm border-b border-stone-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 justify-between">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center">
                                <Logo />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-6 text-sm text-sage-600 hidden md:block">
                                Logged in as <span className="font-semibold text-sage-800">{user.email}</span>
                            </span>
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center justify-center rounded-xl bg-stone-100 px-4 py-2 text-sm font-medium text-sage-700 hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 transition-colors"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-10">
                <header>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="heading-md text-sage-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/50 h-96 flex flex-col items-center justify-center text-sage-400 gap-4">
                                <p className="text-xl font-serif">CRM Content Goes Here</p>
                                <p className="text-sm">Manage Leads, Properties, and Tasks.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
