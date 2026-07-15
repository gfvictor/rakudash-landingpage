'use client'

import { NeuralNetworkBackground, PageTitle } from '@/ui'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function OpenScopeHome() {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle pageKey="page_titles.home" />
      <main className="bg-background text-foreground flex min-h-screen flex-col items-center">
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden pt-12 pb-24">
          <div className="from-primary/[0.02] dark:from-primary/5 pointer-events-none absolute inset-0 z-0 bg-gradient-to-b via-transparent to-transparent"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute top-1/4 -left-20 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute -right-20 bottom-1/4 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <NeuralNetworkBackground />

          <div className="animate-in fade-in zoom-in-95 relative z-10 container mx-auto px-6 text-center duration-700">
            <h1 className="mx-auto mb-8 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight sm:text-6xl md:text-7xl">
              {t('openscope_home.title')}
            </h1>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-medium sm:text-xl md:text-2xl">
              {t('openscope_home.subtitle')}
            </p>
            <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/products/rakudash"
                className="bg-primary text-primary-foreground rounded-xl px-8 py-4 text-center font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('openscope_home.cta_rakudash')}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background relative w-full overflow-hidden py-24 sm:py-32">
          <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]"></div>

          <div className="relative z-10 container mx-auto px-4 text-center md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-12 lg:flex-row lg:gap-20">
              <div className="flex flex-1 flex-col justify-center py-8 text-center">
                <div className="bg-destructive/10 border-destructive/20 mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-inner">
                  <svg
                    className="text-destructive h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {t('openscope_home.problem.title')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium sm:text-xl">
                  {t('openscope_home.problem.description')}
                </p>
              </div>

              <div className="relative hidden flex-col items-center justify-center lg:flex">
                <div className="via-border h-full w-[2px] bg-gradient-to-b from-transparent to-transparent"></div>
                <div className="bg-background border-border absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-lg">
                  <svg
                    className="text-muted-foreground h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-muted/50 text-foreground border-border/50 hover:bg-card hover:border-primary/20 group relative flex-1 overflow-hidden rounded-[2.5rem] border p-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-14">
                <div className="relative z-10">
                  <div className="bg-background group-hover:bg-primary/5 border-border/50 group-hover:border-primary/20 mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm transition-colors duration-500">
                    <svg
                      className="text-muted-foreground group-hover:text-primary h-7 w-7 transition-colors duration-500"
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
                  <h3 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {t('openscope_home.solution.title')}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 mb-10 text-lg leading-relaxed font-medium transition-colors duration-500 sm:text-xl">
                    {t('openscope_home.solution.description')}
                  </p>

                  <Link
                    href="/products/rakudash"
                    className="bg-background group-hover:bg-primary text-foreground group-hover:text-primary-foreground border-border/50 inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-8 py-5 text-lg font-bold shadow-sm transition-all duration-500 group-hover:border-transparent hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                  >
                    <span>{t('openscope_home.cta_rakudash')}</span>
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/30 border-border/40 relative w-full overflow-hidden border-t py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-10 sm:mb-16">
              <h2 className="text-muted-foreground text-center text-sm font-bold tracking-widest uppercase">
                {t('openscope_home.clients.title')}
              </h2>
            </div>

            <div className="group relative flex overflow-x-hidden">
              <div className="animate-scroll flex items-center py-4 whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 px-8 md:gap-32 md:px-16">
                    <a
                      href="#"
                      className="flex h-16 w-32 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:grayscale"
                    >
                      <img
                        src="/img/clients/A&F.svg"
                        alt="A&F"
                        className="max-h-full max-w-full dark:hidden"
                      />
                      <img
                        src="/img/clients/A&F dark.svg"
                        alt="A&F"
                        className="hidden max-h-full max-w-full dark:block"
                      />
                    </a>
                    <a
                      href="https://www.ms-haken.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-32 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:grayscale"
                    >
                      <img
                        src="/img/clients/MSupport.svg"
                        alt="MSupport"
                        className="max-h-full max-w-full dark:hidden"
                      />
                      <img
                        src="/img/clients/MSupport dark.svg"
                        alt="MSupport"
                        className="hidden max-h-full max-w-full dark:block"
                      />
                    </a>
                    <a
                      href="https://www.sk-link.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-32 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:grayscale"
                    >
                      <img
                        src="/img/clients/SK Link.svg"
                        alt="SK Link"
                        className="max-h-full max-w-full dark:hidden"
                      />
                      <img
                        src="/img/clients/SK Link dark.svg"
                        alt="SK Link"
                        className="hidden max-h-full max-w-full dark:block"
                      />
                    </a>
                  </div>
                ))}
              </div>

              <div className="from-background absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent"></div>
              <div className="from-background absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="bg-card/10 border-border/40 relative overflow-hidden border-t py-24 sm:py-32">
          <div className="from-primary/10 via-primary/5 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] to-transparent"></div>

          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mb-12 text-center">
                  <h2 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    {t('openscope_home.target.title')}
                  </h2>
                  <p className="text-muted-foreground text-lg font-medium sm:text-xl">
                    {t('openscope_home.target.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {(t('openscope_home.target.list', { returnObjects: true }) as string[]).map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-background border-border/50 hover:border-primary/20 group flex items-start gap-5 rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="bg-card border-border/50 group-hover:bg-primary/5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all group-hover:scale-110">
                          <svg
                            className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors"
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
                        <p className="text-foreground/90 pt-1 text-lg leading-relaxed font-medium">
                          {item}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex h-full flex-col justify-center">
                <div className="bg-muted/50 text-foreground border-border/50 hover:bg-card hover:border-primary/20 group relative overflow-hidden rounded-[2.5rem] border p-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl sm:p-14">
                  <div className="relative z-10">
                    <div className="bg-background group-hover:bg-primary/5 border-border/50 group-hover:border-primary/20 mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm transition-colors duration-500">
                      <svg
                        className="text-muted-foreground group-hover:text-primary h-7 w-7 transition-colors duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {t('openscope_home.how_we_work.title')}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 mb-10 text-center text-lg leading-relaxed font-medium transition-colors duration-500">
                      {t('openscope_home.how_we_work.description')}
                    </p>

                    <Link
                      href="/about"
                      className="bg-background group-hover:bg-primary text-foreground group-hover:text-primary-foreground border-border/50 inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-8 py-5 text-lg font-bold shadow-sm transition-all duration-500 group-hover:border-transparent hover:scale-[1.02] hover:shadow-xl sm:w-auto"
                    >
                      <span>{t('navbar.about')}</span>
                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
