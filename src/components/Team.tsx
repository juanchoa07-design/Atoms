import { Linkedin } from 'lucide-react'
import { team, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import SpotlightCard from './reactbits/SpotlightCard'

export function Team() {
  const { t } = useLang()

  return (
    <Section id="nosotros" eyebrow={t(ui.teamEyebrow)} title={t(ui.teamTitle)} subtitle={t(ui.teamSubtitle)}>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-8">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 90}>
            <SpotlightCard
              className="group rounded-card border border-line bg-ink-raised"
              spotlightColor="rgba(45, 156, 219, 0.14)"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  width={900}
                  height={1233}
                  className="h-full w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="relative flex items-end justify-between gap-4 border-t border-line p-6">
                <div>
                  <h3 className="text-base font-medium">{member.name}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{t(member.role)}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn — ${member.name}`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition hover:border-brand hover:text-brand"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.7} />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
