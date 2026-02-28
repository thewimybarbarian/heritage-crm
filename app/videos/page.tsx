import { VideoGallery } from '@/components/sections/VideoGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Success Stories & Videos | Heritage Home Solutions',
    description: 'Watch real success stories and testimonials from Oklahoma City families we have helped through difficult home transitions.',
    openGraph: {
        title: 'Success Stories & Videos | Heritage Home Solutions',
        description: 'Watch real success stories and testimonials from Oklahoma City families we have helped through difficult home transitions.',
        url: 'https://heritagehomesolutions.info/videos',
    },
}

export default function VideosPage() {
    return (
        <main className="min-h-screen bg-stone-50 pt-24">
            <VideoGallery />
        </main>
    )
}
