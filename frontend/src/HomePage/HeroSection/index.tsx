import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from '../../components/figma/ImageWithFallback'
import SearchBar from './SearchBar'

type HeroSectionProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
  activeFilter: string
  onFilterChange: (value: string) => void
  learningMode: 'Patient' | 'Student'
  onModeChange: (value: 'Patient' | 'Student') => void
}

const HeroSection = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  learningMode,
  onModeChange,
}: HeroSectionProps) => {
  return (
    <section className="relative pb-28 pt-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative space-y-8"
          >
            <div className="pointer-events-none absolute -left-10 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22),transparent_66%)] blur-xl dark:bg-[radial-gradient(circle,rgba(20,184,166,0.25),transparent_70%)]" />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-xl dark:border-emerald-200/20 dark:bg-slate-900/35">
              <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
              <span className="text-sm font-medium text-slate-700 dark:text-emerald-100">
                {learningMode === 'Student'
                  ? 'Student Learning Companion'
                  : 'AI-Powered Herbal Discovery'}
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent dark:from-emerald-200 dark:via-teal-200 dark:to-emerald-300">
                {learningMode === 'Student'
                  ? 'Academic Herbal Intelligence'
                  : 'Discover the Power'}
              </span>
              <br />
              <span className="text-slate-800 dark:text-white">
                {learningMode === 'Student' ? 'for Students' : 'of Medicinal Plants'}
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed dark:text-slate-200">
              {learningMode === 'Student'
                ? 'Study medicinal plants with classical references, dosha analysis, and modern clinical evidence.'
                : 'Explore herbs through science, tradition, and AI-powered insights'}
            </p>
            <p className="max-w-xl text-sm font-medium text-slate-600 dark:text-slate-300">
              {learningMode === 'Student'
                ? 'Integrated insights from Charaka Samhita, Sushruta Samhita, and contemporary research.'
                : 'Personalized herbal guidance with trust-first safety and evidence notes.'}
            </p>

            {/* Glass Search Bar */}
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
              learningMode={learningMode}
              onModeChange={onModeChange}
            />
          </motion.div>

          {/* Right Side - 3D Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-none"
            whileHover={{ scale: 1.015 }}
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 blur-3xl" />
              <div className="relative rounded-3xl border border-white/30 bg-white/20 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl dark:border-emerald-200/20 dark:bg-slate-900/35 dark:shadow-[0_24px_65px_rgba(2,6,23,0.6)]">
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
