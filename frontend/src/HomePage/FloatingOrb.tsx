import { motion } from 'framer-motion'

type FloatingOrbProps = {
  delay: number
  duration: number
  x: string
  y: string
  size: string
  color: string
}

const FloatingOrb = ({ delay, duration, x, y, size, color }: FloatingOrbProps) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-20"
    style={{
      width: size,
      height: size,
      background: color,
      left: x,
      top: y,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
)

export default FloatingOrb
