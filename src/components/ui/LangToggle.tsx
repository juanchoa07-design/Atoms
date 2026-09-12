import { useLang } from '../../lib/lang'

export function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="inline-flex items-center rounded-full border border-border p-1" role="group" aria-label="Idioma / Language">
      {(['en', 'es'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 text-small font-semibold transition-colors ${
            lang === code ? 'bg-text text-bg' : 'text-text-muted hover:text-text'
          }`}
        >
          {code === 'en' ? 'EN' : 'ES'}
        </button>
      ))}
    </div>
  )
}
