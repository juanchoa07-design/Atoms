import { ArrowRight, CalendarCheck } from 'lucide-react'
import { hero, site } from '../content/site'
import { useLang } from '../lib/lang'
import { AtomMark } from './ui/AtomMark'
import { Button } from './ui/Button'
import Magnet from './reactbits/Magnet'
import Aurora from './reactbits/Aurora'
import BlurText from './reactbits/BlurText'
import GradientText from './reactbits/GradientText'

export function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Backdrop: aurora band, dot grid and an oversized atom outline */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[55vh] opacity-[0.28] [mask-image:linear-gradient(to_bottom,#000_5%,transparent_85%)]">
          <Aurora colorStops={['#6D93C8', '#87ABDB', '#3E5675']} amplitude={0.8} blend={0.7} speed={0.45} />
        </div>
        <div className="grid-backdrop absolute inset-0" />
        <AtomMark
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-[55%] text-white/[0.035]"
          strokeWidth={0.35}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        <p className="eyebrow text-fg-muted">{t(hero.eyebrow)}</p>

        {/* The real heading stays plain text for search engines and screen
            readers; the animated copy below is a purely visual duplicate. */}
        <h1 className="sr-only">
          {t(hero.titleTop)} {t(hero.titleAccent)}
        </h1>
        <div
          aria-hidden="true"
          className="mt-6 max-w-3xl font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.02em]"
        >
          <BlurText
            key={`top-${lang}`}
            text={t(hero.titleTop)}
            delay={90}
            animateBy="words"
            direction="top"
            className="justify-center"
          />
          <GradientText
            key={`accent-${lang}`}
            colors={['#6D93C8', '#a8c6ea', '#6D93C8']}
            animationSpeed={7}
          >
            {t(hero.titleAccent)}
          </GradientText>
        </div>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">{t(hero.subtitle)}</p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Magnet padding={70} magnetStrength={6}>
            <Button
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 text-base sm:px-11 sm:py-[1.15rem] sm:text-[17px]"
            >
              <CalendarCheck className="h-5 w-5" />
              {t(hero.primaryCta)}
            </Button>
          </Magnet>

          <Button variant="ghost" href="#/cases" className="gap-1.5 px-4 py-2 text-sm">
            {t(hero.secondaryCta)}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
