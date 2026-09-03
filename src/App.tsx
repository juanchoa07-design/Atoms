import { useCallback, useState } from 'react'
import { Nav } from './components/Nav'
import { Intro } from './components/Intro'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Integrations } from './components/Integrations'
import { Metrics } from './components/Metrics'
import { Team } from './components/Team'
import { Podcast } from './components/Podcast'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { LangProvider } from './lib/lang'

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
            <Hero />
            <Clients />
            <Services />
            <Process />
            <Integrations />
            <Metrics />
            <Team />
            <Podcast />
            <FinalCta />
          </main>
          <Footer />
        </>
      )}
    </LangProvider>
  )
}
