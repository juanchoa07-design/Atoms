# Design Tokens — Atom Labs

> **Para el agente:** este archivo es la única fuente de verdad visual del proyecto.
> Leelo entero antes de escribir o modificar cualquier CSS.
> No inventes colores, tamaños ni tipografías que no estén acá.
> Los valores marcados `[manual]` vienen del Manual de marca y no se tocan.
> Los marcados `[derivado]` los calculé para web porque el manual no los define; se pueden discutir, pero están justificados en el Registro de decisiones al final.
> Si necesitás un valor que no está, pará y preguntá en vez de improvisar uno.

**Fuente:** Manual de marca Atom Labs (21 páginas, mayo 2026)
**Última actualización:** 12/09/2026

---

## 1. Identidad

Atom Labs dejó de pensarse solo como proveedor de soluciones de IA para construir una marca con identidad propia. El foco no está en comunicar desde lo funcional sino en construir presencia reconocible, con criterio y narrativa.

| Campo | Valor |
|---|---|
| Marca | Atom Labs |
| Posicionamiento | Marca seria, moderna y viva |
| Principios visuales | Sobriedad, claridad, consistencia |
| Sistema | Paleta reducida, tipografía de palo seco única, elementos gráficos lineales |

**La regla de oro del sistema `[manual]`**

La base es **negro polvo + blanco crema**. El **celeste va en detalles**. El **naranja es un acento estratégico**: sirve para introducir contraste, jerarquía y dinamismo en puntos clave, sin perder la identidad general del sistema.

Traducido a la página: si una sección entera es naranja o celeste, está mal. Esos dos colores aparecen en elementos puntuales, no en superficies grandes.

---

## 2. Color

### Paleta oficial `[manual]`

| Token | Hex | RGB | CMYK | Nombre en el manual |
|---|---|---|---|---|
| `--color-ink` | `#2b2a2a` | 43, 42, 42 | 71 / 62 / 58 / 72 | Negro polvo |
| `--color-cream` | `#fce9e4` | 252, 233, 228 | 0 / 13 / 9 / 0 | Blanco crema |
| `--color-blue` | `#87abdb` | 135, 171, 219 | 55 / 24 / 0 / 0 | Celeste |
| `--color-orange` | `#db6f54` | 219, 111, 84 | 1 / 71 / 70 / 0 | Naranja |

### Roles

| Token | Valor | Rol | Dónde va |
|---|---|---|---|
| `--color-bg` | `#2b2a2a` | Fondo base | Body |
| `--color-surface` | `#373636` `[derivado]` | Superficie elevada | Cards, modales |
| `--color-text` | `#fce9e4` | Texto principal | Títulos, párrafos |
| `--color-text-muted` | `#a9a1a0` `[derivado]` | Texto secundario | Captions, metadatos |
| `--color-border` | `#494747` `[derivado]` | Divisores | Separadores |
| `--color-border-strong` | `#6b6564` `[derivado]` | Borde de control | Inputs, selects |
| `--color-accent` | `#db6f54` | Acento estratégico | CTA principal, destacados puntuales |
| `--color-detail` | `#87abdb` | Detalle | Isotipo, subrayados, íconos, hovers |

> El manual muestra la marca predominantemente sobre negro polvo, así que el tema oscuro es el default. El tema claro está más abajo.

### Tema claro `[derivado]`

| Token | Valor |
|---|---|
| `--color-bg` | `#fce9e4` |
| `--color-surface` | `#fff6f3` |
| `--color-text` | `#2b2a2a` |
| `--color-text-muted` | `#6e6968` |
| `--color-border` | `#dcc9c4` |
| `--color-border-strong` | `#a48077` |

### Variantes accesibles `[derivado]`

Celeste y naranja **no tienen contraste suficiente para texto sobre crema**. Si necesitás escribir texto en esos colores sobre fondo claro, usá estas versiones:

| Token | Valor | Contraste sobre crema |
|---|---|---|
| `--color-blue-text` | `#366cb5` | 4.51:1 |
| `--color-orange-text` | `#ba4527` | 4.51:1 |

Sobre negro polvo el celeste original ya pasa (6.05:1). El naranja original queda en 4.37:1, apenas por debajo del mínimo, así que para texto sobre oscuro usá:

| Token | Valor | Contraste sobre negro polvo |
|---|---|---|
| `--color-orange-on-dark` | `#dc7358` | 4.52:1 |

### Estados hover `[derivado]`

| Token | Valor |
|---|---|
| `--color-accent-hover` | `#d55636` |
| `--color-detail-hover` | `#6694d1` |

### Tabla de contraste verificada

| Combinación | Ratio | Texto normal | Texto grande |
|---|---|---|---|
| Crema sobre negro polvo | 12.21 | pasa | pasa |
| Negro polvo sobre crema | 12.21 | pasa | pasa |
| Celeste sobre negro polvo | 6.05 | pasa | pasa |
| Negro polvo sobre celeste | 6.05 | pasa | pasa |
| Naranja sobre negro polvo | 4.37 | **falla** | pasa |
| Negro polvo sobre naranja | 4.37 | **falla** | pasa |
| Celeste sobre crema | 2.02 | **falla** | **falla** |
| Naranja sobre crema | 2.79 | **falla** | **falla** |

> El botón naranja con texto negro polvo queda a 4.37:1. Sirve si el texto del botón es 18px bold o más grande. Si es más chico, usá texto crema sobre naranja o cambiá a un botón de borde.

---

## 3. Tipografía

### Familia `[manual]`

**Montserrat**, familia única para todo el sistema. Se eligió por su carácter palo seco, moderno y de construcción geométrica, con formas circulares que transmiten claridad y precisión. Al usar una sola familia en sus distintas variantes se genera un maridaje armónico que asegura consistencia y unidad.

No hay segunda tipografía. No agregues una.

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### Logo `[manual]`

Montserrat **Black (900)**, tracking **-150**.

El peso Black aporta presencia visual y una mancha tipográfica contundente. El tracking -150 compacta las letras y genera un bloque más denso y sólido.

```css
/* tracking de Illustrator: -150/1000 em */
letter-spacing: -0.15em;
font-weight: 900;
```

### Escala de texto `[derivado]`

El manual no define escala tipográfica. Esta es una propuesta sobre una razón de 1.25 (tercera mayor), con el display en Black para conectar con el logo.

| Token | Tamaño | Line-height | Peso | Tracking | Uso |
|---|---|---|---|---|---|
| `--text-display` | `clamp(2.5rem, 6vw, 4.5rem)` | 1.0 | 900 | -0.04em | Hero |
| `--text-h1` | `clamp(2rem, 4vw, 3rem)` | 1.1 | 800 | -0.03em | Título de página |
| `--text-h2` | `clamp(1.5rem, 3vw, 2rem)` | 1.2 | 700 | -0.02em | Sección |
| `--text-h3` | `1.25rem` | 1.3 | 600 | -0.01em | Subsección |
| `--text-body` | `1rem` | 1.6 | 400 | 0 | Párrafo |
| `--text-small` | `0.875rem` | 1.5 | 400 | 0 | Caption, nota |

**Reglas**

- Largo de línea máximo 70 caracteres en texto corrido (`max-width: 65ch`)
- El tracking negativo es solo para títulos. El texto corrido va en 0.
- Montserrat en pesos finos (100–300) pierde legibilidad por debajo de 16px. No usarlos para texto chico.
- El manual no usa mayúsculas sostenidas en ningún lado. No las introduzcas en labels.

---

## 4. Espaciado `[derivado]`

El manual no define escala de espaciado. Base 4px.

| Token | Valor |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |
| `--space-24` | `6rem` (96px) |

**Ritmo vertical entre secciones:** `--space-24` en desktop, `--space-12` en mobile
**Ancho máximo del contenedor:** `1200px`

---

## 5. Forma `[derivado]`

Los elementos gráficos del manual usan **vértices redondeados**. Los radios acompañan ese criterio.

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `6px` | Inputs, chips |
| `--radius-md` | `12px` | Botones, cards |
| `--radius-lg` | `20px` | Modales, contenedores grandes |
| `--radius-full` | `9999px` | Pills, avatares |
| `--border-width` | `1px` | Default |

**Sombras:** el manual no define ninguna. No inventes sombras. Para separar superficies usá el cambio de color entre `--color-bg` y `--color-surface`, o un borde.

---

## 6. Logo

### Versiones y tamaño mínimo `[manual]`

| Versión | Composición | Mínimo (impresión) | Mínimo (web) `[derivado]` |
|---|---|---|---|
| Logotipo principal | "Atom" + isotipo orbital superpuesto sobre la "o" | 1,5 cm de ancho | 57px |
| Variación "Atom ai" | "Atom" con "ai" debajo, isotipo a la izquierda | 2 cm de ancho | 76px |
| Variación "the Atom voice" | Tres líneas, isotipo a la izquierda | 2,5 cm de ancho | 95px |
| Isotipo solo | Órbitas atómicas | 1 cm de ancho | 38px |

> Conversión a 96dpi: 1cm = 37.8px.

### Color del logo `[manual]`

- Sobre negro polvo: tipografía en blanco crema, isotipo en celeste
- Sobre crema: versión monocromática completa en negro polvo

### Área de resguardo `[manual]`

La unidad **x** es el ancho de la letra "o" del logotipo.

El margen libre alrededor del bloque del logo es **x en los cuatro lados**. Nada puede invadir esa zona: ni texto, ni imágenes, ni bordes del contenedor.

```css
/* si el logo mide 200px de ancho, la "o" ronda los 45px */
.logo { padding: calc(var(--logo-o-width)); }
```

### Usos incorrectos `[manual]`

| Regla | Detalle |
|---|---|
| Cuidar el fondo | Evitá fondos que dificulten la lectura. El logo siempre tiene que verse claro. |
| No cambiar colores | Usar únicamente la paleta oficial. Nada de colores improvisados. |
| Respetar el área | No invadir el espacio de resguardo. El aire también comunica. |
| No deformar | No estirar ni comprimir. Respetar siempre las proporciones. |
| No achicar de más | Respetar el tamaño mínimo para asegurar legibilidad. |
| No rotar | El logo no se gira ni se inclina. |

En CSS esto significa: nunca `transform: scale()` no uniforme, nunca `rotate()`, nunca `filter` sobre el logo, y siempre `object-fit: contain` si va dentro de un contenedor de proporción fija.

---

## 7. Elementos gráficos `[manual]`

Trazos lineales, vértices redondeados, enfoque minimalista. Funcionan como recursos versátiles tanto en piezas principales como en apoyos visuales.

| Pieza | Qué representa |
|---|---|
| Cadena molecular | Estructura ramificada de nodos ovalados conectados |
| Vigilancia | Ojo formado por órbitas concéntricas |
| Pensamiento estratégico | Cabeza de perfil con una maraña de trazos en el cerebro |

En el manual aparecen en **naranja** sobre negro polvo y sobre celeste. Son ilustración de línea, no íconos de interfaz: van en tamaños grandes como apoyo visual de una sección, no en botones.

**Archivos:** `PENDIENTE` — hay que exportarlos del Illustrator original como SVG. No están sueltos en el PDF (son vectores, no imágenes embebidas).

---

## 8. Componentes

### Botón primario
```
fondo    --color-accent (#db6f54)
texto    --color-cream (#fce9e4)
padding  var(--space-3) var(--space-6)
radio    --radius-md
peso     600
hover    --color-accent-hover (#d55636)
focus    outline 2px solid --color-detail, offset 2px
```

### Botón secundario
```
fondo    transparente
borde    1px solid --color-border-strong
texto    --color-text
hover    borde --color-detail, texto --color-detail
```

### Link en texto
```
color              --color-detail (#87abdb) sobre fondo oscuro
                   --color-blue-text (#366cb5) sobre fondo claro
decoración         underline, offset 3px, grosor 1px
hover              --color-detail-hover
```

### Input
```
fondo    --color-surface
borde    1px solid --color-border-strong
radio    --radius-sm
focus    borde --color-detail + outline 2px offset 1px
error    borde --color-orange-on-dark + texto de error debajo
```

### Card
```
fondo    --color-surface
borde    1px solid --color-border
radio    --radius-md
padding  --space-6
```
Sin sombra. La separación la da el contraste de superficie.

---

## 9. Accesibilidad

Piso no negociable:

- Contraste texto/fondo mínimo 4.5:1, o 3:1 para texto de 18px bold / 24px regular en adelante
- Foco de teclado siempre visible. Nunca `outline: none` sin reemplazo.
- `prefers-reduced-motion` respetado
- Ningún estado comunicado solo por color
- Bordes de controles de formulario a 3:1 contra su fondo

**Combinaciones del manual que no pasan y su reemplazo:**

| No usar | Usar en su lugar |
|---|---|
| Celeste `#87abdb` como texto sobre crema | `--color-blue-text` `#366cb5` |
| Naranja `#db6f54` como texto sobre crema | `--color-orange-text` `#ba4527` |
| Naranja `#db6f54` como texto chico sobre negro | `--color-orange-on-dark` `#dc7358` |

> Ojo: la página 13 del manual usa celeste sobre crema para las fichas de color. Se ve bien impreso pero en pantalla es ilegible. No lo repliques.

---

## 10. Implementación

### CSS

```css
:root {
  /* Paleta oficial */
  --color-ink: #2b2a2a;
  --color-cream: #fce9e4;
  --color-blue: #87abdb;
  --color-orange: #db6f54;

  /* Derivados accesibles */
  --color-blue-text: #366cb5;
  --color-orange-text: #ba4527;
  --color-orange-on-dark: #dc7358;
  --color-accent-hover: #d55636;
  --color-detail-hover: #6694d1;

  /* Roles: tema oscuro (default) */
  --color-bg: var(--color-ink);
  --color-surface: #373636;
  --color-text: var(--color-cream);
  --color-text-muted: #a9a1a0;
  --color-border: #494747;
  --color-border-strong: #6b6564;
  --color-accent: var(--color-orange);
  --color-detail: var(--color-blue);

  /* Tipografía */
  --font-sans: 'Montserrat', system-ui, -apple-system, sans-serif;
  --text-display: clamp(2.5rem, 6vw, 4.5rem);
  --text-h1: clamp(2rem, 4vw, 3rem);
  --text-h2: clamp(1.5rem, 3vw, 2rem);
  --text-h3: 1.25rem;
  --text-body: 1rem;
  --text-small: 0.875rem;

  /* Espaciado */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Forma */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --border-width: 1px;

  --container: 1200px;
}

[data-theme='light'] {
  --color-bg: var(--color-cream);
  --color-surface: #fff6f3;
  --color-text: var(--color-ink);
  --color-text-muted: #6e6968;
  --color-border: #dcc9c4;
  --color-border-strong: #a48077;
  --color-detail: var(--color-blue-text);
  --color-accent: var(--color-orange-text);
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: 1.6;
}

h1, h2, h3 { letter-spacing: -0.02em; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        cream: 'var(--color-cream)',
        blue: {
          DEFAULT: 'var(--color-blue)',
          text: 'var(--color-blue-text)',
          hover: 'var(--color-detail-hover)',
        },
        orange: {
          DEFAULT: 'var(--color-orange)',
          text: 'var(--color-orange-text)',
          ondark: 'var(--color-orange-on-dark)',
          hover: 'var(--color-accent-hover)',
        },
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        content: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        line: 'var(--color-border)',
        'line-strong': 'var(--color-border-strong)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      maxWidth: {
        container: 'var(--container)',
      },
    },
  },
}
```

> Tailwind apunta a las variables CSS en vez de duplicar los hex. Un solo lugar donde cambiar un color.

---

## 11. Plan de migración

Un commit por paso. No aplicar todo de una.

- [ ] Cargar Montserrat y el bloque `:root` en el entrypoint de estilos
- [ ] Exportar los SVG del logo (4 versiones) y los 3 elementos gráficos desde el Illustrator original
- [ ] Header y navegación (logo con área de resguardo correcta)
- [ ] Hero
- [ ] Secciones de contenido
- [ ] Formularios e inputs
- [ ] Footer
- [ ] Revisión de contraste en todas las pantallas
- [ ] Revisión responsive (360px, 768px, 1280px)
- [ ] Borrar colores y tamaños hardcodeados que hayan quedado sueltos

---

## Registro de decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 12/09/2026 | Tema oscuro como default | El manual muestra la marca predominantemente sobre negro polvo |
| 12/09/2026 | Variantes `blue-text` y `orange-text` para fondo claro | Celeste y naranja fallan contraste WCAG AA sobre crema (2.02:1 y 2.79:1) |
| 12/09/2026 | `orange-on-dark` `#dc7358` | El naranja original queda en 4.37:1 sobre negro polvo, apenas por debajo de 4.5 |
| 12/09/2026 | Escala tipográfica 1.25 propuesta | El manual no define escala. Razón tercera mayor, display en Black para conectar con el logo |
| 12/09/2026 | Escala de espaciado base 4px | El manual no define espaciado |
| 12/09/2026 | Radios de 6/12/20px | Deriva del criterio de "vértices redondeados" de los elementos gráficos |
| 12/09/2026 | Sin sombras | El manual no define ninguna; la separación se resuelve con superficie y borde |

### Pendiente de confirmar con diseño

- Exportar los SVG del logo y los elementos gráficos (son vectores en el Illustrator, no están como archivos sueltos)
- ¿La escala tipográfica propuesta se aprueba o hay una definida en otro lado?
- ¿El tema claro se usa en algún lado de la página o va todo oscuro?
