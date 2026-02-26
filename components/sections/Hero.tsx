'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Phone, Heart, Users, Volume2, VolumeX, Play, X } from 'lucide-react'
import Link from 'next/link'
import { StaggerContainer, StaggerItem } from '@/components/FadeIn'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)

  // Theatre mode is active when the user unmutes the video
  const isTheatreMode = !isMuted

  // Slow down the background video
  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.playbackRate = 0.6
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-900">

      {/* Theatre Mode Backdrop */}
      <div
        onClick={() => {
          if (videoRef.current && !videoRef.current.muted) {
            videoRef.current.muted = true
            setIsMuted(true)
          }
        }}
        className={`fixed inset-0 bg-black/90 z-40 transition-opacity duration-700 ${isTheatreMode ? 'opacity-100 cursor-pointer pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/70 z-10" />
        <video
          ref={bgVideoRef}
          src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isTheatreMode ? 'opacity-10' : 'opacity-40'}`}
        />
      </div>

      {/* Decorative Glow */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-sand-900/20 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 ${isTheatreMode ? 'opacity-0' : 'opacity-100 z-[1]'}`} />

      {/* Content */}
      <StaggerContainer className={`container-custom relative pt-32 pb-20 transition-all duration-700 ${isTheatreMode ? 'z-50' : 'z-20'}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Side: Content */}
          <div className={`max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1 transition-opacity duration-500 ${isTheatreMode ? 'opacity-20 pointer-events-none grayscale' : 'opacity-100'}`}>
            {/* Trust Badge */}
            <StaggerItem>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-stone-100 mb-8 animate-fade-in shadow-xl">
                <Heart className="text-sand-400 fill-sand-400" size={20} />
                <span className="text-lg font-medium tracking-wide">Serving OKC Families for Over 20 Years</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="heading-lg text-white mb-8 drop-shadow-lg leading-tight">
                Struggling Alone with a<br className="hidden md:block" />
                <span className="text-sand-200 italic font-serif">Family Home Transition?</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl md:text-2xl text-stone-100 mb-12 leading-relaxed drop-shadow-md font-light">
                We hear you, and we are here to handle everything.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  href="/book"
                  className="btn bg-sand-600 text-white hover:bg-sand-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform font-serif text-xl px-10 py-5"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-3" size={24} />
                </Link>

                <Link
                  href="/about"
                  className="btn bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/30 font-serif text-xl px-10 py-5"
                >
                  Meet Our Family
                </Link>
              </div>
            </StaggerItem>

            {/* Bullets removed to reduce text density */}
          </div>

          {/* Right Side: Circular Video */}
          <StaggerItem className="relative order-1 lg:order-2">
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mx-auto lg:ml-auto">
              {/* Decorative Rings */}
              <div className={`absolute inset-[-4%] rounded-full border border-sand-500/20 animate-[spin_30s_linear_infinite] transition-opacity duration-500 ${isTheatreMode ? 'opacity-0' : 'opacity-100'}`} />
              <div className={`absolute inset-[-8%] rounded-full border border-sand-500/10 animate-[spin_45s_linear_infinite_reverse] transition-opacity duration-500 ${isTheatreMode ? 'opacity-0' : 'opacity-100'}`} />

              {/* Video Container */}
              <div className={`group relative w-full h-full shadow-2xl transition-all duration-700 overflow-hidden bg-black/50 ${isTheatreMode ? 'rounded-2xl shadow-black/80 ring-1 ring-white/20 scale-105' : 'rounded-full shadow-sand-900/50 ring-4 ring-sand-500/30'}`}>
                <video
                  ref={videoRef}
                  src="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0224(1).mp4#t=0.001"
                  preload="metadata"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls={isTheatreMode}
                  onVolumeChange={() => {
                    if (videoRef.current) {
                      setIsMuted(videoRef.current.muted)
                    }
                  }}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isTheatreMode ? 'scale-100' : 'group-hover:scale-105'}`}
                />

                {/* Inner shadow/overlay for better blending */}
                <div className={`absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none transition-opacity duration-500 ${isTheatreMode ? 'opacity-0' : 'opacity-100 rounded-full'}`} />

                {/* Mute/Unmute Overlay Toggle */}
                {!isTheatreMode && (
                  <button
                    onClick={toggleMute}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 z-10 opacity-0 group-hover:opacity-100"
                  >
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-md mb-2 transform transition-transform duration-300 scale-90 group-hover:scale-100">
                      <Volume2 className="text-white drop-shadow-md" size={32} />
                    </div>
                    <span className="text-white font-medium tracking-wide drop-shadow-md">
                      Click to Unmute
                    </span>
                  </button>
                )}

                {/* Close Theatre Mode Button */}
                {isTheatreMode && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (videoRef.current) {
                        videoRef.current.muted = true
                        setIsMuted(true)
                      }
                    }}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all duration-300 hover:scale-110"
                    title="Close Video"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-stone-900 p-4 rounded-xl shadow-2xl border border-stone-800 animate-float translate-y-[-10px] z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sand-500/20 rounded-lg">
                    <Users className="text-sand-400" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">1,000+</div>
                    <div className="text-stone-400 text-sm">Families Helped</div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

        </div>
      </StaggerContainer>
    </section>
  )
}
