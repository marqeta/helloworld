#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPath = join(__dirname, '..', 'index.js');

const child = spawn('node', [indexPath], {
  stdio: 'inherit'
});

child.on('exit', (code) => {
  process.exit(code || 0);
});