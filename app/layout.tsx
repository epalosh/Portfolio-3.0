import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ethan Palosh — Software Engineer',
  description:
    'Full-stack software engineer with experience working on enterprise and consumer software. Particular interests include applied AI and frontier technologies. Additional expertise in embedded systems & robotics.',
  openGraph: {
    title: 'Ethan Palosh — Software Engineer',
    description: 'Full-stack software engineer with experience working on enterprise and consumer software. Particular interests include applied AI and frontier technologies. Additional expertise in embedded systems & robotics.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Detect back/forward navigation and reveal content immediately, bypassing React */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=performance.getEntriesByType('navigation')[0];if((t&&t.type==='back_forward')||performance.navigation.type===2){document.documentElement.setAttribute('data-back-nav','')}})()` }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
