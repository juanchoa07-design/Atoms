import type { Offering } from '../../content/site'
import { useLang } from '../../lib/lang'
import { Reveal } from './Reveal'
import { AtomDot } from './AtomArt'

/**
 * Offerings as full-width rows separated by hairlines, not as cards. A card
 * grid leaves a hole whenever the list has an odd number of items, and the
 * manual's language is linear anyway: rules and line work, not boxes. Rows
 * also read the same with two items or with five.
 */
export function OfferingList({ items }: { items: Offering[] }) {
  const { t } = useLang()

  return (
    <ul className="mt-10 border-t border-border">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <Reveal as="li" key={item.n} delay={i * 60} className="group border-b border-border">
            <div className="grid gap-x-10 gap-y-6 py-8 lg:grid-cols-[3.5rem_minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:py-10">
              {/* The icon in its chip with the number under it: a marker for
                  the row, not a card around it */}
              <div className="flex items-center gap-4 lg:block">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-tone transition-colors duration-300 group-hover:border-tone">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="text-small font-semibold tabular-nums text-text-muted transition-colors duration-300 group-hover:text-tone lg:mt-3 lg:block lg:text-center lg:w-11">
                  {item.n}
                </span>
              </div>

              <div>
                <h3 className="text-h3">{t(item.title)}</h3>
                <p className="mt-2 max-w-[45ch] text-small text-text-muted">{t(item.desc)}</p>
              </div>

              {item.bullets && (
                <ul className="space-y-2 lg:pt-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.en} className="flex items-start gap-2 text-small text-text-muted">
                      <AtomDot className="mt-1 h-3 w-3 shrink-0 text-tone" />
                      {t(bullet)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        )
      })}
    </ul>
  )
}
