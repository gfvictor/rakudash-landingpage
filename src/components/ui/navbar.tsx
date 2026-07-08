'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import { ThemeToggle, LanguageToggle } from '@/actions'

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  const linkClass = (path: string) =>
    `transition-colors duration-200 ${
      pathname === path ? 'text-foreground font-bold' : 'hover:text-foreground'
    }`

  return (
    <>
      <header className="bg-background/80 sticky top-0 z-50 w-full py-3 backdrop-blur-md sm:py-4">
        <div className="relative container mx-auto flex items-center justify-between px-4 md:px-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 no-underline">
              <img
                src="/img/icon-192x192.png"
                alt="OpenScope"
                className="h-7 sm:h-8 md:h-10 dark:brightness-110"
              />
            </Link>
          </div>

          <nav className="text-md text-muted-foreground ml-24 hidden gap-8 md:flex">
            <Link href="/" className={linkClass('/')}>
              {t('navbar.home')}
            </Link>
            <Link href="#features" className={linkClass('#features')}>
              {t('navbar.features')}
            </Link>
            <Link href="#contact" className={linkClass('#contact')}>
              {t('navbar.contact')}
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            className="relative z-50 flex h-8 w-8 cursor-pointer flex-col justify-between border-none bg-transparent md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            aria-label="Toggle Menu"
          >
            <span
              className={`bg-foreground h-1 w-full origin-center transition-all duration-300 ${isOpen ? 'translate-y-3.5 rotate-45' : ''}`}
            ></span>
            <span
              className={`bg-foreground h-1 w-full origin-center transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
            ></span>
            <span
              className={`bg-foreground h-1 w-full origin-center transition-all duration-300 ${isOpen ? '-translate-y-3.5 -rotate-45' : ''}`}
            ></span>
          </button>
        </div>
      </header>

      <div
        className={`bg-background fixed inset-0 z-40 flex h-[100dvh] w-full flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="text-foreground flex flex-col items-center gap-8">
          <Link href="/" onClick={closeMenu} className="text-3xl tracking-tight">
            {t('navbar.home')}
          </Link>
          <Link href="#features" onClick={closeMenu} className="text-3xl tracking-tight">
            {t('navbar.features')}
          </Link>
          <Link href="#contact" onClick={closeMenu} className="text-3xl tracking-tight">
            {t('navbar.contact')}
          </Link>

          <div className="mt-8 flex flex-col items-center gap-8 text-3xl">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  )
}
