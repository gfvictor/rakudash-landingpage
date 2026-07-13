'use client'

import { Navbar, FeaturesDocs, NeuralNetworkBackground, Footer } from '@/ui'

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground flex min-h-screen flex-col items-center">
        <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-12 pb-24">
          <div className="from-primary/[0.02] dark:from-primary/5 pointer-events-none absolute inset-0 z-0 bg-gradient-to-b via-transparent to-transparent"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute top-1/4 -left-20 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute -right-20 bottom-1/4 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <NeuralNetworkBackground />

          <div className="relative z-10 w-full">
            <FeaturesDocs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

