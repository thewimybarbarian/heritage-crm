import Link from 'next/link'
import { Sprout } from 'lucide-react'

// Placeholder for the "House + Tree + Roots" logo
// In production, you should replace <Sprout /> with <Image src="/logo.png" ... />
export function Logo({ light = false }: { light?: boolean }) {
    // If 'light' is true (for dark backgrounds), use light text/borders

    return (
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
                {/* Icon representation of "Tree with Roots" */}
                <div className={`absolute inset-0 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6 shadow-md ${light ? 'bg-stone-100' : 'bg-sage-800'}`} />
                <div className={`absolute inset-0 border-2 rounded-lg flex items-center justify-center transform -rotate-3 transition-transform group-hover:rotate-0 ${light ? 'bg-sage-900 border-stone-100' : 'bg-white border-sage-800'}`}>
                    <Sprout className={`w-8 h-8 stroke-[1.5] ${light ? 'text-stone-100' : 'text-sage-700'}`} />
                </div>
            </div>

            <div className="flex flex-col">
                <span className={`font-serif font-bold text-xl leading-none tracking-tight ${light ? 'text-stone-100' : 'text-sage-900'}`}>HERITAGE</span>
                <span className={`font-sans text-xs uppercase tracking-[0.2em] font-semibold ${light ? 'text-stone-300' : 'text-sand-600'}`}>Home Solutions</span>
            </div>
        </Link>
    )
}
