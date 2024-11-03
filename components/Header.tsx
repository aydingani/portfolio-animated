'use client'
import { SparklesPreview } from '@/components/paste/SparklesPreview'
import { TypewriterEffectSmoothDemo } from '@/components/paste/TypewriterEffectSmoothDemo'

export function Header() {
  return (
    <header className="bg-[#000]">
      <SparklesPreview />
      <TypewriterEffectSmoothDemo />
    </header>
  )
}
