'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useState } from 'react'
import { PrivacyModal } from './privacy-modal'

export const Footer = () => {
  const { t } = useTranslation()
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-background border-t border-border/40 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OpenScope. {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <button 
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
            <Link href="#" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
          </div>
        </div>
      </footer>
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  )
}
