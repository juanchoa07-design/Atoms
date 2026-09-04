import { ArrowRight } from 'lucide-react'
import { tracks } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import SpotlightCard from './reactbits/SpotlightCard'

/**
 * The home page's only menu: four doors, each opening its own page. Nothing
 * below this is loaded on the home page.
 */
export function TrackChooser() {
  const { t } = useLang()

  return (
    <section id="explore" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track, i) => {
            const Icon = track.icon
            return (
              <Reveal key={track.id} delay={i * 80}>
                <a href={`#/${track.id}`} className="group block h-full">
                  <SpotlightCard
                    className="h-full rounded-card border border-line bg-ink-raised transition-colors duration-300 group-hover:border-line-strong"
                    spotlightColor="rgba(45, 156, 219, 0.16)"
                  >
                    <div className="relative flex h-full flex-col p-8 sm:p-10">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand">
                          <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <span className="eyebrow">{t(track.label)}</span>
                      </div>

                      <h2 className="mt-7 font-display text-2xl font-semibold leading-tight sm:text-[1.75rem]">
                        {t(track.title)}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-fg-muted">{t(track.blurb)}</p>

                      <ul className="mt-7 flex-1 space-y-2 border-t border-line pt-6">
                        {track.teaser.map((line) => (
                          <li key={line.en} className="flex items-center gap-2.5 text-sm text-fg-muted">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                            {t(line)}
                          </li>
                        ))}
                      </ul>

                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-all duration-300 group-hover:gap-3.5">
                        {t(track.cta)}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </SpotlightCard>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
