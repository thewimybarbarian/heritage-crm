'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react'
import { submitLead } from '@/app/actions/submit-lead'
import { FadeIn } from '@/components/FadeIn'

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  situation: z.string().min(1, 'Please select your situation'),
  address: z.string().optional(),
  message: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadSchema>

const situations = [
  'Senior Housing Transition',
  'Probate/Estate Sale',
  'Foreclosure Assistance',
  'Downsizing',
  'Quick Sale Needed',
  'Other'
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitLead(data)

      if (result.success) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setError(result.error || 'Something went wrong. Please try calling us instead.')
      }
    } catch (err) {
      setError('Failed to submit form. Please try calling us instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-forest-50 text-forest-600 font-semibold text-sm mb-4">
            Get in Touch
          </div>
          <h2 className="text-display-md md:text-display-lg text-cream-900 mb-6">
            Contact Your Local OKC <span className="text-gradient">Cash Home Buyers</span>
          </h2>
          <p className="text-xl text-cream-800">
            Fill out the form below or give us a call. We're here to help and will respond within 24 hours.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cream-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-forest-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-cream-900 mb-1">Phone</div>
                    <a href="tel:+14052051246" className="text-forest-600 hover:text-forest-700 transition-colors">
                      (405) 205-1246
                    </a>
                    <div className="text-sm text-cream-800 mt-1">Mon-Fri 8am-6pm</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-forest-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-cream-900 mb-1">Email</div>
                    <a href="mailto:alan@heritagehomesolutions.com" className="text-forest-600 hover:text-forest-700 transition-colors break-all">
                      alan@heritagehomesolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-forest-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-cream-900 mb-1">Service Area</div>
                    <div className="text-cream-800">
                      Oklahoma City Metro<br />
                      30-mile radius
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-forest-50 to-gold-50 border border-forest-100">
              <h4 className="font-bold text-cream-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-sm text-cream-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <span>24-hour response guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <span>No obligation, no pressure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <span>Completely confidential</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <span>Faith-driven integrity</span>
                </li>
              </ul>
            </div>

          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="card p-8 space-y-6">
              {/* Success message */}
              {isSuccess && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <div className="text-sm text-green-800">
                    <div className="font-semibold mb-1">Message sent successfully!</div>
                    <div>We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800">
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="label">Full Name *</label>
                <input
                  type="text"
                  {...register('name')}
                  className="input"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="label">Phone Number *</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="input"
                    placeholder="(405) 205-1246"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Email Address *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="input"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Situation */}
              <div>
                <label className="label">Your Situation *</label>
                <select {...register('situation')} className="input">
                  <option value="">Select one...</option>
                  {situations.map((situation) => (
                    <option key={situation} value={situation}>
                      {situation}
                    </option>
                  ))}
                </select>
                {errors.situation && (
                  <p className="text-red-600 text-sm mt-1">{errors.situation.message}</p>
                )}
              </div>

              {/* Property Address */}
              <div>
                <label className="label">Property Address (Optional)</label>
                <input
                  type="text"
                  {...register('address')}
                  className="input"
                  placeholder="123 Main St, Oklahoma City, OK"
                />
              </div>

              {/* Message */}
              <div>
                <label className="label">Additional Details (Optional)</label>
                <textarea
                  {...register('message')}
                  className="textarea"
                  rows={4}
                  placeholder="Tell us more about your situation..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-cream-700 text-center">
                By submitting this form, you agree to be contacted about your inquiry. We respect your privacy and will never share your information.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
