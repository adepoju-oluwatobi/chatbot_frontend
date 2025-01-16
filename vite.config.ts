import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'MyWidget',
      fileName: 'my-widget', // Generates `my-widget.umd.js`
      formats: ['umd'], // UMD format for browser usage
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Prevent bundling React and ReactDOM
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  server: {
    cors: true, // Enable CORS for local testing
  },
});
