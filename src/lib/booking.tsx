import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { BookingDialog } from '../components/BookingDialog'

const OPENED_KEY = 'atomlabs.booking-opened'

/** Safari before 15.4 has no <dialog>; there every CTA just opens Calendly. */
const dialogSupported =
  typeof window !== 'undefined' &&
  typeof HTMLDialogElement === 'function' &&
  typeof HTMLDialogElement.prototype.showModal === 'function'

type Booking = {
  /** False where the dialog can't open, so a CTA falls back to its Calendly link. */
  supported: boolean
  open: () => void
  /** The visitor has opened the booking at least once this session. */
  engaged: boolean
}

const BookingContext = createContext<Booking | null>(null)

function readOpened() {
  try {
    return sessionStorage.getItem(OPENED_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Every call to action on the site books through here: one dialog with the
 * Calendly calendar inside, so the visitor never has to leave the page.
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false)
  const [engaged, setEngaged] = useState(readOpened)

  const open = useCallback(() => {
    setOpen(true)
    setEngaged(true)
    try {
      sessionStorage.setItem(OPENED_KEY, '1')
    } catch {
      /* without storage the nudge can show again next session; harmless */
    }
  }, [])
  const close = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ supported: dialogSupported, open, engaged }), [open, engaged])

  return (
    <BookingContext.Provider value={value}>
      {children}
      {dialogSupported && <BookingDialog open={isOpen} onClose={close} />}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const booking = useContext(BookingContext)
  if (!booking) throw new Error('useBooking must be used inside <BookingProvider>')
  return booking
}
