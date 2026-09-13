import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { booking, hero } from '../content/site'
import { useLang } from '../lib/lang'
import { token } from '../lib/tokens'
import { AtomMark } from './ui/AtomMark'
import { Button } from './ui/Button'
import { CallButton } from './ui/CallButton'
import Magnet from './reactbits/Magnet'
import Aurora from './reactbits/Aurora'
import BlurText from './reactbits/BlurText'
import GradientText from './reactbits/GradientText'

/** Celeste only: in the brand system it's a detail colour, never a surface. */
const ACCENT_GRADIENT = ['var(--color-blue)', 'var(--color-detail-hover)', 'var(--color-blue)']

export function Hero() {
  const { t, lang } = useLang()
  // The shader needs real colour values, so read them off the tokens once.
  const auroraStops = useMemo(
    () => [token('--color-detail-hover'), token('--color-blue'), token('--color-detail-hover')],
    [],
  )

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Backdrop: a faint celeste aurora, dot grid and an oversized atom outline */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[55vh] opacity-25 [mask-image:linear-gradient(to_bottom,#000_5%,transparent_85%)]">
          <Aurora colorStops={auroraStops} amplitude={0.8} blend={0.7} speed={0.45} />
        </div>
        <div className="grid-backdrop absolute inset-0" />
        <AtomMark
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-[55%] text-text/4"
          strokeWidth={0.35}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="mx-auto flex min-h-[92svh] w-full max-w-(--container) flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-small font-semibold text-text-muted">{t(hero.eyebrow)}</p>

        {/* The real heading stays plain text for search engines and screen
            readers; the animated copy below is a purely visual duplicate. */}
        <h1 className="sr-only">
          {t(hero.titleTop)} {t(hero.titleAccent)}
        </h1>
        <div aria-hidden="true" className="mt-6 max-w-5xl text-display">
          <BlurText
            key={`top-${lang}`}
            text={t(hero.titleTop)}
            delay={90}
            animateBy="words"
            direction="top"
            className="justify-center"
          />
          <GradientText key={`accent-${lang}`} colors={ACCENT_GRADIENT} animationSpeed={7}>
            {t(hero.titleAccent)}
          </GradientText>
        </div>

        <p className="mt-6 max-w-[65ch] text-body text-text-muted">{t(hero.subtitle)}</p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Magnet padding={70} magnetStrength={6}>
            <CallButton className="px-8 py-4" />
          </Magnet>
          {/* What the call is, right under the button: less to wonder about
              before clicking. */}
          <p className="text-small text-text-muted">{t(booking.reassurance)}</p>

          <Button variant="ghost" href="#/cases">
            {t(hero.secondaryCta)}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
