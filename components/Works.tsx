import { Permanent_Marker } from 'next/font/google'
import React from 'react'
import Projects from '@/components/paste/Projects'
const pmarker = Permanent_Marker({ subsets: ['latin'], weight: '400' })

export function Works() {
  return (
    <div>
      <h1
        className={`${pmarker.className} text-amber-200 pt-10 md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20`}
      >
        My Works
      </h1>
      <Projects />
    </div>
  )
}
