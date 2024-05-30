import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://victorjuarez.dev/',
  server: {
    port:3000,
    proxy: {
      '/projects/projects-list': 'http://127.0.0.1:8000',
    }
  },
})
