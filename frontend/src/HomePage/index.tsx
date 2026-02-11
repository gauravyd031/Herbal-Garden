import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturedHerbs from './FeaturedHerbs'
import DiseaseFilter from './DiseaseFilter'
import WhySection from './WhySection'
import Footer from './Footer'
import FloatingOrb from './FloatingOrb'
import { backgroundOrbs } from './data'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeNav, setActiveNav] = useState('Home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 relative overflow-hidden">
      {/* Animated Background Orbs */}
      {backgroundOrbs.map((orb) => (
        <FloatingOrb key={orb.id} {...orb} />
      ))}

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />

      {/* Glass Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50"
      >
        <Navbar activeNav={activeNav} onChange={setActiveNav} />
      </motion.nav>

      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FeaturedHerbs />
      <DiseaseFilter />
      <WhySection />
      <Footer />
    </div>
  )
}

export default HomePage
