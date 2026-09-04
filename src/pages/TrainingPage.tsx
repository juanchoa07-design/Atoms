import { trainingPage } from '../content/catalog'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingCard } from '../components/ui/OfferingCard'
import { Reveal } from '../components/ui/Reveal'
import { FinalCta } from '../components/FinalCta'

export function TrainingPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader
        eyebrow={t(trainingPage.eyebrow)}
        title={t(trainingPage.title)}
        intro={t(trainingPage.intro)}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trainingPage.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 70}>
              <OfferingCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  )
}
