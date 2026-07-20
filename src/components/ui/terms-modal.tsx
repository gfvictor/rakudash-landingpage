'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
              {t('terms.title')}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('terms.description')}
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
            <h3 className="mb-2 text-lg font-semibold">{t('terms.acceptance.title')}</h3>
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              {t('terms.acceptance.content')}
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('terms.usage.title')}</h3>
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              {t('terms.usage.content')}
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold">{t('terms.modifications.title')}</h3>
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              {t('terms.modifications.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
