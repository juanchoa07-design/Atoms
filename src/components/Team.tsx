import type { CSSProperties } from 'react'
import { Linkedin } from 'lucide-react'
import { team, teamOutro, ui } from '../content/site'
import type { Member } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

const ACCENTS = [
  'var(--color-accent-sage)',
  'var(--color-accent-blue)',
  'var(--color-accent-peach)',
  'var(--color-accent-lilac)',
]

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
      <span className="accent-text font-display text-lg font-medium opacity-70 transition-opacity duration-500 group-hover:opacity-100">
        {initials(member.name)}
      </span>
    </div>
  )
}

export function Team({ headless = false }: { headless?: boolean } = {}) {
  const { t } = useLang()

  const founders = team.filter((member) => member.founder)
  const rest = team.filter((member) => !member.founder)

  const card = (member: Member, i: number) => (
    <Reveal key={member.name} delay={i * 60}>
      <article
        className="accent-scope group h-full"
        style={{ '--accent': ACCENTS[i % ACCENTS.length] } as CSSProperties}
      >
        <div className="accent-card flex h-full flex-col rounded-card p-6">
          <div className="relative flex items-start gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line bg-white/[0.03] transition-transform duration-500 group-hover:scale-105">
              <Portrait member={member} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-medium">{member.name}</h3>
              <p className="accent-text mt-1 font-mono text-[11px] uppercase tracking-wider">{t(member.role)}</p>
            </div>
          </div>

          <p className="relative mt-5 flex-1 text-sm leading-relaxed text-fg-muted">{t(member.bio)}</p>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-chip relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:gap-3"
          >
            <Linkedin className="h-3.5 w-3.5" strokeWidth={1.8} />
            LinkedIn
          </a>
        </div>
      </article>
    </Reveal>
  )

  const body = (
    <>
      {/* Founders sit on their own row, above the rest */}
      <div className="grid gap-5 sm:grid-cols-2">{founders.map((member, i) => card(member, i))}</div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((member, i) => card(member, i + founders.length))}
      </div>

      <Reveal className="mt-12 border-t border-line pt-10">
        <p className="max-w-2xl text-base leading-relaxed text-fg-muted">{t(teamOutro)}</p>
      </Reveal>
    </>
  )

  if (headless) {
    return (
      <section id="team" className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        {body}
      </section>
    )
  }

  return (
    <Section
      id="team"
      index="04"
      accent="var(--color-accent-sage)"
      eyebrow={t(ui.teamEyebrow)}
      title={t(ui.teamTitle)}
      subtitle={t(ui.teamSubtitle)}
    >
      {body}
    </Section>
  )
}
