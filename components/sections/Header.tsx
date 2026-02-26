'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/Logo'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Only transparent on home page when not scrolled
  const isTransparent = pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/book', label: 'Book Consultation' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isTransparent
        ? 'bg-stone-50/95 backdrop-blur-md shadow-lg border-b border-stone-200'
        : 'bg-transparent text-white'
        }`}
    >
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 bg-sage-800 text-stone-100'}`}>
        <div className="container-custom h-full flex items-center justify-between text-sm tracking-wide">
          <span className="font-medium italic">Putting Families First Since 2024</span>
          <div className="flex items-center gap-6">
            <a href="tel:+14052051246" className="hover:text-sand-300 transition-colors flex items-center gap-2">
              <Phone size={14} /> (405) 205-1246
            </a>
            <a href="mailto:help@heritagehomesolutions.com" className="hover:text-sand-300 transition-colors flex items-center gap-2">
              <Mail size={14} /> help@heritagehomesolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`container-custom transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="transform scale-90 md:scale-100 origin-left transition-transform">
            <Logo light={isTransparent} />
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-lg font-medium transition-colors hover:text-sand-500 relative group/link ${!isTransparent ? 'text-sage-800' : 'text-stone-100 drop-shadow-md'
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sand-500 transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
            <Link
              href="/book"
              className={`btn px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${!isTransparent
                ? 'bg-sage-700 text-white hover:bg-sage-800'
                : 'bg-white text-sage-800 hover:bg-stone-100'
                }`}
            >
              Get Help Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${!isTransparent ? 'text-sage-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-stone-50 border-t border-stone-200 lg:hidden overflow-y-auto animate-fade-in">
          <div className="container-custom py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 text-2xl font-serif font-medium text-sage-900 border-b border-stone-200 hover:text-sand-600 hover:pl-2 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn w-full bg-sage-700 text-white py-4 text-xl rounded-xl shadow-lg"
              >
                Get Help Now
              </Link>
            </div>

            <div className="mt-12 p-6 bg-stone-100 rounded-2xl text-center">
              <p className="text-stone-600 mb-4 font-serif italic">"Compassion in every step."</p>
              <div className="flex flex-col gap-4 text-sage-800">
                <a href="tel:+14052051246" className="flex items-center justify-center gap-3 font-medium text-lg">
                  <Phone size={20} className="text-sand-600" /> (405) 205-1246
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
