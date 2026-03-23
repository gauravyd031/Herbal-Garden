import {
  Activity,
  BookOpenText,
  ChevronDown,
  Droplets,
  FlaskConical,
  Leaf,
  Microscope,
  MoonStar,
  ShieldAlert,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../../../shared/ui/collapsible'
import { Badge } from '../../../../shared/ui/badge'
import type { PlantDetail } from '../../types/plant.types'

type PlantDetailSectionsProps = {
  plant: PlantDetail
}

const SectionCard = ({
  id,
  eyebrow,
  title,
  icon,
  children,
  tone = 'default',
}: {
  id?: string
  eyebrow: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  tone?: 'default' | 'soft'
}) => (
  <section
    id={id}
    className={`scroll-mt-28 rounded-[28px] border p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-7 ${
      tone === 'soft'
        ? 'border-emerald-100/80 bg-[linear-gradient(135deg,rgba(248,252,247,0.96),rgba(242,248,240,0.88))]'
        : 'border-white/70 bg-white/82'
    }`}
  >
    <div className="flex items-center gap-3">
      {icon ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
          {icon}
        </div>
      ) : null}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
    <div className="mt-6">{children}</div>
  </section>
)

const clinicalIconMap: Record<string, React.ReactNode> = {
  Stress: <Sparkles className="h-5 w-5" />,
  Anxiety: <Sparkles className="h-5 w-5" />,
  Insomnia: <MoonStar className="h-5 w-5" />,
  Immunity: <ShieldAlert className="h-5 w-5" />,
  'Joint Disorders': <Activity className="h-5 w-5" />,
  'Reproductive Health': <Droplets className="h-5 w-5" />,
  'General Weakness and Convalescence': <Leaf className="h-5 w-5" />,
}

const researchStrengthStyles = {
  Strong: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Moderate: 'border-amber-200 bg-amber-50 text-amber-700',
  Weak: 'border-rose-200 bg-rose-50 text-rose-700',
} as const

const doshaStyles = {
  vata: 'border-sky-200 bg-sky-50/80',
  kapha: 'border-emerald-200 bg-emerald-50/80',
  pitta: 'border-orange-200 bg-orange-50/80',
} as const

const splitIntoParagraphs = (text: string) => {
  const sentences = text.split('. ').filter(Boolean)
  if (sentences.length <= 2) {
    return [text]
  }

  const midpoint = Math.ceil(sentences.length / 2)
  return [
    `${sentences.slice(0, midpoint).join('. ')}.`,
    `${sentences.slice(midpoint).join('. ')}${text.trim().endsWith('.') ? '' : '.'}`,
  ]
}

const PlantDetailSections = ({ plant }: PlantDetailSectionsProps) => {
  const overviewParagraphs = plant.overview?.detailedDescription
    ? splitIntoParagraphs(plant.overview.detailedDescription)
    : []

  const snapshotItems = plant.snapshot
    ? [
        { label: 'Rasa', value: plant.snapshot.rasa.join(', ') },
        { label: 'Guna', value: plant.snapshot.guna.join(', ') },
        { label: 'Virya', value: plant.snapshot.virya },
        { label: 'Vipaka', value: plant.snapshot.vipaka },
        { label: 'Prabhava', value: plant.snapshot.prabhava },
        { label: 'Dosha Effect', value: plant.snapshot.doshaEffect },
      ]
    : []

  return (
    <div className="space-y-10">
      {plant.identification && (
        <SectionCard
          id="identification"
          eyebrow="Identification"
          title="Recognize the Plant"
          icon={<Leaf className="h-4 w-4" />}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(plant.identification.characteristics).map(([key, value]) =>
              value ? (
                <div
                  key={key}
                  className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {key}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value}</p>
                </div>
              ) : null,
            )}
          </div>

          {plant.identification.similarPlants.length > 0 && (
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <h3 className="text-lg font-semibold text-slate-950">Similar Plants</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {plant.identification.similarPlants.map((similarPlant) => (
                  <div
                    key={similarPlant.name}
                    className="rounded-3xl border border-amber-100 bg-amber-50/75 p-5 shadow-sm"
                  >
                    <p className="text-lg font-semibold text-slate-950">{similarPlant.name}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {similarPlant.difference}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionCard>
      )}

      {plant.snapshot && (
        <SectionCard
          id="snapshot"
          eyebrow="Ayurvedic Snapshot"
          title="Key Ayurvedic Properties"
          icon={<Sparkles className="h-4 w-4" />}
          tone="soft"
        >
          <div className="flex flex-wrap gap-3">
            {snapshotItems.map((item) => (
              <div
                key={item.label}
                className="rounded-full border border-emerald-200 bg-white/90 px-4 py-3 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-600">
            {plant.snapshot.doshaEffect}
          </p>
        </SectionCard>
      )}

      {overviewParagraphs.length > 0 && (
        <SectionCard
          id="overview"
          eyebrow="Overview"
          title="Role in Ayurvedic Practice"
          icon={<BookOpenText className="h-4 w-4" />}
        >
          <div className="max-w-4xl space-y-5">
            {overviewParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm leading-8 text-slate-600 sm:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.clinicalIndications && plant.clinicalIndications.length > 0 && (
        <SectionCard
          id="clinical"
          eyebrow="Clinical Indications"
          title="Where It Is Commonly Used"
          icon={<Stethoscope className="h-4 w-4" />}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {plant.clinicalIndications.map((indication) => (
              <div
                key={indication.condition}
                className="group rounded-3xl border border-slate-100 bg-slate-50/95 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    {clinicalIconMap[indication.condition] ?? <Activity className="h-5 w-5" />}
                  </div>
                  {indication.effectivenessLevel ? (
                    <Badge className="border-emerald-200 bg-white text-emerald-700">
                      {indication.effectivenessLevel}
                    </Badge>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{indication.condition}</h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Part Used: {indication.partUsed}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{indication.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.doshaInteraction && (
        <SectionCard
          id="dosha"
          eyebrow="Dosha Effect"
          title="Constitutional Interaction"
          icon={<Leaf className="h-4 w-4" />}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {(['vata', 'kapha', 'pitta'] as const).map((dosha) => (
              <div
                key={dosha}
                className={`rounded-3xl border p-5 shadow-sm ${doshaStyles[dosha]}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {dosha}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">
                  {plant.doshaInteraction?.[dosha].effect}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {plant.doshaInteraction?.[dosha].explanation}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.dravyagunaBreakdown && plant.dravyagunaBreakdown.length > 0 && (
        <SectionCard
          id="dravyaguna"
          eyebrow="Dravyaguna"
          title="Expanded Property Breakdown"
          icon={<Sparkles className="h-4 w-4" />}
        >
          <div className="space-y-4">
            {plant.dravyagunaBreakdown.map((entry, index) => (
              <Collapsible key={entry.name} defaultOpen={index === 0}>
                <div className="rounded-3xl border border-slate-100 bg-slate-50/90 shadow-sm">
                  <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/60">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{entry.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{entry.meaning}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-2 shadow-sm">
                      <ChevronDown className="h-4 w-4 text-slate-500" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="border-t border-slate-100 px-5 py-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl bg-white/85 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                          Function
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{entry.function}</p>
                      </div>
                      <div className="rounded-2xl bg-white/85 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                          Clinical Relevance
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {entry.clinicalRelevance}
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.classicalReferences && plant.classicalReferences.length > 0 && (
        <SectionCard
          id="references"
          eyebrow="Classical References"
          title="Mentions in Traditional Texts"
          icon={<BookOpenText className="h-4 w-4" />}
        >
          <div className="space-y-4">
            {plant.classicalReferences.map((reference, index) => (
              <div key={`${reference.bookName}-${reference.section}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-600" />
                  {index !== plant.classicalReferences!.length - 1 ? (
                    <div className="mt-2 h-full w-px bg-emerald-200" />
                  ) : null}
                </div>
                <div className="flex-1 rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-sm">
                  <p className="text-lg font-semibold text-slate-950">{reference.bookName}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {reference.section}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reference.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.classicalFormulations && plant.classicalFormulations.length > 0 && (
        <SectionCard
          id="formulations"
          eyebrow="Classical Formulations"
          title="Traditional Preparations"
          icon={<FlaskConical className="h-4 w-4" />}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {plant.classicalFormulations.map((formulation) => (
              <div
                key={formulation.formulationName}
                className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xl font-semibold text-slate-950">{formulation.formulationName}</p>
                <Badge className="mt-3 border-emerald-200 bg-white text-emerald-700">
                  {formulation.type}
                </Badge>
                <p className="mt-4 text-sm leading-7 text-slate-600">{formulation.uses}</p>
                <div className="mt-4 rounded-2xl bg-white/85 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Dose
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{formulation.dosage}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.modernResearch && plant.modernResearch.length > 0 && (
        <SectionCard
          id="research"
          eyebrow="Modern Research"
          title="Evidence Snapshot"
          icon={<Microscope className="h-4 w-4" />}
        >
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {plant.modernResearch.map((study) => (
              <div
                key={`${study.studyType}-${study.source}`}
                className="rounded-3xl border border-slate-100 bg-slate-50/90 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge className="border-slate-200 bg-white text-slate-700">{study.studyType}</Badge>
                  <Badge className={researchStrengthStyles[study.strength]}>{study.strength}</Badge>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.findings}</p>
                <p className="mt-4 text-sm font-medium text-slate-500">{study.source}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {plant.safetyDosage && (
        <SectionCard
          id="safety"
          eyebrow="Safety & Dosage"
          title="Practical Safety Guidance"
          icon={<ShieldAlert className="h-4 w-4" />}
        >
          <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1.1fr]">
            <div className="space-y-4">
              <div className="rounded-3xl border border-rose-200 bg-rose-50/85 p-5 shadow-sm">
                <p className="text-lg font-semibold text-slate-950">Contraindications</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {plant.safetyDosage.contraindications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-amber-200 bg-amber-50/85 p-5 shadow-sm">
                <p className="text-lg font-semibold text-slate-950">Cautions</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {plant.safetyDosage.cautions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-950">
                <Stethoscope className="h-4 w-4 text-emerald-700" />
                <p className="text-lg font-semibold">Interactions</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {plant.safetyDosage.interactions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-[linear-gradient(135deg,rgba(236,253,245,0.95),rgba(255,255,255,0.92))] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-950">
                <FlaskConical className="h-4 w-4 text-emerald-700" />
                <p className="text-lg font-semibold">Dosage</p>
              </div>
              <div className="mt-4 space-y-3">
                {plant.safetyDosage.dosage.map((dose) => (
                  <div key={dose.form} className="rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      {dose.form}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">{dose.amount}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{dose.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      )}
    </div>
  )
}

export default PlantDetailSections
