import sharp from 'sharp'
const f = 'FOTOS/logo atoms.png'
const meta = await sharp(f).metadata()
console.log('meta', meta.width, meta.height, 'alpha:', meta.hasAlpha)
const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true })
const px = (x, y) => {
  const i = (y * info.width + x) * info.channels
  return [data[i], data[i + 1], data[i + 2], info.channels === 4 ? data[i + 3] : 255]
}
const hex = (c) => '#' + c.slice(0, 3).map((v) => v.toString(16).padStart(2, '0')).join('')
for (const [name, x, y] of [
  ['corner', 20, 20],
  ['orbit', 2470, 2000],
  ['wordmark', 4300, 2800],
  ['bg-mid', 3437, 5800],
]) {
  const p = px(x, y)
  console.log(name.padEnd(10), hex(p), 'alpha', p[3])
}
