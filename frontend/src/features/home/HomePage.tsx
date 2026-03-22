import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedHerbs from './components/FeaturedHerbs'
import StudyModules from './components/StudyModules'
import DiseaseFilter from './components/DiseaseFilter'
import WhySection from './components/WhySection'
import Footer from './components/Footer'
import FloatingOrb from './components/FloatingOrb'
import { backgroundOrbs } from './data/home.mock'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeNav, setActiveNav] = useState('Home')
  const [activeFilter, setActiveFilter] = useState('')
  const [activeDisease, setActiveDisease] = useState('')
  const [learningMode, setLearningMode] = useState<'Patient' | 'Student'>('Student')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const savedTheme = localStorage.getItem('herbal-theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      return
    }
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      return
    }
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  useEffect(() => {
    localStorage.setItem('herbal-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const handleNavChange = (value: string) => {
    setActiveNav(value)

    if (value === 'Explore') {
      window.location.href = '/plants'
    }
  }

  return (
    <div
      className={`relative min-h-screen overflow-hidden text-slate-900 transition-colors dark:text-slate-100 ${
        isDarkMode
          ? 'dark theme-vibrant-dark bg-gradient-to-br from-slate-950 via-emerald-950/50 to-slate-900'
          : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50'
      }`}
    >
      {/* Animated Background Orbs */}
      {backgroundOrbs.map((orb) => (
        <FloatingOrb key={orb.id} {...orb} />
      ))}

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none opacity-30 dark:opacity-45" />

      {/* Glass Navbar */}
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed left-1/2 top-6 z-50 w-[94%] max-w-[1200px] -translate-x-1/2 sm:w-[90%]"
      >
        <Navbar
          activeNav={activeNav}
          onChange={handleNavChange}
          isDark={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </motion.nav>

      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        learningMode={learningMode}
        onModeChange={setLearningMode}
      />
      <div className="relative bg-white/35 dark:bg-slate-900/20">
        <FeaturedHerbs
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          activeDisease={activeDisease}
          learningMode={learningMode}
        />
      </div>
      {learningMode === 'Student' && (
        <div className="relative bg-emerald-50/30 dark:bg-emerald-950/15">
          <StudyModules />
        </div>
      )}
      <div className="relative bg-white/50 dark:bg-slate-950/35">
        <DiseaseFilter activeDisease={activeDisease} onSelectDisease={setActiveDisease} />
      </div>
      <div className="relative bg-emerald-50/40 dark:bg-emerald-950/20">
        <WhySection learningMode={learningMode} />
      </div>
      <Footer learningMode={learningMode} />
    </div>
  )
}

export default HomePage
