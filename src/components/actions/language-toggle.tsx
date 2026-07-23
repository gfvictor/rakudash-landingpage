'use client'

import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
  { code: 'pt', label: 'PT' },
] as const

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.resolvedLanguage || 'ja'

  return (
    <div className="flex items-center gap-2">
      {LANGUAGES.map(({ code, label }) => {
        const isActive = currentLocale === code

        return (
          <button
            key={code}
            onClick={() => {
              if (!document.startViewTransition) {
                i18n.changeLanguage(code)
                return
              }
              document.startViewTransition(() => {
                i18n.changeLanguage(code)
              })
            }}
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
