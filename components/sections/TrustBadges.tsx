import Image from 'next/image'
import { Users, Building2, Shield, ExternalLink } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

// ---- SVG logo components --------------------------------------------------

function EqualHousingLogo({ className }: { className?: string }) {
    // HUD Equal Housing Opportunity logo (public domain). Simplified house + equals-sign mark.
    return (
        <svg viewBox="0 0 64 64" className={className} aria-label="Equal Housing Opportunity">
            <path
                fill="currentColor"
                d="M32 6 6 28h6v28h14V40h12v16h14V28h6L32 6Zm-8 28h-2v-4h2v4Zm20 0h-2v-4h2v4ZM28 46h8v2h-8v-2Zm0 4h8v2h-8v-2Z"
            />
        </svg>
    )
}

function GoogleGLogo({ className }: { className?: string }) {
    // Google "G" logomark approximation — uses brand colors
    return (
        <svg viewBox="0 0 48 48" className={className} aria-label="Google">
            <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.3-.4-3.5Z" />
            <path fill="#34A853" d="M6.3 14.7 12.9 19.6A12 12 0 0 1 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7Z" />
            <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28.3L6.1 33.4A20 20 0 0 0 24 44Z" />
            <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C41.2 36.2 44 30.6 44 24c0-1.3-.1-2.3-.4-3.5Z" />
        </svg>
    )
}

// ---- Badge data -----------------------------------------------------------

type Badge = {
    title: string
    subtitle: string
    // Visual: either an image asset, an SVG component, or a lucide icon
    image?: { src: string; alt: string }
    svg?: React.ComponentType<{ className?: string }>
    icon?: React.ComponentType<{ size?: number; className?: string }>
    // Optional external link — clicking the whole tile navigates here
    href?: string
    // If true, the tile is rendered but signals to Alan that credentials need verification
    pending?: boolean
}

const BADGES: Badge[] = [
    {
        title: 'Bricktown Rotary',
        subtitle: 'Active Member, Rotary International',
        image: { src: '/bricktown-rotary-logo.png', alt: 'Bricktown Rotary Club' },
        href: 'https://www.bricktownrotary.org/',
    },
    {
        title: 'OKC Mix & Mingle',
        subtitle: 'Community Partner Network',
        icon: Users,
    },
    {
        title: 'Google Reviews',
        subtitle: 'Read what OKC families say — click to view',
        svg: GoogleGLogo,
        href: 'https://www.google.com/search?q=Heritage+Home+Solutions+Oklahoma+City+reviews',
    },
    {
        title: 'Equal Housing Opportunity',
        subtitle: 'We buy homes fairly, regardless of background',
        svg: EqualHousingLogo,
    },
    {
        title: 'Greater OKC Chamber',
        subtitle: 'Local Business Member',
        icon: Building2,
        pending: true,
    },
    {
        title: 'Licensed & Insured',
        subtitle: 'Oklahoma real estate professionals',
        icon: Shield,
        pending: true,
    },
]

// ---- Component ------------------------------------------------------------

export function TrustBadges() {
    return (
        <section className="py-12 bg-white border-b border-stone-100">
            <div className="container-custom">
                <FadeIn className="text-center mb-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-sage-700 font-semibold">
                        Trusted &amp; Community-Connected
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {BADGES.map(badge => (
                        <BadgeCard key={badge.title} badge={badge} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function BadgeCard({ badge }: { badge: Badge }) {
    const { title, subtitle, image, svg: Svg, icon: Icon, href } = badge

    const content = (
        <>
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white border border-stone-200 flex items-center justify-center overflow-hidden">
                {image ? (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={56}
                        height={56}
                        className="object-contain p-1.5"
                    />
                ) : Svg ? (
                    <Svg className="w-9 h-9 text-sage-800" />
                ) : Icon ? (
                    <Icon size={26} className="text-sage-800" />
                ) : null}
            </div>
            <div className="min-w-0 flex-1">
                <div className="font-serif font-semibold text-sage-900 leading-tight text-sm sm:text-base flex items-center gap-1.5">
                    {title}
                    {href && <ExternalLink size={12} className="text-stone-400 flex-shrink-0" aria-hidden />}
                </div>
                <div className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-snug">
                    {subtitle}
                </div>
            </div>
        </>
    )

    const baseClasses = 'flex items-center gap-4 p-5 rounded-xl bg-stone-50 border border-stone-100 hover:border-sand-300 hover:shadow-md transition-all duration-300'

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
                aria-label={`${title} — opens in new tab`}
            >
                {content}
            </a>
        )
    }

    return <div className={baseClasses}>{content}</div>
}
