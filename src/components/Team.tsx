import { Linkedin } from 'lucide-react'
import { team, teamOutro, ui } from '../content/site'
import type { Member } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function Portrait({ member }: { member: Member }) {
  if (member.photo) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${member.photo}`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover object-[50%_18%] grayscale transition duration-500 group-hover:grayscale-0"
      />
    )
  }
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-display text-base font-medium text-fg-subtle transition-colors duration-500 group-hover:text-brand">
        {initials(member.name)}
      </span>
    </div>
  )
}

/** Rows, not tiles: the team reads as a list of people. */
export function Team({ headless = false }: { headless?: boolean } = {}) {
  const { t } = useLang()

  const body = (
    <>
      <ul>
        {team.map((member, i) => (
          <Reveal
            as="li"
            key={member.name}
            delay={i * 50}
            className="group relative flex items-center gap-5 border-t border-line py-6 transition-colors duration-300 first:border-t-0 hover:bg-white/[0.015] sm:gap-8"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-0 bg-brand transition-all duration-500 group-hover:w-full"
            />
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line bg-white/[0.03] transition-transform duration-500 group-hover:scale-105">
              <Portrait member={member} />
            </div>

            <div className="min-w-0 flex-1 sm:grid sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8">
              <div>
                <h3 className="font-display text-base font-medium">{member.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-brand">{t(member.role)}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:mt-0">{t(member.bio)}</p>
            </div>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn — ${member.name}`}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-subtle transition hover:border-brand hover:text-brand"
            >
              <Linkedin className="h-3.5 w-3.5" strokeWidth={1.7} />
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 border-t border-line pt-10">
        <p className="max-w-2xl text-base leading-relaxed text-fg-muted">{t(teamOutro)}</p>
      </Reveal>
    </>
  )

  if (headless) {
    return (
      <section id="team" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        {body}
      </section>
    )
  }

  return (
    <Section id="team" index="04" eyebrow={t(ui.teamEyebrow)} title={t(ui.teamTitle)} subtitle={t(ui.teamSubtitle)}>
      {body}
    </Section>
  )
}
