import { Sparkles } from 'lucide-react'

type BenefitSectionProps = {
  benefits: string[]
}

const BenefitSection = ({ benefits }: BenefitSectionProps) => {
  return (
    <section
      id="benefits"
      className="scroll-mt-28 rounded-3xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-md shadow-emerald-950/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-950/10 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-600/95 p-2.5 text-white shadow-sm">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Benefits
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
            Why this herb stands out
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4 text-sm leading-7 text-slate-600 shadow-sm transition duration-200 hover:shadow-md"
          >
            {benefit}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitSection
