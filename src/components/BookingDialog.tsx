import { useEffect, useRef, useState } from 'react'
import { Check, X } from 'lucide-react'
import { booking, site } from '../content/site'
import { useLang } from '../lib/lang'
import { OrbitRings } from './ui/AtomArt'

/** Calendly only reports a booking to the parent page when told it is embedded. */
function embedUrl() {
  const url = new URL(site.calendly)
  url.searchParams.set('embed_domain', window.location.hostname)
  url.searchParams.set('embed_type', 'Inline')
  url.searchParams.set('hide_gdpr_banner', '1')
  return url.toString()
}

/**
 * The booking dialog: our own frame around the Calendly calendar. Full screen
 * on phones, a centred panel on desktop. The native <dialog> brings focus
 * handling, Esc to close and the top layer.
 */
export function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang()
  const ref = useRef<HTMLDialogElement>(null)
  // The calendar is a heavy third-party page, so it loads on the first open
  // only. It then stays mounted: reopening is instant and keeps any progress.
  const [started, setStarted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [booked, setBooked] = useState(false)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      setStarted(true)
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // Esc, the close button and a click on the backdrop all end up here.
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onDialogClose = () => {
      document.body.style.overflow = ''
      onClose()
    }
    dialog.addEventListener('close', onDialogClose)
    return () => dialog.removeEventListener('close', onDialogClose)
  }, [onClose])

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://calendly.com') return
      if (event.data?.event === 'calendly.event_scheduled') setBooked(true)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <dialog
      ref={ref}
      aria-labelledby="booking-title"
      onClick={(event) => {
        // The panel covers the whole dialog box, so a click that lands on the
        // dialog element itself came from the backdrop.
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-surface p-0 text-text backdrop:bg-bg/85 lg:m-auto lg:h-[min(46rem,90dvh)] lg:w-[min(60rem,calc(100vw-3rem))] lg:rounded-lg lg:border lg:border-border"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-start justify-between gap-4 border-b border-border p-6">
          <div>
            <p className="eyebrow">{t(booking.eyebrow)}</p>
            <h2 id="booking-title" className="mt-2 text-h3">
              {booked ? t(booking.bookedTitle) : t(booking.title)}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-small text-text-muted">
              {booked && <Check className="h-4 w-4 shrink-0 text-detail" aria-hidden="true" />}
              {booked ? t(booking.bookedText) : t(booking.subtitle)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label={t(booking.close)}
            className="-m-2 shrink-0 p-2 text-text-muted transition-colors hover:text-text"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="relative flex-1">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-small text-text-muted">
              <OrbitRings className="h-16 w-16 text-detail" strokeWidth={1.2} />
              {t(booking.loading)}
            </div>
          )}
          {started && (
            <iframe
              title={t(booking.title)}
              src={embedUrl()}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-300 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        <footer className="border-t border-border px-6 py-3 text-small text-text-muted">
          {t(booking.fallback)}{' '}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-detail underline decoration-1 underline-offset-3 hover:text-detail-hover"
          >
            {t(booking.fallbackLink)}
          </a>
        </footer>
      </div>
    </dialog>
  )
}
