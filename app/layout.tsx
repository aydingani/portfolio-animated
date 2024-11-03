import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aydin Dev',
  description: 'Aydin Gani&#39;s Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
