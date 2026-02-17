import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Heritage Home</div>
                <div className="text-sm text-cream-400">Solutions</div>
              </div>
            </div>
            <p className="text-cream-400 text-sm leading-relaxed">
              Providing compassionate, faith-based real estate solutions for seniors and distressed homeowners in the Oklahoma City area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-cream-800 hover:bg-forest-600 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-cream-800 hover:bg-forest-600 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-cream-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-cream-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="text-cream-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-cream-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-cream-400">
              <li>Senior Housing Transitions</li>
              <li>Probate & Estate Sales</li>
              <li>Foreclosure Assistance</li>
              <li>Downsizing Support</li>
              <li>Quick Cash Offers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-forest-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">(555) 123-4567</div>
                  <div className="text-cream-400 text-sm">Mon-Fri 8am-6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-forest-400 mt-1 flex-shrink-0" />
                <a href="mailto:alan@heritagehomesolutions.com" className="text-cream-400 hover:text-white transition-colors">
                  alan@heritagehomesolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-forest-400 mt-1 flex-shrink-0" />
                <div className="text-cream-400 text-sm">
                  Serving Oklahoma City<br />& 30-mile radius
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-400">
            <p>© {currentYear} Heritage Home Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
