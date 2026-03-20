import { CheckCircle2 } from 'lucide-react'

type UseListProps = {
  uses: string[]
}

const UseList = ({ uses }: UseListProps) => {
  return (
    <section className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Uses</p>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">Common use cases</h2>

      <ul className="mt-5 space-y-3">
        {uses.map((use) => (
          <li key={use} className="flex items-start gap-3 rounded-[20px] bg-slate-50 px-4 py-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <span className="text-sm leading-6 text-slate-700">{use}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UseList
