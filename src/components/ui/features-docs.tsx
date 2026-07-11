import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PlayCircle, RotateCcw } from 'lucide-react'

type Feature = {
  id: string
  title: string
  description: string
  videoUrl: string
}

type System = {
  id: string
  name: string
  features: Feature[]
}

type TranslationFeature = {
  id: string
  title: string
  desc: string
  videoUrl: string
}

export const FeaturesDocs = () => {
  const { t } = useTranslation()

  const entoriFeatures = t('features.entori', { returnObjects: true }) as TranslationFeature[]
  const rakudashFeatures = t('features.rakudash', { returnObjects: true }) as TranslationFeature[]
  const wanspotFeatures = t('features.wanspot', { returnObjects: true }) as TranslationFeature[]

  const mapFeatures = (features: TranslationFeature[]): Feature[] => {
    return features.map(f => ({
      id: f.id,
      title: f.title,
      description: f.desc,
      videoUrl: f.videoUrl || ''
    }))
  }

  const systemsData: System[] = [
    {
      id: 'entori',
      name: 'EnTori',
      features: mapFeatures(entoriFeatures)
    },
    {
      id: 'rakudash',
      name: 'Rakudash',
      features: mapFeatures(rakudashFeatures)
    },
    {
      id: 'wanspot',
      name: 'WanSpot',
      features: mapFeatures(wanspotFeatures)
    }
  ]

  const [activeSystem, setActiveSystem] = useState<string>(systemsData[0].id)
  const [activeFeature, setActiveFeature] = useState<Feature>(systemsData[0].features[0])
  const [loopCount, setLoopCount] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentFeature =
    systemsData.flatMap((s) => s.features).find((f) => f.id === activeFeature.id) || activeFeature

  useEffect(() => {
    setLoopCount(0)
  }, [activeFeature])

  const handleVideoEnded = () => {
    if (loopCount < 2) {
      setLoopCount((prev) => prev + 1)
      if (videoRef.current) {
        videoRef.current.play()
      }
    }
  }

  const handleManualPlay = () => {
    setLoopCount(0)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-6">
      <div className="mt-8 mb-12 flex flex-col items-center text-center">
        <h1 className="text-foreground z-10 mb-12 text-4xl font-semibold tracking-tight md:text-5xl">
          {t('features.title')}
        </h1>
        <p className="text-muted-foreground z-10 max-w-2xl text-lg">{t('features.subtitle')}</p>
      </div>

      <div className="border-border/40 bg-card z-10 mb-24 flex min-h-[75vh] w-full flex-col overflow-hidden rounded-2xl border shadow-sm lg:flex-row">
        <aside className="border-border/40 bg-muted/10 flex w-full shrink-0 flex-col gap-8 border-b p-6 lg:w-80 lg:border-r lg:border-b-0">
          <div>
            <h2 className="tracking-tighti text-muted-foreground mb-6 mt-8 text-center text-2xl font-bold">
              {t('features.sidebar_title')}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="bg-muted/30 dark:bg-muted/40 border-border/40 flex items-center rounded-2xl border p-1">
                {systemsData.map((system) => {
                  const isSystemActive = activeSystem === system.id
                  return (
                    <button
                      key={system.id}
                      onClick={() => {
                        setActiveSystem(system.id)
                        if (system.features.length > 0) {
                          setActiveFeature(system.features[0])
                        }
                      }}
                      className={`relative flex-1 rounded-xl py-3 text-center text-sm font-medium ${
                        isSystemActive
                          ? 'text-foreground bg-background border-border/50 border font-semibold shadow-sm'
                          : 'text-muted-foreground hover:text-foreground border border-transparent'
                      }`}
                    >
                      {system.name}
                    </button>
                  )
                })}
              </div>

              <nav className="border-border/50 ml-1 flex flex-col gap-1 border-l-2 pl-3">
                {systemsData
                  .find((s) => s.id === activeSystem)
                  ?.features.map((feature) => {
                    const isActive = activeFeature.id === feature.id
                    return (
                      <button
                        key={feature.id}
                        onClick={() => setActiveFeature(feature)}
                        className={`rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {feature.title}
                      </button>
                    )
                  })}
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex flex-1 flex-col p-8 lg:p-12">
          <div className="mb-10 max-w-3xl">
            <h1 className="text-foreground mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {currentFeature.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentFeature.description}
            </p>
          </div>

          <div className="bg-muted border-border/40 group relative flex aspect-[4/3] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl border shadow-sm">
            {currentFeature.videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  key={currentFeature.videoUrl}
                  src={currentFeature.videoUrl}
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  onEnded={handleVideoEnded}
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover dark:brightness-75 transition-all"
                />
                {loopCount >= 2 && (
                  <div
                    className="bg-background/50 group/replay absolute inset-0 z-20 flex cursor-pointer flex-col items-center justify-center backdrop-blur-sm transition-all"
                    onClick={handleManualPlay}
                  >
                    <div className="bg-primary text-primary-foreground rounded-full p-5 shadow-2xl transition-transform group-hover/replay:scale-110">
                      <RotateCcw className="h-10 w-10" />
                    </div>
                    <span className="text-foreground bg-background border-border/50 mt-4 rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm">
                      {t('features.video_replay')}
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-background/40 absolute inset-0 z-10 flex flex-col items-center justify-center backdrop-blur-md transition-all">
                <PlayCircle className="text-primary mb-4 h-16 w-16 opacity-80 transition-transform group-hover:scale-110" />
                <span className="text-foreground text-sm font-medium">
                  {t('features.video_pending')}
                </span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
