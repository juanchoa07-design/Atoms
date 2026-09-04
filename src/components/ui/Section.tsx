import type { CSSProperties, ReactNode } from 'react'
import { Reveal } from './Reveal'
import { OrbitRings } from './AtomArt'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Ghosted numeral in the corner — a visual anchor, not content. */
  index?: string
  /** CSS colour tinting the eyebrow, numeral and background bloom. */
  accent?: string
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  index,
  accent = 'var(--color-brand)',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`accent-scope relative overflow-hidden py-16 sm:py-24 lg:py-32 ${className}`}
      style={{ '--accent': accent } as CSSProperties}
    >
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />

      {/* Colour bloom plus an orbit figure, so a section is never a bare
          block of text */}
      <div
        aria-hidden="true"
        className="accent-bloom pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] opacity-40 blur-[40px]"
      />
      <OrbitRings className="accent-text pointer-events-none absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 opacity-[0.07] sm:-right-16" />

      {index && (
        <span
          aria-hidden="true"
          className="accent-text pointer-events-none absolute right-4 top-12 select-none font-display text-[5.5rem] font-medium leading-none opacity-[0.07] sm:right-12 sm:top-16 sm:text-[10rem]"
        >
          {index}
        </span>
      )}

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="accent-text flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
            <span className="accent-rule h-px w-6" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium sm:text-[1.9rem]">{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
