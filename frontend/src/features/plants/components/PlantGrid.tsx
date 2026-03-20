import PlantCard from './PlantCard'
import type { Plant } from '../types/plant.types'

type PlantGridProps = {
  plants: Plant[]
  isLoading: boolean
}

const PlantGrid = ({ plants, isLoading }: PlantGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="aspect-[4/3] animate-pulse bg-slate-200/80" />
            <div className="space-y-3 p-5">
              <div className="h-5 w-2/3 animate-pulse rounded-full bg-slate-200/80" />
              <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-200/70" />
              <div className="h-4 w-full animate-pulse rounded-full bg-slate-200/60" />
              <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200/60" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (plants.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-emerald-200 bg-white/65 px-6 py-16 text-center shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
        <h3 className="text-xl font-semibold text-slate-900">No plants found</h3>
        <p className="mt-3 text-sm text-slate-500">
          Try a different name or switch categories to explore more herbs.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  )
}

export default PlantGrid
