import type { ReactNode } from 'react'
import { CalendarCheck } from 'lucide-react'
import { hero, site } from '../../content/site'
import { useLang } from '../../lib/lang'
import { useBooking } from '../../lib/booking'
import { Button } from './Button'

type CallButtonProps = {
  variant?: 'primary' | 'outline'
  className?: string
  /** Defaults to the site-wide label, "Agendar llamada". */
  children?: ReactNode
  /** Runs before the dialog opens, e.g. to close the mobile menu. */
  onClick?: () => void
}

/**
 * The site's one call to action. It opens the booking dialog in place, so the
 * visitor books without leaving the page. The Calendly link stays as the href:
 * modified clicks, no-JS and browsers without <dialog> still get there.
 */
export function CallButton({ variant = 'primary', className = '', children, onClick }: CallButtonProps) {
  const { t } = useLang()
  const { supported, open } = useBooking()

  return (
    <Button
      variant={variant}
      href={site.calendly}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(event) => {
        onClick?.()
        if (!supported || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
        event.preventDefault()
        open()
      }}
    >
      <CalendarCheck className={variant === 'primary' ? 'h-5 w-5' : 'h-4 w-4'} aria-hidden="true" />
      {children ?? t(hero.primaryCta)}
    </Button>
  )
}
