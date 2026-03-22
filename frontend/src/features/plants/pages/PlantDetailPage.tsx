import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, ArrowLeft, ChevronRight, Leaf, LibraryBig, Sparkles } from 'lucide-react'
import Footer from '../../home/components/Footer'
import { fetchPlantById } from '../api/fetchPlantById'
import BenefitSection from '../components/detail/BenefitSection'
import PlantDetailSections from '../components/detail/PlantDetailSections'
import PlantImage from '../components/detail/PlantImage'
import PlantInfo from '../components/detail/PlantInfo'
import UseList from '../components/detail/UseList'
import type { PlantDetail } from '../types/plant.types'

const getPlantIdFromPath = () => {
  const segments = window.location.pathname.split('/').filter(Boolean)
  return segments[segments.length - 1] ?? ''
}

type NavItem = {
  id: string
  label: string
}

const PlantDetailSkeleton = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/75 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="aspect-[4/5] animate-pulse rounded-[28px] bg-slate-200/80" />
      </div>

      <div className="space-y-6">
        <div className="rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="h-7 w-28 animate-pulse rounded-full bg-emerald-100" />
          <div className="mt-5 h-12 w-3/4 animate-pulse rounded-full bg-slate-200/80" />
          <div className="mt-3 h-6 w-1/2 animate-pulse rounded-full bg-slate-200/70" />
          <div className="mt-6 h-24 animate-pulse rounded-[24px] bg-slate-200/60" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="h-36 animate-pulse rounded-[24px] bg-slate-200/60" />
            <div className="h-36 animate-pulse rounded-[24px] bg-slate-200/60" />
          </div>
          <div className="mt-5 h-28 animate-pulse rounded-[24px] bg-slate-900/10" />
        </div>
      </div>
    </div>
  )
}

const PlantDetailPage = () => {
  const [plant, setPlant] = useState<PlantDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeSection, setActiveSection] = useState('benefits')
  const plantId = getPlantIdFromPath()

  const navItems = useMemo<NavItem[]>(() => {
    if (!plant) {
      return []
    }

    return [
      { id: 'benefits', label: 'Benefits' },
      { id: 'uses', label: 'Uses' },
      ...(plant.overview ? [{ id: 'overview', label: 'Overview' }] : []),
      ...(plant.identification ? [{ id: 'identification', label: 'Identification' }] : []),
      ...(plant.snapshot ? [{ id: 'snapshot', label: 'Snapshot' }] : []),
      ...(plant.clinicalIndications?.length ? [{ id: 'clinical', label: 'Clinical' }] : []),
      ...(plant.doshaInteraction ? [{ id: 'dosha', label: 'Dosha' }] : []),
      ...(plant.dravyagunaBreakdown?.length ? [{ id: 'dravyaguna', label: 'Dravyaguna' }] : []),
      ...(plant.classicalReferences?.length ||
      plant.classicalFormulations?.length ||
      plant.modernResearch?.length
        ? [{ id: 'references', label: 'References' }]
        : []),
      ...(plant.safetyDosage ? [{ id: 'safety', label: 'Safety' }] : []),
    ]
  }, [plant])

  useEffect(() => {
    const controller = new AbortController()

    const loadPlant = async () => {
      try {
        setIsLoading(true)
        setErrorMessage('')
        const plantData = await fetchPlantById(plantId, controller.signal)
        setPlant(plantData)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setPlant(null)
        setErrorMessage('Unable to load plant details right now. Please try again shortly.')
      } finally {
        setIsLoading(false)
      }
    }

    if (!plantId) {
      setErrorMessage('Missing plant identifier in the URL.')
      setIsLoading(false)
      return
    }

    void loadPlant()

    return () => controller.abort()
  }, [plantId])

  useEffect(() => {
    if (navItems.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0.1, 0.25, 0.4],
      },
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [navItems])

  const handleSectionClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.20),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_20%),linear-gradient(180deg,_#f5fbf8_0%,_#edf6f2_45%,_#f8fafc_100%)] text-slate-900">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {isLoading && <PlantDetailSkeleton />}

        {!isLoading && errorMessage && (
          <div className="rounded-[32px] border border-rose-100 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-rose-50 p-3 text-rose-500">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-950">Plant details unavailable</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {!isLoading && plant && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="sticky top-0 z-40">
              <div className="rounded-3xl border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,251,247,0.82))] px-4 py-4 shadow-lg shadow-slate-950/8 backdrop-blur-2xl sm:px-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <a
                        href="/plants"
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950 hover:shadow-md"
                        aria-label="Back to Plants"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </a>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                            <Leaf className="h-3.5 w-3.5" />
                            Herbal Garden
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                          <span className="truncate">{plant.category}</span>
                        </div>

                        <div className="mt-2 flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                          <h1 className="truncate text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                            {plant.name}
                          </h1>
                          <p className="truncate text-sm italic text-slate-500">
                            {plant.scientificName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                        <LibraryBig className="h-3.5 w-3.5 text-emerald-600" />
                        Detail Reference
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSectionClick('clinical')}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        Jump to Clinical
                      </button>
                    </div>
                  </div>

                  {navItems.length > 0 && (
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[rgba(248,252,249,0.96)] to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[rgba(248,252,249,0.96)] to-transparent" />

                      <div className="scrollbar-hide flex gap-2 overflow-x-auto rounded-2xl border border-white/80 bg-white/70 p-2 shadow-inner shadow-slate-950/5">
                        {navItems.map((item) => {
                          const isActive = activeSection === item.id

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleSectionClick(item.id)}
                              className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                                isActive
                                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                                  : 'bg-transparent text-slate-500 hover:bg-white hover:text-slate-950'
                              }`}
                            >
                              {item.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
              <PlantImage image={plant.image} name={plant.name} gallery={plant.images} />
              <PlantInfo
                plant={plant}
                isFavorite={isFavorite}
                onToggleFavorite={() => setIsFavorite((current) => !current)}
              />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:gap-8">
              <BenefitSection benefits={plant.benefits} />
              <UseList uses={plant.uses} />
            </div>

            <PlantDetailSections plant={plant} />
          </motion.div>
        )}
      </div>

      <Footer learningMode="Student" />
    </div>
  )
}

export default PlantDetailPage
