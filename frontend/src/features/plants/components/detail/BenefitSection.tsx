import { Sparkles } from 'lucide-react'

type BenefitSectionProps = {
  benefits: string[]
}

const BenefitSection = ({ benefits }: BenefitSectionProps) => {
  return (
    <section className="rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-[0_18px_50px_rgba(16,185,129,0.10)]">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-600 p-2 text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Benefits
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Why this herb stands out</h2>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="rounded-[22px] bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm"
          >
            {benefit}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitSection
