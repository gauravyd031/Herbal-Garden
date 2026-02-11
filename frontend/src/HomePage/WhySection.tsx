import { motion } from 'framer-motion'
import { features, motionTokens, patientFeatures } from './data'

type WhySectionProps = {
  learningMode: 'Patient' | 'Student'
}

const WhySection = ({ learningMode }: WhySectionProps) => {
  const visibleFeatures = learningMode === 'Student' ? features : patientFeatures

  return (
    <section className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.slow }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-200 dark:to-teal-200">
            {learningMode === 'Student'
              ? 'Why This Platform for Students?'
              : 'Why Herbal Garden?'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {learningMode === 'Student'
              ? 'Built to bridge classical Ayurvedic literature with modern clinical learning.'
              : 'A trusted blend of traditional wisdom and modern evidence.'}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-8">
          {visibleFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: motionTokens.slow, delay: index * motionTokens.fast }}
                whileHover={{ y: -10, scale: 1.01 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-white/30 backdrop-blur-2xl border border-white/35 rounded-3xl p-10 text-center space-y-4 shadow-xl transition-shadow group-hover:shadow-[0_22px_52px_rgba(16,185,129,0.25)] dark:bg-slate-900/45 dark:border-emerald-100/20">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex justify-center">
                    <div className="relative flex h-[72px] w-[72px] items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white/45 backdrop-blur-md dark:bg-white/10" />
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-sm opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <Icon className="w-10 h-10 text-emerald-400 dark:text-emerald-100" />
                      </div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed dark:text-slate-300">{feature.description}</p>
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
