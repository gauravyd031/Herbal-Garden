import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from '../../components/figma/ImageWithFallback'
import SearchBar from './SearchBar'

type HeroSectionProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="pt-40 pb-32 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-slate-700 font-medium">
                AI-Powered Herbal Discovery
              </span>
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Discover the Power
              </span>
              <br />
              <span className="text-slate-800">of Medicinal Plants</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Explore herbs through science, tradition, and AI-powered insights
            </p>

            {/* Glass Search Bar */}
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </motion.div>

          {/* Right Side - 3D Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-2 shadow-2xl">
                <div className="rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1708667027894-6e9481ae1baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luYWwlMjBoZXJicyUyMGJvdGFuaWNhbCUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwNzE2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medicinal herbs"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
