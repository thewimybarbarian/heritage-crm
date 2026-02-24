'use client'

import { useState, useRef } from 'react'
import { ArrowRight, Phone, Heart, Users, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'
import { StaggerContainer, StaggerItem } from '@/components/FadeIn'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          {/* Aerial view of suburban neighborhood - fits Oklahoma real estate vibe */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-sand-900/20 rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Content */}
      <StaggerContainer className="container-custom relative z-20 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Side: Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
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
                "I don't know what to do." "I just want it gone." <br />
                <span className="font-semibold text-white">We hear you, and we are here to handle everything.</span>
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

            <StaggerItem>
              <div className="mt-16 flex flex-wrap items-center gap-6 text-stone-200 justify-center lg:justify-start">
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-500 shadow-[0_0_8px_rgba(212,161,69,0.8)]" />
                  <span className="text-sm font-medium">Full Estate Cleanouts</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-500 shadow-[0_0_8px_rgba(212,161,69,0.8)]" />
                  <span className="text-sm font-medium">Out-of-State Support</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-500 shadow-[0_0_8px_rgba(212,161,69,0.8)]" />
                  <span className="text-sm font-medium">Elder Care Specialists</span>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Right Side: Circular Video */}
          <StaggerItem className="relative order-1 lg:order-2">
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mx-auto lg:ml-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-[-4%] rounded-full border border-sand-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[-8%] rounded-full border border-sand-500/10 animate-[spin_45s_linear_infinite_reverse]" />

              {/* Video Container */}
              <div className="group relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-sand-900/50 ring-4 ring-sand-500/30">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/Alan-site-intro.mp4" type="video/mp4" />
                </video>

                {/* Inner shadow/overlay for better blending */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />

                {/* Mute/Unmute Overlay Toggle */}
                <button
                  onClick={toggleMute}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 z-10 opacity-0 group-hover:opacity-100"
                >
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-md mb-2 transform transition-transform duration-300 scale-90 group-hover:scale-100">
                    {isMuted ? (
                      <VolumeX className="text-white drop-shadow-md" size={32} />
                    ) : (
                      <Volume2 className="text-white drop-shadow-md" size={32} />
                    )}
                  </div>
                  <span className="text-white font-medium tracking-wide drop-shadow-md">
                    {isMuted ? 'Click to Unmute' : 'Mute Video'}
                  </span>
                </button>
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
