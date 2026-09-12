import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost'
  children: ReactNode
}

const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-200'

/**
 * Buttons from §8 of the design tokens, with one deliberate departure: the
 * manual pairs the orange fill with cream text, which is 2.79:1 and fails the
 * §9 floor. Ink on orange is 4.37:1, enough for large text only, so the filled
 * button sets its label at 20px bold (WCAG "large") and smaller calls to
 * action use the outline variant, as §2 suggests.
 */
const variants = {
  primary: 'rounded-md bg-accent px-6 py-3 text-h3 font-bold tracking-normal text-ink hover:bg-accent-hover',
  outline:
    'rounded-md border border-accent px-6 py-3 text-small font-semibold text-orange-on-dark hover:border-accent-hover hover:text-text',
  secondary:
    'rounded-md border border-border-strong px-6 py-3 text-small font-semibold text-text hover:border-detail hover:text-detail',
  /** "Link en texto" from §8 */
  ghost: 'text-detail underline decoration-1 underline-offset-3 hover:text-detail-hover',
} as const

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
