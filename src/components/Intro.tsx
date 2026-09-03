import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { site } from '../content/site'

const STORAGE_KEY = 'atomlabs.intro-seen'
const DURATION_MS = 2600

function shouldSkip() {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Entry animation: the atom draws itself, the wordmark resolves, then the
 * curtain lifts. Plays once per tab session and can be skipped with any
 * click or key press.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(() => !shouldSkip())

  // Hand the page over as the curtain starts lifting, so the content is
  // already painted underneath instead of popping in after the fade.
  const finish = useCallback(() => {
    setVisible(false)
    onDone()
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* a session without storage just replays the intro next time */
    }
  }, [onDone])

  // Nothing to play — hand control to the page on the first frame.
  useEffect(() => {
    if (!visible) onDone()
  }, [visible, onDone])

  useEffect(() => {
    if (!visible) return

    const timer = window.setTimeout(finish, DURATION_MS)
    const skip = () => finish()

    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
      document.body.style.overflow = ''
    }
  }, [visible, finish])

  const orbits = [0, 60, 120]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />

          <motion.svg
            viewBox="0 0 64 64"
            className="h-24 w-24 text-brand"
            fill="none"
            aria-hidden="true"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {orbits.map((angle, i) => (
              <motion.ellipse
                key={angle}
                cx="32"
                cy="32"
                rx="21"
                ry="8.5"
                stroke="currentColor"
                strokeWidth={1.6}
                transform={`rotate(${angle} 32 32)`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.16, ease: 'easeInOut' }}
              />
            ))}
            <motion.circle
              cx="32"
              cy="32"
              r="5"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ transformOrigin: '32px 32px' }}
            />
          </motion.svg>

          <motion.p
            className="mt-8 text-lg font-display font-semibold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.name}
          </motion.p>

          <motion.div
            className="mt-6 h-px w-40 origin-left bg-gradient-to-r from-transparent via-brand to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
