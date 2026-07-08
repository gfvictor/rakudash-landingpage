'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  Inbox,
  ArrowRight
} from 'lucide-react'

type Tab = 'entori' | 'rakudash' | 'wanspot'

export const EcosystemImpact = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<Tab>('rakudash')

  const tabs: Record<Tab, {
    title: string;
    subtitle: string;
    logo: string;
    metrics: { label: string; value: string; icon: React.ReactNode }[];
    description: string;
  }> = {
      entori: {
      title: 'EnTori',
      logo: '/img/entori/Vector 3.png',
      subtitle: t('metrics.entori.subtitle'),
      metrics: [
        { label: t('metrics.entori.metric1_label'), value: '+78%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: t('metrics.entori.metric2_label'), value: '0', icon: <ShieldCheck className="w-5 h-5" /> }
      ],
      description: t('metrics.entori.description')
    },
    rakudash: {
      title: 'Rakudash',
      logo: '/img/rakudash/logo.svg',
      subtitle: t('metrics.rakudash.subtitle'),
      metrics: [
        { label: t('metrics.rakudash.metric1_label'), value: '-60%', icon: <Clock className="w-5 h-5" /> },
        { label: t('metrics.rakudash.metric2_label'), value: '100%', icon: <CheckCircle2 className="w-5 h-5" /> }
      ],
      description: t('metrics.rakudash.description')
    },
    wanspot: {
      title: 'WanSpot',
      logo: '/img/wanspot/logo.svg',
      subtitle: t('metrics.wanspot.subtitle'),
      metrics: [
        { label: t('metrics.wanspot.metric1_label'), value: '-90%', icon: <Inbox className="w-5 h-5" /> },
        { label: t('metrics.wanspot.metric2_label'), value: '24/7', icon: <CheckCircle2 className="w-5 h-5" /> }
      ],
      description: t('metrics.wanspot.description')
    }
  }

  const activeData = tabs[activeTab]

  return (
    <section className="w-full py-24 bg-background border-t border-border/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground whitespace-pre-line mb-12">
            {t('metrics.title')}
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            {t('metrics.subtitle')}
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center p-1 bg-muted/30 dark:bg-muted/10 rounded-2xl border border-border/40">
            {(Object.keys(tabs) as Tab[]).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`relative px-6 sm:px-10 py-3 text-sm sm:text-base font-medium rounded-xl ${
                  activeTab === tabKey 
                    ? 'text-foreground bg-background shadow-sm border border-border/50' 
                    : 'text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {tabs[tabKey].title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto min-h-[400px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-700" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
              <div className="relative p-8 sm:p-10 rounded-2xl bg-card border border-border/40 shadow-sm flex-1 flex flex-col justify-center overflow-hidden">
                <div 
                  className="absolute top-8 right-8 h-8 w-32 bg-primary opacity-80 pointer-events-none select-none"
                  style={{
                    maskImage: `url('${activeData.logo}')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'right top',
                    WebkitMaskImage: `url('${activeData.logo}')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'right top'
                  }}
                />
                <span className="relative z-10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                  {activeData.subtitle}
                </span>
                <h3 className="relative z-10 text-2xl sm:text-3xl font-medium text-foreground mb-6 leading-relaxed">
                  {activeData.description}
                </h3>
              </div>
            </div>

            <div className="col-span-1 md:col-span-4 flex flex-row md:flex-col gap-4 sm:gap-6">
              {activeData.metrics.map((metric, idx) => (
                <div key={idx} className="p-5 sm:p-8 rounded-2xl bg-card border border-border/40 shadow-sm flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 text-muted-foreground">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-muted/50 dark:bg-muted/20 text-foreground">
                      {metric.icon}
                    </div>
                    <span className="font-medium text-xs sm:text-sm uppercase tracking-wider">{metric.label}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-6xl font-semibold tracking-tighter text-foreground">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/40 flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            {t('metrics.cta_title')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-center font-bold shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              {t('metrics.cta_primary')}
            </button>
            <button className="bg-background border-border text-foreground hover:bg-muted/50 rounded-xl border px-8 py-4 text-center font-bold shadow-sm transition-all duration-300 flex items-center justify-center gap-2">
              {t('metrics.cta_secondary')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
