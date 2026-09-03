import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, T } from '../content/site'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Resolve a bilingual string to the active language. */
  t: (value: T) => string
}

const LangContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = 'atomlabs.lang'

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    /* storage can be blocked — fall through to the browser preference */
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => initialLang())

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* nothing to do if storage is unavailable */
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const t = useCallback((value: T) => value[lang], [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
