import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`border-t border-line py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-display text-2xl font-medium sm:text-[1.9rem]">{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}
