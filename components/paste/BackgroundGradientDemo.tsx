'use client'
import React, { useState } from 'react'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Image from 'next/image'
import { GradientButton } from '@/components/paste/GradientButton'
import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const buttons = [
  {
    icon: Mail,
    label: 'Email',
    action: 'copy',
    value: 'aydingani.s@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aydingani',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/aydin_ganii',
  },
]

export function BackgroundGradientDemo() {
  const [copyStatus, setCopyStatus] = useState('')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleButtonClick = async (button) => {
    if (button.action === 'copy') {
      try {
        await navigator.clipboard.writeText(button.value)
        setCopyStatus('Copied!')
        setTimeout(() => setCopyStatus(''), 2000)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setCopyStatus('Failed to copy')
        setTimeout(() => setCopyStatus(''), 2000)
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const renderButton = (button) => {
    const Icon = button.icon
    const content = (
      <>
        <Icon className="w-4 h-4 mr-2" />
        {button.label}
      </>
    )

    if (button.href) {
      return (
        <Link
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          key={button.label}
        >
          <GradientButton>{content}</GradientButton>
        </Link>
      )
    }

    return (
      <GradientButton
        key={button.label}
        onClick={() => handleButtonClick(button)}
        isClickable
      >
        {content}
      </GradientButton>
    )
  }

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm md:w-100 p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/Aydin.jpg`}
          alt="Aydin"
          height="400"
          width="400"
          className="object-contain rounded-xl"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Aydin Gani
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          I am using the latest stack to build the apps and websites.
          Integrating AI into the web apps I make people&#39;s lives easier
        </p>
        <div className="flex flex-wrap gap-2 relative">
          {buttons.map(renderButton)}
          {copyStatus && (
            <div className="absolute top-[-30px] left-0 bg-black text-white px-2 py-1 rounded text-sm">
              {copyStatus}
            </div>
          )}
        </div>
      </BackgroundGradient>
    </div>
  )
}
