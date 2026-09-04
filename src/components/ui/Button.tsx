import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-200 whitespace-nowrap'

const variants = {
  primary: [
    'btn-shine px-5 py-2.5 font-semibold text-[#1b2432]',
    'bg-gradient-to-b from-[#a3c1e6] to-[#6d93c8]',
    'shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_8px_24px_-10px_var(--color-brand)]',
    'hover:from-[#b3cdec] hover:to-[#7a9ed0]',
    'hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),0_12px_32px_-10px_var(--color-brand)]',
    'active:translate-y-px',
  ].join(' '),
  secondary:
    'border border-line-strong bg-white/[0.02] px-5 py-2.5 text-fg hover:border-white/30 hover:bg-white/[0.06]',
  ghost: 'px-2 py-2 text-fg-muted underline-offset-4 hover:text-fg hover:underline',
} as const

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
