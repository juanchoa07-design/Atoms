import { Linkedin } from 'lucide-react'
import { team, teamOutro, ui } from '../content/site'
import type { Member } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import SpotlightCard from './reactbits/SpotlightCard'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

/** Photo when we have one, monogram when we don't. */
function Portrait({ member }: { member: Member }) {
  if (member.photo) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${member.photo}`}
        alt={member.name}
        loading="lazy"
        className="h-full w-full object-cover object-[50%_18%] grayscale transition duration-500 group-hover:grayscale-0"
      />
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.05] to-transparent">
      <span className="font-display text-3xl font-medium text-fg-subtle transition-colors duration-500 group-hover:text-brand">
        {initials(member.name)}
      </span>
    </div>
  )
}

export function Team({ headless = false }: { headless?: boolean } = {}) {
  const { t } = useLang()

  const body = (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 60}>
            <SpotlightCard
              className="group h-full rounded-card border border-line bg-ink-raised"
              spotlightColor="rgba(45, 156, 219, 0.14)"
            >
              <div className="relative flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line">
                    <Portrait member={member} />
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn — ${member.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg-subtle transition hover:border-brand hover:text-brand"
                  >
                    <Linkedin className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </a>
                </div>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-brand">{t(member.role)}</p>
                <h3 className="mt-2 font-display text-lg font-medium">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(member.bio)}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 border-t border-line pt-10">
        <p className="max-w-2xl text-lg leading-snug text-fg">{t(teamOutro)}</p>
      </Reveal>
    </>
  )

  if (headless) {
    return (
      <section id="team" className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
        {body}
      </section>
    )
  }

  return (
    <Section id="team" eyebrow={t(ui.teamEyebrow)} title={t(ui.teamTitle)} subtitle={t(ui.teamSubtitle)}>
      {body}
    </Section>
  )
}
