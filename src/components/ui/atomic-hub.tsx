'use client'

import { useEffect, useState } from 'react'

export function AtomicHub() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const entoriNodes = [
    {
      id: 1,
      top: '15%',
      left: '8%',
      svgX: 80,
      svgY: 60,
      size: 'w-12 h-12 sm:w-16 sm:h-16',
      delay: 0,
    },
    {
      id: 2,
      top: '35%',
      left: '16%',
      svgX: 160,
      svgY: 140,
      size: 'w-16 h-16 sm:w-20 sm:h-20',
      delay: 0.7,
    },
    {
      id: 3,
      top: '65%',
      left: '10%',
      svgX: 100,
      svgY: 260,
      size: 'w-10 h-10 sm:w-14 sm:h-14',
      delay: 1.5,
    },
    {
      id: 4,
      top: '85%',
      left: '18%',
      svgX: 180,
      svgY: 340,
      size: 'w-14 h-14 sm:w-16 sm:h-16',
      delay: 2.2,
    },
  ]

  const wanspotNodes = [
    {
      id: 1,
      top: '12%',
      right: '12%',
      svgX: 880,
      svgY: 48,
      size: 'w-14 h-14 sm:w-16 sm:h-16',
      delay: 0.3,
    },
    {
      id: 2,
      top: '40%',
      right: '8%',
      svgX: 920,
      svgY: 160,
      size: 'w-10 h-10 sm:w-12 sm:h-12',
      delay: 1.1,
    },
    {
      id: 3,
      top: '60%',
      right: '18%',
      svgX: 820,
      svgY: 240,
      size: 'w-16 h-16 sm:w-20 sm:h-20',
      delay: 1.8,
    },
    {
      id: 4,
      top: '88%',
      right: '10%',
      svgX: 900,
      svgY: 352,
      size: 'w-12 h-12 sm:w-14 sm:h-14',
      delay: 2.6,
    },
  ]

  if (!mounted) return <div className="h-[400px] w-full sm:h-[500px]" />

  return (
    <div className="relative mx-auto mt-12 mb-16 h-[400px] w-full max-w-6xl sm:h-[500px]">
      <svg
        viewBox="0 0 1000 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {entoriNodes.map((node) => {
          const pathD = `M ${node.svgX} ${node.svgY} C 350 ${node.svgY}, 350 200, 500 200`

          return (
            <g key={`entori-line-${node.id}`}>
              <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                className="opacity-10 dark:opacity-20"
                strokeWidth="2"
              />
              <path
                d={pathD}
                pathLength="1000"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                className="animate-pulse-line drop-shadow-[0_0_6px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                strokeDasharray="200 1000"
                style={{
                  animationDelay: `${node.delay}s`,
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear',
                }}
              />
            </g>
          )
        })}

        {wanspotNodes.map((node) => {
          const pathD = `M ${node.svgX} ${node.svgY} C 650 ${node.svgY}, 650 200, 500 200`

          return (
            <g key={`wanspot-line-${node.id}`}>
              <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                className="opacity-10 dark:opacity-20"
                strokeWidth="2"
              />
              <path
                d={pathD}
                pathLength="1000"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                className="animate-pulse-line drop-shadow-[0_0_6px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                strokeDasharray="200 1000"
                style={{
                  animationDelay: `${node.delay}s`,
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear',
                }}
              />
            </g>
          )
        })}
      </svg>

      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="bg-background border-border group relative flex h-24 w-24 items-center justify-center rounded-[2rem] border-2 p-4 shadow-2xl sm:h-32 sm:w-32">
          <div className="bg-primary/20 group-hover:bg-primary/40 absolute inset-0 -z-10 rounded-[2rem] blur-xl transition-colors" />
          <img
            src="/img/rakudash/logo.svg"
            alt="Rakudash"
            className="h-full w-full object-contain transition-all dark:invert"
          />
        </div>
      </div>

      {entoriNodes.map((node) => (
        <div
          key={`entori-${node.id}`}
          className={`bg-background border-border absolute z-10 flex items-center justify-center rounded-2xl border p-2 shadow-lg transition-transform hover:-translate-y-1 ${node.size}`}
          style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
        >
          <img
            src="/img/entori/Vector 3.png"
            alt="EnTori"
            className="h-full w-full object-contain transition-all dark:brightness-0 dark:invert"
          />
        </div>
      ))}

      {wanspotNodes.map((node) => (
        <div
          key={`wanspot-${node.id}`}
          className={`bg-background border-border absolute z-10 flex items-center justify-center rounded-2xl border p-2 shadow-lg transition-transform hover:-translate-y-1 ${node.size}`}
          style={{ top: node.top, right: node.right, transform: 'translate(50%, -50%)' }}
        >
          <img
            src="/img/wanspot/logo.svg"
            alt="WanSpot"
            className="h-full w-full object-contain transition-all dark:invert"
          />
        </div>
      ))}
    </div>
  )
}
