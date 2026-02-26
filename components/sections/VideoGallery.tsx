'use client'

import { useState, useRef } from 'react'
import { Play } from 'lucide-react'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

const videos = [
    {
        id: "intro",
        src: "https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/Alan-site-intro.mp4#t=0.001",
        title: "Why Heritage Home Solutions?",
        tag: "Our Mission"
    },
    {
        id: "v1",
        src: "https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0218(1).mp4#t=0.001",
        title: "Client Story: The Smith Family",
        tag: "Real Stories"
    },
    {
        id: "v2",
        src: "https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0224(1).mp4#t=0.001",
        title: "Navigating Probate Sales",
        tag: "Education"
    },
    {
        id: "v3",
        src: "https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0219%20(1).mp4#t=0.001",
        title: "Helping Seniors Downsize",
        tag: "Services"
    }
]

function VideoCard({ video }: { video: typeof videos[0] }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    return (
        <div className="group relative aspect-video rounded-xl overflow-hidden shadow-xl bg-black border border-stone-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <video
                ref={videoRef}
                src={video.src}
                playsInline
                controls={isPlaying}
                preload="metadata"
                className="w-full h-full object-cover"
                title={video.title}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Custom Overlay (Only shown before playing) */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 transition-opacity duration-300 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent cursor-pointer"
                    onClick={togglePlay}
                >
                    {/* Top Tag */}
                    <div className="flex justify-end">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-sand-500 text-stone-900 rounded-full shadow-md">
                            {video.tag}
                        </span>
                    </div>

                    {/* Big Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-sand-500 border border-white/20 group-hover:border-transparent">
                            <Play className="text-white group-hover:text-stone-900 ml-1 transition-colors" size={28} fill="currentColor" />
                        </div>
                    </div>

                    {/* Bottom Title */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-serif text-lg font-medium drop-shadow-md">
                            {video.title}
                        </h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export function VideoGallery() {
    return (
        <section className="py-24 bg-stone-100 border-t border-stone-200">
            <div className="container-custom">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-stone-200 text-stone-600 font-semibold text-xs tracking-widest uppercase mb-6">
                        Video Library
                    </div>
                    <h2 className="heading-md text-sage-900 mb-6 drop-shadow-sm">Watch and Learn</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Explore our collection of client stories, educational resources, and behind-the-scenes looks into how Heritage Home Solutions helps families move forward.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {videos.map((video) => (
                        <StaggerItem key={video.id}>
                            <VideoCard video={video} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn className="mt-16 text-center">
                    <Link href="/videos" className="btn btn-primary bg-stone-900 text-white hover:bg-stone-800 rounded-full px-8 py-3 transition-colors shadow-lg hover:shadow-xl inline-block">
                        View All Videos
                    </Link>
                </FadeIn>
            </div>
        </section>
    )
}
