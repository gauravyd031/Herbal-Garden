import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { navItems } from './data'

type NavbarProps = {
  activeNav: string
  onChange: (value: string) => void
}

const Navbar = ({ activeNav, onChange }: NavbarProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/50">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Herbal Garden
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => onChange(item)}
              whileHover={{ y: -2 }}
              className={`transition-all text-sm font-medium ${
                activeNav === item
                  ? 'text-emerald-600'
                  : 'text-slate-600 hover:text-emerald-500'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow"
        >
          Login
        </motion.button>
      </div>
    </div>
  )
}

export default Navbar
