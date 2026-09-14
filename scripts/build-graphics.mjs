/**
 * Cuts the three graphic elements of §7 of the brand manual out of the manual
 * itself, page 14, and writes them to public/graphics as alpha masks.
 *
 * Why masks: the site paints them with the tone of the block they sit in, so
 * they can never drift off palette.
 *
 * How the cut-out works: the art is flat orange over the three flat page
 * colours, so every pixel is solved as a mix of orange and one of them. That
 * gives real anti-aliased alpha with no halo — background removers leave a
 * fringe and the page text behind. Pieces that never reach full opacity are
 * page text and the edge of the big circle showing through, so they go.
 *
 * Needs the manual PDF (not in the repo, it is 229 MB) and mupdf:
 *   npm i --no-save mupdf
 *   node scripts/build-graphics.mjs "C:/path/Manual de marca Atom labs df.pdf"
 */
import { readFileSync, mkdirSync, statSync } from 'node:fs'
import * as mupdf from 'mupdf'
import sharp from 'sharp'

const PDF = process.argv[2]
if (!PDF) {
  console.error('Uso: node scripts/build-graphics.mjs <ruta del manual .pdf>')
  process.exit(1)
}

const OUT = 'public/graphics'
const PAGE = 13 // page 14, Elementos gráficos
const SCALE = 4 // the page is 1920x1080pt, so this renders at 7680x4320
const ORANGE = [219, 111, 84]
const BACKGROUNDS = [
  [252, 233, 228], // blanco crema
  [135, 171, 219], // celeste
  [43, 42, 42], // negro polvo
]
const FIT = 45 // how far a pixel may sit off the orange<->background line
const SOLID = 200 // real line art always has fully opaque pixels
const MAX_SIDE = 1600

const ELEMENTS = [
  { name: 'eye', crop: [440, 2140, 1860, 950] },
  // The chain runs right up against the head, so keep only the two big pieces
  // here: the profile and the tangle inside it.
  { name: 'mind', crop: [2620, 1180, 2180, 2760], keepTop: 2 },
  // Stop before the solid orange wedge in the page corner: it touches the
  // chain, so the two would come out as one piece.
  { name: 'chain', crop: [4600, 140, 2540, 3820], keepTop: 1 },
]

const alphaOf = (r, g, b) => {
  let best = 0
  let bestResidual = Infinity
  for (const bg of BACKGROUNDS) {
    const dx = ORANGE[0] - bg[0]
    const dy = ORANGE[1] - bg[1]
    const dz = ORANGE[2] - bg[2]
    const t = Math.min(
      1,
      Math.max(0, ((r - bg[0]) * dx + (g - bg[1]) * dy + (b - bg[2]) * dz) / (dx * dx + dy * dy + dz * dz)),
    )
    const residual = Math.hypot(r - (bg[0] + t * dx), g - (bg[1] + t * dy), b - (bg[2] + t * dz))
    if (residual < bestResidual) {
      bestResidual = residual
      best = t
    }
  }
  return bestResidual > FIT ? 0 : Math.round(best * 255)
}

const doc = mupdf.Document.openDocument(readFileSync(PDF), 'application/pdf')
const pix = doc.loadPage(PAGE).toPixmap(mupdf.Matrix.scale(SCALE, SCALE), mupdf.ColorSpace.DeviceRGB, false, true)
const PW = pix.getWidth()
const PH = pix.getHeight()
const data = pix.getPixels()
const CH = data.length / (PW * PH)
console.log('pagina', `${PW}x${PH}`)

mkdirSync(OUT, { recursive: true })
for (const { name, crop, keepTop } of ELEMENTS) {
  const [cx, cy, cw, ch] = crop
  const alpha = new Uint8Array(cw * ch)
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const p = ((cy + y) * PW + (cx + x)) * CH
      alpha[y * cw + x] = alphaOf(data[p], data[p + 1], data[p + 2])
    }
  }

  // Split into connected pieces so the neighbours and the page text can go.
  const seen = new Uint8Array(cw * ch)
  const stack = new Int32Array(cw * ch)
  const pieces = []
  for (let start = 0; start < cw * ch; start++) {
    if (seen[start] || alpha[start] < 40) continue
    let top = 0
    stack[top++] = start
    seen[start] = 1
    const pixels = []
    let maxAlpha = 0
    while (top > 0) {
      const i = stack[--top]
      pixels.push(i)
      if (alpha[i] > maxAlpha) maxAlpha = alpha[i]
      const x = i % cw
      const y = (i / cw) | 0
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        const nx = x + dx
        const ny = y + dy
        if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) continue
        const j = ny * cw + nx
        if (!seen[j] && alpha[j] >= 40) {
          seen[j] = 1
          stack[top++] = j
        }
      }
    }
    pieces.push({ pixels, area: pixels.length, maxAlpha })
  }

  pieces.sort((a, b) => b.area - a.area)
  const solid = pieces.filter((piece) => piece.maxAlpha >= SOLID && piece.area >= 300)
  const kept = keepTop ? solid.slice(0, keepTop) : solid
  const keep = new Uint8Array(cw * ch)
  for (const piece of kept) for (const i of piece.pixels) keep[i] = 1
  for (let i = 0; i < alpha.length; i++) if (!keep[i]) alpha[i] = 0

  // Trim to what is left.
  let minX = cw
  let minY = ch
  let maxX = -1
  let maxY = -1
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      if (alpha[y * cw + x] > 10) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  const tw = maxX - minX + 1
  const th = maxY - minY + 1
  const rgba = Buffer.alloc(tw * th * 4)
  for (let y = 0; y < th; y++) {
    for (let x = 0; x < tw; x++) {
      const o = (y * tw + x) * 4
      rgba[o] = 255
      rgba[o + 1] = 255
      rgba[o + 2] = 255
      rgba[o + 3] = alpha[(minY + y) * cw + (minX + x)]
    }
  }
  const fit = tw >= th ? { width: Math.min(MAX_SIDE, tw) } : { height: Math.min(MAX_SIDE, th) }
  await sharp(rgba, { raw: { width: tw, height: th, channels: 4 } })
    .resize({ ...fit, fit: 'inside' })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(`${OUT}/${name}.webp`)
  const kb = (statSync(`${OUT}/${name}.webp`).size / 1024).toFixed(1)
  console.log(`${name}: ${tw}x${th}, ${kept.length} pieza(s) -> ${kb} KB`)
}
