import { useLang } from '../../lib/lang'

export function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="inline-flex items-center rounded-full border border-line p-0.5" role="group" aria-label="Idioma / Language">
      {(['en', 'es'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase transition ${
            lang === code ? 'bg-fg text-ink' : 'text-fg-subtle hover:text-fg-muted'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
