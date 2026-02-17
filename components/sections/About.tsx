import { CheckCircle2, Heart } from 'lucide-react'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for Alan's image */}
              <div className="w-full h-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-forest-300 mx-auto flex items-center justify-center">
                    <Heart size={48} className="text-forest-600" />
                  </div>
                  <div className="text-forest-600 font-semibold">Alan Norton</div>
                  <div className="text-forest-500 text-sm">Your video will go here</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-100 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-forest-50 text-forest-600 font-semibold text-sm">
              About Alan Norton
            </div>

            <h2 className="text-display-md md:text-display-lg text-cream-900">
              A <span className="text-gradient">Faith-Driven</span> Approach to Real Estate
            </h2>

            <div className="prose prose-lg text-cream-600 space-y-4">
              <p>
                For over 15 years, I've been helping families navigate some of life's most challenging transitions. Whether you're a senior looking to downsize, a family dealing with an inherited property, or someone facing foreclosure, I understand that selling your home is about more than just a transaction—it's about your story, your memories, and your future.
              </p>
              <p>
                My faith guides every decision I make. I believe in treating every client with dignity, respect, and compassion. That means no high-pressure tactics, no hidden fees, and always putting your needs first.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-cream-900 mb-1">15+ Years Experience</div>
                  <div className="text-cream-600 text-sm">Helping Oklahoma City families for over a decade</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-cream-900 mb-1">Faith-Based Values</div>
                  <div className="text-cream-600 text-sm">Integrity and honesty in every interaction</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-cream-900 mb-1">Community Focused</div>
                  <div className="text-cream-600 text-sm">Proudly serving the OKC metro area</div>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary inline-flex">
              Let's Talk About Your Situation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
