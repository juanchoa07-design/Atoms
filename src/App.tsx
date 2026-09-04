import { useCallback, useState } from 'react'
import { Nav } from './components/Nav'
import { Intro } from './components/Intro'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { TrackChooser } from './components/TrackChooser'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { ServicesPage } from './pages/ServicesPage'
import { TrainingPage } from './pages/TrainingPage'
import { AboutPage } from './pages/AboutPage'
import { PodcastPage } from './pages/PodcastPage'
import { CasesPage } from './pages/CasesPage'
import { LangProvider } from './lib/lang'
import { useRoute } from './lib/router'

/** The home page stays deliberately light: hero, clients, the four doors, CTA. */
function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <TrackChooser />
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
      <Intro onDone={handleIntroDone} />
      {ready && (
        <>
          <Nav />
          <main>
            <Router />
          </main>
          <Footer />
        </>
      )}
    </LangProvider>
  )
}
