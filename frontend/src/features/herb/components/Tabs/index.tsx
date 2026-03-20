import { AlertTriangle, BookOpen, FileText, FlaskConical, Leaf, Pill, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '../../../../shared/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../../shared/ui/collapsible'
import type { HerbData, PlantPart } from '../../types/herb.types'

type HerbTabsProps = {
  herbData: HerbData
}

const navItems = [
  { id: 'identification', label: 'Identification' },
  { id: 'overview', label: 'Overview' },
  { id: 'indications', label: 'Clinical Use' },
  { id: 'dosha', label: 'Dosha' },
  { id: 'dravyaguna', label: 'Dravyaguna' },
  { id: 'classical', label: 'Classical' },
  { id: 'formulations', label: 'Formulations' },
  { id: 'research', label: 'Research' },
  { id: 'safety', label: 'Safety' },
]

const orderedParts: PlantPart[] = ['fullPlant', 'root', 'leaf', 'flower', 'stem']

const labelMap: Record<PlantPart, string> = {
  fullPlant: 'Full Plant',
  root: 'Root',
  leaf: 'Leaf',
  flower: 'Flower',
  stem: 'Stem',
}

const HerbTabs = ({ herbData }: HerbTabsProps) => {
  return (
    <section className="scroll-smooth">
      <div className="sticky top-3 z-30 mb-10 overflow-x-auto rounded-xl border border-emerald-100 bg-white/80 p-3 backdrop-blur-md">
        <nav className="flex min-w-max items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="border-b-2 border-transparent pb-1 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-800 hover:border-emerald-700/40"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <motion.section
        id="identification"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="mb-14 scroll-mt-24 rounded-2xl border border-emerald-100 bg-white/75 p-6 backdrop-blur-md"
      >
        <h3 className="mb-5 text-lg font-semibold text-slate-900">Identification Card</h3>
        <div className="grid gap-7 lg:grid-cols-[1fr,340px]">
          <div>
            <ul className="space-y-2">
              {herbData.identificationFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[15px] leading-7 text-slate-700">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600">Similar Plants</h4>
              <div className="space-y-3">
                {herbData.similarPlants.map((item, index) => (
                  <article key={index} className="rounded-xl bg-emerald-50/70 p-4">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm leading-7 text-slate-600">{item.difference}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {orderedParts.map((part) => (
              <article key={part} className="overflow-hidden rounded-xl bg-slate-100">
                <img src={herbData.plantImages[part]} alt={`${herbData.sanskrit} ${labelMap[part]}`} className="h-24 w-full object-cover" />
                <p className="px-2 py-1 text-xs font-medium text-slate-700">{labelMap[part]}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="overview" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">Overview</h3>
        <p className="text-[15px] leading-8 text-slate-700">{herbData.overview.description}</p>
        <p className="mt-3 text-[15px] leading-8 text-slate-700">
          In Ayurvedic learning, Ashwagandha is approached as a nourishing Rasayana with dhatu-supportive action and a
          core role in restoring Vata-led fatigue patterns.
        </p>
      </section>

      <section id="indications" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Stethoscope className="h-4 w-4 text-emerald-700" />
          Clinical Indications
        </h3>
        <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
          {herbData.overview.indications.map((indication, index) => (
            <p key={index} className="text-[15px] leading-7 text-slate-700">
              • {indication}
            </p>
          ))}
        </div>
      </section>

      <section id="dosha" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">Dosha Explanation</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {herbData.overview.doshaEffects.map((item, index) => (
            <article key={index} className="rounded-2xl border border-emerald-100 bg-white/75 p-5 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-2">
                <p className="font-semibold text-slate-800">{item.dosha}</p>
                <Badge className="border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-100">{item.effect}</Badge>
              </div>
              <p className="text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dravyaguna" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Leaf className="h-4 w-4 text-emerald-700" />
          Dravyaguna Breakdown
        </h3>
        <div className="space-y-3">
          {herbData.dravyaguna.map((item, index) => {
            const Icon = item.icon
            return (
              <Collapsible key={index}>
                <article className="overflow-hidden rounded-xl border border-emerald-100 bg-white/75">
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-5 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-emerald-700" />
                      <p className="font-semibold text-slate-800">{item.term}</p>
                    </div>
                    <p className="text-sm text-slate-500">{item.value}</p>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="border-t border-emerald-100 px-5 py-4 text-sm leading-7 text-slate-700">
                    <p>{item.detail}</p>
                    <p className="mt-2 text-slate-600">
                      Clinical relevance: {item.value.toLowerCase()} helps interpret therapeutic direction and patient suitability.
                    </p>
                  </CollapsibleContent>
                </article>
              </Collapsible>
            )
          })}
        </div>
      </section>

      <section id="classical" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <BookOpen className="h-4 w-4 text-emerald-700" />
          Classical References
        </h3>
        <div className="space-y-3">
          {herbData.classical.map((item, index) => (
            <article key={index} className="rounded-xl border border-emerald-100 bg-white/70 p-4">
              <p className="font-semibold text-slate-800">{item.text}</p>
              <p className="text-sm italic text-slate-500">{item.reference}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="formulations" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Pill className="h-4 w-4 text-emerald-700" />
          Classical Formulations
        </h3>
        <div className="space-y-3">
          {herbData.formulations.map((item, index) => (
            <article key={index} className="rounded-xl border border-emerald-100 bg-white/70 p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="font-semibold text-slate-800">{item.name}</p>
                <Badge className="border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-50">{item.type}</Badge>
              </div>
              <p className="text-sm leading-7 text-slate-700">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="mb-14 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <FlaskConical className="h-4 w-4 text-emerald-700" />
          Modern Research
        </h3>
        <div className="space-y-3">
          {herbData.evidence.map((item, index) => (
            <article key={index} className="rounded-xl border border-emerald-100 bg-white/70 p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge className="border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-100">{item.type}</Badge>
                <Badge className="border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-50">
                  {item.level}
                </Badge>
              </div>
              <p className="text-sm leading-7 text-slate-700">{item.finding}</p>
              <p className="mt-1 text-xs italic text-slate-500">{item.reference}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="safety" className="mb-8 scroll-mt-24">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <AlertTriangle className="h-4 w-4 text-emerald-700" />
          Safety & Dosage
        </h3>

        <div className="space-y-6">
          <article>
            <p className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
              <FileText className="h-4 w-4 text-rose-700" />
              Contraindications
            </p>
            <ul className="space-y-1">
              {herbData.safety.contraindications.map((item, index) => (
                <li key={index} className="text-sm leading-7 text-slate-700">
                  • {item}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <p className="mb-2 font-semibold text-slate-800">Cautions & Interactions</p>
            <ul className="space-y-1">
              {herbData.safety.cautions.map((item, index) => (
                <li key={index} className="text-sm leading-7 text-slate-700">
                  • {item}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <p className="mb-2 font-semibold text-slate-800">Recommended Dose</p>
            <p className="text-sm leading-7 text-slate-700">{herbData.safety.dosage}</p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default HerbTabs
