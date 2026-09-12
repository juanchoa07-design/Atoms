import { integrations, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import { ParticleLattice } from './ui/AtomArt'

export function Integrations() {
  const { t } = useLang()

  return (
    <Section
      id="integrations"
      tone="orange"
      eyebrow={t(ui.integrationsEyebrow)}
      title={t(integrations.title)}
      subtitle={t(integrations.blurb)}
    >
      <Reveal className="relative">
        <ParticleLattice className="pointer-events-none absolute -left-8 -top-10 h-64 w-64 text-tone opacity-15" />
        <ul className="relative flex flex-wrap gap-3">
          {integrations.tools.map((tool, i) => (
            <Reveal
              as="li"
              key={tool}
              delay={i * 35}
              className="cursor-default rounded-full border border-border px-4 py-2 text-small text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-tone hover:text-text"
            >
              {tool}
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
