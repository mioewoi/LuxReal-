const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const output = path.join(root, '_site');
const entryFiles = ['index.html', 'app.js', 'styles.css'];

function listFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    assert(!entry.isSymbolicLink(), 'Symlinks cannot be published: ' + file);
    assert(!entry.name.startsWith('.') && !/\.(?:pem|key|p12|pfx|log)$/i.test(entry.name),
      'Non-public asset must not be published: ' + file);
    return entry.isDirectory() ? listFiles(file) : [file];
  });
}

const assetFiles = listFiles(path.join(root, 'assets'));
const files = [...entryFiles.map((name) => path.join(root, name)), ...assetFiles];
const relativeNames = new Set(files.map((file) => path.relative(root, file).split(path.sep).join('/')));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const references = [
  ...Array.from(html.matchAll(/\b(?:src|href)=["'](\.\/[^"']+)["']/g), (match) => match[1]),
  ...Array.from(css.matchAll(/url\(\s*["']?(\.\/[^"')\s]+)/g), (match) => match[1]),
  ...Array.from(js.matchAll(/\$\{ASSET\}([^\x60"'\s$]+)/g), (match) => './assets/' + match[1]),
];
const projectUrl = new URL('https://mioewoi.github.io/LuxReal-/');
for (const reference of new Set(references)) {
  const resolved = new URL(reference, projectUrl);
  assert(resolved.pathname.startsWith(projectUrl.pathname), 'Asset escapes the project path: ' + reference);
  const relative = decodeURIComponent(resolved.pathname.slice(projectUrl.pathname.length));
  assert(relativeNames.has(relative), 'Missing asset or filename case mismatch: ' + reference);
}
const syntax = spawnSync(process.execPath, ['--check', path.join(root, 'app.js')], { stdio: 'inherit' });
if (syntax.error) throw syntax.error;
assert.equal(syntax.status, 0, 'JavaScript syntax validation failed');

// Only replace this generated directory; never touch source files or assets.
assert.equal(path.dirname(output), root);
assert.equal(path.basename(output), '_site');
if (fs.existsSync(output)) {
  assert(!fs.lstatSync(output).isSymbolicLink(), 'Refusing to replace a linked output directory');
  fs.rmSync(output, { recursive: true, force: true });
}
fs.mkdirSync(output, { recursive: true });
for (const file of files) {
  const destination = path.join(output, path.relative(root, file));
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(file, destination);
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
const bytes = files.reduce((total, file) => total + fs.statSync(file).size, 0);
console.log('Pages build OK: ' + (files.length + 1) + ' files, ' + (bytes / 1024 / 1024).toFixed(2) + ' MiB -> _site/');
console.log('Validated ' + new Set(references).size + ' relative references under ' + projectUrl.pathname);
