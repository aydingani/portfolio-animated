'use client'
import React from 'react'
import { BackgroundGradientDemo } from '@/components/paste/BackgroundGradientDemo'
import { MeteorsDemo } from '@/components/paste/MeteorsDemo'

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-0 items-center md:items-stretch">
      <BackgroundGradientDemo />
      <MeteorsDemo />
    </div>
  )
}
