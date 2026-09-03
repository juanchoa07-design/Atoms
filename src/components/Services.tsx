import { ArrowRight, Check } from 'lucide-react'
import { serviceGroups, servicesOutro, site, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Services() {
  const { t } = useLang()

  return (
    <Section
      id="services"
      eyebrow={t(ui.servicesEyebrow)}
      title={t(ui.servicesTitle)}
      subtitle={t(ui.servicesSubtitle)}
    >
      <div className="space-y-20">
        {serviceGroups.map((group) => (
          <div key={group.id}>
            <Reveal className="max-w-2xl">
              <p className="eyebrow">{t(group.kicker)}</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-[1.75rem]">{t(group.title)}</h3>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">{t(group.blurb)}</p>
            </Reveal>

            <ul className="mt-10 grid gap-px bg-line lg:grid-cols-3">
              {group.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <Reveal as="li" key={item.n} delay={i * 80} className="bg-ink py-8 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-brand" strokeWidth={1.6} aria-hidden="true" />
                      <span className="font-mono text-xs text-fg-subtle">{item.n}</span>
                    </div>
                    <h4 className="mt-5 font-display text-base font-medium text-fg">{t(item.title)}</h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{t(item.desc)}</p>

                    {item.bullets && (
                      <ul className="mt-5 space-y-2 border-t border-line pt-5">
                        {item.bullets.map((bullet) => (
                          <li key={bullet.en} className="flex items-start gap-2.5 text-[13px] text-fg-muted">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2} aria-hidden="true" />
                            {t(bullet)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg text-fg">{t(servicesOutro.text)}</p>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand transition hover:gap-3"
        >
          {t(servicesOutro.cta)}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </Section>
  )
}
