import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, ArrowLeft, Leaf } from 'lucide-react'
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
  const plantId = getPlantIdFromPath()

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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.20),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_20%),linear-gradient(180deg,_#f5fbf8_0%,_#edf6f2_45%,_#f8fafc_100%)] text-slate-900">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <a
            href="/plants"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Plants
          </a>

          <div className="hidden items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:inline-flex">
            <Leaf className="h-4 w-4" />
            Herbal Garden
          </div>
        </div>

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
            className="space-y-6"
          >
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <PlantImage image={plant.image} name={plant.name} gallery={plant.images} />
              <PlantInfo
                plant={plant}
                isFavorite={isFavorite}
                onToggleFavorite={() => setIsFavorite((current) => !current)}
              />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <BenefitSection benefits={plant.benefits} />
              <UseList uses={plant.uses} />
            </div>

            <PlantDetailSections plant={plant} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default PlantDetailPage
