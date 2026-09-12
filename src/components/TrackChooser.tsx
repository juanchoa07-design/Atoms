import { ArrowRight } from 'lucide-react'
import { tracks } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import { OrbitArc } from './ui/AtomArt'

/**
 * The home page's only menu: four doors, each opening its own page. Services
 * and training carry the celeste, the team and the podcast the orange. Nothing
 * below this loads on the home page.
 */
export function TrackChooser() {
  const { t } = useLang()

  return (
    <section id="explore" className="relative border-t border-border py-12 lg:py-24">
      <div className="mx-auto w-full max-w-(--container) px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {tracks.map((track, i) => {
            const Icon = track.icon
            return (
              <Reveal key={track.id} delay={i * 80}>
                <a href={`#/${track.id}`} className={`tone-${track.tone} group block h-full rounded-md`}>
                  <article className="card card-link relative flex h-full flex-col overflow-hidden">
                    <OrbitArc className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-tone opacity-15 transition-all duration-700 group-hover:-right-6 group-hover:opacity-30" />
                    <div className="relative flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-tone transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span className="text-small font-semibold text-text-muted">{t(track.label)}</span>
                    </div>

                    <h2 className="relative mt-6 text-h3">{t(track.title)}</h2>
                    <p className="relative mt-2 text-small text-text-muted">{t(track.blurb)}</p>

                    <ul className="relative mt-6 flex-1 space-y-2 border-t border-border pt-6">
                      {track.teaser.map((line) => (
                        <li key={line.en} className="flex items-center gap-2 text-small text-text-muted">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-tone" aria-hidden="true" />
                          {t(line)}
                        </li>
                      ))}
                    </ul>

                    {/* A real button, not a bare text link */}
                    <span className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-small font-semibold text-text transition-colors duration-300 group-hover:border-tone">
                      {t(track.cta)}
                      <ArrowRight className="h-4 w-4 text-tone transition-transform duration-300 group-hover:translate-x-1" />
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
