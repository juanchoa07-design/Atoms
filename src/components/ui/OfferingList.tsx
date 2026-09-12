import type { Offering } from '../../content/site'
import { useLang } from '../../lib/lang'
import { Reveal } from './Reveal'
import { AtomDot } from './AtomArt'

/**
 * Offerings as hairline-separated rows rather than boxed cards — the page
 * should read as one document, not a wall of tiles.
 */
export function OfferingList({ items }: { items: Offering[] }) {
  const { t } = useLang()

  return (
    <ul className="mt-8">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <Reveal
            as="li"
            key={item.n}
            delay={i * 60}
            className="group relative border-t border-border py-8 first:border-t-0 first:pt-0 md:grid md:grid-cols-[auto_minmax(0,22rem)_minmax(0,1fr)] md:items-start md:gap-8"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-0 bg-tone transition-all duration-500 group-hover:w-full"
            />
            <div className="flex items-center gap-3 md:w-16">
              <Icon
                className="h-5 w-5 text-tone transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-small text-text-muted md:hidden">{item.n}</span>
            </div>

            <div className="mt-4 md:mt-0">
              <h3 className="text-h3">{t(item.title)}</h3>
              <p className="mt-2 text-body text-text-muted">{t(item.desc)}</p>
            </div>

            {item.bullets && (
              <ul className="mt-4 space-y-2 md:mt-1">
                {item.bullets.map((bullet) => (
                  <li key={bullet.en} className="flex items-start gap-2 text-small text-text-muted">
                    <AtomDot className="mt-1 h-3 w-3 shrink-0 text-tone" />
                    {t(bullet)}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )
      })}
    </ul>
  )
}
