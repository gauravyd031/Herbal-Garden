import { CheckCircle2 } from 'lucide-react'

type UseListProps = {
  uses: string[]
}

const UseList = ({ uses }: UseListProps) => {
  return (
    <section
      id="uses"
      className="scroll-mt-28 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-md shadow-slate-950/5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-950/8 sm:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Uses</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Common use cases</h2>

      <ul className="mt-6 space-y-4">
        {uses.map((use) => (
          <li
            key={use}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-4 transition duration-200 hover:shadow-sm"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span className="text-sm leading-7 text-slate-600">{use}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UseList
