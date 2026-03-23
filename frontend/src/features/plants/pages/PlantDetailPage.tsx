import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import Footer from '../../home/components/Footer'
import { fetchPlantById } from '../api/fetchPlantById'
import PlantDetailSections from '../components/detail/PlantDetailSections'
import PlantDetailHero from '../components/detail/PlantDetailHero'
import PlantDetailSectionNav from '../components/detail/PlantDetailSectionNav'
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
    <div className="space-y-6">
      <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="h-6 w-32 animate-pulse rounded-full bg-emerald-100" />
            <div className="h-14 w-2/3 animate-pulse rounded-full bg-slate-200/80" />
            <div className="h-6 w-1/2 animate-pulse rounded-full bg-slate-200/70" />
            <div className="h-28 animate-pulse rounded-3xl bg-slate-200/60" />
            <div className="flex gap-3">
              <div className="h-12 w-40 animate-pulse rounded-2xl bg-slate-200/70" />
              <div className="h-12 w-40 animate-pulse rounded-2xl bg-slate-200/70" />
            </div>
          </div>
          <div className="aspect-[4/3] animate-pulse rounded-[24px] bg-slate-200/80" />
        </div>
      </div>
      <div className="h-16 animate-pulse rounded-[24px] bg-white/70 shadow-sm" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-[24px] border border-white/70 bg-white/75 shadow-sm"
          />
        ))}
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
      ...(plant.identification ? [{ id: 'identification', label: 'Identification' }] : []),
      ...(plant.snapshot ? [{ id: 'snapshot', label: 'Snapshot' }] : []),
      ...(plant.overview ? [{ id: 'overview', label: 'Overview' }] : []),
      ...(plant.clinicalIndications?.length ? [{ id: 'clinical', label: 'Clinical' }] : []),
      ...(plant.doshaInteraction ? [{ id: 'dosha', label: 'Dosha' }] : []),
      ...(plant.dravyagunaBreakdown?.length ? [{ id: 'dravyaguna', label: 'Dravyaguna' }] : []),
      ...(plant.classicalReferences?.length ? [{ id: 'references', label: 'References' }] : []),
      ...(plant.classicalFormulations?.length ? [{ id: 'formulations', label: 'Formulations' }] : []),
      ...(plant.modernResearch?.length ? [{ id: 'research', label: 'Research' }] : []),
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
            <PlantDetailHero
              plant={plant}
              isFavorite={isFavorite}
              onToggleFavorite={() => setIsFavorite((current) => !current)}
              onNavigate={handleSectionClick}
            />
            <PlantDetailSectionNav
              items={navItems}
              activeSection={activeSection}
              onNavigate={handleSectionClick}
            />
            <PlantDetailSections plant={plant} />
          </motion.div>
        )}
      </div>

      <Footer learningMode="Student" />
    </div>
  )
}

export default PlantDetailPage
