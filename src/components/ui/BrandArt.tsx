type BrandArtProps = {
  /** Cadena molecular, Vigilancia and Pensamiento estratégico, in that order. */
  name: 'chain' | 'eye' | 'mind'
  className?: string
}

/**
 * The graphic elements from §7 of the brand manual, cut out of the manual
 * itself (page 14, see scripts/README). They ship as alpha masks rather than
 * coloured images, so each one takes the tone of the block it sits in and can
 * never drift off palette.
 */
export function BrandArt({ name, className = '' }: BrandArtProps) {
  const url = `${import.meta.env.BASE_URL}graphics/${name}.webp`
  const mask = {
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
  }

  return <div aria-hidden="true" className={`bg-tone ${className}`} style={mask} />
}
