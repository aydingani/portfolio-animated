import { Permanent_Marker } from 'next/font/google'
import { Mail } from 'lucide-react'
import { FaTelegram } from 'react-icons/fa6'

import React from 'react'

const pmarker = Permanent_Marker({ subsets: ['latin'], weight: '400' })

export const Footer = () => {
  return (
    <footer className="mx-auto mb-5 text-center text-sm md:text-base">
      <h1
        className={`${pmarker.className} text-amber-200 pt-10 md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20 mb-5`}
      >
        Contact Me
      </h1>

      <a
        href="mailto:aydingani.s@gmail.com"
        className="mx-4 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          <Mail size={18} />
          Email
        </span>
      </a>

      <a
        href="https://t.me/aydingani"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          <FaTelegram size={18} />
          @aydingani
        </span>
      </a>
      <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}
