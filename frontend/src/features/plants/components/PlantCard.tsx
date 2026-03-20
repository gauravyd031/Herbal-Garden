import { ImageWithFallback } from '../../../shared/ui/ImageWithFallback'
import type { Plant } from '../types/plant.types'

type PlantCardProps = {
  plant: Plant
}

const fallbackImage =
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80'

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <a
      href={`/plant/${plant.id}`}
      className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/85 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={plant.image}
          fallbackSrc={fallbackImage}
          alt={plant.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/45 to-transparent" />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{plant.name}</h3>
            <p className="text-sm italic text-slate-500">{plant.scientificName}</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {plant.category}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-600">{plant.summary}</p>
      </div>
    </a>
  )
}

export default PlantCard
