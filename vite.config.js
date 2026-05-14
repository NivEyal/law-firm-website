import { defineConfig } from 'vite';
import { cpSync, rmSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  root: 'law-firm-free',
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve('law-firm-free', 'index.html'),
    },
  },
  plugins: [
    {
      name: 'static-copy',
      closeBundle() {
        const src = resolve('law-firm-free');
        const dest = resolve('dist');
        rmSync(dest, { recursive: true, force: true });
        mkdirSync(dest, { recursive: true });
        cpSync(src, dest, { recursive: true });
      },
    },
  ],
});
