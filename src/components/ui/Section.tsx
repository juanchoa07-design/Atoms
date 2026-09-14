import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { OrbitRings } from './AtomArt'
import { BrandArt } from './BrandArt'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Which brand accent the section's details use. */
  tone?: 'blue' | 'orange'
  /** Swaps the orbit backdrop for one of the manual's graphic elements. */
  art?: 'chain' | 'eye' | 'mind'
  /** Sits under the heading — a call to action, a note, a figure. */
  aside?: ReactNode
  /**
   * Puts the heading in its own column beside the content instead of above
   * it, so the block fills the width on a wide screen. The heading stays put
   * while the content scrolls past.
   */
  split?: boolean
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  tone = 'blue',
  art,
  aside,
  split = false,
}: SectionProps) {
  return (
    <section id={id} className={`tone-${tone} relative overflow-hidden border-t border-border py-12 lg:py-24 ${className}`}>
      {/* Without a figure of its own, the orbit sits behind the block so a
          section is never a bare rectangle of text. */}
      {!art && (
        <OrbitRings className="pointer-events-none absolute right-6 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 text-tone opacity-[0.07] lg:block xl:right-16" />
      )}

      <div
        className={`relative mx-auto w-full max-w-(--container) px-6 ${
          split ? 'lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16' : ''
        }`}
      >
        <Reveal className={split ? 'lg:sticky lg:top-24 lg:self-start' : 'max-w-2xl'}>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-tone" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-h2">{title}</h2>
          {subtitle && <p className="mt-4 max-w-[65ch] text-body text-text-muted">{subtitle}</p>}

          {/* §7 of the manual: the elements are drawings that support a
              section, shown whole and at a readable size, not a wash behind
              the text. Beside the heading when the block is a single column,
              closing the content column when it is split — either way it
              lands where the block would otherwise run empty. */}
          {aside && <div className="mt-8">{aside}</div>}

          {art && !split && <BrandArt name={art} className="mt-10 hidden h-40 w-56 opacity-30 lg:block" />}
        </Reveal>
        <div className={split ? 'mt-8 lg:mt-0' : 'mt-8 lg:mt-12'}>
          {children}
          {art && split && <BrandArt name={art} className="ml-auto mt-12 hidden h-44 w-60 opacity-30 lg:block" />}
        </div>
      </div>
    </section>
  )
}
