import { motion } from 'framer-motion'
import { features } from './data'

const WhySection = () => {
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
            Why Herbal Garden?
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 text-center space-y-4 shadow-xl">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Icon className="w-10 h-10 text-emerald-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhySection
