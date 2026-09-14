import { trainingPage } from '../content/catalog'
import { callBands } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { OfferingList } from '../components/ui/OfferingList'
import { BrandArt } from '../components/ui/BrandArt'
import { CallBand } from '../components/CallBand'
import { FinalCta } from '../components/FinalCta'

export function TrainingPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(trainingPage.eyebrow)} title={t(trainingPage.title)} intro={t(trainingPage.intro)} />

      <section className="relative overflow-hidden">
        {/* Pensamiento estratégico: this page is roadmaps, audits and training.
            Only from lg up: on a phone it would sit right behind the copy. */}
        <BrandArt
          name="mind"
          className="pointer-events-none absolute -right-16 top-8 hidden h-[26rem] w-80 opacity-10 lg:block"
        />
        <div className="relative mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
          <OfferingList items={trainingPage.items} />
        </div>
      </section>

      <CallBand {...callBands.training} />
      <FinalCta />
    </>
  )
}
