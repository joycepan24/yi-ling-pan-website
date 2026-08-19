import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const validationOrigin = 'https://site-validation.invalid';
const htmlFiles = [];

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await collectHtmlFiles(entryPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(entryPath);
    }
  }));
}

function routeForHtmlFile(filePath) {
  const relativePath = path.relative(outputDirectory, filePath);

  if (relativePath === 'index.html') return '/';
  if (relativePath.endsWith(`${path.sep}index.html`)) {
    return `/${relativePath.slice(0, -'index.html'.length).split(path.sep).join('/')}`;
  }

  return `/${relativePath.split(path.sep).join('/')}`;
}

function isExternalOrFragmentOnly(href) {
  return href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(href);
}

async function generatedDestinationExists(pathname) {
  const relativePath = pathname.replace(/^\/+/, '');
  const candidates = pathname.endsWith('/')
    ? [path.join(outputDirectory, relativePath, 'index.html')]
    : [
        path.join(outputDirectory, relativePath),
        path.join(outputDirectory, `${relativePath}.html`),
        path.join(outputDirectory, relativePath, 'index.html'),
      ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return true;
    } catch {
      // Try the next valid output form for the same route.
    }
  }

  return false;
}

await collectHtmlFiles(outputDirectory);

const violations = [];
const hrefPattern = /<a\b[^>]*?\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;

for (const htmlFile of htmlFiles) {
  const sourceRoute = routeForHtmlFile(htmlFile);
  const source = await readFile(htmlFile, 'utf8');

  for (const match of source.matchAll(hrefPattern)) {
    const href = match[1] ?? match[2] ?? match[3] ?? '';

    if (!href || isExternalOrFragmentOnly(href)) continue;

    const destination = new URL(href, `${validationOrigin}${sourceRoute}`);

    if (destination.origin !== validationOrigin) continue;

    if (!await generatedDestinationExists(destination.pathname)) {
      violations.push(`${sourceRoute}: ${href} → ${destination.pathname}`);
    }
  }
}

if (violations.length > 0) {
  console.error('Broken internal links found in generated output:');
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Internal link validation passed for ${htmlFiles.length} generated HTML page(s).`);
}
