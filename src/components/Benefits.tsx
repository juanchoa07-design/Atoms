import { useState } from 'react'
import { benefitCategories, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Benefits() {
  const { t } = useLang()
  const [activeId, setActiveId] = useState(benefitCategories[0].id)
  const active = benefitCategories.find((c) => c.id === activeId) ?? benefitCategories[0]

  return (
    <Section
      id="beneficios"
      eyebrow={t(ui.benefitsEyebrow)}
      title={t(ui.benefitsTitle)}
      subtitle={t(ui.benefitsSubtitle)}
    >
      <Reveal>
        {/* Text tabs — deliberately not cards */}
        <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-8 border-b border-line" role="tablist">
            {benefitCategories.map((category) => {
              const isActive = category.id === active.id
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`relative -mb-px whitespace-nowrap border-b-2 pb-4 text-sm transition ${
                    isActive
                      ? 'border-brand text-fg'
                      : 'border-transparent text-fg-subtle hover:text-fg-muted'
                  }`}
                >
                  {t(category.label)}
                </button>
              )
            })}
          </div>
        </div>
      </Reveal>

      <div key={active.id} className="mt-12">
        <Reveal>
          <p className="max-w-xl text-xl leading-snug text-fg sm:text-2xl">{t(active.blurb)}</p>
        </Reveal>

        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {active.items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal as="li" key={item.title.es} delay={i * 80} className="group bg-ink py-8 sm:px-7 sm:first:pl-0 sm:last:pr-0">
                <Icon className="h-5 w-5 text-brand" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-5 text-base font-medium text-fg">{t(item.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{t(item.desc)}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
