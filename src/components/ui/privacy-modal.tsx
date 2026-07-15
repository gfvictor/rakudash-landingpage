'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { t } = useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm transition-all duration-300">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div className="bg-card text-card-foreground border-border/50 animate-in fade-in zoom-in-95 relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border p-6 shadow-xl duration-200 sm:p-10">
        <div className="border-border/50 mb-8 flex items-start justify-between border-b pb-4">
          <div>
            <h2 className="text-primary mb-2 text-2xl font-bold tracking-tight">
              {t('privacy.title')}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('privacy.description')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground hover:bg-muted -mr-2 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.purpose.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.purpose.content')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.storage.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.storage.content')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.sharing.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.sharing.content')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.security.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.security.content')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.rights.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.rights.content')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('privacy.contact.title')}</h3>
            <p className="text-muted-foreground text-sm">{t('privacy.contact.content')}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-border/50 text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>{t('privacy.recommendations.lastUpdated')}</p>
          <p>{t('privacy.recommendations.jurisdiction')}</p>
        </div>
      </div>
    </div>
  )
}
