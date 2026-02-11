import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { diseases } from './data'

type DiseaseFilterProps = {
  activeDisease: string
  onSelectDisease: (value: string) => void
}

const DiseaseFilter = ({ activeDisease, onSelectDisease }: DiseaseFilterProps) => {
  const bentoSizes = ['sm:col-span-2 lg:col-span-3', 'sm:col-span-1 lg:col-span-2']

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-5xl font-bold text-transparent dark:from-emerald-200 dark:to-teal-200">
            Find Herbs by Disease
          </h2>
        </motion.div>

        {/* Disease Bento Filters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {diseases.map((disease, index) => (
            <motion.button
              key={disease}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectDisease(disease)}
              aria-pressed={activeDisease === disease}
              className={`relative group text-left ${bentoSizes[index % bentoSizes.length]}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 blur-md opacity-0 transition-opacity group-hover:opacity-35" />
              <div
                className={`relative rounded-2xl border px-6 py-5 shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  activeDisease === disease
                    ? 'border-emerald-300/60 bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'border-white/35 bg-white/25 text-emerald-800 backdrop-blur-2xl hover:bg-white/45 dark:border-emerald-100/20 dark:bg-slate-900/35 dark:text-emerald-100 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold">{disease}</p>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                      activeDisease === disease ? 'text-white/90' : 'text-emerald-600 dark:text-emerald-300'
                    }`}
                  />
                </div>
                <p
                  className={`mt-1 text-xs ${
                    activeDisease === disease ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Instant herbal guidance and trusted options
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiseaseFilter
