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
      <span className="text-h3 font-bold text-tone-text">{initials(member.name)}</span>
    </div>
  )
}

/** The team in the orange tone, the same one as its door on the home page. */
export function Team({ headless = false }: { headless?: boolean } = {}) {
  const { t } = useLang()

  const founders = team.filter((member) => member.founder)
  const rest = team.filter((member) => !member.founder)

  const card = (member: Member, i: number) => (
    <Reveal key={member.name} delay={i * 60}>
      <article className="card group flex h-full flex-col hover:border-tone">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-bg transition-transform duration-500 group-hover:scale-105">
            <Portrait member={member} />
          </div>
          <div className="min-w-0">
            <h3 className="text-body font-semibold">{member.name}</h3>
            <p className="mt-1 text-small text-text-muted">{t(member.role)}</p>
          </div>
        </div>

        <p className="mt-4 flex-1 text-small text-text-muted">{t(member.bio)}</p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn — ${member.name}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-small font-semibold text-text transition-colors hover:border-tone"
        >
          <Linkedin className="h-4 w-4 text-tone" strokeWidth={1.8} />
          LinkedIn
        </a>
      </article>
    </Reveal>
  )

  const body = (
    <>
      {/* Founders sit on their own row, above the rest */}
      <div className="grid gap-6 sm:grid-cols-2">{founders.map((member, i) => card(member, i))}</div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((member, i) => card(member, i + founders.length))}
      </div>

      <Reveal className="mt-12 border-t border-border pt-8">
        <p className="max-w-[65ch] text-body text-text-muted">{t(teamOutro)}</p>
      </Reveal>
    </>
  )

  if (headless) {
    return (
      <section id="team" className="tone-orange mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        {body}
      </section>
    )
  }

  return (
    <Section id="team" tone="orange" eyebrow={t(ui.teamEyebrow)} title={t(ui.teamTitle)} subtitle={t(ui.teamSubtitle)}>
      {body}
    </Section>
  )
}
