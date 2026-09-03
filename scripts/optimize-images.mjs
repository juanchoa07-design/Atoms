// Converts the team portraits in public/images to WebP at display size.
// Requires sharp: npm i -D sharp && node scripts/optimize-images.mjs
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const dir = 'public/images'
const files = (await readdir(dir)).filter((f) => f.startsWith('team-') && f.endsWith('.png'))

for (const file of files) {
  const input = join(dir, file)
  const output = input.replace(/\.png$/, '.webp')
  await sharp(input).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output)
  const before = (await stat(input)).size
  const after = (await stat(output)).size
  console.log(`${file} -> ${output.split('/').pop()}  ${(before / 1024).toFixed(0)}kB -> ${(after / 1024).toFixed(0)}kB`)
}
