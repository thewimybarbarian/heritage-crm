'use client'

import { ArrowRight, Phone, Heart, Users } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          {/* Aerial view of suburban neighborhood - fits Oklahoma real estate vibe */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-32 pb-20 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-stone-100 mb-8 animate-fade-in shadow-xl">
            <Heart className="text-sand-400 fill-sand-400" size={20} />
            <span className="text-lg font-medium tracking-wide">Serving OKC Families for Over 20 Years</span>
          </div>

          <h1 className="heading-lg text-white mb-8 drop-shadow-lg leading-tight">
            Struggling Alone with a<br className="hidden md:block" />
            <span className="text-sand-200 italic font-serif">Family Home Transition?</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-100 mb-12 leading-relaxed max-w-3xl drop-shadow-md font-light">
            "I don't know what to do." "I just want it gone." <br />
            <span className="font-semibold text-white">We hear you, and we are here to handle everything.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
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

          <div className="mt-16 flex flex-wrap items-center gap-8 text-stone-200 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-sand-500 shadow-[0_0_10px_rgba(212,161,69,0.5)]" />
              <span className="text-lg">Full Estate Cleanouts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-sand-500 shadow-[0_0_10px_rgba(212,161,69,0.5)]" />
              <span className="text-lg">Out-of-State Support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-sand-500 shadow-[0_0_10px_rgba(212,161,69,0.5)]" />
              <span className="text-lg">Elder Care Transition Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
