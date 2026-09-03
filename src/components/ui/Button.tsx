import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-200 whitespace-nowrap'

const variants = {
  primary:
    'bg-brand px-5 py-2.5 text-[#04121c] hover:bg-[#4bb0e8] hover:shadow-[0_0_28px_-6px_var(--color-brand)]',
  secondary:
    'border border-line-strong bg-white/[0.02] px-5 py-2.5 text-fg hover:border-white/30 hover:bg-white/[0.06]',
  ghost: 'px-2 py-2 text-fg-muted hover:text-fg',
} as const

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
