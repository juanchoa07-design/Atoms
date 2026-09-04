import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Ghosted numeral in the corner — a visual anchor, not content. */
  index?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className = '', index }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-24 sm:py-32 ${className}`}>
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />

      {index && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-16 select-none font-display text-[7rem] font-medium leading-none text-fg/[0.03] sm:right-12 sm:text-[10rem]"
        >
          {index}
        </span>
      )}

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-brand/60" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium sm:text-[1.9rem]">{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}
