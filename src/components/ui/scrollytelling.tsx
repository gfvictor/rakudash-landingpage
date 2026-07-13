'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Database,
  AlertTriangle,
  FileSpreadsheet,
  XCircle,
  ArrowRightLeft,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  PieChart,
} from 'lucide-react'

const ExcelChaos = () => (
  <div className="bg-background border-border relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border p-6 shadow-xl">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }}
    ></div>

    <div className="dark:bg-primary/60 border-border dark:border-primary/40 absolute top-4 left-4 flex h-48 w-32 rotate-[-12deg] flex-col rounded-md border bg-white p-3 shadow-lg sm:left-8 sm:h-56 sm:w-40">
      <div className="bg-muted mb-4 h-2.5 w-16 rounded" />
      <div className="bg-muted mb-1 h-1.5 w-10 rounded" />
      <div className="bg-muted/30 border-border/50 mb-3 h-4 w-full rounded border" />
      <div className="bg-muted mb-1 h-1.5 w-14 rounded" />
      <div className="bg-muted/30 border-border/50 mb-3 h-4 w-full rounded border" />
      <div className="mb-4 flex gap-2">
        <div className="flex-1">
          <div className="bg-muted mb-1 h-1.5 w-8 rounded" />
          <div className="bg-muted/30 border-border/50 h-4 w-full rounded border" />
        </div>
        <div className="flex-1">
          <div className="bg-muted mb-1 h-1.5 w-8 rounded" />
          <div className="bg-muted/30 border-border/50 h-4 w-full rounded border" />
        </div>
      </div>
      <div className="bg-primary/30 dark:bg-primary/80 mt-auto flex h-6 w-full items-center justify-center rounded">
        <div className="bg-primary/80 dark:bg-primary-foreground/80 h-1.5 w-8 rounded" />
      </div>
    </div>

    <div className="bg-background absolute right-2 bottom-8 flex h-40 w-48 rotate-[8deg] flex-col rounded-lg border border-red-500/40 p-3 shadow-xl sm:right-4 sm:w-56">
      <div className="mb-3 flex items-center gap-2">
        <FileSpreadsheet className="h-4 w-4 text-red-500" />
        <div className="h-2 w-16 rounded bg-red-200 dark:bg-red-900" />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-1.5 flex gap-2">
          <div className="h-4 w-full rounded bg-red-100 dark:bg-red-900/30" />
          <div className="bg-muted/50 h-4 w-full rounded" />
        </div>
      ))}
      <div className="absolute -top-4 -right-4">
        <AlertTriangle className="fill-background h-10 w-10 animate-bounce text-red-500" />
      </div>
    </div>

    <div className="bg-background/80 z-10 animate-pulse rounded-full border border-red-500/30 p-4 shadow-2xl backdrop-blur-md">
      <XCircle className="h-12 w-12 text-red-500" />
    </div>
  </div>
)

const RakudashDashboard = () => (
  <div className="bg-background border-primary/30 relative flex h-full w-full flex-col overflow-hidden rounded-2xl border shadow-[0_0_40px_rgba(var(--primary),0.1)]">
    <div className="border-border bg-muted/10 flex h-12 w-full items-center justify-between border-b px-4">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="bg-muted h-3 w-24 rounded" />
    </div>

    <div className="border-border bg-muted/5 absolute top-12 bottom-0 left-0 flex w-12 flex-col items-center gap-2 border-r py-4 sm:w-16">
      <img src="/img/rakudash/logo.svg" alt="Rakudash" className="mb-4 w-6 sm:w-8 dark:invert" />

      <div className="bg-muted mb-1 flex h-8 w-8 items-center justify-center rounded-lg sm:h-10 sm:w-10">
        <LayoutDashboard className="text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="mb-1 flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
        <Users className="text-muted-foreground/50 h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="mb-1 flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
        <FileText className="text-muted-foreground/50 h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="mb-1 flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
        <PieChart className="text-muted-foreground/50 h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="mt-auto flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
        <Settings className="text-muted-foreground/50 h-4 w-4 sm:h-5 sm:w-5" />
      </div>
    </div>

    <div className="absolute top-12 right-0 bottom-0 left-12 flex flex-col gap-4 p-4 sm:left-16 sm:p-6">
      <div className="flex w-full items-center justify-between">
        <div className="bg-muted/30 h-6 w-32 rounded-md sm:h-8 sm:w-48" />
        <div className="bg-muted/50 h-8 w-8 rounded-full sm:h-10 sm:w-10" />
      </div>

      <div className="flex w-full flex-1 flex-col gap-4">
        <div className="flex w-full gap-4">
          <div className="border-border from-muted/50 flex h-20 flex-1 flex-col justify-between rounded-xl border bg-gradient-to-br to-transparent p-3 sm:h-24 sm:p-4">
            <div className="bg-foreground/50 mb-auto h-3 w-16 rounded sm:h-4" />
            <div className="mt-2 flex w-full gap-2">
              <div className="flex h-4 flex-1 items-center justify-center rounded border border-neutral-700 bg-neutral-800 sm:h-6 dark:bg-neutral-900">
                <div className="h-1 w-6 rounded-sm bg-neutral-400" />
              </div>
              <div className="flex h-4 flex-1 items-center justify-center rounded border border-red-500/30 bg-red-500/10 sm:h-6">
                <div className="h-1 w-6 rounded-sm bg-red-500/70" />
              </div>
            </div>
          </div>
          <div className="border-border flex h-20 flex-1 flex-col justify-between rounded-xl border p-3 sm:h-24 sm:p-4">
            <div className="bg-foreground/50 mb-auto h-3 w-16 rounded sm:h-4" />
            <div className="mt-2 flex w-full gap-2">
              <div className="flex h-4 flex-1 items-center justify-center rounded border border-neutral-700 bg-neutral-800 sm:h-6 dark:bg-neutral-900">
                <div className="h-1 w-6 rounded-sm bg-neutral-400" />
              </div>
              <div className="flex h-4 flex-1 items-center justify-center rounded border border-red-500/30 bg-red-500/10 sm:h-6">
                <div className="h-1 w-6 rounded-sm bg-red-500/70" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-border bg-muted/5 relative flex flex-1 items-end justify-center overflow-hidden rounded-xl border p-0">
          <svg
            className="absolute bottom-0 h-[80%] w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 L0,80 S15,20 30,50 S45,90 60,40 S75,10 85,30 S95,80 100,20 L100,100 Z"
              fill="currentColor"
              className="text-muted-foreground/10"
            />
            <path
              d="M0,80 S15,20 30,50 S45,90 60,40 S75,10 85,30 S95,80 100,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-muted-foreground/60"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
)

const EcosystemView = () => (
  <div className="relative flex h-full w-full items-center justify-center gap-2 sm:gap-6">
    <div className="pointer-events-none absolute inset-0 flex -translate-y-4 items-center justify-center sm:-translate-y-6">
      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-neutral-200 sm:h-64 sm:w-64 dark:bg-neutral-800/50">
        <div className="h-32 w-32 rounded-full bg-neutral-300 sm:h-48 sm:w-48 dark:bg-neutral-700/50" />
      </div>
    </div>

    <div className="bg-background relative z-10 flex h-40 w-20 shrink-0 translate-y-6 flex-col items-center overflow-hidden rounded-[1.5rem] border-[3px] border-neutral-300 shadow-xl transition-transform hover:-translate-y-2 sm:h-56 sm:w-28 sm:translate-y-8 dark:border-neutral-700">
      <div className="absolute top-0 left-1/2 h-3 w-10 -translate-x-1/2 rounded-b-lg bg-neutral-300 dark:bg-neutral-700" />
      <div className="flex w-full flex-1 flex-col items-center gap-2 px-2 pt-8 pb-2 sm:gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-xl p-2 sm:h-12 sm:w-12">
          <img
            src="/img/entori/Vector 3.png"
            alt="EnTori"
            className="h-full w-full object-contain dark:invert"
          />
        </div>
        <div className="bg-muted h-1.5 w-12 rounded-full sm:h-2 sm:w-16" />
        <div className="bg-muted h-1.5 w-8 rounded-full sm:h-2 sm:w-12" />
        <div className="bg-muted/40 mt-auto h-4 w-12 rounded-md sm:h-6 sm:w-16" />
      </div>
      <div className="mb-2 h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-600" />
    </div>

    <div className="bg-background border-border z-20 flex h-36 w-44 shrink-0 -translate-y-4 flex-col overflow-hidden rounded-xl border shadow-[0_0_40px_rgba(var(--primary),0.2)] transition-transform hover:scale-105 sm:h-52 sm:w-64 sm:-translate-y-6 dark:border-neutral-700">
      <div className="bg-muted/30 border-border flex h-6 w-full items-center gap-1.5 border-b px-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6">
        <img
          src="/img/rakudash/logo.svg"
          alt="Rakudash"
          className="mb-2 h-auto w-24 sm:w-32 dark:invert"
        />
        <div className="mt-auto flex w-full justify-center gap-2">
          <div className="bg-muted/40 flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
            <ArrowRightLeft className="text-muted-foreground h-3 w-3 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-background relative z-10 flex h-40 w-20 shrink-0 translate-y-6 flex-col items-center overflow-hidden rounded-[1.5rem] border-[3px] border-neutral-300 shadow-xl transition-transform hover:-translate-y-2 sm:h-56 sm:w-28 sm:translate-y-8 dark:border-neutral-700">
      <div className="absolute top-0 left-1/2 h-3 w-10 -translate-x-1/2 rounded-b-lg bg-neutral-300 dark:bg-neutral-700" />
      <div className="flex w-full flex-1 flex-col items-center gap-2 px-2 pt-8 pb-2 sm:gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-xl p-2 sm:h-12 sm:w-12">
          <img
            src="/img/wanspot/logo.svg"
            alt="WanSpot"
            className="h-full w-full object-contain dark:invert"
          />
        </div>
        <div className="bg-muted h-1.5 w-12 rounded-full sm:h-2 sm:w-16" />
        <div className="bg-muted h-1.5 w-8 rounded-full sm:h-2 sm:w-12" />
        <div className="bg-muted/40 mt-auto h-4 w-12 rounded-md sm:h-6 sm:w-16" />
      </div>
      <div className="mb-2 h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-600" />
    </div>

    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 500 300"
      preserveAspectRatio="none"
    >
      <path
        d="M 80 180 C 160 180, 170 100, 250 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        className="text-primary/70 animate-[pulse-line_40s_linear_infinite]"
      />
      <path
        d="M 80 200 C 160 200, 170 120, 250 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        className="text-primary/70 animate-[pulse-line_40s_linear_infinite_reverse]"
      />

      <path
        d="M 420 180 C 340 180, 330 100, 250 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        className="text-primary/70 animate-[pulse-line_40s_linear_infinite]"
      />
      <path
        d="M 420 200 C 340 200, 330 120, 250 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        className="text-primary/70 animate-[pulse-line_40s_linear_infinite_reverse]"
      />
    </svg>
  </div>
)

export function Scrollytelling() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  const steps = [
    {
      id: 0,
      title: t('scrolly.step1_title'),
      description: t('scrolly.step1_desc'),
    },
    {
      id: 1,
      title: t('scrolly.step2_title'),
      description: t('scrolly.step2_desc'),
    },
    {
      id: 2,
      title: t('scrolly.step3_title'),
      description: t('scrolly.step3_desc'),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const scrollPosition = -top

      const stepHeight = window.innerHeight

      if (scrollPosition < 0) {
        setActiveStep(0)
      } else if (scrollPosition >= height - stepHeight) {
        setActiveStep(steps.length - 1)
      } else {
        const current = Math.floor((scrollPosition + stepHeight * 0.5) / stepHeight)
        setActiveStep(Math.min(current, steps.length - 1))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [steps.length])

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] w-full flex-col overflow-hidden md:flex-row">
        <div className="flex h-1/2 w-full items-center justify-center p-6 md:h-full md:w-1/2 md:p-16">
          <div className="relative h-40 w-full max-w-lg md:h-64">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                  activeStep === index
                    ? 'z-10 translate-y-0 opacity-100'
                    : activeStep > index
                      ? 'pointer-events-none z-0 -translate-y-12 opacity-0'
                      : 'pointer-events-none z-0 translate-y-12 opacity-0'
                }`}
              >
                <h3 className="text-foreground mb-12 text-center text-3xl font-semibold tracking-tight whitespace-pre-line md:text-5xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center font-medium text-xl leading-relaxed md:text-2xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/10 border-border/40 flex h-1/2 w-full items-center justify-center border-l p-6 md:h-full md:w-1/2 md:p-16">
          <div className="relative flex aspect-video w-full max-w-lg items-center justify-center md:aspect-square">
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${activeStep === 0 ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'}`}
            >
              <ExcelChaos />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${activeStep === 1 ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'}`}
            >
              <RakudashDashboard />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ${activeStep === 2 ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'}`}
            >
              <EcosystemView />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
