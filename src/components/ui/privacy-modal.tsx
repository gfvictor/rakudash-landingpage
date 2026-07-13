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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card text-card-foreground shadow-xl rounded-3xl border border-border/50 p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-start justify-between mb-8 pb-4 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-primary">{t('privacy.title')}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('privacy.description')}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2 rounded-full hover:bg-muted"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.purpose.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.purpose.content')}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.storage.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.storage.content')}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.sharing.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.sharing.content')}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.security.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.security.content')}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.rights.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.rights.content')}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">{t('privacy.contact.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('privacy.contact.content')}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{t('privacy.recommendations.lastUpdated')}</p>
          <p>{t('privacy.recommendations.jurisdiction')}</p>
        </div>

      </div>
    </div>
  )
}
