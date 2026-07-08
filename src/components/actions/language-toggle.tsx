'use client'
import * as React from 'react'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
  { code: 'pt', label: 'PT' },
] as const

export function LanguageToggle() {
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [isPending, startTransition] = React.useTransition()

  const changeLanguage = (lng: 'en' | 'ja' | 'pt') => {
    startTransition(() => {
      router.replace(pathname, { locale: lng })
    })
  }

  return (
    <div className="flex items-center gap-2">
      {LANGUAGES.map(({ code, label }) => {
        const isActive = currentLocale === code

        return (
          <button
            key={code}
            onClick={() => changeLanguage(code)}
            className={`cursor-pointer bg-transparent px-2 py-1 text-xs font-bold transition-colors ${
              isActive
                ? 'text-foreground border-muted-foreground border-b'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
