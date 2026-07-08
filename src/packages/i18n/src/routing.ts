import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const locales = ['en', 'pt', 'ja'] as const

export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: 'ja',
  localePrefix: 'never',
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
