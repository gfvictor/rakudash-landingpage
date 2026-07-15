'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import { ThemeToggle, LanguageToggle } from '@/actions'
import { OpenScopeLogo } from '@/ui'

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

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
            <Link
              href="/"
              className="inline-flex items-center gap-2 no-underline"
              aria-label="OpenScope"
            >
              <OpenScopeLogo className="text-foreground h-7 w-auto transition-transform hover:scale-105 sm:h-8 md:h-10" />
            </Link>
          </div>

          <nav className="text-md text-muted-foreground ml-24 hidden items-center gap-8 md:flex">
            <Link href="/" className={linkClass('/')}>
              {t('navbar.home')}
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              {t('navbar.about')}
            </Link>

            <div className="group relative">
              <button
                className={`flex cursor-pointer items-center gap-1 transition-colors duration-200 ${pathname.startsWith('/products') ? 'text-foreground font-bold' : 'hover:text-foreground'}`}
              >
                {t('navbar.products')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:-scale-y-100"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="border-border bg-card invisible absolute top-full left-0 mt-2 flex w-64 flex-col rounded-2xl border p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                <Link
                  href="/products/rakudash"
                  className="text-foreground hover:bg-muted rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
                >
                  {t('navbar.rakudash')}
                </Link>
                <div className="border-border/50 mt-1 ml-4 border-l pl-2">
                  <Link
                    href="/products/rakudash/features"
                    className="text-muted-foreground hover:bg-muted hover:text-foreground block rounded-xl px-4 py-2 text-sm transition-colors"
                  >
                    {t('navbar.features')}
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className={linkClass('/contact')}>
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
        <nav className="text-foreground flex flex-col items-center gap-6">
          <Link href="/" onClick={closeMenu} className="text-3xl tracking-tight">
            {t('navbar.home')}
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-3xl tracking-tight">
            {t('navbar.about')}
          </Link>

          <div className="flex w-full flex-col items-center">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="hover:text-muted-foreground flex items-center gap-2 text-3xl tracking-tight transition-colors"
            >
              {t('navbar.products')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isProductsOpen ? '-scale-y-100' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${isProductsOpen ? 'mt-6 max-h-40 gap-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <Link
                href="/products/rakudash"
                onClick={closeMenu}
                className="text-muted-foreground hover:text-foreground text-2xl font-medium tracking-tight transition-colors"
              >
                {t('navbar.rakudash')}
              </Link>
              <Link
                href="/products/rakudash/features"
                onClick={closeMenu}
                className="text-muted-foreground hover:text-foreground relative text-2xl tracking-tight transition-colors"
              >
                {t('navbar.features')}
              </Link>
            </div>
          </div>

          <Link href="/contact" onClick={closeMenu} className="text-3xl tracking-tight">
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
