'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useState } from 'react'
import { OpenScopeLogo, PrivacyModal, TermsModal } from '@/ui'

export const Footer = () => {
  const { t } = useTranslation()
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-background border-border/40 relative overflow-hidden border-t py-16">
        <div className="bg-grid-white/5 pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-6">
              <Link href="/">
                <OpenScopeLogo className="text-foreground h-12 w-auto transition-transform hover:scale-105" />
              </Link>
              <p className="text-muted-foreground max-w-sm text-lg whitespace-pre-line">
                {t('footer.slogan')}
              </p>
            </div>
            <div className="flex flex-row gap-16 md:justify-end md:gap-24">
              <div className="flex flex-col">
                <h4 className="text-foreground mb-6 text-sm font-bold tracking-tight uppercase">
                  {t('footer.sitemap')}
                </h4>
                <nav className="text-muted-foreground flex flex-col gap-4 font-medium">
                  <Link href="/" className="hover:text-foreground transition-colors">
                    {t('navbar.home')}
                  </Link>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    {t('navbar.about')}
                  </Link>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    {t('navbar.contact')}
                  </Link>
                </nav>
              </div>

              <div className="flex flex-col">
                <h4 className="text-foreground mb-6 text-sm font-bold tracking-tight uppercase">
                  {t('navbar.products')}
                </h4>
                <nav className="text-muted-foreground flex flex-col gap-4">
                  <Link
                    href="/products/rakudash"
                    className="hover:text-foreground transition-colors"
                  >
                    {t('navbar.rakudash')}
                  </Link>
                  <div className="border-border/50 ml-1 flex flex-col gap-4 border-l-2 pl-4">
                    <Link
                      href="/products/rakudash/features"
                      className="hover:text-foreground transition-colors"
                    >
                      {t('navbar.features')}
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground border-border/40 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
            <p>
              © {new Date().getFullYear()} OpenScope. {t('footer.copyright')}
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                {t('footer.privacy')}
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="hover:text-foreground cursor-pointer transition-colors"
              >
                {t('footer.terms')}
              </button>
            </div>
          </div>
        </div>
      </footer>
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
