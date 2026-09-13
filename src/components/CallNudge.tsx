import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { booking } from '../content/site'
import { useLang } from '../lib/lang'
import { useBooking } from '../lib/booking'
import { CallButton } from './ui/CallButton'

const SEEN_KEY = 'atomlabs.nudge-seen'
/** Nobody gets nudged in their first seconds on the site. */
const MIN_DWELL_MS = 12000

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Desktop only. When a visitor who hasn't opened the booking heads for the
 * tab bar, or has read well into a page, a small card offers the call, once
 * per session. It never blocks the page and closes with its X or Esc. Phones
 * get the sticky bar instead.
 */
export function CallNudge() {
  const { t } = useLang()
  const { engaged } = useBooking()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (engaged) {
      setShow(false)
      return
    }
    if (alreadySeen() || !window.matchMedia('(min-width: 1024px)').matches) return

    const startedAt = Date.now()
    const closingInView = () => {
      const closing = document.getElementById('contact')
      if (!closing) return false
      const rect = closing.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    function stop() {
      document.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('scroll', onScroll)
    }
    function trigger() {
      // The closing call to action already asks; don't ask twice at once.
      if (Date.now() - startedAt < MIN_DWELL_MS || closingInView()) return
      stop()
      setShow(true)
      try {
        sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        /* it can show again next session; harmless */
      }
    }
    // Exit intent: the pointer leaves the page through its top edge.
    function onMouseOut(event: MouseEvent) {
      if (!event.relatedTarget && event.clientY <= 0) trigger()
    }
    function onScroll() {
      const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
      if (depth > 0.6) trigger()
    }

    document.addEventListener('mouseout', onMouseOut)
    window.addEventListener('scroll', onScroll, { passive: true })
    return stop
  }, [engaged])

  useEffect(() => {
    if (!show) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShow(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          aria-labelledby="nudge-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          // transition-none: the card's own CSS transition would lag behind
          // the per-frame transform Motion writes.
          className="card fixed bottom-6 right-6 z-40 hidden w-[22rem] transition-none lg:block"
        >
          <button
            type="button"
            onClick={() => setShow(false)}
            aria-label={t(booking.close)}
            className="absolute right-2 top-2 p-2 text-text-muted transition-colors hover:text-text"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="eyebrow">{t(booking.nudgeEyebrow)}</p>
          <h2 id="nudge-title" className="mt-2 pr-8 text-h3">
            {t(booking.nudgeTitle)}
          </h2>
          <p className="mt-2 text-small text-text-muted">{t(booking.nudgeText)}</p>
          <CallButton className="mt-6 w-full" />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
