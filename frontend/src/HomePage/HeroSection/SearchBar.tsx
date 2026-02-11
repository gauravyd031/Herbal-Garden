import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20" />
      <div className="relative bg-white/30 backdrop-blur-2xl border border-white/40 rounded-2xl p-1.5 shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-4 bg-white/50 rounded-xl">
          <Search className="w-5 h-5 text-emerald-600" />
          <input
            type="text"
            placeholder="Search by plant or disease..."
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg shadow-lg"
          >
            Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default SearchBar
