'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileMenuButton() {
    return (
        <button
            onClick={() => document.getElementById('mobile-sidebar')?.classList.remove('translate-x-[-100%]')}
            className="md:hidden fixed top-4 left-4 z-40 flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-sm text-stone-700 dark:text-stone-300"
            aria-label="Open menu"
        >
            <Menu size={20} />
        </button>
    )
}

export function MobileSidebarOverlay({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Desktop sidebar — always visible */}
            <aside className="hidden md:flex w-56 bg-white dark:bg-stone-900 border-r border-stone-100 dark:border-stone-800 flex-col flex-shrink-0 transition-colors">
                {children}
            </aside>

            {/* Mobile sidebar — slide-in overlay */}
            <div
                id="mobile-sidebar"
                className="md:hidden fixed inset-0 z-50 translate-x-[-100%] transition-transform duration-300 ease-in-out"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => document.getElementById('mobile-sidebar')?.classList.add('translate-x-[-100%]')}
                />
                {/* Sidebar panel */}
                <aside className="relative w-64 h-full bg-white dark:bg-stone-900 border-r border-stone-100 dark:border-stone-800 flex flex-col shadow-xl">
                    <button
                        onClick={() => document.getElementById('mobile-sidebar')?.classList.add('translate-x-[-100%]')}
                        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-lg text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
                        aria-label="Close menu"
                    >
                        <X size={18} />
                    </button>
                    {children}
                </aside>
            </div>
        </>
    )
}
