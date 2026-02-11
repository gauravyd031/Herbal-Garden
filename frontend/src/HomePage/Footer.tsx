import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { footerLinks, socialLinks } from './data'

const Footer = () => {
  return (
    <footer className="relative mt-44 overflow-hidden px-4 pb-8 sm:px-6 lg:px-8">
      {/* 3D gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950" />
      <div className="absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_78%_35%,rgba(16,185,129,0.14),transparent_42%),radial-gradient(circle_at_50%_110%,rgba(15,23,42,0.9),transparent_55%)]" />

      {/* Faint floating leaves in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-4 top-16 blur-[1px]"
        >
          <Leaf className="h-40 w-40 text-emerald-300/40" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
          className="absolute right-12 top-1/4 blur-[1px]"
        >
          <Leaf className="h-36 w-36 text-teal-300/40" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
          transition={{ duration: 13, repeat: Infinity, delay: 1.6, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/3 blur-[2px]"
        >
          <Leaf className="h-28 w-28 text-emerald-400/35" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative"
        >
          {/* soft glowing edge */}
          <div className="absolute -inset-[1px] rounded-[36px] bg-gradient-to-r from-emerald-400/55 via-teal-400/45 to-emerald-400/45 blur-md" />

          {/* glass panel */}
          <div className="relative rounded-[36px] border border-white/25 bg-white/[0.10] p-8 shadow-[0_28px_80px_rgba(3,17,12,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-3xl sm:p-10 lg:p-12">
            {/* grain texture */}
            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-25" />

            <div className="relative grid gap-10 pb-10 md:grid-cols-3 md:gap-8 lg:gap-16">
              {/* Brand */}
              <div className="space-y-4 md:space-y-5">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300 to-teal-400 blur-xl opacity-70" />
                    <div className="absolute inset-0 translate-y-[3px] rounded-2xl bg-emerald-950/45" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100/35 bg-gradient-to-br from-emerald-400 to-teal-500 shadow-[0_12px_30px_rgba(16,185,129,0.5)]">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="text-2xl font-semibold tracking-tight text-white">Herbal Garden</span>
                </motion.div>
                <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-200/90">
                  Discover natural healing through plants
                </p>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/90">
                  Explore
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.map((link) => (
                    <motion.li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ y: -2, x: 3 }}
                        transition={{ duration: 0.2 }}
                        className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-slate-200/90 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70 transition-opacity group-hover:opacity-100" />
                        <span className="relative">
                          {link}
                          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-300/50 to-teal-300/45 opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
                        </span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/90">
                  Connect
                </h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon

                    return (
                      <motion.a
                        key={social.label}
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative rounded-2xl"
                        aria-label={social.label}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/50 to-teal-400/40 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-slate-200 transition-all shadow-lg backdrop-blur-xl group-hover:border-emerald-300/50 group-hover:bg-white/20 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 text-xs font-medium text-slate-300/90 backdrop-blur-xl">
                  Have questions? Reach out to our team for herbal guidance.
                </div>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="relative border-t border-white/15 pt-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <p className="text-sm font-medium text-slate-200/80">
                  © 2026 Herbal Garden · Built with{' '}
                  <span className="inline-block">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-emerald-300"
                    >
                      🌱
                    </motion.span>
                  </span>{' '}
                  by a Full Stack Developer
                </p>
                <p className="mt-2 text-xs font-medium text-slate-300/65">
                  For educational purposes only. Always consult healthcare professionals.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
