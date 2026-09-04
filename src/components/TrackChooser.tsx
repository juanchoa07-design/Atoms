import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { tracks } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import { OrbitArc } from './ui/AtomArt'

/**
 * The home page's only menu: four doors, each with its own accent colour and
 * its own page. Nothing below this loads on the home page.
 */
export function TrackChooser() {
  const { t } = useLang()

  return (
    <section id="explore" className="relative py-16 sm:py-24 lg:py-32">
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track, i) => {
            const Icon = track.icon
            return (
              <Reveal key={track.id} delay={i * 80}>
                <a
                  href={`#/${track.id}`}
                  className="accent-scope group block h-full focus:outline-none"
                  style={{ '--accent': track.accent } as CSSProperties}
                >
                  <article className="accent-card flex h-full flex-col overflow-hidden rounded-card p-6 sm:p-8 lg:p-10">
                    <OrbitArc className="accent-text pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-[0.12] transition-all duration-700 group-hover:-right-6 group-hover:opacity-25" />
                    <div className="relative flex items-center gap-3">
                      <span className="accent-chip inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span className="accent-text font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                        {t(track.label)}
                      </span>
                    </div>

                    <h2 className="relative mt-7 font-display text-xl font-medium leading-snug sm:text-[1.4rem]">
                      {t(track.title)}
                    </h2>
                    <p className="relative mt-3 text-sm leading-relaxed text-fg-muted">{t(track.blurb)}</p>

                    <ul className="relative mt-7 flex-1 space-y-2 border-t border-line pt-6">
                      {track.teaser.map((line) => (
                        <li key={line.en} className="flex items-center gap-2.5 text-sm text-fg-muted">
                          <span className="accent-rule h-1 w-1 shrink-0 rounded-full" aria-hidden="true" />
                          {t(line)}
                        </li>
                      ))}
                    </ul>

                    {/* A real button, not a bare text link */}
                    <span className="accent-chip relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 group-hover:gap-3">
                      {t(track.cta)}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </article>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
