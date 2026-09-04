// Turns the master logo into a transparent-background web asset.
// The source art sits on a flat #2b2a2a ground; we derive alpha from how far
// each pixel is from that ground, which keeps the anti-aliased edges soft.
import sharp from 'sharp'

const SRC = 'FOTOS/logo atoms.png'
const BG = [0x2b, 0x2a, 0x2a]
const THRESHOLD = 26

const { data, info } = await sharp(SRC)
  .trim({ background: '#2b2a2a', threshold: 12 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

for (let i = 0; i < data.length; i += info.channels) {
  const diff = Math.max(
    Math.abs(data[i] - BG[0]),
    Math.abs(data[i + 1] - BG[1]),
    Math.abs(data[i + 2] - BG[2]),
  )
  data[i + 3] = diff >= THRESHOLD ? 255 : Math.round((diff / THRESHOLD) * 255)
}

const out = await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
  .resize({ height: 220, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile('public/brand/logo.png')

console.log('logo', info.width + 'x' + info.height, '->', out.width + 'x' + out.height, out.size + ' bytes')
