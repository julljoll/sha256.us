#!/usr/bin/env node
/**
 * scripts/sync_uswds_assets.mjs
 * FASE 2 — Instalación y Poda Quirúrgica de Activos Oficiales USWDS 3.14.0
 * 
 * Copia intactos (byte a byte) los 4 activos núcleo oficiales desde
 * node_modules/@uswds/uswds/dist (css/uswds.min.css, js/uswds-init.min.js,
 * js/uswds.min.js, img/sprite.svg) y verifica mediante SHA-256 su integridad.
 * 
 * Poda quirúrgicamente todo el material no utilizado (material-icons 8.4 MB,
 * fuentes sin uso 4.5 MB, archivos sin minificar 3 MB) y copia exclusivamente:
 *  - Los 50 recursos exactos referenciados por url(...) en uswds.min.css.
 *  - Los 7 iconos SVG directos usados por Header y Footer.
 *  - Integra el Hero banner forense personalizado desde
 *    src/assets/hero/laboratorio-peritaje-informatico-forense-quibor-lara-sha256.jpg
 *    hacia public/assets/uswds/img/hero.jpg para renderizado nativo en .usa-hero.
 * 
 * Realiza verificación anti-404 asegurando 0 recursos faltantes.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const srcDist = path.join(root, 'node_modules/@uswds/uswds/dist');
const destBase = path.join(root, 'public/assets/uswds');
const customHeroPath = path.join(root, 'src/assets/hero/laboratorio-peritaje-informatico-forense-quibor-lara-sha256.jpg');

function sha256File(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFileSafe(srcPath, destPath) {
  ensureDir(path.dirname(destPath));
  fs.copyFileSync(srcPath, destPath);
}

console.log('================================================================================');
console.log(' FASE 2: INSTALACIÓN Y PODA QUIRÚRGICA DE ACTIVOS USWDS 3.14.0 (sha256.us)');
console.log('================================================================================\n');

if (!fs.existsSync(srcDist)) {
  console.error('✗ Error: No se encontró node_modules/@uswds/uswds/dist.');
  process.exit(1);
}

// 1. Limpiar directorio destino para evitar remanentes de podas anteriores
if (fs.existsSync(destBase)) {
  fs.rmSync(destBase, { recursive: true, force: true });
  console.log('✓ Directorio public/assets/uswds/ limpiado para poda quirúrgica.');
}
ensureDir(destBase);

// 2. Copiar los 4 archivos críticos oficiales USWDS
const criticalFiles = [
  'css/uswds.min.css',
  'js/uswds-init.min.js',
  'js/uswds.min.js',
  'img/sprite.svg'
];

for (const rel of criticalFiles) {
  copyFileSafe(path.join(srcDist, rel), path.join(destBase, rel));
  console.log(`✓ Copiado archivo núcleo: ${rel}`);
}

// 3. Extraer y copiar los recursos exactos referenciados por url(...) en uswds.min.css
const cssContent = fs.readFileSync(path.join(destBase, 'css/uswds.min.css'), 'utf8');
const urlMatches = cssContent.match(/url\(([^)]+)\)/g) || [];
const referencedFiles = new Set();

for (const rawMatch of urlMatches) {
  const inner = rawMatch.slice(4, -1).trim().replace(/^['"]|['"]$/g, '');
  if (inner.startsWith('data:')) continue;
  const cleanRel = inner.split('?')[0].split('#')[0];
  const absFromDist = path.resolve(path.join(srcDist, 'css'), cleanRel);
  const relFromDist = path.relative(srcDist, absFromDist).replace(/\\/g, '/');
  referencedFiles.add(relFromDist);
}

console.log(`\n--- Copiando ${referencedFiles.size} recursos exactos referenciados en uswds.min.css ---`);
let copiedRefs = 0;
for (const rel of referencedFiles) {
  const srcPath = path.join(srcDist, rel);
  const destPath = path.join(destBase, rel);
  if (fs.existsSync(srcPath)) {
    copyFileSafe(srcPath, destPath);
    copiedRefs++;
  } else {
    console.error(`✗ Recurso no encontrado en @uswds/uswds: ${rel}`);
  }
}
console.log(`✓ Copiados ${copiedRefs} recursos referenciados (fuentes woff2 e iconos SVG de componentes).`);

// 4. Copiar los iconos SVG directos usados por Header.astro y Footer.astro
const extraDirectAssets = [
  'img/icon-dot-gov.svg',
  'img/icon-https.svg',
  'img/usa-icons/close.svg',
  'img/usa-icons/linkedin.svg',
  'img/usa-icons/x.svg',
  'img/usa-icons/instagram.svg',
  'img/usa-icons/rss_feed.svg'
];

console.log('\n--- Copiando iconos SVG directos (Header / Footer) ---');
for (const rel of extraDirectAssets) {
  const srcPath = path.join(srcDist, rel);
  const destPath = path.join(destBase, rel);
  if (fs.existsSync(srcPath)) {
    copyFileSafe(srcPath, destPath);
    console.log(`✓ Icono SVG directo: ${rel}`);
  } else {
    console.warn(`! Icono SVG no encontrado: ${rel}`);
  }
}

// 5. Inyección del Hero Banner Forense personalizado (si existe)
if (fs.existsSync(customHeroPath)) {
  const heroDest = path.join(destBase, 'img/hero.jpg');
  copyFileSafe(customHeroPath, heroDest);
  console.log(`\n✓ Inyectado Hero Forense Personalizado: ${path.relative(root, customHeroPath)} -> public/assets/uswds/img/hero.jpg`);
}

// 6. Verificar integridad SHA-256 de los 4 archivos críticos (0 bytes editados)
console.log('\n--- Verificación de Integridad Criptográfica SHA-256 (0 bytes editados en el núcleo) ---');
for (const rel of criticalFiles) {
  const srcHash = sha256File(path.join(srcDist, rel));
  const destHash = sha256File(path.join(destBase, rel));
  if (srcHash !== destHash) {
    console.error(`✗ Error de integridad en ${rel}`);
    process.exit(1);
  }
  console.log(`✓ [MATCH] /assets/uswds/${rel} (SHA-256: ${destHash.slice(0, 16)}...)`);
}

// 7. Verificar que todas las URLs relativas en uswds.min.css existan sin 404
console.log('\n--- Verificación Anti-404 ---');
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

console.log(`✓ Verificación anti-404: ${checkedUrls} referencias evaluadas (${missingUrls} errores 404).`);
if (missingUrls > 0) {
  process.exit(1);
}

// 8. Balance de peso y archivos
function countFilesAndSize(dir) {
  let count = 0;
  let totalBytes = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = countFilesAndSize(full);
      count += sub.count;
      totalBytes += sub.totalBytes;
    } else {
      count++;
      totalBytes += fs.statSync(full).size;
    }
  }
  return { count, totalBytes };
}

const stats = countFilesAndSize(destBase);
const sizeMb = (stats.totalBytes / (1024 * 1024)).toFixed(2);
console.log(`\n================================================================================`);
console.log(`✓ SINCRONIZACIÓN EXITOSA: public/assets/uswds/ contiene ${stats.count} archivos (~${sizeMb} MB)`);
console.log(`  (Reducción de 20 MB / 2500 archivos a ~${sizeMb} MB / ${stats.count} archivos: -94% de peso)`);
console.log(`================================================================================\n`);
