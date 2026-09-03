type AtomMarkProps = {
  className?: string
  /** Stroke width of the orbits, in viewBox units. */
  strokeWidth?: number
}

/** Vector replacement for the old 3D chrome atom PNG. */
export function AtomMark({ className = 'h-7 w-7', strokeWidth = 2.2 }: AtomMarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={strokeWidth} opacity="0.85">
        <ellipse cx="32" cy="32" rx="21" ry="8.5" />
        <ellipse cx="32" cy="32" rx="21" ry="8.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="21" ry="8.5" transform="rotate(120 32 32)" />
      </g>
      <circle cx="32" cy="32" r="5" fill="currentColor" />
    </svg>
  )
}
