import { Flower2, Leaf, Sprout, TreePine, Waves } from 'lucide-react'
import { motion } from 'framer-motion'
import type { HerbData, PlantPart } from '../../types/herb.types'

type HerbHeroProps = {
  herbData: HerbData
  selectedPart: PlantPart
  onSelectPart: (part: PlantPart) => void
  plantPartLabels: { key: PlantPart; label: string }[]
}

const HerbHero = ({ herbData, selectedPart, onSelectPart, plantPartLabels }: HerbHeroProps) => {
  const partIconMap = {
    fullPlant: TreePine,
    root: Waves,
    leaf: Leaf,
    flower: Flower2,
    stem: Sprout,
  } as const

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-14 rounded-3xl border border-emerald-100/80 bg-white/70 p-5 shadow-[0_24px_60px_-36px_rgba(17,94,89,0.4)] backdrop-blur-xl md:p-8"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr,1fr] lg:gap-12">
        <div className="w-full">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.6)]">
            <img
              src={herbData.plantImages[selectedPart]}
              alt={`${herbData.sanskrit} - ${selectedPart}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {plantPartLabels.map(({ key, label }) => {
              const Icon = partIconMap[key]
              return (
                <button
                  key={key}
                  onClick={() => onSelectPart(key)}
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    selectedPart === key
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white/90 text-slate-700 ring-1 ring-emerald-100 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="pt-1">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">{herbData.sanskrit}</h1>
          <p className="mt-3 text-lg italic text-slate-700">{herbData.botanical}</p>
          <p className="mt-1 text-base text-slate-500">{herbData.english}</p>
          <div className="my-6 h-px bg-gradient-to-r from-emerald-200 via-emerald-100 to-transparent" />
          <p className="text-[15px] leading-8 text-slate-700">
            A premier Rasayana with adaptogenic strength, classically root-focused and deeply valued for
            rejuvenation.
          </p>
          <p className="mt-2 text-[15px] leading-8 text-slate-700">
            Supportive in stress, recovery, and Vata-dominant depletion while maintaining an academic clinical
            relevance.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default HerbHero
