import { Star, Quote } from 'lucide-react'

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
  return (
    <section id="testimonials" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-forest-50 text-forest-600 font-semibold text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-display-md md:text-display-lg text-cream-900 mb-6">
            Stories of <span className="text-gradient">Hope and Help</span>
          </h2>
          <p className="text-xl text-cream-600">
            Real families we've had the privilege of serving in the Oklahoma City area.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 space-y-6 relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-forest-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-cream-700 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-cream-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-200 to-forest-300 flex items-center justify-center text-forest-700 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-cream-900">{testimonial.name}</div>
                  <div className="text-sm text-cream-600">{testimonial.role}</div>
                  <div className="text-xs text-cream-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about testimonials */}
        <div className="mt-12 text-center">
          <p className="text-sm text-cream-500 italic">
            * These are placeholder testimonials. Real testimonials will be added after video shoot.
          </p>
        </div>
      </div>
    </section>
  )
}
