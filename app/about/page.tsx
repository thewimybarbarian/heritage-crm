import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Heritage Home Solutions',
    description: 'Founded on faith and integrity, Heritage Home Solutions helps Oklahoma City families navigate senior housing transitions, probate sales, and foreclosure with compassion.',
    openGraph: {
        title: 'About Heritage Home Solutions',
        description: 'Faith-driven real estate solutions for Oklahoma City families. Learn about our story, values, and how we serve our community.',
        url: 'https://heritagehomesolutions.com/about',
    },
}

import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'

export default function AboutPage() {
    return (
        <>
            {/* Header Spacer */}
            <div className="h-32 bg-stone-50" />

            <div className="container-custom pt-16 pb-8 text-center">
                <h1 className="heading-lg text-sage-900 mb-6">About Heritage Home Solutions</h1>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                    Founded on faith, integrity, and a deep respect for Oklahoma families. We are more than just home buyers; we are your neighbors committed to serving you.
                </p>
            </div>

            <About />
            <Services />
            <Process />

            {/* Soft Ending/CTA to Book */}
            <div className="bg-stone-100 py-16 text-center">
                <h2 className="heading-md mb-6">Ready to see if we're a good fit?</h2>
                <a href="/book" className="btn btn-primary px-10 py-4 text-lg">
                    Schdule a Free Consultation
                </a>
            </div>
        </>
    )
}
