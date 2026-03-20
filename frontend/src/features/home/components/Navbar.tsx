import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { navItems } from '../data/home.mock'
import ThemeToggle from './ThemeToggle'

type NavbarProps = {
  activeNav: string
  onChange: (value: string) => void
  isDark: boolean
  onToggleTheme: () => void
}

const Navbar = ({ activeNav, onChange, isDark, onToggleTheme }: NavbarProps) => {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/15 px-5 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.15)] backdrop-blur-[36px] dark:border-emerald-200/20 dark:bg-slate-900/35 dark:shadow-[0_12px_36px_rgba(2,6,23,0.55)] sm:px-8 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200/40 bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/50">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-xl font-semibold text-transparent dark:from-emerald-300 dark:to-teal-200">
            Herbal Garden
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-2 rounded-2xl border border-white/30 bg-white/35 px-2 py-1 dark:border-white/10 dark:bg-slate-800/60 md:flex">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => onChange(item)}
              whileHover={{ y: -2 }}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                activeNav === item
                  ? 'bg-white text-emerald-700 shadow-md dark:bg-emerald-500/20 dark:text-emerald-100'
                  : 'text-slate-700 hover:bg-white/60 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-700/70 dark:hover:text-emerald-200'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ripple-btn rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 transition-shadow hover:shadow-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:px-6"
          >
            Login
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
