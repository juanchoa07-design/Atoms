import { processSteps, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Process() {
  const { t } = useLang()

  return (
    <Section id="process" eyebrow={t(ui.processEyebrow)} title={t(ui.processTitle)} subtitle={t(ui.processSubtitle)}>
      <ol className="relative">
        {/* Spine connecting the steps on wide screens */}
        <span className="absolute left-[7.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-border lg:block" aria-hidden="true" />

        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 70}
            className="relative border-t border-border py-8 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[7.5rem_1fr] lg:gap-12"
          >
            <div className="flex items-baseline gap-3 lg:block">
              <span className="text-small font-semibold text-tone-text">{step.n}</span>
              <span className="block text-small text-text-muted lg:mt-1">{t(step.when)}</span>
            </div>

            <div className="mt-4 lg:mt-0 lg:pl-12">
              {/* Node on the spine */}
              <span
                className="absolute left-[7.5rem] hidden h-2 w-2 -translate-x-1/2 translate-y-2 rounded-full bg-tone lg:block"
                aria-hidden="true"
              />
              <h3 className="text-h3">{t(step.title)}</h3>
              <p className="mt-2 max-w-[65ch] text-body text-text-muted">{t(step.desc)}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {step.bullets.map((bullet) => (
                  <li key={bullet.en} className="text-small text-text-muted">
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
