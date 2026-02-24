'use client'

import { Phone, Home, FileCheck, HandshakeIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Reach Out',
    description: "Call, text, or fill out our form. We'll respond within 24 hours to schedule a no-obligation consultation at your convenience."
  },
  {
    number: '02',
    icon: Home,
    title: 'Property Visit',
    description: "We'll meet at your property to understand your situation and assess your home. No pressure, just honest conversation about your options."
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Fair Offer',
    description: "Within 24-48 hours, we'll present you with a fair cash offer. Take your time to consider it—there's never any obligation to accept."
  },
  {
    number: '04',
    icon: HandshakeIcon,
    title: 'Close on Your Terms',
    description: "If you accept, we'll close on your timeline—fast or flexible. We handle all paperwork and coordinate everything for a smooth transition."
  }
]

export function Process() {
  return (
    <section id="process" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-forest-50 text-forest-600 font-semibold text-sm mb-4">
            Our Process
          </div>
          <h2 className="text-display-md md:text-display-lg text-cream-900 mb-6">
            Simple, <span className="text-gradient">Transparent</span>, and Respectful
          </h2>
          <p className="text-xl text-cream-800">
            We've streamlined the process to make selling your home as easy and stress-free as possible.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-forest-200 via-forest-300 to-forest-200" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <StaggerItem key={index} className="relative z-10">
                <div className="text-center space-y-4">
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-cream-50 border-4 border-forest-500 flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-forest-600" size={32} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-cream-900">
                    {step.title}
                  </h3>
                  <p className="text-cream-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn direction="up" delay={0.4} className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-forest-50 to-gold-50 border border-forest-100">
          <h3 className="text-2xl font-bold text-cream-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-cream-800 mb-6 max-w-2xl mx-auto">
            The first step is simply reaching out. No obligation, no pressure—just an honest conversation about how we can help.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us Today
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

