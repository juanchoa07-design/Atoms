# AtomLabs AI — sitio web

Rediseño del sitio de AtomLabs AI en React. Reemplaza la versión anterior en HTML/CSS/JS
plano (`atomlabs-ia.vercel.app`).

## Stack

- **React 19** + **TypeScript**
- **Vite 6** como bundler
- **Tailwind CSS 4** (tokens definidos con `@theme` en `src/index.css`)
- **motion** (Framer Motion) y **ogl** para las animaciones
- **lucide-react** para los íconos

## Correr el proyecto

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + build de producción en dist/
npm run preview   # sirve el build
npm run lint      # solo typecheck
```

## Dónde tocar cada cosa

**Todo el texto del sitio vive en un solo archivo: [`src/content/site.ts`](src/content/site.ts).**
Cada string está en español e inglés, así:

```ts
titleTop: { es: 'Acelerá tu negocio', en: 'Accelerate your business' }
```

Para cambiar un título, un beneficio o una métrica, editás ahí y listo — no hace falta
tocar los componentes. Ahí también están el mail, el link de Calendly y las redes.

| Qué querés cambiar | Dónde |
| --- | --- |
| Textos, métricas, agentes, equipo, links | `src/content/site.ts` |
| Colores, tipografías, radios | bloque `@theme` en `src/index.css` |
| Secciones y layout | `src/components/*.tsx` |
| Animación de entrada | `src/components/Intro.tsx` |
| Fotos del equipo | `public/images/` (ver "Imágenes") |

## Estructura

```
src/
├── App.tsx                  Orden de las secciones
├── content/site.ts          TODO el contenido, ES + EN
├── lib/
│   ├── lang.tsx             Contexto de idioma (persiste en localStorage)
│   └── useScrolled.ts       Estado de scroll para la navbar
├── components/
│   ├── Intro.tsx            Animación de entrada (1 vez por sesión)
│   ├── Nav.tsx              Navbar sticky + menú mobile + toggle ES/EN
│   ├── Hero.tsx             Portada
│   ├── Metrics.tsx          Franja de resultados
│   ├── Benefits.tsx         Beneficios por categoría (tabs)
│   ├── Agents.tsx           Los 4 agentes (selector + panel)
│   ├── Process.tsx          Cómo trabajamos (3 pasos)
│   ├── Team.tsx             Fundadores
│   ├── FinalCta.tsx         Cierre + contacto
│   ├── Footer.tsx
│   ├── ui/                  Piezas propias reutilizables
│   └── reactbits/           Componentes de React Bits (ver abajo)
```

## React Bits

Los componentes de `src/components/reactbits/` vienen de
[React Bits](https://reactbits.dev) (MIT) y están copiados al repo, no instalados como
paquete — así se pueden editar libremente. Cada archivo arranca con un comentario que
dice de dónde salió y, si lo modifiqué, qué le cambié.

| Componente | Dónde se usa |
| --- | --- |
| `Aurora` | Fondo del hero |
| `BlurText` | Entrada del título principal |
| `GradientText` | Segunda línea del título |
| `ShinyText` | Etiqueta arriba del título |
| `CountUp` | Números de la franja de resultados |
| `SpotlightCard` | Panel de agentes y tarjetas del equipo |

Para sumar otro: copiás el `.tsx` desde reactbits.dev a esa carpeta, instalás lo que pida
(`motion`, `ogl` y `gsap` son las dependencias típicas) y lo importás.

## Imágenes

Las fotos del equipo se sirven en WebP (66 KB las dos juntas, contra 3,5 MB de los PNG
originales). Los PNG originales quedaron en `assets-originals/`, fuera de `public/`, así
que se versionan pero no se publican.

Si cambiás una foto, dejá el PNG en `public/images/` y corré:

```bash
npm i -D sharp
node scripts/optimize-images.mjs
```

Genera el `.webp` al lado. Después movés el PNG a `assets-originals/` y apuntás
`site.ts` al `.webp`.

## Deploy

Esto es una app React: **no se puede servir el código fuente directo**. El `index.html`
del repo apunta a `/src/main.tsx`, que el navegador no sabe ejecutar — por eso, sin build,
se ve una pantalla en blanco. Siempre hay que publicar el resultado de `npm run build`.

### GitHub Pages

Ya está el workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
buildea y publica en cada push a `main`. Una sola vez hay que ir a
**Settings → Pages → Source** y elegir **GitHub Actions** (si está en "Deploy from a
branch", Pages sirve el código fuente y se ve en blanco).

Queda en `https://juanchoa07-design.github.io/Atoms/`.

### Vercel

Detecta Vite solo. Framework preset **Vite**, build `npm run build`, output `dist`.
Hay que apuntar el proyecto de Vercel a este repo en lugar del viejo.

### Sobre el `base`

Pages sirve desde `/Atoms/` y Vercel desde la raíz, así que
[`vite.config.ts`](vite.config.ts) elige el `base` según la variable `GITHUB_PAGES`, que
sólo setea el workflow. Por eso las rutas de imágenes en `site.ts` van **sin barra
inicial** y se arman con `import.meta.env.BASE_URL`. Si agregás un asset nuevo desde
JavaScript, hacé lo mismo o se va a romper en Pages.

## Accesibilidad y performance

- Todo el texto pasa contraste WCAG AA sobre el fondo oscuro.
- `prefers-reduced-motion` desactiva la intro, los reveals y las transiciones.
- La intro se puede saltear con cualquier click o tecla, y sólo aparece una vez por
  sesión del navegador.
- El `<h1>` real es texto plano; la versión animada está duplicada con `aria-hidden`,
  para que buscadores y lectores de pantalla lean el título de una.
