import { CalendarCheck } from 'lucide-react'
import { finalCta, site } from '../content/site'
import { useLang } from '../lib/lang'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { AtomMark } from './ui/AtomMark'

export function FinalCta() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-border">
      <AtomMark
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 text-text/4"
        strokeWidth={0.4}
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-16 text-center lg:py-24">
        <Reveal>
          <h2 className="text-h2">{t(finalCta.title)}</h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-body text-text-muted">{t(finalCta.text)}</p>

          <div className="mt-8 flex justify-center">
            <Button href={site.calendly} target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="h-5 w-5" />
              {t(finalCta.button)}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
