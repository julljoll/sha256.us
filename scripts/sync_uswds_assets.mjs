#!/usr/bin/env node
/**
 * scripts/sync_uswds_assets.mjs
 * FASE 2 — Instalación oficial del sistema U.S. Web Design System (USWDS 3.14.0)
 * Copia intactos (byte a byte) los activos precompilados desde node_modules/@uswds/uswds/dist
 * hacia public/assets/uswds/ (css, js, img, fonts) y verifica mediante SHA-256 que no hayan
 * sido editados y que todas las referencias url(../fonts/...) y url(../img/...) existan sin 404.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const srcDist = path.join(root, 'node_modules/@uswds/uswds/dist');
const destBase = path.join(root, 'public/assets/uswds');

function sha256File(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function copyDirRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('================================================================================');
console.log(' FASE 2: INSTALACIÓN OFICIAL DE ACTIVOS PRECOMPILADOS USWDS 3.14.0');
console.log('================================================================================\n');

if (!fs.existsSync(srcDist)) {
  console.error('✗ Error: No se encontró node_modules/@uswds/uswds/dist.');
  process.exit(1);
}

// 1. Copiar carpetas oficiales sin alterar un solo byte
for (const folder of ['css', 'js', 'img', 'fonts']) {
  const from = path.join(srcDist, folder);
  const to = path.join(destBase, folder);
  copyDirRecursive(from, to);
  console.log(`✓ Copiado: node_modules/@uswds/uswds/dist/${folder} -> public/assets/uswds/${folder}`);
}

// 2. Verificar integridad SHA-256 (prohibido editar archivos de USWDS)
const criticalFiles = [
  'css/uswds.min.css',
  'js/uswds-init.min.js',
  'js/uswds.min.js',
  'img/sprite.svg'
];

console.log('\n--- Verificación de Integridad Criptográfica SHA-256 (0 bytes editados) ---');
for (const rel of criticalFiles) {
  const srcHash = sha256File(path.join(srcDist, rel));
  const destHash = sha256File(path.join(destBase, rel));
  if (srcHash !== destHash) {
    console.error(`✗ Error de integridad en ${rel}`);
    process.exit(1);
  }
  console.log(`✓ [MATCH] /assets/uswds/${rel} (SHA-256: ${destHash.slice(0, 16)}...)`);
}

// 3. Verificar que todas las URLs relativas en uswds.min.css (fuentes e iconos) existan sin 404
const cssContent = fs.readFileSync(path.join(destBase, 'css/uswds.min.css'), 'utf8');
const urlMatches = cssContent.match(/url\(([^)]+)\)/g) || [];
let checkedUrls = 0;
let missingUrls = 0;

for (const rawMatch of urlMatches) {
  const inner = rawMatch.slice(4, -1).trim().replace(/^['"]|['"]$/g, '');
  if (inner.startsWith('data:')) continue;
  const cleanRel = inner.split('?')[0].split('#')[0];
  const resolved = path.resolve(path.join(destBase, 'css'), cleanRel);
  checkedUrls++;
  if (!fs.existsSync(resolved)) {
    console.error(`✗ [404] Recurso faltante referenciado en uswds.min.css: ${cleanRel}`);
    missingUrls++;
  }
}

console.log(`\n✓ Verificación anti-404: ${checkedUrls} recursos (fuentes woff2/ttf e iconos SVG) referenciados en uswds.min.css existen en public/assets/uswds/ (${missingUrls} errores 404).`);
if (missingUrls > 0) {
  process.exit(1);
}
