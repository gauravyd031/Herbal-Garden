import {
  Activity,
  BookOpenText,
  BrainCircuit,
  FlaskConical,
  Leaf,
  Microscope,
  ShieldAlert,
} from 'lucide-react'

type NavItem = {
  id: string
  label: string
}

type PlantDetailSectionNavProps = {
  items: NavItem[]
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const iconMap: Record<string, React.ReactNode> = {
  identification: <Leaf className="h-3.5 w-3.5" />,
  snapshot: <BrainCircuit className="h-3.5 w-3.5" />,
  overview: <BookOpenText className="h-3.5 w-3.5" />,
  clinical: <Activity className="h-3.5 w-3.5" />,
  dosha: <Leaf className="h-3.5 w-3.5" />,
  dravyaguna: <BrainCircuit className="h-3.5 w-3.5" />,
  references: <BookOpenText className="h-3.5 w-3.5" />,
  formulations: <FlaskConical className="h-3.5 w-3.5" />,
  research: <Microscope className="h-3.5 w-3.5" />,
  safety: <ShieldAlert className="h-3.5 w-3.5" />,
}

const PlantDetailSectionNav = ({
  items,
  activeSection,
  onNavigate,
}: PlantDetailSectionNavProps) => {
  if (items.length === 0) {
    return null
  }

  return (
    <div className="sticky top-4 z-30">
      <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,251,246,0.82))] p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto">
          {items.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                    : 'bg-white/80 text-slate-600 hover:bg-slate-950 hover:text-white'
                }`}
              >
                {iconMap[item.id] ?? <Leaf className="h-3.5 w-3.5" />}
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlantDetailSectionNav
