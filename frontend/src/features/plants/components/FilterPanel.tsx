import { plantCategories } from '../data/plants.mock'
import type { PlantCategory } from '../types/plant.types'

type FilterPanelProps = {
  activeCategory: PlantCategory
  onCategoryChange: (category: PlantCategory) => void
}

const FilterPanel = ({ activeCategory, onCategoryChange }: FilterPanelProps) => {
  return (
    <aside className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Filters
        </p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Browse by category</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Narrow the collection to quickly explore medicinal plants, culinary herbs, and roots.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 lg:flex-col">
        {plantCategories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
                  : 'bg-emerald-50 text-slate-700 hover:bg-emerald-100'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </aside>
  )
}

export default FilterPanel
