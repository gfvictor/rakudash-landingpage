'use client'

import {
  Navbar,
  AtomicHub,
  ScrollIndicator,
  Scrollytelling,
  EcosystemImpact,
  NeuralNetworkBackground,
  Footer,
} from '@/ui'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground flex min-h-screen flex-col items-center">
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-start overflow-hidden pt-12 pb-24">
          <div className="from-primary/[0.02] dark:from-primary/5 pointer-events-none absolute inset-0 z-0 bg-gradient-to-b via-transparent to-transparent"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute top-1/4 -left-20 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute -right-20 bottom-1/4 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <NeuralNetworkBackground />

          <div className="relative z-10 container mx-auto mt-8 flex flex-col items-center px-6 text-center">
            <h1 className="mb-12 max-w-4xl text-3xl leading-[1.1] font-bold tracking-tight whitespace-pre-line sm:text-5xl md:text-7xl">
              {t('hero.title')}
            </h1>
            <h2 className="text-muted-foreground mb-10 max-w-2xl text-center text-lg leading-relaxed font-medium whitespace-pre-line sm:text-xl md:text-2xl">
              {t('hero.subtitle')}
            </h2>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/features"
                className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-center font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('hero.cta_primary')}
              </Link>
              <Link
                href="/contact"
                className="bg-background border-border text-foreground hover:bg-muted/50 rounded-xl border px-8 py-4 text-center font-bold shadow-sm transition-all duration-300"
              >
                {t('hero.cta_secondary')}
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-8 w-full">
            <AtomicHub />
          </div>

          <ScrollIndicator />
        </section>

        <section
          id="features"
          className="bg-background border-border/40 relative z-10 w-full border-t"
        >
          <Scrollytelling />
        </section>

        <EcosystemImpact />
      </main>

      <Footer />
    </>
  )
}

