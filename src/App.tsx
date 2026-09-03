import { useCallback, useState } from 'react'
import { Nav } from './components/Nav'
import { Intro } from './components/Intro'
import { Hero } from './components/Hero'
import { Metrics } from './components/Metrics'
import { Benefits } from './components/Benefits'
import { Agents } from './components/Agents'
import { Process } from './components/Process'
import { Team } from './components/Team'
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
            <Metrics />
            <Benefits />
            <Agents />
            <Process />
            <Team />
            <FinalCta />
          </main>
          <Footer />
        </>
      )}
    </LangProvider>
  )
}
