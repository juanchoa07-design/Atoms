import { integrations, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Integrations() {
  const { t } = useLang()

  return (
    <Section
      id="integrations"
      eyebrow={t(ui.integrationsEyebrow)}
      title={t(integrations.title)}
      subtitle={t(integrations.blurb)}
    >
      <Reveal>
        <ul className="flex flex-wrap gap-2.5">
          {integrations.tools.map((tool, i) => (
            <Reveal
              as="li"
              key={tool}
              delay={i * 35}
              className="rounded-full border border-line bg-white/[0.02] px-4 py-2 font-mono text-[13px] text-fg-muted transition hover:border-brand/50 hover:text-fg"
            >
              {tool}
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
