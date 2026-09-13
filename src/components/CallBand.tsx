import type { T } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import { OrbitRings } from './ui/AtomArt'
import { CallButton } from './ui/CallButton'

type CallBandProps = {
  /** The visitor's likely doubt at this point of the page. */
  title: T
  /** What the call gives them. */
  text: T
  tone?: 'blue' | 'orange'
}

/** A call to action between sections, on a surface band so it reads as a pause. */
export function CallBand({ title, text, tone = 'blue' }: CallBandProps) {
  const { t } = useLang()

  return (
    <section className={`tone-${tone} relative overflow-hidden border-t border-border bg-surface`}>
      <OrbitRings className="pointer-events-none absolute -right-16 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 text-tone opacity-10" />

      <div className="relative mx-auto flex w-full max-w-(--container) flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">{t(title)}</h2>
          <p className="mt-4 max-w-[65ch] text-body text-text-muted">{t(text)}</p>
        </Reveal>

        <Reveal className="shrink-0">
          <CallButton />
        </Reveal>
      </div>
    </section>
  )
}
