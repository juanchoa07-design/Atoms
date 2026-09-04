import { servicesPage } from '../content/catalog'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingCard } from '../components/ui/OfferingCard'
import { Reveal } from '../components/ui/Reveal'
import { Process } from '../components/Process'
import { Integrations } from '../components/Integrations'
import { Metrics } from '../components/Metrics'
import { FinalCta } from '../components/FinalCta'

export function ServicesPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader
        eyebrow={t(servicesPage.eyebrow)}
        title={t(servicesPage.title)}
        intro={t(servicesPage.intro)}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
        <div className="space-y-20">
          {servicesPage.groups.map((group) => (
            <div key={group.id}>
              <Reveal className="max-w-2xl">
                <p className="eyebrow">{t(group.kicker)}</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-[1.75rem]">{t(group.title)}</h2>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">{t(group.blurb)}</p>
              </Reveal>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.n} delay={i * 70}>
                    <OfferingCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Process />
      <Integrations />
      <Metrics />
      <FinalCta />
    </>
  )
}
