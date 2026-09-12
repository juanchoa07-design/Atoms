import { clients } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import { ParticleLattice } from './ui/AtomArt'

/** Client logos in an infinite marquee that pauses when you hover it. */
export function Clients() {
  const { t } = useLang()
  const track = [...clients.logos, ...clients.logos]

  return (
    <section className="relative border-t border-border py-12">
      <ParticleLattice className="pointer-events-none absolute right-6 top-2 h-40 w-40 text-detail opacity-10" />

      <Reveal className="mx-auto w-full max-w-(--container) px-6">
        <p className="text-center text-small font-semibold text-text-muted">{t(clients.title)}</p>
      </Reveal>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-[marquee_58s_linear_infinite] items-center gap-16 group-hover:[animation-play-state:paused]">
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
