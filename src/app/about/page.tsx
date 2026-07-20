'use client'

import { useTranslation } from 'react-i18next'
import { NeuralNetworkBackground, PageTitle } from '@/ui'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle pageKey="navbar.about" />
      <main className="relative w-full flex-1">
        <section className="bg-background relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden pt-12 pb-24">
          <NeuralNetworkBackground />
          <div className="from-primary/10 via-primary/5 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] to-transparent"></div>

          <div className="animate-in fade-in zoom-in-95 relative z-10 container mx-auto mt-8 flex flex-col items-center px-6 text-center duration-700">
            <h1 className="mb-12 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight whitespace-pre-line sm:text-6xl md:text-7xl">
              {t('about_page.title')}
            </h1>
            <p className="text-muted-foreground max-w-3xl text-center text-lg leading-relaxed font-medium whitespace-pre-line sm:text-xl md:text-2xl">
              {t('about_page.subtitle')}
            </p>

            <div className="text-primary bg-background/50 border-border mt-16 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border shadow-lg backdrop-blur-sm">
              <svg
                className="h-6 w-6 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section className="bg-card/30 border-border/40 relative overflow-hidden border-t py-24">
          <div className="relative z-10 container mx-auto max-w-5xl px-4 md:px-8">
            <div className="flex flex-col items-center gap-24 lg:gap-32">
              <div className="max-w-3xl text-center">
                <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  {t('about_page.who_we_are.title')}
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium sm:text-2xl">
                  {t('about_page.who_we_are.description')}
                </p>
              </div>

              <div className="flex w-full flex-col gap-16 lg:gap-20">
                <div className="bg-background border-border/50 group relative flex w-full flex-col items-stretch overflow-hidden rounded-[2.5rem] border shadow-xl sm:flex-row">
                  <div className="relative min-h-[320px] w-full shrink-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent)] sm:min-h-full sm:w-[45%] sm:[mask-image:linear-gradient(to_right,black_60%,transparent)]">
                    <img
                      src="/img/avatar/vinicius.png"
                      alt={t('about_page.founder.name')}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="bg-primary/10 absolute inset-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>

                  <div className="relative z-20 -mt-24 flex flex-1 flex-col justify-center p-8 text-center sm:mt-0 sm:-ml-20 sm:p-10 sm:text-left lg:p-16">
                    <h3 className="text-foreground mb-2 text-center text-2xl font-bold sm:text-4xl">
                      {t('about_page.founder.name')}
                    </h3>
                    {t('about_page.founder.kana') && (
                      <p className="text-muted-foreground mb-3 text-center text-sm tracking-wider sm:text-base">
                        {t('about_page.founder.kana')}
                      </p>
                    )}
                    <p className="text-primary mb-6 text-center text-lg font-medium sm:text-xl">
                      {t('about_page.founder.role')}
                    </p>
                    <p className="text-muted-foreground text-center text-base leading-relaxed sm:text-lg">
                      {t('about_page.founder.bio')}
                    </p>
                  </div>
                </div>

                <div className="bg-background border-border/50 group relative flex w-full flex-col items-stretch overflow-hidden rounded-[2.5rem] border shadow-xl sm:flex-row">
                  <div className="relative min-h-[320px] w-full shrink-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent)] sm:min-h-full sm:w-[45%] sm:[mask-image:linear-gradient(to_right,black_60%,transparent)]">
                    <img
                      src="/img/avatar/victor.png"
                      alt={t('about_page.ui_lead.name')}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="bg-primary/10 absolute inset-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>

                  <div className="relative z-20 -mt-24 flex flex-1 flex-col justify-center p-8 text-center sm:mt-0 sm:-ml-20 sm:p-10 sm:text-left lg:p-16">
                    <h3 className="text-foreground mb-2 text-center text-2xl font-bold whitespace-pre-line sm:text-4xl">
                      {t('about_page.ui_lead.name')}
                    </h3>
                    {t('about_page.ui_lead.kana') && (
                      <p className="text-muted-foreground mb-3 text-center text-sm tracking-wider sm:text-base">
                        {t('about_page.ui_lead.kana')}
                      </p>
                    )}
                    <p className="text-primary mb-6 text-center text-lg font-medium sm:text-xl">
                      {t('about_page.ui_lead.role')}
                    </p>
                    <p className="text-muted-foreground text-center text-base leading-relaxed sm:text-lg">
                      {t('about_page.ui_lead.bio')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background border-border/40 relative overflow-hidden border-t py-24 sm:py-32">
          <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div className="bg-muted/50 text-foreground border-border/50 hover:bg-card hover:border-primary/20 group relative overflow-hidden rounded-[2.5rem] border p-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-14">
                <div className="relative z-10">
                  <div className="bg-background group-hover:bg-primary/5 border-border/50 group-hover:border-primary/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm transition-colors duration-500">
                    <svg
                      className="text-muted-foreground group-hover:text-primary h-8 w-8 transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-6 text-3xl font-bold tracking-tight">
                    {t('about_page.mission.title')}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 text-lg leading-relaxed font-medium transition-colors duration-500">
                    {t('about_page.mission.description')}
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 text-foreground border-border/50 hover:bg-card hover:border-primary/20 group relative overflow-hidden rounded-[2.5rem] border p-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-14">
                <div className="relative z-10">
                  <div className="bg-background group-hover:bg-primary/5 border-border/50 group-hover:border-primary/20 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm transition-colors duration-500">
                    <svg
                      className="text-muted-foreground group-hover:text-primary h-8 w-8 transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-6 text-3xl font-bold tracking-tight">
                    {t('about_page.vision.title')}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 text-lg leading-relaxed font-medium transition-colors duration-500">
                    {t('about_page.vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/30 border-border/40 relative overflow-hidden border-t py-24">
          <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center md:px-8">
            <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('about_page.values.title')}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {(t('about_page.values.list', { returnObjects: true }) as string[]).map(
                (value, index) => (
                  <div
                    key={index}
                    className="bg-background border-border/50 hover:border-primary/20 group flex flex-col items-center rounded-3xl border p-8 shadow-sm transition-all hover:shadow-xl"
                  >
                    <div className="bg-card border-border/50 group-hover:bg-primary/5 mb-6 flex h-12 w-12 items-center justify-center rounded-xl border transition-all group-hover:scale-110">
                      <svg
                        className="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-foreground/90 text-xl font-bold tracking-tight">{value}</h4>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
