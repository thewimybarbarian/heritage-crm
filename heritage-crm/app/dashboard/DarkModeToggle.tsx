'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('heritage-dark-mode')
        if (stored === 'true') {
            setDark(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggle = () => {
        const next = !dark
        setDark(next)
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('heritage-dark-mode', String(next))
    }

    return (
        <button
            onClick={toggle}
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors bg-stone-100 hover:bg-stone-200 text-stone-600 dark:bg-stone-700 dark:hover:bg-stone-600 dark:text-stone-300"
            title={dark ? 'Light mode' : 'Dark mode'}
        >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
    )
}
