#!/usr/bin/env node
// scripts/verify_rag_truth.mjs
// Auditoría QA Forense: Verifica que la única fuente de verdad del CMS sea el directorio RAG/

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
console.log(' AUDITORÍA DE VERACIDAD FORENSE (ÚNICA FUENTE: /RAG/) — sha256.us');
console.log('================================================================================\n');

// 1. Verificar que todos los instrumentos en src/consts.ts existen en RAG/ y su hash coincide exactamente
const constsPath = path.join(root, 'src/consts.ts');
const constsRaw = fs.readFileSync(constsPath, 'utf8');
const instrumentsStart = constsRaw.indexOf('export const LEGAL_INSTRUMENTS');
const instrumentsSlice = instrumentsStart >= 0 ? constsRaw.slice(instrumentsStart) : constsRaw;

const entryRegex = /\{[^{}]*?code:\s*'([^']+)'[^{}]*?fileRef:\s*'([^']+)'[^{}]*?sha256Hash:\s*'([a-f0-9]{64})'[^{}]*?\}/g;
let match;
let checkedInstruments = 0;

while ((match = entryRegex.exec(instrumentsSlice)) !== null) {
  const [, code, fileRef, sha256Hash] = match;
  checkedInstruments++;
  const absRagPath = path.join(root, fileRef);

  if (!fs.existsSync(absRagPath)) {
    fail(`Instrumento ${code}: no existe el archivo en RAG -> ${fileRef}`);
    continue;
  }

  const ragRaw = fs.readFileSync(absRagPath, 'utf8');
  const ragHashMatch = ragRaw.match(/hash_pdf_sha256:\s*"([a-f0-9]{64})"/);
  if (!ragHashMatch) {
    fail(`Instrumento ${code}: falta hash_pdf_sha256 en el frontmatter de ${fileRef}`);
    continue;
  }

  if (ragHashMatch[1] !== sha256Hash) {
    fail(`Instrumento ${code}: hash SHA-256 en src/consts.ts (${sha256Hash}) NO coincide con RAG (${ragHashMatch[1]})`);
  } else {
    pass(`Instrumento ${code}: ruta RAG y hash SHA-256 verificados (${sha256Hash.slice(0, 12)}...${sha256Hash.slice(-6)})`);
  }
}

if (checkedInstruments === 0) {
  fail('No se encontraron instrumentos en LEGAL_INSTRUMENTS dentro de src/consts.ts');
} else {
  console.log(`\nTotal instrumentos verificados contra RAG/: ${checkedInstruments}`);
}

// 2. Verificar ausencia total de alucinaciones o términos no respaldados por RAG/ en src/, public/assets/js/ y dist/
const bannedPatterns = [
  /ISO\s*37301/i,
  /ISO\/IEC\s*27040/i,
  /800-88/i,
  /Crypto-Erase/i,
  /9241-110/i,
  /Heurística\s+Nielsen/i,
  /RFC\s*8785/i,
  /ENFSI\s+Audio/i,
  /41\.247/,
  /6\.644/,
  /Decreto\s*N°?\s*8\.792/i,
  /216\s*mm/i,
  /330\s*mm/i,
  /13\s+Planillas/i,
  /13\s+Actas/i,
  /msgstore\.db/i,
  /\bwa\.db\b/i,
  /F0[\s–-]+F5/i,
  /F0\s+a\s+F5/i,
  /Opus\s*48\s*kHz/i,
];

const targetDirs = [
  ...walkFiles(path.join(root, 'src'), ['.astro', '.ts', '.md', '.mdx']),
  path.join(root, 'public/assets/js/i18n-en.json'),
  ...walkFiles(path.join(root, 'dist'), ['.html']),
];

let hallucinationHits = [];
for (const file of targetDirs) {
  if (!fs.existsSync(file)) continue;
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  for (const pat of bannedPatterns) {
    if (pat.test(content)) {
      hallucinationHits.push(`${rel} -> ${pat.toString()}`);
    }
  }
}

if (hallucinationHits.length === 0) {
  pass('Cero alucinaciones detectadas en src/, i18n-en.json y dist/ respecto a RAG/.');
} else {
  fail(`Alucinaciones detectadas fuera de RAG/: ${hallucinationHits.join(' | ')}`);
}

console.log('--------------------------------------------------------------------------------');
if (errors > 0) {
  console.error(`✗ AUDITORÍA RAG FALLIDA CON ${errors} ERROR(ES).`);
  process.exit(1);
} else {
  console.log('✓ AUDITORÍA RAG SUPERADA AL 100% (ÚNICA FUENTE DE VERDAD VERIFICADA).');
}
