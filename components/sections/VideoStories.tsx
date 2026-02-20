'use client'

import { Play, Quote } from 'lucide-react'
import { useState } from 'react'

export function VideoStories() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section-padding bg-stone-900">
      <div className="container-custom">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-stone-800 text-sand-400 font-semibold text-sm mb-4 tracking-wide uppercase">
            Hear From Alan
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            Real Stories.<br />
            <span className="text-sand-400">Real Families.</span>
          </h2>
          <p className="text-lg text-stone-400 leading-relaxed max-w-xl mx-auto">
            Alan shares how Heritage Home Solutions has helped Oklahoma City families navigate some of life's most difficult transitions — with care, honesty, and results.
          </p>
        </div>

        {/* Video container */}
        <div className="max-w-4xl mx-auto">

          {/* Outer frame — intentional border treatment */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-br from-sand-400/30 via-stone-700 to-stone-800 shadow-2xl">
            <div className="rounded-xl overflow-hidden bg-stone-950 relative aspect-video">

              {/* Video element */}
              <video
                id="alan-video"
                className="w-full h-full object-cover"
                src="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0218.mp4"
                poster="https://pub-dc89b5ded9904f60995a345d884e2aaa.r2.dev/0218-poster.jpg"
                controls={playing}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              {/* Custom play overlay */}
              {!playing && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => {
                    const v = document.getElementById('alan-video') as HTMLVideoElement
                    if (v) { v.play(); setPlaying(true) }
                  }}
                >
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/20" />

                  {/* Play button */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-sand-500 flex items-center justify-center shadow-2xl group-hover:bg-sand-400 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Corner logo watermark */}
              <div className="absolute top-4 left-4 opacity-60 pointer-events-none">
                <div className="text-white/70 text-xs font-semibold tracking-widest uppercase font-serif">
                  Heritage Home Solutions
                </div>
              </div>
            </div>
          </div>

          {/* Pull quote below video */}
          <div className="mt-8 mx-auto max-w-2xl text-center relative">
            <Quote className="w-8 h-8 text-sand-500/40 mx-auto mb-3" />
            <p className="font-serif text-xl md:text-2xl text-stone-300 italic leading-relaxed mb-6">
              "We don't just buy houses — we help families move forward with dignity and peace of mind."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand-400 to-sand-600 flex items-center justify-center text-white font-bold text-lg font-serif">
                A
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Alan</div>
                <div className="text-stone-500 text-sm">Founder, Heritage Home Solutions · Oklahoma City, OK</div>
              </div>
            </div>
          </div>

        </div>

        {/* More stories teaser */}
        <div className="mt-16 text-center">
          <p className="text-stone-500 text-sm italic">
            More family stories coming soon.
          </p>
        </div>

      </div>
    </section>
  )
}
