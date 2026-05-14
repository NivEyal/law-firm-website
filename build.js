import { cpSync, rmSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const src = resolve('law-firm-free');
const dest = resolve('dist');

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

console.log('Build complete: law-firm-free → dist');
