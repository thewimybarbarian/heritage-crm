'use client'

import { useState, useRef } from 'react'
import { Star, Quote, Play } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Senior Transition',
    location: 'Oklahoma City, OK',
    rating: 5,
    text: 'Alan made what could have been an overwhelming process so easy. He helped me downsize from my family home of 40 years with such care and patience. I felt supported every step of the way.',
    image: '/testimonials/sarah.jpg'
  },
  {
    name: 'Michael T.',
    role: 'Estate Sale',
    location: 'Edmond, OK',
    rating: 5,
    text: 'After my father passed, we needed to sell his property quickly. Alan was compassionate, professional, and fair. He handled everything while we focused on our family during a difficult time.',
    image: '/testimonials/michael.jpg'
  },
  {
    name: 'Jennifer K.',
    role: 'Foreclosure Assistance',
    location: 'Norman, OK',
    rating: 5,
    text: 'I was facing foreclosure and felt hopeless. Alan provided a solution that saved my credit and gave me a fresh start. His integrity and kindness changed my life.',
    image: '/testimonials/jennifer.jpg'
  }
]

export function Testimonials() {
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
    <section id="testimonials" className="section-padding bg-stone-900 text-cream-50 relative overflow-hidden">
      {/* Very subtle background light leak to match the premium vibe */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sand-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header matching screenshot exactly */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sand-400 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm">
            Hear from Alan
          </div>

          <h2 className="text-display-md md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            <span className="text-stone-50 drop-shadow-sm block">Welcome to</span>
            <span className="text-sand-400 drop-shadow-sm block">Heritage Home Solutions</span>
          </h2>

          <p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Alan shares how our team helps Oklahoma City families navigate some of life's most difficult transitions — with care, honesty, and results.
          </p>
        </FadeIn>

        {/* Featured Video Story - Custom UI mimic initially, then native controls */}
        <FadeIn className="max-w-5xl mx-auto mb-24">
          <div
            className="group relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 ring-1 ring-black/5"
          >
            <video
              ref={videoRef}
              src="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/Alan-site-intro.mp4#t=0.001"
              playsInline
              controls={isPlaying}
              preload="metadata"
              className="w-full h-full object-cover"
              title="Client Story 0218"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Overlay (Only shown before playing) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 transition-opacity duration-300 flex flex-col justify-between p-6 bg-black/40 backdrop-blur-[2px] cursor-pointer"
                onClick={togglePlay}
              >
                {/* Top Left Watermark */}
                <div className="text-white/60 font-medium text-sm tracking-widest drop-shadow-md">
                  HERITAGE HOME SOLUTIONS
                </div>

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-sand-500 flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-105 group-hover:bg-sand-400">
                    <Play className="text-stone-900 ml-1" size={36} fill="currentColor" />
                  </div>
                </div>

                {/* Fake Bottom Progress Bar line for styling */}
                <div className="w-full flex justify-center pb-2">
                  <div className="h-1 w-12 rounded-full bg-white/30" />
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Testimonials grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index} className="card p-8 space-y-6 relative hover:-translate-y-1 transition-transform duration-300 bg-white/5 border border-white/10 backdrop-blur-sm">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={48} className="text-sand-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-sand-400 text-sand-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-stone-300 leading-relaxed relative z-10 font-light">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sand-500 to-sand-600 flex items-center justify-center text-stone-900 font-bold text-lg shadow-inner">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-100">{testimonial.name}</div>
                  <div className="text-sm text-sand-400">{testimonial.role}</div>
                  <div className="text-xs text-stone-400">{testimonial.location}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}


