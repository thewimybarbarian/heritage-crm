import Link from 'next/link'
import { Sprout } from 'lucide-react'

// Placeholder for the "House + Tree + Roots" logo
// In production, you should replace <Sprout /> with <Image src="/logo.png" ... />
export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
                {/* Icon representation of "Tree with Roots" */}
                <div className="absolute inset-0 bg-sage-800 dark:bg-stone-200 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6 shadow-md" />
                <div className="absolute inset-0 bg-white dark:bg-stone-900 border-2 border-sage-800 dark:border-stone-200 rounded-lg flex items-center justify-center transform -rotate-3 transition-transform group-hover:rotate-0">
                    <Sprout className="text-sage-700 dark:text-stone-200 w-8 h-8 stroke-[1.5]" />
                </div>
            </div>

            <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-sage-900 dark:text-stone-100 tracking-tight">HERITAGE</span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-sand-600 dark:text-stone-400 font-semibold">Home Solutions</span>
            </div>
        </Link>
    )
}
