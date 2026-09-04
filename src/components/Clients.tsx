import { clients } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import { ParticleLattice } from './ui/AtomArt'

/** Client logos in an infinite marquee that pauses when you hover it. */
export function Clients() {
  const { t } = useLang()
  const track = [...clients.logos, ...clients.logos]

  return (
    <section className="grad-sink relative py-10 sm:py-14">
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />
      <ParticleLattice className="pointer-events-none absolute right-6 top-2 h-40 w-40 text-brand opacity-[0.1]" />

      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.16em] text-fg-subtle">{t(clients.title)}</p>
      </Reveal>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-[marquee_58s_linear_infinite] items-center gap-14 group-hover:[animation-play-state:paused] sm:gap-20">
          {track.map((logo, i) => (
            <img
              key={`${logo.slug}-${i}`}
              src={`${import.meta.env.BASE_URL}clients/${logo.slug}.webp`}
              alt={logo.name}
              loading="lazy"
              className={`h-11 w-auto shrink-0 opacity-75 grayscale brightness-125 transition duration-500 hover:scale-105 hover:opacity-100 hover:brightness-100 hover:grayscale-0 sm:h-14 ${
                logo.dark ? 'invert' : ''
              } hover:invert-0`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
