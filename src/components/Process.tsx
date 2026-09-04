import { processSteps, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Process() {
  const { t } = useLang()

  return (
    <Section
      id="process"
      index="02"
      accent="var(--color-accent-blue)"
      eyebrow={t(ui.processEyebrow)}
      title={t(ui.processTitle)}
      subtitle={t(ui.processSubtitle)}
    >
      <ol className="relative">
        {/* Spine connecting the steps on wide screens */}
        <span className="absolute left-[7.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-line lg:block" aria-hidden="true" />

        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 70}
            className="relative border-t border-line py-10 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[7.5rem_1fr] lg:gap-12"
          >
            <div className="flex items-baseline gap-3 lg:block">
              <span className="font-mono text-sm text-brand">{step.n}</span>
              <span className="block text-xs text-fg-subtle lg:mt-1.5">{t(step.when)}</span>
            </div>

            <div className="mt-4 lg:mt-0 lg:pl-12">
              {/* Node on the spine */}
              <span
                className="absolute left-[7.5rem] hidden h-2 w-2 -translate-x-1/2 translate-y-2 rounded-full bg-brand lg:block"
                aria-hidden="true"
              />
              <h3 className="font-display text-lg font-medium">{t(step.title)}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">{t(step.desc)}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {step.bullets.map((bullet) => (
                  <li key={bullet.en} className="text-[13px] text-fg-subtle">
                    {t(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
