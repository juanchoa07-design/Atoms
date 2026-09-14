import type { Offering } from '../../content/site'
import { useLang } from '../../lib/lang'
import { Reveal } from './Reveal'
import { AtomDot } from './AtomArt'

/**
 * Offerings as cards, two to a row: the same card language as the doors on
 * the home page, so a catalogue page reads as blocks instead of a column of
 * text with half the screen empty.
 */
export function OfferingList({ items }: { items: Offering[] }) {
  const { t } = useLang()

  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <Reveal as="li" key={item.n} delay={i * 60} className="group h-full">
            <article className="card flex h-full flex-col hover:border-tone">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-tone transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="text-small font-semibold text-text-muted">{item.n}</span>
              </div>

              <h3 className="mt-6 text-h3">{t(item.title)}</h3>
              <p className="mt-2 text-small text-text-muted">{t(item.desc)}</p>

              {item.bullets && (
                <ul className="mt-6 flex-1 space-y-2 border-t border-border pt-6">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.en} className="flex items-start gap-2 text-small text-text-muted">
                      <AtomDot className="mt-1 h-3 w-3 shrink-0 text-tone" />
                      {t(bullet)}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        )
      })}
    </ul>
  )
}
