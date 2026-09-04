import { podcast } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { Podcast } from '../components/Podcast'
import { FinalCta } from '../components/FinalCta'

export function PodcastPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(podcast.kicker)} title={t(podcast.title)} intro={t(podcast.blurb)} />
      <Podcast headless />
      <FinalCta />
    </>
  )
}
