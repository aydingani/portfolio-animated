'use client'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: 'frontend',
    },
    {
      text: '&',
    },
    {
      text: 'mobile',
    },
    {
      text: 'developer',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center bg-[#000]">
      <TypewriterEffectSmooth words={words} />
    </div>
  )
}
