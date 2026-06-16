#!/usr/bin/env node
'use strict';
/** Deploy KICK CHESS to inkwell.wiki */
const fs = require('fs');
const path = require('path');
const { deployPage } = require('../shapedqr/deploy-auth');

const ROOT = __dirname;
const SLUGS = { landing: 'kick-chess', trainer: 'kick-chess-trainer', rules: 'kick-chess-rules' };

function read(n) { return fs.readFileSync(path.join(ROOT, n), 'utf8'); }
function inkwellize(html, pairs) {
  let out = html;
  for (const [from, to] of pairs) out = out.split(from).join(to);
  return out;
}

async function main() {
  const landing = inkwellize(read('index.html'), [
    ['href="trainer.html"', `href="/${SLUGS.trainer}"`],
    ['href="rules.html"', `href="/${SLUGS.rules}"`],
  ]);
  const trainer = inkwellize(read('trainer.html'), [
    ['href="index.html"', `href="/${SLUGS.landing}"`],
    ['href="rules.html"', `href="/${SLUGS.rules}"`],
  ]);
  const rules = inkwellize(read('rules.html'), [
    ['href="trainer.html"', `href="/${SLUGS.trainer}"`],
    ['href="index.html"', `href="/${SLUGS.landing}"`],
  ]);
  let ok = true;
  for (const [slug, html] of [[SLUGS.landing, landing], [SLUGS.trainer, trainer], [SLUGS.rules, rules]]) {
    if (!(await deployPage(slug, html))) ok = false;
  }
  process.exit(ok ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
