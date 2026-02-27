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
          <div className="space-y-6">
            <div className="transform origin-left scale-90 md:scale-100">
              <Logo light={true} />
            </div>
            <p className="text-stone-200 text-sm leading-relaxed max-w-sm">
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
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 font-medium">
              <li><Link href="/about" className="text-stone-200 hover:text-sand-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-stone-200 hover:text-sand-400 transition-colors">Services</Link></li>
              <li><Link href="/#process" className="text-stone-200 hover:text-sand-400 transition-colors">Our Process</Link></li>
              <li><Link href="/#testimonials" className="text-stone-200 hover:text-sand-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/book" className="text-stone-200 hover:text-sand-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-3 text-stone-200 font-medium">
              <li>Senior Housing Transitions</li>
              <li>Probate & Estate Sales</li>
              <li>Foreclosure Assistance</li>
              <li>Downsizing Support</li>
              <li>Quick Cash Offers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-sand-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">(405) 205-1246</div>
                  <div className="text-stone-300 text-sm">Mon-Fri 8am-6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sand-400 mt-1 flex-shrink-0" />
                <a href="mailto:help@heritagehomesolutions.com" className="text-stone-200 hover:text-sand-400 transition-colors font-medium">
                  help@heritagehomesolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sand-400 mt-1 flex-shrink-0" />
                <div className="text-stone-200 text-sm font-medium">
                  Serving Oklahoma City<br />& 30-mile radius
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-300">
            <p>© {currentYear} Heritage Home Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-sand-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-sand-400 transition-colors">Terms of Service</Link>
              <Link href="https://admin.heritagehomesolutions.info" className="hover:text-sand-400 font-medium transition-colors">Admin Portal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
