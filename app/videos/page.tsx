import { VideoGallery } from '@/components/sections/VideoGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Client Stories & Videos | Heritage Home Solutions OKC',
    description: 'Watch real client stories and testimonials from Oklahoma City families Heritage Home Solutions has helped through senior transitions, probate sales, estate sales, and foreclosure assistance.',
    alternates: {
        canonical: 'https://heritagehomesolutions.info/videos',
    },
    openGraph: {
        title: 'Client Stories & Videos | Heritage Home Solutions',
        description: 'Watch real success stories and testimonials from Oklahoma City families we have helped through difficult home transitions.',
        url: 'https://heritagehomesolutions.info/videos',
    },
}

export default function VideosPage() {
    return (
        <main className="min-h-screen bg-stone-50 pt-24">
            <div className="container-custom pt-8 pb-2 text-center">
                <h1 className="sr-only">Client Success Stories & Educational Videos | Heritage Home Solutions OKC</h1>
            </div>
            <VideoGallery />
        </main>
    )
}
