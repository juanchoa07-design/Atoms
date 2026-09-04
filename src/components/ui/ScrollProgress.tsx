import { motion, useScroll, useSpring } from 'motion/react'

/** Thin brand line across the top that tracks reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-brand-deep via-brand to-fg"
    />
  )
}
