'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ShieldCheck, Clock, CheckCircle2, TrendingUp, Inbox, ArrowRight } from 'lucide-react'

type Tab = 'entori' | 'rakudash' | 'wanspot'

export const EcosystemImpact = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<Tab>('rakudash')

  const tabs: Record<
    Tab,
    {
      title: string
      subtitle: string
      logo: string
      metrics: { label: string; value: string; icon: React.ReactNode }[]
      description: string
    }
  > = {
    entori: {
      title: 'EnTori',
      logo: '/img/entori/Vector 3.png',
      subtitle: t('metrics.entori.subtitle'),
      metrics: [
        {
          label: t('metrics.entori.metric1_label'),
          value: '+78%',
          icon: <TrendingUp className="h-5 w-5" />,
        },
        {
          label: t('metrics.entori.metric2_label'),
          value: '0',
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ],
      description: t('metrics.entori.description'),
    },
    rakudash: {
      title: 'Rakudash',
      logo: '/img/rakudash/logo.svg',
      subtitle: t('metrics.rakudash.subtitle'),
      metrics: [
        {
          label: t('metrics.rakudash.metric1_label'),
          value: '-60%',
          icon: <Clock className="h-5 w-5" />,
        },
        {
          label: t('metrics.rakudash.metric2_label'),
          value: '100%',
          icon: <CheckCircle2 className="h-5 w-5" />,
        },
      ],
      description: t('metrics.rakudash.description'),
    },
    wanspot: {
      title: 'WanSpot',
      logo: '/img/wanspot/logo.svg',
      subtitle: t('metrics.wanspot.subtitle'),
      metrics: [
        {
          label: t('metrics.wanspot.metric1_label'),
          value: '-90%',
          icon: <Inbox className="h-5 w-5" />,
        },
        {
          label: t('metrics.wanspot.metric2_label'),
          value: '24/7',
          icon: <CheckCircle2 className="h-5 w-5" />,
        },
      ],
      description: t('metrics.wanspot.description'),
    },
  }

  const activeData = tabs[activeTab]

  return (
    <section className="bg-background border-border/40 w-full overflow-hidden border-t py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-foreground mb-12 text-3xl font-semibold tracking-tight whitespace-pre-line sm:text-4xl md:text-5xl">
            {t('metrics.title')}
          </h2>
          <p className="text-muted-foreground text-lg font-medium">{t('metrics.subtitle')}</p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="bg-muted/30 dark:bg-muted/40 border-border/40 inline-flex items-center rounded-2xl border p-1">
            {(Object.keys(tabs) as Tab[]).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`relative rounded-xl px-6 py-3 text-sm font-medium sm:px-10 sm:text-base ${
                  activeTab === tabKey
                    ? 'text-foreground bg-background border-border/50 border shadow-sm'
                    : 'text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {tabs[tabKey].title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-h-[400px] w-full max-w-5xl">
          <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-700" />

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="col-span-1 flex flex-col gap-6 md:col-span-8">
              <div className="bg-card border-border/40 relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border p-8 shadow-sm sm:p-10">
                <div
                  className="bg-primary pointer-events-none absolute top-8 right-8 h-8 w-32 opacity-80 select-none"
                  style={{
                    maskImage: `url('${activeData.logo}')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'right top',
                    WebkitMaskImage: `url('${activeData.logo}')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'right top',
                  }}
                />
                <span className="text-muted-foreground relative z-10 mb-4 text-sm font-medium tracking-wider uppercase">
                  {activeData.subtitle}
                </span>
                <h3 className="text-foreground relative z-10 mb-6 text-2xl leading-relaxed font-medium sm:text-3xl">
                  {activeData.description}
                </h3>
              </div>
            </div>

            <div className="col-span-1 flex flex-row gap-4 sm:gap-6 md:col-span-4 md:flex-col">
              {activeData.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-card border-border/40 flex flex-1 flex-col justify-center rounded-2xl border p-5 shadow-sm sm:p-8"
                >
                  <div className="text-muted-foreground mb-2 flex items-center gap-2 sm:mb-4 sm:gap-3">
                    <div className="bg-muted/90 dark:bg-muted/60 text-foreground rounded-xl p-2 sm:p-2.5">
                      {metric.icon}
                    </div>
                    <span className="text-xs font-medium tracking-wider uppercase sm:text-sm">
                      {metric.label}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-foreground text-3xl font-semibold tracking-tighter sm:text-6xl">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border/40 mt-24 flex flex-col items-center border-t pt-12 text-center">
          <h3 className="text-foreground mb-8 text-2xl font-semibold">{t('metrics.cta_title')}</h3>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-center font-bold shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('metrics.cta_primary')}
            </Link>
            <Link
              href="/features"
              className="bg-background border-border text-foreground hover:bg-muted/50 flex items-center justify-center gap-2 rounded-xl border px-8 py-4 text-center font-bold shadow-sm transition-all duration-300"
            >
              {t('metrics.cta_secondary')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
