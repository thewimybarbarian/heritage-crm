import { Hero } from '@/components/sections/Hero'
import { Testimonials } from '@/components/sections/Testimonials'
import { VideoGallery } from '@/components/sections/VideoGallery'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, HeartHandshake, Clock, MessageCircle, MapPin } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Voice of Customer / Empathy Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-sage-900 mb-6 drop-shadow-sm">Do any of these sound familiar?</h2>
            <p className="text-inviting text-stone-600">
              We work with families every day who feel overwhelmed and alone. You are not the only one feeling this way.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="bg-white p-8 rounded-xl shadow-md border-l-4 border-sand-500 relative hover:-translate-y-1 transition-transform duration-300">
              <MessageCircle className="absolute top-6 right-6 text-sand-200 w-10 h-10" />
              <p className="text-xl font-serif text-sage-800 italic mb-4">"I don't know what to do."</p>
              <p className="text-stone-600 text-sm">Feeling paralyzed by the sheer volume of "stuff" and decisions involves.</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-8 rounded-xl shadow-md border-l-4 border-sand-500 relative hover:-translate-y-1 transition-transform duration-300">
              <MessageCircle className="absolute top-6 right-6 text-sand-200 w-10 h-10" />
              <p className="text-xl font-serif text-sage-800 italic mb-4">"I just want it gone."</p>
              <p className="text-stone-600 text-sm">Just wanting the burden lifted so you can focus on your family, not the house.</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-8 rounded-xl shadow-md border-l-4 border-sand-500 relative hover:-translate-y-1 transition-transform duration-300">
              <MessageCircle className="absolute top-6 right-6 text-sand-200 w-10 h-10" />
              <p className="text-xl font-serif text-sage-800 italic mb-4">"Can you handle everything?"</p>
              <p className="text-stone-600 text-sm">Needing a full-service partner who can coordiate estate sales, cleanouts, and closing.</p>
            </StaggerItem>

            <StaggerItem className="bg-white p-8 rounded-xl shadow-md border-l-4 border-sand-500 relative hover:-translate-y-1 transition-transform duration-300">
              <MessageCircle className="absolute top-6 right-6 text-sand-200 w-10 h-10" />
              <p className="text-xl font-serif text-sage-800 italic mb-4">"I need someone I trust."</p>
              <p className="text-stone-600 text-sm">Looking for integrity and transparency when handling your parents' most valuable asset.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Trust & Geography Section */}
      <section className="py-24 bg-sage-50 border-y border-sage-100 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="heading-md text-sage-900 mb-6">Your Local Oklahoma City Partners</h2>
              <p className="text-stone-700 text-lg mb-6 leading-relaxed">
                We specialize in helping families in the <strong>OKC Metro and surrounding 30-mile radius</strong>. Whether you live down the street or are managing this from out of state, we are your boots on the ground.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sage-800 font-medium">
                  <MapPin className="text-sand-500" /> Edmond & North OKC
                </li>
                <li className="flex items-center gap-3 text-sage-800 font-medium">
                  <MapPin className="text-sand-500" /> Moore & Norman
                </li>
                <li className="flex items-center gap-3 text-sage-800 font-medium">
                  <MapPin className="text-sand-500" /> Midwest City & Del City
                </li>
                <li className="flex items-center gap-3 text-sage-800 font-medium">
                  <MapPin className="text-sand-500" /> Yukon & Mustang
                </li>
              </ul>
              <Link href="/about" className="btn btn-primary">
                Learn About Our Family-First Approach
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="bg-white p-2 rounded-2xl shadow-xl rotate-1 transform hover:rotate-0 transition-transform duration-500">
              {/* Placeholder for a map or team image */}
              <div className="h-80 rounded-xl overflow-hidden bg-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207963.82959891827!2d-97.66981881515915!3d35.47291883658252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2173bb4218d61%3A0x1d4ee095a004655!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1708465000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  title="Heritage Home Solutions Service Area"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Testimonials />

      <VideoGallery />

      {/* Final CTA Strip */}
      <section className="py-24 bg-sage-900 text-white text-center">
        <FadeIn className="container-custom" direction="up">
          <h2 className="font-serif text-4xl mb-6">Don't Struggle Alone. Let Us Help.</h2>
          <p className="text-xl text-sage-100 mb-10 max-w-2xl mx-auto">
            "Heritage Home Solutions was a godsend for my family." - Recent Client
          </p>
          <Link href="/book" className="btn bg-sand-500 hover:bg-sand-600 text-white px-12 py-5 text-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300 inline-flex items-center">
            Book Your Free Consultation <ArrowRight className="ml-3" />
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
