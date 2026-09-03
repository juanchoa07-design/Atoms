import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { agents, hero, site, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import SpotlightCard from './reactbits/SpotlightCard'

export function Agents() {
  const { t } = useLang()
  const [activeId, setActiveId] = useState(agents[0].id)
  const active = agents.find((a) => a.id === activeId) ?? agents[0]
  const ActiveIcon = active.icon

  return (
    <Section id="agentes" eyebrow={t(ui.agentsEyebrow)} title={t(ui.agentsTitle)} subtitle={t(ui.agentsSubtitle)}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        {/* Selector */}
        <Reveal className="min-w-0">
          <ul className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {agents.map((agent) => {
              const Icon = agent.icon
              const isActive = agent.id === active.id
              return (
                <li key={agent.id} className="shrink-0 lg:w-full">
                  <button
                    type="button"
                    onClick={() => setActiveId(agent.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-3 rounded-full border px-4 py-3 text-left transition lg:rounded-none lg:border-0 lg:border-l lg:px-5 lg:py-5 ${
                      isActive
                        ? 'border-brand bg-brand-soft text-fg lg:bg-transparent'
                        : 'border-line text-fg-muted hover:text-fg lg:border-line lg:hover:border-line-strong'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${isActive ? 'text-brand' : 'text-fg-subtle'}`}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className="whitespace-nowrap text-sm font-medium lg:whitespace-normal">
                        {t(agent.name)}
                      </span>
                      <span className="hidden text-xs text-fg-subtle lg:block">{t(agent.short)}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Detail panel */}
        <Reveal key={active.id} className="min-w-0">
          <SpotlightCard
            className="rounded-card border border-line bg-ink-raised"
            spotlightColor="rgba(45, 156, 219, 0.16)"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative p-8 sm:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand">
                <ActiveIcon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>

              <h3 className="mt-7 text-2xl font-semibold sm:text-3xl">{t(active.name)}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">{t(active.description)}</p>

              <ul className="mt-9 space-y-3.5 border-t border-line pt-8">
                {active.bullets.map((bullet) => (
                  <li key={bullet.es} className="flex items-start gap-3 text-sm text-fg">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} aria-hidden="true" />
                    {t(bullet)}
                  </li>
                ))}
              </ul>

              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:gap-3"
              >
                {t(hero.primaryCta)}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}
