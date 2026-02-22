'use client'

import { createClient } from '../../lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
    const supabase = createClient()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-800 px-4 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 transition-colors"
        >
            Sign out
        </button>
    )
}
