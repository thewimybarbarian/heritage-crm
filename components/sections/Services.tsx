'use client'

import { Users, FileText, Home, Heart, DollarSign, Clock } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn'

const services = [
  {
    icon: Users,
    title: 'Senior Housing Transitions',
    description: 'Helping seniors downsize with dignity and care, managing every detail of the transition to assisted living or smaller homes.',
    benefits: ['Full-service coordination', 'Packing assistance', 'Moving support']
  },
  {
    icon: FileText,
    title: 'Probate & Estate Sales',
    description: 'Compassionate assistance for families dealing with inherited properties and estate settlements during difficult times.',
    benefits: ['Estate sale coordination', 'Legal guidance', 'Fast closings']
  },
  {
    icon: Home,
    title: 'Foreclosure Assistance',
    description: 'Providing solutions to help you avoid foreclosure and protect your credit, with confidential and respectful service.',
    benefits: ['Stop foreclosure', 'Credit protection', 'No judgment']
  },
  {
    icon: Heart,
    title: 'Downsizing Support',
    description: 'Making the transition to a smaller home easier with full-service support and understanding throughout the process.',
    benefits: ['Personalized plans', 'Item donation help', 'Stress-free process']
  },
  {
    icon: DollarSign,
    title: 'Quick Cash Offers',
    description: 'Fair, fast cash offers for your home in any condition. No repairs needed, no realtor fees, close on your timeline.',
    benefits: ['As-is purchases', 'Fast closings', 'No fees or commissions']
  },
  {
    icon: Clock,
    title: 'Flexible Timelines',
    description: 'Close on your schedule, whether you need to sell quickly or need more time to transition. We work around your needs.',
    benefits: ['Your timeline', 'Rent-back options', 'No rush decisions']
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-forest-50 text-forest-600 font-semibold text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-display-md md:text-display-lg text-cream-900 mb-6">
            Solutions for Every <span className="text-gradient">Situation</span>
          </h2>
          <p className="text-xl text-cream-800">
            Whether you're facing foreclosure, dealing with an estate, or simply need to downsize, we have the experience and compassion to help.
          </p>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <StaggerItem
                key={index}
                className="card card-hover p-8 space-y-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-cream-900">
                  {service.title}
                </h3>

                <p className="text-cream-800 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-cream-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn direction="up" delay={0.4} className="mt-16 text-center">
          <p className="text-cream-800 mb-6">
            Not sure which service is right for you?
          </p>
          <a href="#contact" className="btn btn-primary">
            Schedule a Free Consultation
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

