import { Droplets, Flame, Leaf, Sparkles, Wind } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '../../../../shared/ui/badge'
import type { HerbData } from '../../types/herb.types'

type HerbSnapshotProps = {
  herbData: HerbData
}

const HerbSnapshot = ({ herbData }: HerbSnapshotProps) => {
  return (
    <motion.section
      id="snapshot"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="mb-14 scroll-mt-24"
    >
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-800">Quick Academic Snapshot</h2>

      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-100 bg-white/75 p-6 shadow-sm backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2 text-slate-500">
            <Leaf className="h-4 w-4 text-emerald-700" />
            <p className="text-xs font-semibold uppercase tracking-[0.1em]">Rasa</p>
          </div>
          <p className="text-lg font-semibold text-slate-800">{herbData.snapshot.rasa}</p>
        </article>

        <article className="rounded-2xl border border-emerald-100 bg-white/75 p-6 shadow-sm backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2 text-slate-500">
            <Wind className="h-4 w-4 text-emerald-700" />
            <p className="text-xs font-semibold uppercase tracking-[0.1em]">Guna</p>
          </div>
          <p className="text-lg font-semibold text-slate-800">{herbData.snapshot.guna}</p>
        </article>
      </div>

      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-emerald-100 bg-white/70 p-5">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Flame className="h-4 w-4 text-rose-700" />
            <p className="text-xs font-semibold uppercase tracking-[0.1em]">Virya</p>
          </div>
          <p className="text-base font-medium text-slate-800">{herbData.snapshot.virya}</p>
        </article>

        <article className="rounded-xl border border-emerald-100 bg-white/70 p-5">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Droplets className="h-4 w-4 text-sky-700" />
            <p className="text-xs font-semibold uppercase tracking-[0.1em]">Vipaka</p>
          </div>
          <p className="text-base font-medium text-slate-800">{herbData.snapshot.vipaka}</p>
        </article>

        <article className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-5">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Sparkles className="h-4 w-4 text-emerald-700" />
            <p className="text-xs font-semibold uppercase tracking-[0.1em]">Prabhava</p>
          </div>
          <p className="text-base font-medium text-emerald-800">{herbData.snapshot.prabhava}</p>
        </article>
      </div>

      <article className="rounded-2xl border border-emerald-100 bg-white/75 p-6 shadow-sm backdrop-blur-md">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Dosha Effect</p>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Vata</span>
            <Badge className="border-emerald-200 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              {herbData.snapshot.doshaEffect.vata === 'pacifies' ? 'Pacifies' : 'Aggravates'}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Kapha</span>
            <Badge className="border-emerald-200 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              {herbData.snapshot.doshaEffect.kapha === 'pacifies' ? 'Pacifies' : 'Aggravates'}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Pitta</span>
            <Badge className="border-amber-200 bg-amber-100 text-amber-800 hover:bg-amber-100">
              {herbData.snapshot.doshaEffect.pitta === 'aggravates' ? 'Aggravates' : 'Pacifies'}
            </Badge>
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Energetics at a glance: warm, grounding, and strengthening with prime use in Vata depletion states.
        </p>
      </article>
    </motion.section>
  )
}

export default HerbSnapshot
