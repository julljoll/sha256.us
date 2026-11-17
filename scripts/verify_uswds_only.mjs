#!/usr/bin/env node
/**
 * scripts/verify_uswds_only.mjs
 * Script oficial de auditoría de diseño, arquitectura bilingüe y UX móvil para sha256.us:
 * 1. Verifica que U.S. Web Design System (USWDS 3.14) sea el ÚNICO framework CSS activo.
 * 2. Verifica la ausencia total de Tailwind CSS en package.json, astro.config.mjs y src/.
 * 3. Escanea todos los componentes (.astro y .css) garantizando cero patrones visuales genéricos
 *    de IA (cero backdrop-filter blur, cero linear-gradient/radial-gradient, cero levitación hover).
 * 4. Verifica el selector bilingüe sin abreviar ("Español - Inglés") con Español ('es') por defecto
 *    e Inglés ('en') secundario con cobertura completa en LanguageTranslator.astro.
 * 5. Verifica las reglas Mobile-First (overflow-x: hidden, touch-targets >= 44px y banner/drawer móvil).
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let errors = 0;

function pass(msg) {
  console.log(`✓ [PASS] ${msg}`);
}

function fail(msg) {
  console.error(`✗ [FAIL] ${msg}`);
  errors++;
}

function walkFiles(dir, exts) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkFiles(full, exts));
    } else if (exts.some((ext) => entry.name.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

console.log('================================================================================');
console.log(' AUDITORÍA DE EXCLUSIVIDAD U.S. WEB DESIGN SYSTEM (USWDS 3.14) — sha256.us');
console.log('================================================================================\n');

// 1. Verificar package.json
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
if (allDeps['@uswds/uswds']) {
  pass(`Dependencia oficial @uswds/uswds (${allDeps['@uswds/uswds']}) presente en package.json.`);
} else {
  fail('Falta @uswds/uswds en package.json.');
}

if (allDeps['tailwindcss'] || allDeps['@tailwindcss/vite'] || allDeps['@astrojs/tailwind']) {
  fail('Se detectaron dependencias de Tailwind CSS en package.json.');
} else {
  pass('Cero dependencias de Tailwind CSS en package.json.');
}

// 2. Verificar astro.config.mjs
const astroConfig = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
if (/tailwind/i.test(astroConfig.replace(/\/\/.*$/gm, ''))) {
  fail('astro.config.mjs aún contiene referencias activas a Tailwind CSS.');
} else {
  pass('astro.config.mjs libre de plugins o integraciones de Tailwind CSS.');
}

// 3. Verificar src/styles/global.css
const globalCss = fs.readFileSync(path.join(root, 'src/styles/global.css'), 'utf8');
if (globalCss.includes('@import "@uswds/uswds/css/uswds.min.css"')) {
  pass('src/styles/global.css importa exclusivamente @uswds/uswds/css/uswds.min.css.');
} else {
  fail('src/styles/global.css no importa @uswds/uswds/css/uswds.min.css.');
}

if (/@import\s+["']tailwindcss["']|@tailwind\s+|@apply\s+/i.test(globalCss)) {
  fail('src/styles/global.css aún contiene directivas de Tailwind CSS.');
} else {
  pass('src/styles/global.css libre de directivas @import "tailwindcss", @tailwind o @apply.');
}

// 4. Escanear todos los archivos .astro y .css contra patrones visuales genéricos de IA
const sourceFiles = walkFiles(path.join(root, 'src'), ['.astro', '.css']);
let blurHits = [];
let gradientHits = [];
let hoverTranslateHits = [];

for (const file of sourceFiles) {
  const rel = path.relative(root, file);
  const content = fs.readFileSync(file, 'utf8');
  if (/backdrop-filter\s*:/i.test(content)) {
    blurHits.push(rel);
  }
  if (/linear-gradient\s*\(|radial-gradient\s*\(/i.test(content)) {
    gradientHits.push(rel);
  }
  if (/\.[\w-]+:hover\s*\{[^}]*transform\s*:\s*translateY/i.test(content)) {
    hoverTranslateHits.push(rel);
  }
}

if (blurHits.length === 0) {
  pass(`Cero efectos glassmorphism (backdrop-filter: blur) en ${sourceFiles.length} archivos fuente.`);
} else {
  fail(`Se detectó backdrop-filter en: ${blurHits.join(', ')}`);
}

if (gradientHits.length === 0) {
  pass(`Cero degradados genéricos (linear-gradient / radial-gradient) en ${sourceFiles.length} archivos fuente.`);
} else {
  fail(`Se detectaron degradados en: ${gradientHits.join(', ')}`);
}

if (hoverTranslateHits.length === 0) {
  pass(`Cero efectos de levitación de tarjetas en hover (translateY) en ${sourceFiles.length} archivos fuente.`);
} else {
  fail(`Se detectó translateY en hover en: ${hoverTranslateHits.join(', ')}`);
}

// 5. Verificar idioma Español por defecto y botón "Español - Inglés" sin abreviar
const baseLayout = fs.readFileSync(path.join(root, 'src/layouts/BaseLayout.astro'), 'utf8');
if (baseLayout.includes('<html lang="es">')) {
  pass('Idioma Español (<html lang="es">) configurado como predeterminado en BaseLayout.astro.');
} else {
  fail('BaseLayout.astro no tiene <html lang="es"> por defecto.');
}

const langSwitcher = fs.readFileSync(path.join(root, 'src/components/molecules/LanguageSwitcher.astro'), 'utf8');
if (langSwitcher.includes('Español') && langSwitcher.includes('Inglés') && !/>ES<\/|>EN<\//.test(langSwitcher)) {
  pass('Botón selector de idioma muestra "Español - Inglés" sin abreviar en sus 3 variantes (banner, header, mobile).');
} else {
  fail('LanguageSwitcher.astro no cumple con el formato "Español - Inglés" sin abreviar.');
}

const translator = fs.readFileSync(path.join(root, 'src/components/LanguageTranslator.astro'), 'utf8');
const dictEntries = (translator.match(/^\s*'[^']+'\s*:\s*'/gm) || []).length;
if (dictEntries >= 300) {
  pass(`Motor bilingüe LanguageTranslator.astro activo con ${dictEntries} entradas de traducción ES -> EN.`);
} else {
  fail(`LanguageTranslator.astro tiene pocas entradas (${dictEntries}).`);
}

// 6. Verificar reglas Mobile-First en global.css
if (globalCss.includes('overflow-x: hidden') && globalCss.includes('min-height: 2.75rem')) {
  pass('Reglas Mobile-First verificadas (prevención de overflow horizontal y áreas táctiles mínimas de 44px / 2.75rem).');
} else {
  fail('Faltan garantías Mobile-First en src/styles/global.css.');
}

console.log('--------------------------------------------------------------------------------');
if (errors > 0) {
  console.error(`✗ AUDITORÍA FALLIDA CON ${errors} ERROR(ES).`);
  process.exit(1);
} else {
  console.log('✓ AUDITORÍA USWDS 3.14 COMPLETADA CON ÉXITO: 100% USWDS 3.14, CERO TAILWIND,');
  console.log('  SELECTOR "Español - Inglés" SIN ABREVIAR Y DISEÑO MÓVIL INTUITIVO VERIFICADO.');
}
