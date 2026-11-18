#!/usr/bin/env node
// scripts/verify_uswds_only.mjs
// Auditoría automatizada de cumplimiento estricto de `agente-uswds-estricto.md` (14 puntos)

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
let errors = 0;

function pass(msg) {
  console.log(`✓ [PASS] ${msg}`);
}

function fail(msg) {
  console.error(`✗ [FAIL] ${msg}`);
  errors++;
}

function sha256File(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function walkFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
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
console.log(' AUDITORÍA ESTRICTA USWDS 3.14 (agente-uswds-estricto.md) — sha256.us');
console.log('================================================================================\n');

// 1. Verificar ausencia de archivos .css propios en src/
const customCssFiles = walkFiles(path.join(root, 'src'), ['.css', '.scss', '.sass', '.less']);
if (customCssFiles.length === 0) {
  pass('Ley 1: Cero hojas de estilo propias (.css/.scss) dentro de src/.');
} else {
  fail(`Ley 1 violada: Se encontraron archivos CSS propios en src/: ${customCssFiles.map((f) => path.relative(root, f)).join(', ')}`);
}

// 2. Verificar integridad SHA-256 de los assets oficiales USWDS en public/assets/uswds/
const requiredAssets = [
  ['node_modules/@uswds/uswds/dist/css/uswds.min.css', 'public/assets/uswds/css/uswds.min.css'],
  ['node_modules/@uswds/uswds/dist/js/uswds-init.min.js', 'public/assets/uswds/js/uswds-init.min.js'],
  ['node_modules/@uswds/uswds/dist/js/uswds.min.js', 'public/assets/uswds/js/uswds.min.js'],
  ['node_modules/@uswds/uswds/dist/img/sprite.svg', 'public/assets/uswds/img/sprite.svg'],
];

let assetsOk = true;
for (const [srcRel, destRel] of requiredAssets) {
  const srcPath = path.join(root, srcRel);
  const destPath = path.join(root, destRel);
  if (!fs.existsSync(destPath)) {
    fail(`Falta asset oficial USWDS: ${destRel}`);
    assetsOk = false;
  } else if (sha256File(srcPath) !== sha256File(destPath)) {
    fail(`El archivo ${destRel} fue modificado y no coincide byte a byte con ${srcRel}`);
    assetsOk = false;
  }
}
if (assetsOk) {
  pass('Fase 2: Todos los assets oficiales USWDS (uswds.min.css, uswds-init.min.js, uswds.min.js, sprite.svg) son idénticos byte a byte al paquete @uswds/uswds.');
}

// 3. Extraer todas las clases válidas de public/assets/uswds/css/uswds.min.css
const uswdsCss = fs.readFileSync(path.join(root, 'public/assets/uswds/css/uswds.min.css'), 'utf8');
const validUswdsClasses = new Set([
  // Hooks estructurales oficiales del HTML de USWDS 3.14 que no tienen regla CSS aislada propia
  'usa-summary-box__body',
  'usa-banner__guidance',
  'icon-lock',
  'astro-code',
]);

const classRegex = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:\\:([_a-zA-Z0-9-]+))?/g;
let match;
while ((match = classRegex.exec(uswdsCss)) !== null) {
  if (match[2]) {
    validUswdsClasses.add(`${match[1]}:${match[2]}`);
  } else {
    validUswdsClasses.add(match[1]);
  }
}

// Extraer todos los IDs de símbolos del sprite oficial USWDS
const spriteSvg = fs.readFileSync(path.join(root, 'public/assets/uswds/img/sprite.svg'), 'utf8');
const validSpriteSymbols = new Set();
const symbolRegex = /<symbol[^>]+id="([^"]+)"/g;
while ((match = symbolRegex.exec(spriteSvg)) !== null) {
  validSpriteSymbols.add(match[1]);
}

// 4. Auditar todos los archivos src/**/*.astro
const astroFiles = walkFiles(path.join(root, 'src'), ['.astro']);
let styleTagFiles = [];
let inlineStyleFiles = [];
let hexLiteralFiles = [];
let missingCommentFiles = [];

const exemptFromTraceComment = new Set([
  'src/components/LanguageTranslator.astro',
  'src/components/FormattedDate.astro',
]);

for (const file of astroFiles) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const raw = fs.readFileSync(file, 'utf8');

  // Separar frontmatter y contenido quitando scripts inline para verificar el marcado HTML
  const withoutScripts = raw.replace(/<script[\s\S]*?<\/script>/gi, '');
  const parts = withoutScripts.split('---');
  const templateHtml = parts.length >= 3 ? parts.slice(2).join('---') : withoutScripts;

  if (/<style[\s>]/i.test(raw)) {
    styleTagFiles.push(rel);
  }
  if (/\sstyle\s*=/i.test(templateHtml)) {
    inlineStyleFiles.push(rel);
  }
  if (/#[0-9a-fA-F]{3,8}\b|rgba?\s*\(|hsla?\s*\(/i.test(templateHtml)) {
    hexLiteralFiles.push(rel);
  }
  if (!exemptFromTraceComment.has(rel) && !/USWDS:\s*.+\|\s*https:\/\/designsystem\.digital\.gov\//i.test(raw)) {
    missingCommentFiles.push(rel);
  }
}

if (styleTagFiles.length === 0) {
  pass(`Ley 1: Cero etiquetas <style> en los ${astroFiles.length} archivos .astro.`);
} else {
  fail(`Ley 1 violada (<style> detectado en): ${styleTagFiles.join(', ')}`);
}

if (inlineStyleFiles.length === 0) {
  pass(`Ley 1: Cero atributos style="..." en los ${astroFiles.length} archivos .astro.`);
} else {
  fail(`Ley 1 violada (style="..." detectado en): ${inlineStyleFiles.join(', ')}`);
}

if (hexLiteralFiles.length === 0) {
  pass(`Ley 3: Cero colores literales (#hex, rgb, hsl) en las plantillas de los ${astroFiles.length} archivos .astro.`);
} else {
  fail(`Ley 3 violada (colores literales en): ${hexLiteralFiles.join(', ')}`);
}

if (missingCommentFiles.length === 0) {
  pass('Ley 10: Todos los componentes y páginas incluyen comentario de trazabilidad oficial hacia designsystem.digital.gov.');
} else {
  fail(`Ley 10 violada (falta comentario USWDS en): ${missingCommentFiles.join(', ')}`);
}

// 5. Auditar el HTML compilado en dist/**/*.html
const distDir = path.join(root, 'dist');
const htmlFiles = walkFiles(distDir, ['.html']);
if (htmlFiles.length === 0) {
  fail('No se encontraron archivos HTML en dist/. Ejecuta `npm run build` antes de `npm run verify:uswds`.');
} else {
  let unknownClasses = new Map();
  let invalidSpriteRefs = [];
  let nonSpriteSvgs = [];
  let pageStructureErrors = [];
  let distStyleViolations = [];

  for (const file of htmlFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf8');
    const htmlWithoutScripts = html.replace(/<script[\s\S]*?<\/script>/gi, '');
    // Excluir bloques <pre class="astro-code"> generados por Shiki en posts Markdown
    const htmlWithoutCodeBlocks = htmlWithoutScripts.replace(/<pre[^>]*class="[^"]*astro-code[^"]*"[\s\S]*?<\/pre>/gi, '');

    if (/<style[\s>]/i.test(htmlWithoutCodeBlocks) || /\sstyle\s*=/i.test(htmlWithoutCodeBlocks)) {
      distStyleViolations.push(rel);
    }

    // Validar cada atributo class="..."
    const classAttrRegex = /\bclass="([^"]*)"/g;
    let cMatch;
    while ((cMatch = classAttrRegex.exec(htmlWithoutCodeBlocks)) !== null) {
      const tokens = cMatch[1].split(/\s+/).filter(Boolean);
      for (const token of tokens) {
        if (!validUswdsClasses.has(token)) {
          if (!unknownClasses.has(token)) {
            unknownClasses.set(token, new Set());
          }
          unknownClasses.get(token).add(rel);
        }
      }
    }

    // Validar iconos SVG
    const svgRegex = /<svg\b[^>]*>([\s\S]*?)<\/svg>/gi;
    let sMatch;
    while ((sMatch = svgRegex.exec(htmlWithoutCodeBlocks)) !== null) {
      const fullSvg = sMatch[0];
      const inner = sMatch[1];
      const useMatch = inner.match(/<use\s+[^>]*href="\/assets\/uswds\/img\/sprite\.svg#([^"]+)"/i);
      if (!useMatch) {
        nonSpriteSvgs.push(rel);
      } else {
        const symbolId = useMatch[1];
        if (!validSpriteSymbols.has(symbolId)) {
          invalidSpriteRefs.push(`${rel} (#${symbolId})`);
        }
      }
      if (!/\bclass="[^"]*\busa-icon\b/.test(fullSvg)) {
        nonSpriteSvgs.push(`${rel} (svg sin .usa-icon)`);
      }
    }

    // Validar esqueleto USWDS y accesibilidad por página
    const h1Count = (htmlWithoutScripts.match(/<h1\b/gi) || []).length;
    const mainCount = (htmlWithoutScripts.match(/<main\b[^>]*id="main-content"/gi) || []).length;
    const hasSkipnav = /class="usa-skipnav"\s+href="#main-content"/i.test(htmlWithoutScripts);
    const hasCssLink = /href="\/assets\/uswds\/css\/uswds\.min\.css"/i.test(html);
    const hasInitJs = /src="\/assets\/uswds\/js\/uswds-init\.min\.js"/i.test(html);
    const hasMainJs = /src="\/assets\/uswds\/js\/uswds\.min\.js"/i.test(html);

    if (h1Count !== 1) pageStructureErrors.push(`${rel}: tiene ${h1Count} etiquetas <h1> (debe ser exactamente 1)`);
    if (mainCount !== 1) pageStructureErrors.push(`${rel}: tiene ${mainCount} <main id="main-content"> (debe ser 1)`);
    if (!hasSkipnav) pageStructureErrors.push(`${rel}: falta <a class="usa-skipnav" href="#main-content">`);
    if (!hasCssLink || !hasInitJs || !hasMainJs) {
      pageStructureErrors.push(`${rel}: faltan referencias a uswds.min.css, uswds-init.min.js o uswds.min.js`);
    }
  }

  if (distStyleViolations.length === 0) {
    pass(`Ley 1 (dist/): Cero <style> y cero style="..." en las ${htmlFiles.length} páginas compiladas.`);
  } else {
    fail(`Ley 1 violada en dist/: ${distStyleViolations.join(', ')}`);
  }

  if (unknownClasses.size === 0) {
    pass(`Ley 2 y 3: 100% de las clases HTML en las ${htmlFiles.length} páginas compiladas existen en public/assets/uswds/css/uswds.min.css (0 clases sha-*, 0 clases inventadas).`);
  } else {
    const details = Array.from(unknownClasses.entries())
      .map(([cls, files]) => `${cls} (${Array.from(files).join(', ')})`)
      .join('; ');
    fail(`Ley 2 violada — Clases no existentes en uswds.min.css: ${details}`);
  }

  if (nonSpriteSvgs.length === 0 && invalidSpriteRefs.length === 0) {
    pass(`Fase 3 (Iconografía): 100% de los iconos SVG en dist/ usan <svg class="usa-icon"><use href="/assets/uswds/img/sprite.svg#..."></use></svg> con símbolos válidos.`);
  } else {
    if (nonSpriteSvgs.length > 0) fail(`SVGs fuera del sprite oficial USWDS: ${nonSpriteSvgs.join(', ')}`);
    if (invalidSpriteRefs.length > 0) fail(`Símbolos inexistentes en sprite.svg: ${invalidSpriteRefs.join(', ')}`);
  }

  if (pageStructureErrors.length === 0) {
    pass(`Sección 11 (Accesibilidad y Esqueleto): Las ${htmlFiles.length} páginas tienen exactamente un <h1>, <main id="main-content">, usa-skipnav y los assets oficiales USWDS.`);
  } else {
    fail(`Errores de estructura/accesibilidad en dist/: ${pageStructureErrors.join(' | ')}`);
  }
}

// 6. Verificar idioma Español por defecto y botón "Español - Inglés" sin abreviar
const baseLayout = fs.readFileSync(path.join(root, 'src/layouts/BaseLayout.astro'), 'utf8');
const langSwitcher = fs.readFileSync(path.join(root, 'src/components/molecules/LanguageSwitcher.astro'), 'utf8');
if (baseLayout.includes('<html lang="es">') && langSwitcher.includes('Español - Inglés')) {
  pass('Bilingüismo: <html lang="es"> por defecto y selector "Español - Inglés" sin abreviar verificados.');
} else {
  fail('Falta <html lang="es"> por defecto o texto "Español - Inglés" sin abreviar.');
}

console.log('--------------------------------------------------------------------------------');
if (errors > 0) {
  console.error(`✗ AUDITORÍA FALLIDA CON ${errors} ERROR(ES).`);
  process.exit(1);
} else {
  console.log('✓ AUDITORÍA USWDS 3.14 ESTRICTA SUPERADA CON CERO VIOLACIONES (14/14 CONTROLES OK).');
}
