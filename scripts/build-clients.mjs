// Normalises the client logos for a dark strip: trims, resizes to a common
// height, writes WebP, and measures brightness so dark marks can be inverted
// in CSS instead of disappearing into the background.
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const SRC = 'FOTOS'
const OUT = 'public/clients'
const HEIGHT = 160

const files = (await readdir(SRC)).filter((f) => f.endsWith('.png') && !f.startsWith('logo atoms'))
const manifest = []

for (const file of files.sort()) {
  const slug = file.replace(/\.png$/, '')
  const input = join(SRC, file)

  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  let sum = 0
  let count = 0
  for (let i = 0; i < data.length; i += info.channels) {
    const alpha = data[i + 3]
    if (alpha < 40) continue
    sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]
    count++
  }
  const luminance = count ? sum / count : 255

  const out = await sharp(input)
    .trim({ threshold: 5 })
    .resize({ height: HEIGHT, withoutEnlargement: false, fit: 'inside' })
    .webp({ quality: 90 })
    .toFile(join(OUT, `${slug}.webp`))

  manifest.push({ slug, luminance: Math.round(luminance), dark: luminance < 110, w: out.width, h: out.height })
  console.log(`${slug.padEnd(22)} lum ${Math.round(luminance).toString().padStart(3)}  ${out.width}x${out.height}`)
}

console.log('\nDARK (need invert):', manifest.filter((m) => m.dark).map((m) => m.slug).join(', ') || 'none')
