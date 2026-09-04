import type { Offering } from '../../content/site'
import { useLang } from '../../lib/lang'
import { Reveal } from './Reveal'

/**
 * Offerings as hairline-separated rows rather than boxed cards — the page
 * should read as one document, not a wall of tiles.
 */
export function OfferingList({ items }: { items: Offering[] }) {
  const { t } = useLang()

  return (
    <ul className="mt-10">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <Reveal
            as="li"
            key={item.n}
            delay={i * 60}
            className="group border-t border-line py-9 first:border-t-0 first:pt-0 md:grid md:grid-cols-[auto_minmax(0,22rem)_minmax(0,1fr)] md:items-start md:gap-10"
          >
            <div className="flex items-center gap-3 md:w-16">
              <Icon
                className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="font-mono text-xs text-fg-subtle md:hidden">{item.n}</span>
            </div>

            <div className="mt-4 md:mt-0">
              <h3 className="font-display text-lg font-medium">{t(item.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t(item.desc)}</p>
            </div>

            {item.bullets && (
              <ul className="mt-5 space-y-2 md:mt-1">
                {item.bullets.map((bullet) => (
                  <li key={bullet.en} className="flex items-start gap-2.5 text-[13px] text-fg-subtle">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand/70" aria-hidden="true" />
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
