import { Check } from 'lucide-react'
import type { Offering } from '../../content/site'
import { useLang } from '../../lib/lang'
import SpotlightCard from '../reactbits/SpotlightCard'

export function OfferingCard({ item }: { item: Offering }) {
  const { t } = useLang()
  const Icon = item.icon

  return (
    <SpotlightCard
      className="h-full rounded-card border border-line bg-ink-raised"
      spotlightColor="rgba(45, 156, 219, 0.14)"
    >
      <div className="relative flex h-full flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand">
            <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-fg-subtle">{item.n}</span>
        </div>

        <h3 className="mt-6 font-display text-lg font-medium">{t(item.title)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(item.desc)}</p>

        {item.bullets && (
          <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
            {item.bullets.map((bullet) => (
              <li key={bullet.en} className="flex items-start gap-2.5 text-[13px] text-fg-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2} aria-hidden="true" />
                {t(bullet)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </SpotlightCard>
  )
}
