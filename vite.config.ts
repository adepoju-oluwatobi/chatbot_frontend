import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx', // Your widget entry file
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`, // Change extension to .js
    },
  },
});
