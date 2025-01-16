import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`,
    },
  },
  server: {
    cors: true,
  },
})
