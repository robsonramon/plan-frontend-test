import React from 'react'
import { ToastContainer } from 'react-toastify'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/Footer/Footer'

import '@/styles/globals.scss'

import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Plan | Países do Mundo',
    template: '%s | Plan',
  },
  description:
    'Explore países do mundo com informações sobre capital, população, idiomas, moedas e regiões.',
  applicationName: 'Plan',
  keywords: [
    'países',
    'geografia',
    'capitais',
    'população',
    'idiomas',
    'Next.js',
  ],
  authors: [{ name: 'Plan Marketing' }],
  creator: 'Plan Marketing',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Plan | Países do Mundo',
    description: 'Descubra informações completas sobre países do mundo.',
    siteName: 'Plan',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  )
}
