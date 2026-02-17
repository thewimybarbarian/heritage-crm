import { Phone, ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-display-md md:text-display-lg text-white">
            Let's Have a <span className="text-gold-300">Conversation</span>
          </h2>

          <p className="text-xl text-forest-100 leading-relaxed max-w-2xl mx-auto">
            Whether you're ready to sell or just exploring your options, I'm here to listen without judgment and provide honest guidance. No obligation, no pressure—just a caring conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+1234567890" className="btn btn-accent text-lg px-8 py-4 group">
              <Phone className="mr-2" size={20} />
              Call (555) 123-4567
            </a>
            <a href="#contact" className="btn bg-cream-50/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-cream-50/20 text-lg px-8 py-4 group">
              Send a Message
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-forest-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <span>24-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <span>No Obligation Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <span>Completely Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
