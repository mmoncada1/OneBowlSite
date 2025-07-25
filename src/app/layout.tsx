import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'One Bowl | Authentic Asian Cuisine in Ann Arbor',
  description: 'Experience the finest Asian cuisine at One Bowl restaurant in Ann Arbor. Fresh ingredients, authentic flavors, and exceptional service.',
  keywords: ['Asian restaurant', 'Ann Arbor', 'Chinese food', 'sushi', 'Asian cuisine', 'One Bowl', 'pho', 'ramen', 'Korean food', 'Vietnamese food'],
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'One Bowl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
