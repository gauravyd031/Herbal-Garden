import {
  ArrowRight,
  BookOpenText,
  Heart,
  Leaf,
  Microscope,
  ShieldPlus,
  Sparkles,
} from 'lucide-react'
import { ImageWithFallback } from '../../../../shared/ui/ImageWithFallback'
import { Badge } from '../../../../shared/ui/badge'
import type { PlantDetail } from '../../types/plant.types'

type PlantDetailHeroProps = {
  plant: PlantDetail
  isFavorite: boolean
  onToggleFavorite: () => void
  onNavigate: (sectionId: string) => void
}

const fallbackImage =
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80'

const PlantDetailHero = ({
  plant,
  isFavorite,
  onToggleFavorite,
  onNavigate,
}: PlantDetailHeroProps) => {
  const englishNames = (plant.synonyms ?? []).slice(0, 3).join(', ')

  return (
    <section
      id="hero"
      className="overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(244,248,241,0.76))] shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
    >
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.14),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_28%)]" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
                <Leaf className="mr-1.5 h-3.5 w-3.5" />
                {plant.category}
              </Badge>
              {plant.family ? (
                <Badge className="border-stone-200 bg-stone-50 text-stone-700">
                  Family: {plant.family}
                </Badge>
              ) : null}
              {englishNames ? (
                <Badge className="border-slate-200 bg-white/80 text-slate-600">
                  English names: {englishNames}
                </Badge>
              ) : null}
            </div>

            <div className="mt-6 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                Herbal Intelligence
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {plant.name}
              </h1>
              <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
                {plant.hindiName ?? plant.name}
                <span className="mx-2 text-slate-300">•</span>
                <span className="italic">{plant.scientificName}</span>
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                {plant.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('clinical')}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Sparkles className="h-4 w-4" />
                Explore Benefits
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('research')}
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-white/85 px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Microscope className="h-4 w-4" />
                View Research
              </button>
              <button
                type="button"
                onClick={onToggleFavorite}
                className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  isFavorite
                    ? 'border-rose-200 bg-rose-50 text-rose-600'
                    : 'border-slate-200 bg-white/85 text-slate-700'
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Saved' : 'Save Plant'}
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <BookOpenText className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Ayurvedic Lens</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{plant.tagline}</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <ShieldPlus className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Parts Used</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{plant.partsUsed.join(', ')}</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Microscope className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Region</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{plant.region ?? 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-stretch p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_26%),radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.12),transparent_24%)]" />
          <div className="relative flex w-full overflow-hidden rounded-[24px] border border-white/80 bg-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <ImageWithFallback
              src={plant.images?.wholePlant ?? plant.image}
              fallbackSrc={fallbackImage}
              alt={plant.name}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlantDetailHero
