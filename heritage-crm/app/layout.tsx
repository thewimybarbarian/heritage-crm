import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

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
    title: 'Heritage Home Solutions CRM',
    description: 'Internal CRM for Heritage Home Solutions',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
            <body className="font-sans antialiased bg-stone-50 text-sage-800">
                {children}
            </body>
        </html>
    )
}
