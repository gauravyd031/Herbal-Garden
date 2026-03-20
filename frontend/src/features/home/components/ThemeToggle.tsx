import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
  className?: string
}

const ThemeToggle = ({ isDark, onToggle, className = '' }: ThemeToggleProps) => {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-2xl transition-all hover:bg-white dark:border-emerald-300/30 dark:bg-slate-900/70 dark:text-emerald-100 dark:hover:bg-slate-900 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </motion.button>
  )
}

export default ThemeToggle
