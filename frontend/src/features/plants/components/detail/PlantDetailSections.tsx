import {
  BookOpenText,
  FlaskConical,
  Leaf,
  ShieldAlert,
  Stethoscope,
} from 'lucide-react'
import type { PlantDetail } from '../../types/plant.types'

type PlantDetailSectionsProps = {
  plant: PlantDetail
}

const Card = ({
  eyebrow,
  title,
  children,
  accent = 'white',
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  accent?: 'white' | 'emerald'
}) => (
  <section
    className={`rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl ${
      accent === 'emerald'
        ? 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50'
        : 'border-white/70 bg-white/80'
    }`}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-semibold text-slate-950">{title}</h2>
    <div className="mt-5">{children}</div>
  </section>
)

const PlantDetailSections = ({ plant }: PlantDetailSectionsProps) => {
  return (
    <div className="space-y-6">
      {plant.overview?.detailedDescription && (
        <Card eyebrow="Overview" title="Ayurvedic Importance" accent="emerald">
          <p className="text-sm leading-8 text-slate-700">{plant.overview.detailedDescription}</p>
        </Card>
      )}

      {plant.identification && (
        <Card eyebrow="Identification" title="Recognition Markers">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-sm leading-7 text-slate-700">
                {plant.identification.wholePlantDescription}
              </p>
              {plant.identification.habitat && (
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">Habitat:</span>{' '}
                  {plant.identification.habitat}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              {Object.entries(plant.identification.characteristics).map(([key, value]) =>
                value ? (
                  <div key={key} className="rounded-[20px] bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {key}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{value}</p>
                  </div>
                ) : null,
              )}
            </div>
          </div>

          {plant.identification.similarPlants.length > 0 && (
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {plant.identification.similarPlants.map((similarPlant) => (
                <div key={similarPlant.name} className="rounded-[22px] bg-amber-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-950">{similarPlant.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {similarPlant.difference}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {plant.snapshot && (
        <Card eyebrow="Snapshot" title="Quick Academic Data">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Rasa
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.rasa.join(', ')}</p>
            </div>
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Guna
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.guna.join(', ')}</p>
            </div>
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Virya
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.virya}</p>
            </div>
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Vipaka
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.vipaka}</p>
            </div>
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Prabhava
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.prabhava}</p>
            </div>
            <div className="rounded-[22px] bg-white/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Dosha Effect
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{plant.snapshot.doshaEffect}</p>
            </div>
          </div>
        </Card>
      )}

      {plant.clinicalIndications && plant.clinicalIndications.length > 0 && (
        <Card eyebrow="Clinical Use" title="Clinical Indications">
          <div className="grid gap-4 lg:grid-cols-2">
            {plant.clinicalIndications.map((indication) => (
              <div key={indication.condition} className="rounded-[24px] bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{indication.condition}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Part used: {indication.partUsed}
                    </p>
                  </div>
                  {indication.effectivenessLevel && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {indication.effectivenessLevel}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{indication.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {plant.doshaInteraction && (
        <Card eyebrow="Dosha" title="Dosha Interaction">
          <div className="grid gap-4 md:grid-cols-3">
            {(['vata', 'kapha', 'pitta'] as const).map((dosha) => (
              <div key={dosha} className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {dosha}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {plant.doshaInteraction?.[dosha].effect}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {plant.doshaInteraction?.[dosha].explanation}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {plant.dravyagunaBreakdown && plant.dravyagunaBreakdown.length > 0 && (
        <Card eyebrow="Dravyaguna" title="Property Breakdown">
          <div className="grid gap-4 xl:grid-cols-2">
            {plant.dravyagunaBreakdown.map((entry) => (
              <div key={entry.name} className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-lg font-semibold text-slate-950">{entry.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-900">Meaning:</span> {entry.meaning}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-900">Function:</span> {entry.function}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-900">Clinical relevance:</span>{' '}
                  {entry.clinicalRelevance}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {(plant.classicalReferences?.length ||
        plant.classicalFormulations?.length ||
        plant.modernResearch?.length) && (
        <div className="grid gap-6 xl:grid-cols-3">
          {plant.classicalReferences && plant.classicalReferences.length > 0 && (
            <Card eyebrow="Texts" title="Classical References">
              <div className="space-y-3">
                {plant.classicalReferences.map((reference) => (
                  <div key={`${reference.bookName}-${reference.section}`} className="rounded-[22px] bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-900">
                      <BookOpenText className="h-4 w-4 text-emerald-700" />
                      <p className="font-semibold">{reference.bookName}</p>
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {reference.section}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {reference.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {plant.classicalFormulations && plant.classicalFormulations.length > 0 && (
            <Card eyebrow="Formulations" title="Classical Preparations">
              <div className="space-y-3">
                {plant.classicalFormulations.map((formulation) => (
                  <div key={formulation.formulationName} className="rounded-[22px] bg-slate-50 p-4">
                    <p className="font-semibold text-slate-950">{formulation.formulationName}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {formulation.type}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{formulation.uses}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-slate-900">Dosage:</span>{' '}
                      {formulation.dosage}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {plant.modernResearch && plant.modernResearch.length > 0 && (
            <Card eyebrow="Evidence" title="Modern Research">
              <div className="space-y-3">
                {plant.modernResearch.map((study) => (
                  <div key={`${study.studyType}-${study.source}`} className="rounded-[22px] bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-950">{study.studyType}</p>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {study.strength}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{study.findings}</p>
                    <p className="mt-2 text-sm text-slate-500">{study.source}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {plant.safetyDosage && (
        <Card eyebrow="Safety" title="Safety and Dosage">
          <div className="grid gap-6 xl:grid-cols-[1fr_1fr_1.2fr]">
            <div className="space-y-4">
              <div className="rounded-[22px] bg-rose-50 p-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-rose-600" />
                  <p className="font-semibold text-slate-950">Contraindications</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {plant.safetyDosage.contraindications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[22px] bg-amber-50 p-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-amber-600" />
                  <p className="font-semibold text-slate-950">Cautions</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {plant.safetyDosage.cautions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[22px] bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-emerald-700" />
                <p className="font-semibold text-slate-950">Drug Interactions</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {plant.safetyDosage.interactions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[22px] bg-emerald-50 p-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-emerald-700" />
                <p className="font-semibold text-slate-950">Recommended Dosage</p>
              </div>
              <div className="mt-3 space-y-3">
                {plant.safetyDosage.dosage.map((dose) => (
                  <div key={dose.form} className="rounded-[18px] bg-white/80 p-4">
                    <p className="font-semibold text-slate-950">{dose.form}</p>
                    <p className="mt-1 text-sm text-emerald-700">{dose.amount}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{dose.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default PlantDetailSections
