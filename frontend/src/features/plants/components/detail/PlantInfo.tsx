import { Heart, MapPin, Sparkles } from 'lucide-react'
import type { PlantDetail } from '../../types/plant.types'

type PlantInfoProps = {
  plant: PlantDetail
  isFavorite: boolean
  onToggleFavorite: () => void
}

const PlantInfo = ({ plant, isFavorite, onToggleFavorite }: PlantInfoProps) => {
  return (
    <section className="rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {plant.category}
          </span>
          {plant.categoryTags && plant.categoryTags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {plant.categoryTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {plant.name}
          </h1>
          {plant.hindiName && (
            <p className="mt-2 text-sm font-medium text-emerald-700">{plant.hindiName}</p>
          )}
          <p className="mt-2 text-lg italic text-slate-500">{plant.scientificName}</p>
          {plant.family && (
            <p className="mt-2 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Family:</span> {plant.family}
            </p>
          )}
          {plant.synonyms && plant.synonyms.length > 0 && (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              <span className="font-semibold text-slate-700">Synonyms:</span>{' '}
              {plant.synonyms.join(', ')}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleFavorite}
          className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
            isFavorite
              ? 'border-rose-200 bg-rose-50 text-rose-600'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          {isFavorite ? 'Saved' : 'Save herb'}
        </button>
      </div>

      <p className="mt-5 text-base leading-8 text-slate-600">{plant.tagline}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Description
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{plant.description}</p>
        </div>

        <div className="rounded-[24px] bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Region
          </p>
          <div className="mt-2 flex items-start gap-2 text-sm leading-7 text-slate-700">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
            <span>{plant.region ?? 'Not specified'}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[22px] bg-slate-50 px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Parts Used
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{plant.partsUsed.join(', ')}</p>
        </div>
        <div className="rounded-[22px] bg-slate-50 px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quick Summary
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{plant.summary}</p>
        </div>
      </div>

      <div className="mt-6 rounded-[24px] bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-2">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              AI Assist
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Use AI to explain this herb in plain language.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 inline-flex items-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
        >
          Explain this herb
        </button>
      </div>
    </section>
  )
}

export default PlantInfo
