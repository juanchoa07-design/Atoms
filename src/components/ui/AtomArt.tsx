import { useId } from 'react'

/**
 * Atom-derived decoration built from the brand mark. Everything here paints in
 * `currentColor` or the section's `--accent`, so a piece picks up whatever
 * colour the section it sits in is using.
 *
 * Motion uses SMIL (`animateMotion`) rather than CSS `offset-path`, because
 * SMIL works back to old Safari while `offset-path` does not. The global
 * prefers-reduced-motion rule in index.css stops the CSS-driven pieces.
 */

const ORBIT_D = 'M 11 32 A 21 8.5 0 1 0 53 32 A 21 8.5 0 1 0 11 32 Z'

/** Three orbits with an electron running each one. Section backdrop. */
export function OrbitRings({
  className = '',
  strokeWidth = 0.45,
  animated = true,
}: {
  className?: string
  strokeWidth?: number
  animated?: boolean
}) {
  const id = useId().replace(/:/g, '')
  const orbits = [0, 60, 120]

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <path id={`${id}-orbit`} d={ORBIT_D} />
      </defs>

      {orbits.map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 32 32)`}>
          <use href={`#${id}-orbit`} stroke="currentColor" strokeWidth={strokeWidth} fill="none" />
          {animated && (
            <circle r="0.9" fill="currentColor" opacity="0.9">
              <animateMotion dur={`${9 + i * 2.5}s`} repeatCount="indefinite" begin={`${i * -3}s`}>
                <mpath href={`#${id}-orbit`} />
              </animateMotion>
            </circle>
          )}
        </g>
      ))}

      <circle cx="32" cy="32" r="2.4" fill="currentColor" opacity="0.55" />
    </svg>
  )
}

/** A single orbit arc — used as a divider or a corner flourish. */
export function OrbitArc({ className = '', strokeWidth = 0.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d={ORBIT_D} stroke="currentColor" strokeWidth={strokeWidth} fill="none" transform="rotate(28 32 32)" />
      <path d={ORBIT_D} stroke="currentColor" strokeWidth={strokeWidth} fill="none" transform="rotate(96 32 32)" />
    </svg>
  )
}

/** Nucleus with electrons parked on the shell — a compact list bullet. */
export function AtomDot({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
      <circle cx="14" cy="8" r="1.2" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

/**
 * Particle lattice: nuclei joined by bonds. Sits behind copy-heavy blocks so
 * they read as a composition rather than a wall of text.
 */
export function ParticleLattice({ className = '' }: { className?: string }) {
  const nodes = [
    [10, 22],
    [38, 12],
    [66, 30],
    [30, 48],
    [58, 62],
    [88, 46],
    [16, 74],
    [46, 84],
  ] as const
  const bonds = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 5],
    [4, 5],
    [3, 6],
    [6, 7],
    [4, 7],
  ] as const

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.5">
        {bonds.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([cx, cy], i) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={i % 3 === 0 ? 1.6 : 1} fill="currentColor" opacity="0.8" />
      ))}
    </svg>
  )
}
