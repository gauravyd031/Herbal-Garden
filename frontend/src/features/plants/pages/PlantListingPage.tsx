import { useEffect, useState } from 'react'
import { fetchPlants } from '../api/fetchPlants'
import FilterPanel from '../components/FilterPanel'
import PlantGrid from '../components/PlantGrid'
import SearchBar from '../components/SearchBar'
import type { Plant, PlantCategory } from '../types/plant.types'

const PlantListingPage = () => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>('All')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const loadPlants = async () => {
      try {
        setIsLoading(true)
        const response = await fetchPlants({ signal: controller.signal })
        setPlants(response)
        setFilteredPlants(response)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setPlants([])
        setFilteredPlants([])
      } finally {
        setIsLoading(false)
      }
    }

    void loadPlants()

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    const nextPlants = plants.filter((plant) => {
      const matchesSearch = plant.name.toLowerCase().includes(normalizedQuery)
      const matchesCategory =
        selectedCategory === 'All' || plant.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    setFilteredPlants(nextPlants)
  }, [plants, searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_22%),linear-gradient(180deg,_#f4fbf7_0%,_#eef8f3_40%,_#f8fafc_100%)] text-slate-900">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/55 px-5 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-8 sm:py-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Herbal Garden
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Discover plants for modern herbal exploration
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Browse a curated plant catalog with responsive filters, search, and a card
                layout designed to scale into an API-backed herbal dashboard.
              </p>
            </div>

            <div className="w-full max-w-xl">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <FilterPanel
              activeCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-3 rounded-[28px] border border-white/70 bg-white/75 px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {isLoading ? 'Loading plants...' : `${filteredPlants.length} plants found`}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Search is case-insensitive and category filters apply instantly.
                </p>
              </div>
              <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {selectedCategory === 'All' ? 'All categories' : selectedCategory}
              </div>
            </div>

            <PlantGrid plants={filteredPlants} isLoading={isLoading} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default PlantListingPage
