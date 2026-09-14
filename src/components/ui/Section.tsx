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
  /** One of the manual's graphic elements, beside the heading. */
  art?: 'chain' | 'eye' | 'mind'
  /** Sits under the heading — a call to action, a note. */
  aside?: ReactNode
  /**
   * Puts the heading in its own column beside the content instead of above
   * it, for blocks long enough to fill that column — a list of questions,
   * not three rows of chips.
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
        {/* §7 of the manual: a drawing that supports the section, whole and
            at a readable size, level with the heading it belongs to. */}
        {art && !split && (
          <BrandArt
            name={art}
            className="pointer-events-none absolute right-0 top-0 hidden h-44 w-40 opacity-30 lg:block"
          />
        )}

        <Reveal className={split ? 'lg:self-start' : 'max-w-2xl'}>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-tone" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-h2">{title}</h2>
          {subtitle && <p className="mt-4 max-w-[65ch] text-body text-text-muted">{subtitle}</p>}

          {aside && <div className="mt-8">{aside}</div>}

          {art && split && <BrandArt name={art} className="mt-10 hidden h-40 w-44 opacity-30 lg:block" />}
        </Reveal>

        <div className={split ? 'mt-8 lg:mt-0' : 'mt-8 lg:mt-12'}>{children}</div>
      </div>
    </section>
  )
}
