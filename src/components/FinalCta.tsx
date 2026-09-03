import { CalendarCheck, Mail } from 'lucide-react'
import { finalCta, site, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { AtomMark } from './ui/AtomMark'

export function FinalCta() {
  const { t } = useLang()

  return (
    <section id="contacto" className="relative isolate overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-full h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/12 blur-[130px]" />
        <AtomMark
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 text-white/[0.03]"
          strokeWidth={0.4}
        />
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-[2.75rem] sm:leading-[1.1]">{t(finalCta.title)}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {t(finalCta.text)}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.calendly} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-[15px]">
              <CalendarCheck className="h-4 w-4" />
              {t(finalCta.button)}
            </Button>
            <Button variant="secondary" href={`mailto:${site.email}`} className="px-6 py-3 text-[15px]">
              <Mail className="h-4 w-4" />
              {t(ui.writeUs)}
            </Button>
          </div>

          <p className="mt-8 font-mono text-xs text-fg-muted">{site.email}</p>
        </Reveal>
      </div>
    </section>
  )
}
