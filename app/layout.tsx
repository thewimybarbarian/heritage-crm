import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heritage Home Solutions | Faith-Based Real Estate in OKC',
  description: 'Compassionate real estate solutions for seniors and distressed homeowners in Oklahoma City. Faith-driven service with integrity and care.',
  keywords: ['real estate', 'Oklahoma City', 'OKC', 'seniors', 'distressed sellers', 'faith-based', 'home solutions'],
  authors: [{ name: 'Alan Norton' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heritagehomesolutions.com',
    siteName: 'Heritage Home Solutions',
    title: 'Heritage Home Solutions | Faith-Based Real Estate in OKC',
    description: 'Compassionate real estate solutions for seniors and distressed homeowners in Oklahoma City.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Home Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Home Solutions | Faith-Based Real Estate in OKC',
    description: 'Compassionate real estate solutions for seniors and distressed homeowners in Oklahoma City.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
