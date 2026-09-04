import { useEffect, useState } from 'react'

export type Route = 'home' | 'services' | 'training' | 'about' | 'podcast' | 'cases'

const ROUTES: Route[] = ['services', 'training', 'about', 'podcast', 'cases']

/**
 * Hash routing on purpose: GitHub Pages serves this from a subpath and has no
 * SPA fallback, so `#/services` works everywhere with zero server config.
 * Plain `#section` hashes are left alone for in-page anchors.
 */
function readRoute(): Route {
  const hash = window.location.hash
  if (!hash.startsWith('#/')) return 'home'
  const name = hash.slice(2).split(/[?/]/)[0]
  return (ROUTES as string[]).includes(name) ? (name as Route) : 'home'
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => readRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Land at the top of a new page, but let in-page anchors scroll normally.
  useEffect(() => {
    if (route !== 'home') window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])

  return route
}

/** Link to a home-page anchor from anywhere, including a subpage. */
export function homeAnchor(hash: string) {
  return `#${hash.replace(/^#/, '')}`
}
