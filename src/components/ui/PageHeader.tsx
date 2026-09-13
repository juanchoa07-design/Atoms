import { ArrowLeft } from 'lucide-react'
import { booking } from '../../content/site'
import { Reveal } from './Reveal'
import { CallButton } from './CallButton'
import { useLang } from '../../lib/lang'

const back = { en: 'Back to home', es: 'Volver al inicio' }

type PageHeaderProps = {
  eyebrow: string
  title: string
  intro: string
  /** Match the tone of the door that leads here. */
  tone?: 'blue' | 'orange'
}

export function PageHeader({ eyebrow, title, intro, tone = 'blue' }: PageHeaderProps) {
  const { t } = useLang()

  return (
    // pt-18 clears the fixed header: the 48px logo plus its 12px clear zone
    // above and below.
    <header className={`tone-${tone} border-b border-border pt-18`}>
      <div className="mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        <Reveal>
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-small text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(back)}
          </a>

          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-h1">{title}</h1>
          <p className="mt-4 max-w-[65ch] text-body text-text-muted">{intro}</p>

          {/* Every page opens with the way to book, not only the home. */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <CallButton />
            <p className="text-small text-text-muted">{t(booking.reassurance)}</p>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
