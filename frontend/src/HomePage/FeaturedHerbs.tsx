import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { featuredHerbs } from './data'

const FeaturedHerbs = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Popular Medicinal Herbs
          </h2>
          <p className="text-lg text-slate-600">Discover nature's healing power</p>
        </motion.div>

        {/* Herb Cards Grid */}
        <div className="grid grid-cols-4 gap-6">
          {featuredHerbs.map((herb, index) => (
            <motion.div
              key={herb.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />

                {/* Glass Card */}
                <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl overflow-hidden shadow-xl">
                  <div className="h-56 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                      <ImageWithFallback
                        src={herb.image}
                        alt={herb.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="p-6 bg-white/40 backdrop-blur-xl space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800">{herb.name}</h3>
                    <p className="text-sm text-slate-600">{herb.benefit}</p>
                    <button className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedHerbs
