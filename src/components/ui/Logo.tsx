import { site } from '../../content/site'

/**
 * The "Atom ai" lockup, placed by the rules in §6 of the design tokens:
 * - 48px tall renders it 77.5px wide, just over this version's 76px web minimum.
 * - The clear zone is x on every side, x being the width of the "o": a quarter
 *   of the logo's height, so 12px (--space-3) at this size. It is painted as
 *   padding, so nothing can sit inside it.
 * - No filters, rotation or non-uniform scaling, ever.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#/" aria-label={site.name} className={`inline-flex shrink-0 p-3 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}brand/logo.png`}
        alt=""
        width={355}
        height={220}
        className="h-12 w-auto object-contain"
      />
    </a>
  )
}
