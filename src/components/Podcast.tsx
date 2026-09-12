import { ArrowUpRight, Play } from 'lucide-react'
import { podcast, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

export function Podcast({ headless = false }: { headless?: boolean } = {}) {
  const { t } = useLang()

  const body = (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {podcast.episodes.map((episode, i) => (
          <Reveal key={episode.videoId} delay={i * 80}>
            <a
              href={`https://www.youtube.com/watch?v=${episode.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-surface transition-colors duration-300 group-hover:border-tone">
                <img
                  src={`https://i.ytimg.com/vi/${episode.videoId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg text-text transition-colors group-hover:bg-tone group-hover:text-ink">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </span>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 text-small text-text-muted">
                  <span className="font-semibold text-tone-text">{episode.n}</span>
                  <span>{t(episode.date)}</span>
                </div>
                <h3 className="mt-2 text-body font-semibold">{episode.title}</h3>
                <p className="mt-1 text-small text-text-muted">{episode.guest}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Button variant="ghost" href="https://www.youtube.com/@TheAtomVoice" target="_blank" rel="noopener noreferrer">
          {t(podcast.cta)}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </>
  )

  if (headless) {
    return (
      <section id="podcast" className="tone-orange mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        {body}
      </section>
    )
  }

  return (
    <Section id="podcast" tone="orange" eyebrow={t(ui.podcastEyebrow)} title={t(podcast.title)} subtitle={t(podcast.blurb)}>
      {body}
    </Section>
  )
}
