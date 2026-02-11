import { motion } from 'framer-motion'
import { diseases } from './data'

const DiseaseFilter = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Find Herbs by Disease
          </h2>
        </motion.div>

        {/* Disease Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {diseases.map((disease, index) => (
            <motion.button
              key={disease}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative px-8 py-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full text-emerald-700 font-medium hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent transition-all shadow-lg">
                {disease}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiseaseFilter
