import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo from /Atoms/, Vercel and local dev from the
// root. The deploy workflow sets GITHUB_PAGES=true; everything else gets '/'.
const base = process.env.GITHUB_PAGES === 'true' ? '/Atoms/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
