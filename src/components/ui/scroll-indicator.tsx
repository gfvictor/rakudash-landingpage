'use client'

import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
      )

      const scrolledToBottom = window.innerHeight + window.scrollY >= docHeight - 150

      setIsAtBottom(scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`text-primary pointer-events-none fixed right-6 bottom-6 z-30 flex flex-col items-center justify-center transition-opacity duration-500 md:right-10 md:bottom-10 ${
        isAtBottom ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-background/50 border-border flex h-10 w-10 animate-bounce items-center justify-center rounded-full border shadow-lg backdrop-blur-sm">
        <svg className="h-5 w-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  )
}
