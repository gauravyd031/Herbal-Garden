import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { motionTokens, studyModules } from '../data/home.mock'

const StudyModules = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.slow }}
          className="mb-12 space-y-3 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white sm:text-5xl">
            Structured Learning for Ayurvedic Students
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Modular revision dashboard aligned to student coursework and clinical application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studyModules.map((module, index) => (
            <motion.article
              key={module}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.slow, delay: index * motionTokens.fast }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-700/35 to-teal-700/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/35 bg-white/45 p-5 shadow-xl backdrop-blur-2xl dark:border-emerald-100/20 dark:bg-slate-900/50">
                <div className="mb-3 inline-flex rounded-xl border border-emerald-300/30 bg-emerald-100/60 p-2 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-900/35 dark:text-emerald-100">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{module}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Structured notes, concept maps, and quick revision points.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyModules
