'use client'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Works } from '@/components/Works'
import { Footer } from '@/components/Footer'
export default function Home() {
  return (
    <main className="md:mx-80">
      <Header />
      <Hero />
      <Works />
      <Footer />
    </main>
  )
}
