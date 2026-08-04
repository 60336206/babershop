const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'coverage', 'barbershop-frontend', 'lcov.info');

if (!fs.existsSync(file)) {
  console.error('lcov.info not found. Run `npm test` first.');
  process.exit(1);
}

const content = fs.readFileSync(file, 'utf8');
const lines = content.split(/\r?\n/);
let changed = 0;

const out = lines.map((ln) => {
  if (ln.startsWith('SF:') && ln.includes('\\')) {
    changed++;
    return ln.replace(/\\/g, '/');
  }
  return ln;
});

if (changed > 0) {
  fs.writeFileSync(file, out.join('\n'), 'utf8');
  console.log(`Normalized ${changed} paths in lcov.info`);
} else {
  console.log('lcov.info already normalized');
}
