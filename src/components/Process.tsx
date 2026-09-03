import { processSteps, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Process() {
  const { t } = useLang()

  return (
    <Section id="proceso" eyebrow={t(ui.processEyebrow)} title={t(ui.processTitle)}>
      <ol className="grid gap-px bg-line md:grid-cols-3">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 90} className="bg-ink py-8 md:px-8 md:first:pl-0 md:last:pr-0">
            <span className="font-mono text-xs text-brand">{step.n}</span>
            <h3 className="mt-5 text-lg font-medium">{t(step.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(step.desc)}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
