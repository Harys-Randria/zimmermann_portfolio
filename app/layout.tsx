import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Serge Zimmermann | Directeur de Projet & Manager de Transition',
  description: 'Portfolio professionnel de Serge Zimmermann. Directeur de projet avec 32 ans d\'expérience en pilotage de programmes complexes, transformation SI et management de transition.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/zimmermann.jpg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Serge Zimmermann | Directeur de Projet',
    description: 'Pilote solide pour vos projets - 32 ans d\'expérience en transformation SI et management',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
