/**
 * Reads a design token off :root, for code that can't take a CSS variable
 * (the Aurora shader needs real colour values). The tokens live in index.css;
 * never repeat a hex here.
 */
export function token(name: `--${string}`): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}
