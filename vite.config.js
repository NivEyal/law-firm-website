import { defineConfig } from 'vite';

export default defineConfig({
  root: 'law-firm-free',
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
