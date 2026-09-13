import { useCallback, useState } from 'react'
import { Nav } from './components/Nav'
import { Intro } from './components/Intro'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { TrackChooser } from './components/TrackChooser'
import { CallBand } from './components/CallBand'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { StickyCallBar } from './components/StickyCallBar'
import { CallNudge } from './components/CallNudge'
import { ServicesPage } from './pages/ServicesPage'
import { TrainingPage } from './pages/TrainingPage'
import { AboutPage } from './pages/AboutPage'
import { PodcastPage } from './pages/PodcastPage'
import { CasesPage } from './pages/CasesPage'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { Grain } from './components/ui/Grain'
import { callBands } from './content/site'
import { LangProvider } from './lib/lang'
import { BookingProvider } from './lib/booking'
import { useRoute } from './lib/router'

/** The home page stays deliberately light: hero, clients, the four doors, CTA. */
function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <TrackChooser />
      <CallBand {...callBands.home} />
      <Faq />
      <FinalCta />
    </>
  )
}

function Router() {
  const route = useRoute()

  switch (route) {
    case 'services':
      return <ServicesPage />
    case 'training':
      return <TrainingPage />
    case 'about':
      return <AboutPage />
    case 'podcast':
      return <PodcastPage />
    case 'cases':
      return <CasesPage />
    default:
      return <Home />
  }
}

export default function App() {
  const [ready, setReady] = useState(false)
  const handleIntroDone = useCallback(() => setReady(true), [])

  return (
    <LangProvider>
      <BookingProvider>
        <Intro onDone={handleIntroDone} />
        {ready && (
          <>
            <ScrollProgress />
            <Grain />
            <Nav />
            <main>
              <Router />
            </main>
            <Footer />
            {/* The way to book stays in reach on every page: a bar on phones,
                a one-time card on desktop. */}
            <StickyCallBar />
            <CallNudge />
          </>
        )}
      </BookingProvider>
    </LangProvider>
  )
}
