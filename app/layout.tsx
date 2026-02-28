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
  metadataBase: new URL('https://heritagehomesolutions.info'),
  title: 'Heritage Home Solutions | Sell Your OKC Home Fast | Faith-Based Real Estate',
  description: 'Struggling with a family home transition in Oklahoma City? Heritage Home Solutions buys houses fast, handles estate sales, probate, and senior downsizing across the OKC metro. Call (405) 205-1246.',
  keywords: [
    'sell my house fast OKC',
    'sell my house fast Oklahoma City',
    'we buy houses Oklahoma City',
    'estate sale OKC',
    'probate real estate Oklahoma City',
    'senior downsizing OKC',
    'foreclosure help Oklahoma City',
    'cash home buyers OKC',
    'faith-based real estate Oklahoma City',
    'Heritage Home Solutions',
  ],
  authors: [{ name: 'Alan Norton' }],
  alternates: {
    canonical: 'https://heritagehomesolutions.info',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heritagehomesolutions.info',
    siteName: 'Heritage Home Solutions',
    title: 'Heritage Home Solutions | Sell Your OKC Home Fast',
    description: 'Compassionate real estate solutions for seniors and distressed homeowners in Oklahoma City. Estate sales, probate, foreclosure assistance, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Home Solutions – Faith-Based Real Estate in OKC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Home Solutions | Sell Your OKC Home Fast',
    description: 'Compassionate real estate solutions for seniors and distressed homeowners in Oklahoma City.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Heritage Home Solutions',
  description: 'Faith-based real estate solutions for seniors and distressed homeowners in the Oklahoma City metro area. We buy houses for cash, handle probate, estate sales, and foreclosure assistance.',
  url: 'https://heritagehomesolutions.info',
  telephone: '+14052051246',
  email: 'help@heritagehomesolutions.info',
  image: 'https://heritagehomesolutions.info/og-image.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oklahoma City',
    addressRegion: 'OK',
    addressCountry: 'US'
  },
  founder: { '@type': 'Person', name: 'Alan Norton' },
  areaServed: [
    { '@type': 'City', name: 'Oklahoma City', sameAs: 'https://www.wikidata.org/wiki/Q33552' },
    { '@type': 'City', name: 'Edmond', sameAs: 'https://www.wikidata.org/wiki/Q863110' },
    { '@type': 'City', name: 'Moore', sameAs: 'https://www.wikidata.org/wiki/Q982736' },
    { '@type': 'City', name: 'Norman', sameAs: 'https://www.wikidata.org/wiki/Q617182' },
    { '@type': 'City', name: 'Midwest City' },
    { '@type': 'City', name: 'Yukon' },
    { '@type': 'City', name: 'Mustang' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Senior Housing Transitions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Probate & Estate Sales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foreclosure Assistance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Downsizing Support' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quick Cash Offers' } },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
