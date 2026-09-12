import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { OrbitRings } from './AtomArt'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Which brand accent the section's details use. */
  tone?: 'blue' | 'orange'
}

export function Section({ id, eyebrow, title, subtitle, children, className = '', tone = 'blue' }: SectionProps) {
  return (
    <section id={id} className={`tone-${tone} relative overflow-hidden border-t border-border py-12 lg:py-24 ${className}`}>
      {/* An orbit figure in the section's accent, so a section is never a
          bare block of text */}
      <OrbitRings className="pointer-events-none absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 text-tone opacity-[0.07] sm:-right-16" />

      <div className="relative mx-auto w-full max-w-(--container) px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-tone" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-h2">{title}</h2>
          {subtitle && <p className="mt-4 max-w-[65ch] text-body text-text-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-8 lg:mt-12">{children}</div>
      </div>
    </section>
  )
}
