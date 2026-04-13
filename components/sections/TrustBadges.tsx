import { Award, Users, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

type Badge = {
    icon: React.ComponentType<{ size?: number; className?: string }>
    title: string
    subtitle: string
}

const BADGES: Badge[] = [
    {
        icon: Award,
        title: 'Downtown Rotary Club',
        subtitle: 'Active Member (formerly Bricktown Rotary)',
    },
    {
        icon: Users,
        title: 'OKC Mix & Mingle Network',
        subtitle: 'Community Partner',
    },
    {
        icon: MapPin,
        title: 'Oklahoma City Local',
        subtitle: 'Serving the OKC Metro',
    },
]

export function TrustBadges() {
    return (
        <section className="py-12 bg-white border-b border-stone-100">
            <div className="container-custom">
                <FadeIn className="text-center mb-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-sage-700 font-semibold">
                        Proud Member Of
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {BADGES.map(({ icon: Icon, title, subtitle }) => (
                        <div
                            key={title}
                            className="flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-stone-100 hover:border-sand-300 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-800 flex items-center justify-center text-sand-400">
                                <Icon size={22} />
                            </div>
                            <div className="min-w-0">
                                <div className="font-serif font-semibold text-sage-900 leading-tight">
                                    {title}
                                </div>
                                <div className="text-sm text-stone-600 mt-0.5">
                                    {subtitle}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
