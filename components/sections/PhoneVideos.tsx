'use client'

import { useState, useRef } from 'react'
import { Play } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

export function PhoneVideos() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.play()
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <section className="py-24 bg-sage-50 border-t border-sage-100 overflow-hidden relative">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Content */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
                        <FadeIn>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-sand-100 text-sand-800 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm border border-sand-200">
                                Updates From Alan
                            </div>
                            <h2 className="heading-md text-sage-900 mb-6 drop-shadow-sm">Real Talk. Real Fast.</h2>
                            <p className="text-xl text-stone-600 mb-8 leading-relaxed font-light">
                                Get weekly updates, behind-the-scenes insights, and practical advice straight from Alan on the ground in Oklahoma City.
                            </p>

                            <ul className="space-y-4 mb-10 text-left">
                                <li className="flex items-center gap-3 text-sage-800">
                                    <div className="w-2 h-2 rounded-full bg-sand-500" />
                                    Property walkthroughs and analysis
                                </li>
                                <li className="flex items-center gap-3 text-sage-800">
                                    <div className="w-2 h-2 rounded-full bg-sand-500" />
                                    Answers to highly-requested questions
                                </li>
                                <li className="flex items-center gap-3 text-sage-800">
                                    <div className="w-2 h-2 rounded-full bg-sand-500" />
                                    Sneak peeks into estate cleanouts
                                </li>
                            </ul>
                            <div className="flex justify-center lg:justify-start">
                                <button
                                    onClick={togglePlay}
                                    className="btn bg-sage-800 text-white hover:bg-sage-900 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-medium flex items-center gap-3"
                                >
                                    <Play size={20} fill={isPlaying ? "none" : "currentColor"} />
                                    {isPlaying ? 'Pause Video' : 'Watch Latest Update'}
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: iPhone Frame */}
                    <FadeIn direction="up" className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19.5]">
                            {/* Side Buttons (behind the phone body) */}
                            <div className="absolute top-24 -left-1 sm:-left-1.5 w-1.5 h-12 bg-stone-600 rounded-l-md z-0" />
                            <div className="absolute top-40 -left-1 sm:-left-1.5 w-1.5 h-12 bg-stone-600 rounded-l-md z-0" />
                            <div className="absolute top-32 -right-1 sm:-right-1.5 w-1.5 h-16 bg-stone-600 rounded-r-md z-0" />

                            {/* The Phone Hardware Body */}
                            <div className="absolute inset-0 bg-stone-800 rounded-[3.2rem] sm:rounded-[3.5rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.2)] p-2 sm:p-3 ring-1 ring-stone-700/50 z-10 flex flex-col">

                                {/* The Notch / Dynamic Island */}
                                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-1/3 sm:w-28 h-6 sm:h-7 bg-black rounded-full z-30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-end px-3 pointer-events-none">
                                    <div className="w-2 h-2 rounded-full bg-[#0a0a2a] border border-[#2a2a4a] shadow-inner" />
                                </div>

                                {/* The Screen / Video Player */}
                                <div className="relative w-full h-full rounded-[2.8rem] sm:rounded-[3rem] overflow-hidden bg-black z-20 cursor-pointer group" onClick={togglePlay}>
                                    <video
                                        ref={videoRef}
                                        playsInline
                                        loop
                                        className="w-full h-full object-cover scale-[1.02] transform"
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                    >
                                        <source src="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0226%20(1)(2).mp4#t=0.001" type="video/mp4" />
                                    </video>

                                    {/* Overlay gradient for contrast on text */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

                                    {/* Play Button Overlay */}
                                    {!isPlaying && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 pointer-events-none">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-sand-500 border border-white/30 group-hover:border-transparent mb-4 pointer-events-auto">
                                                <Play className="text-white group-hover:text-stone-900 ml-1 sm:ml-2 transition-colors" size={32} fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Background Blob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-3/4 aspect-square bg-sand-200/40 rounded-full blur-[120px] pointer-events-none" />
        </section>
    )
}
