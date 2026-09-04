import { servicesPage } from '../content/catalog'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingList } from '../components/ui/OfferingList'
import { Reveal } from '../components/ui/Reveal'
import { Process } from '../components/Process'
import { Integrations } from '../components/Integrations'
import { Metrics } from '../components/Metrics'
import { FinalCta } from '../components/FinalCta'

export function ServicesPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(servicesPage.eyebrow)} title={t(servicesPage.title)} intro={t(servicesPage.intro)} />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="space-y-20">
          {servicesPage.groups.map((group) => (
            <div key={group.id}>
              <Reveal className="max-w-2xl">
                <p className="eyebrow">{t(group.kicker)}</p>
                <h2 className="mt-3 font-display text-xl font-medium sm:text-2xl">{t(group.title)}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{t(group.blurb)}</p>
              </Reveal>
              <OfferingList items={group.items} />
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
