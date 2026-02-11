import { AlertCircle, ChevronRight, ScrollText, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { featuredHerbs } from './data'

type FeaturedHerbsProps = {
  searchQuery: string
  activeFilter: string
  activeDisease: string
  learningMode: 'Patient' | 'Student'
}

const filterHerbs = (
  herb: (typeof featuredHerbs)[number],
  searchQuery: string,
  activeFilter: string,
  activeDisease: string,
) => {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const matchesQuery =
    !normalizedQuery ||
    herb.name.toLowerCase().includes(normalizedQuery) ||
    herb.sanskritName.toLowerCase().includes(normalizedQuery) ||
    herb.latinName.toLowerCase().includes(normalizedQuery) ||
    herb.rasa.toLowerCase().includes(normalizedQuery) ||
    herb.guna.toLowerCase().includes(normalizedQuery) ||
    herb.doshaEffect.toLowerCase().includes(normalizedQuery) ||
    herb.tags.some((tag) => tag.includes(normalizedQuery))

  const matchesDisease = !activeDisease || herb.diseases.includes(activeDisease)

  const matchesFilter =
    !activeFilter ||
    (activeFilter === 'Dosha focused' && herb.doshaEffect.length > 0) ||
    (activeFilter === 'Classical reference' && herb.classicalReference.length > 0) ||
    (activeFilter === 'Evidence-backed' && herb.evidence.length > 0) ||
    (activeFilter === 'Revision friendly' && herb.rasa.length > 0 && herb.guna.length > 0)

  return matchesQuery && matchesDisease && matchesFilter
}

const FeaturedHerbs = ({
  searchQuery,
  activeFilter,
  activeDisease,
  learningMode,
}: FeaturedHerbsProps) => {
  const visibleHerbs = featuredHerbs.filter((herb) =>
    filterHerbs(herb, searchQuery, activeFilter, activeDisease),
  )
  const suggestedHerbs =
    visibleHerbs.length > 0 ? visibleHerbs.slice(0, 2) : featuredHerbs.slice(0, 2)

  const suggestionReason = activeDisease
    ? `Suggested because you explored ${activeDisease}`
    : searchQuery.trim()
      ? `Suggested because you searched "${searchQuery.trim()}"`
      : learningMode === 'Student'
        ? 'Suggested from high-yield student learning herbs'
        : 'Suggested from popular trusted herbs'

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 space-y-4 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white sm:text-5xl">
            {learningMode === 'Student' ? 'Academic Herb Intelligence' : 'Popular Medicinal Herbs'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {learningMode === 'Student'
              ? 'Structured medicinal plant profiles for student revision and clinical learning'
              : "Discover nature's healing power"}
          </p>
        </motion.div>

        <div className="mb-8 rounded-3xl border border-emerald-300/40 bg-white/65 p-5 backdrop-blur-2xl dark:border-emerald-200/20 dark:bg-slate-900/45 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
                {learningMode === 'Student' ? `Suggested for ${learningMode} mode` : 'Suggested for you'}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {suggestionReason}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedHerbs.map((herb) => (
                <span
                  key={herb.id}
                  className="rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-900/40 dark:text-emerald-100"
                >
                  {herb.sanskritName}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(visibleHerbs.length > 0 ? visibleHerbs : featuredHerbs).map((herb, index) => (
            <motion.article
              key={herb.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`group relative ${herb.bentoSpan}`}
            >
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-700/35 to-teal-700/30 opacity-0 blur-lg transition-opacity group-hover:opacity-90" />
              <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/35 shadow-2xl backdrop-blur-3xl dark:border-emerald-100/20 dark:bg-slate-900/50">
                <div className="h-52 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.24 }}>
                    <ImageWithFallback
                      src={herb.image}
                      alt={herb.name}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="space-y-4 bg-white/60 p-6 backdrop-blur-xl dark:bg-slate-900/50">
                  {learningMode === 'Student' ? (
                    <>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {herb.name}
                        </h3>
                        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                          Sanskrit: {herb.sanskritName}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          Botanical: {herb.latinName}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-300/40 bg-emerald-50/80 px-3 py-2 text-xs font-medium text-emerald-900 dark:border-emerald-300/25 dark:bg-emerald-900/35 dark:text-emerald-100">
                        <span className="inline-flex items-center gap-1 font-semibold">
                          <ScrollText className="h-3.5 w-3.5" />
                          Classical Reference
                        </span>
                        <p className="mt-1">{herb.classicalReference}</p>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{herb.name}</h3>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {herb.benefit}
                      </p>
                    </div>
                  )}

                  {learningMode === 'Student' ? (
                    <div className="grid gap-2 text-xs text-slate-700 dark:text-slate-200 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Rasa</p>
                        <p>{herb.rasa}</p>
                      </div>
                      <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Guna</p>
                        <p>{herb.guna}</p>
                      </div>
                      <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Virya</p>
                        <p>{herb.virya}</p>
                      </div>
                      <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Vipaka</p>
                        <p>{herb.vipaka}</p>
                      </div>
                      <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70 sm:col-span-2">
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Dosha Effect</p>
                        <p>{herb.doshaEffect}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-white/60 bg-white/75 p-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200">
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">Clinical overview</p>
                      <p className="mt-1">{herb.benefit}</p>
                    </div>
                  )}

                  <div className="grid gap-2 text-xs text-slate-700 dark:text-slate-200 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/60 bg-white/75 p-2 dark:border-white/10 dark:bg-slate-800/70">
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">Evidence</p>
                      <p>{herb.evidence}</p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-2 dark:border-amber-300/40 dark:bg-amber-900/20">
                      <p className="font-semibold text-amber-700 dark:text-amber-300">Caution</p>
                      <p>{herb.caution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-900/40 dark:text-emerald-100">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Trust-first profile
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-300/40 dark:bg-amber-900/20 dark:text-amber-200">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Safety checked
                    </span>
                  </div>

                  <button className="ripple-btn inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
                    Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedHerbs
