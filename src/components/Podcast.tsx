import { ArrowUpRight, Play } from 'lucide-react'
import { podcast, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Podcast() {
  const { t } = useLang()

  return (
    <Section
      id="podcast"
      eyebrow={t(ui.podcastEyebrow)}
      title={t(podcast.title)}
      subtitle={t(podcast.blurb)}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {podcast.episodes.map((episode, i) => (
          <Reveal key={episode.videoId} delay={i * 80}>
            <a
              href={`https://www.youtube.com/watch?v=${episode.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-card border border-line bg-ink-raised transition hover:border-line-strong"
            >
              <div className="relative aspect-video overflow-hidden bg-ink-hover">
                <img
                  src={`https://i.ytimg.com/vi/${episode.videoId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/70 backdrop-blur transition group-hover:bg-brand group-hover:text-[#04121c]">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 font-mono text-[11px] text-fg-subtle">
                  <span className="text-brand">{episode.n}</span>
                  <span>{t(episode.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-medium leading-snug">{episode.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{episode.guest}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <a
          href="https://www.youtube.com/@TheAtomVoice"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:gap-3"
        >
          {t(podcast.cta)}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </Section>
  )
}
