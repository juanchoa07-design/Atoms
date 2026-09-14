import { trainingPage } from '../content/catalog'
import { callBands } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingList } from '../components/ui/OfferingList'
import { CallBand } from '../components/CallBand'
import { FinalCta } from '../components/FinalCta'

export function TrainingPage() {
  const { t } = useLang()

  return (
    <>
      {/* Pensamiento estratégico: this page is roadmaps, audits and training */}
      <PageHeader
        eyebrow={t(trainingPage.eyebrow)}
        title={t(trainingPage.title)}
        intro={t(trainingPage.intro)}
        art="mind"
      />

      <section className="mx-auto w-full max-w-(--container) px-6 pb-12 pt-8 lg:pb-24 lg:pt-12">
        <OfferingList items={trainingPage.items} />
      </section>

      <CallBand {...callBands.training} />
      <FinalCta />
    </>
  )
}
