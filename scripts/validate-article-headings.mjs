import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const articlesDirectory = new URL('../src/content/articles/', import.meta.url);
const articleFiles = (await readdir(articlesDirectory, { recursive: true }))
  .filter((file) => file.endsWith('.md'));

const violations = [];

for (const articleFile of articleFiles) {
  const source = await readFile(new URL(articleFile, articlesDirectory), 'utf8');
  const lines = source.split(/\r?\n/);
  let inFrontMatter = lines[0] === '---';
  let inFence = false;

  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index];

    if (inFrontMatter) {
      if (line === '---') inFrontMatter = false;
      continue;
    }

    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }

    if (inFence) continue;

    const isAtxH1 = /^ {0,3}#(?:\s|$)/.test(line);
    const isSetextH1 = /^ {0,3}=+\s*$/.test(line) && index > 0 && lines[index - 1].trim() !== '';

    if (isAtxH1 || isSetextH1) {
      violations.push(`${path.join('src/content/articles', articleFile)}:${index + 1}`);
    }
  }
}

if (violations.length > 0) {
  console.error('Article Markdown bodies cannot contain level-one headings.');
  console.error('Use the front-matter title; ArticleLayout provides the page H1.');
  console.error(violations.join('\n'));
  process.exitCode = 1;
}
