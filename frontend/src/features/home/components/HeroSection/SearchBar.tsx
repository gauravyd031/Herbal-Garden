import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  conversationalPrompts,
  motionTokens,
  patientConversationalPrompts,
  patientSearchFilters,
  searchFilters,
} from '../../data/home.mock'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  activeFilter: string
  onFilterChange: (value: string) => void
  learningMode: 'Patient' | 'Student'
  onModeChange: (value: 'Patient' | 'Student') => void
}

const SearchBar = ({
  value,
  onChange,
  activeFilter,
  onFilterChange,
  learningMode,
  onModeChange,
}: SearchBarProps) => {
  const prompts = learningMode === 'Student' ? conversationalPrompts : patientConversationalPrompts
  const filters = learningMode === 'Student' ? searchFilters : patientSearchFilters
  const placeholder =
    learningMode === 'Student'
      ? 'Search by Sanskrit name, rasa, guna, dosha, or disease...'
      : 'Search by plant or disease...'

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: motionTokens.medium }} className="relative mt-12 space-y-5">
      <div className="absolute inset-x-6 top-2 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/35 via-teal-500/30 to-emerald-400/35 blur-2xl" />
      <div className="relative rounded-3xl border border-white/35 bg-white/25 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-3xl dark:border-emerald-200/20 dark:bg-slate-900/45 dark:shadow-[0_24px_80px_rgba(2,6,23,0.65)]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/55 px-5 py-4 dark:border-white/10 dark:bg-slate-800/65">
          <Search className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="flex-1 bg-transparent text-slate-800 outline-none placeholder:text-slate-500 dark:text-slate-100 dark:placeholder:text-slate-400"
            aria-label="Conversational herb search"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: motionTokens.fast }}
            className="ripple-btn rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 text-sm font-medium text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Search
          </motion.button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
          Mode
        </span>
        {(['Patient', 'Student'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => onModeChange(mode)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
              learningMode === mode
                ? 'border-emerald-500 bg-emerald-500 text-white'
                : 'border-white/35 bg-white/40 text-slate-700 hover:bg-white/65 dark:border-emerald-200/20 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {mode} Mode
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onChange(prompt)}
            className="rounded-full border border-white/45 bg-white/35 px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-200/20 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter === activeFilter ? '' : filter)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
              activeFilter === filter
                ? 'border-emerald-400/60 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'border-white/35 bg-white/30 text-slate-700 hover:bg-white/55 dark:border-emerald-200/20 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SearchBar
