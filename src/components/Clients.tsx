import { clients } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'

/**
 * Client wordmarks in an infinite marquee. Text rather than logo files —
 * see the note in content/site.ts.
 */
export function Clients() {
  const { t } = useLang()
  const track = [...clients.names, ...clients.names]

  return (
    <section className="grad-sink relative py-10 sm:py-14">
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />
      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.16em] text-fg-subtle">{t(clients.title)}</p>
      </Reveal>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee_46s_linear_infinite] gap-14 group-hover:[animation-play-state:paused]">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
