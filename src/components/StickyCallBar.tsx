import { useEffect, useState } from 'react'
import { booking } from '../content/site'
import { useLang } from '../lib/lang'
import { CallButton } from './ui/CallButton'

/**
 * Phones and tablets: once the first call to action has scrolled away, this
 * bar keeps "Agendar llamada" under the thumb. It steps aside when the closing
 * call to action comes into view, so the two never stack.
 */
export function StickyCallBar() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const closing = document.getElementById('contact')
      const pastFirstCta = window.scrollY > window.innerHeight * 0.6
      const beforeClosing = !closing || closing.getBoundingClientRect().top > window.innerHeight
      setVisible(pastFirstCta && beforeClosing)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('hashchange', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('hashchange', schedule)
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg px-6 pt-3 pb-[calc(var(--space-3)+env(safe-area-inset-bottom))] transition-[transform,visibility] duration-300 lg:hidden ${
        visible ? 'visible translate-y-0' : 'invisible translate-y-full'
      }`}
    >
      <p className="mb-2 text-center text-small text-text-muted">{t(booking.barNote)}</p>
      <CallButton className="w-full" />
    </div>
  )
}
