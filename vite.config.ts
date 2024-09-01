import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  esbuild: {
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      'Tone': path.resolve(__dirname, 'node_modules/tone/build/esm')
    }
  }
});
