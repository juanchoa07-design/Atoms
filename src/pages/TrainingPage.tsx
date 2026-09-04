import { trainingPage } from '../content/catalog'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingList } from '../components/ui/OfferingList'
import { FinalCta } from '../components/FinalCta'

export function TrainingPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(trainingPage.eyebrow)} title={t(trainingPage.title)} intro={t(trainingPage.intro)} />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <OfferingList items={trainingPage.items} />
      </section>

      <FinalCta />
    </>
  )
}
