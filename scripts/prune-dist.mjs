import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const runtimeAssets = new Set([
  'assets/generated/beyond-gold-eagle.png',
  'assets/generated/central-core-comparison.png',
  'assets/generated/hero-fullbleed.png',
  'assets/generated/omega-header-lockup.png',
  'assets/generated/proof-badge-acoustic.png',
  'assets/generated/proof-badge-results.png',
  'assets/generated/proof-badge-volume.png',
  'assets/generated/standard-is-changing-v2.png',
  'assets/logos/logo.png',
  'assets/productshots/OmegaAris-home.png',
  'assets/video-thumbnails/ad-1.jpg',
  'assets/video-thumbnails/ad-2.jpg',
  'assets/video-thumbnails/ad-3.jpg',
  'assets/video-thumbnails/ad-4.jpg',
  'assets/video-thumbnails/ad-5.jpg',
  'assets/video-thumbnails/ad-6.jpg',
  'assets/video-thumbnails/ad-7.jpg',
  'assets/video-thumbnails/ad-8.jpg',
  'assets/video-thumbnails/product-overview.jpg',
]);

const keep = (relativePath) => (
  relativePath === 'index.html'
  || /^assets\/index-[A-Za-z0-9_-]+\.js$/.test(relativePath)
  || runtimeAssets.has(relativePath)
);

async function prune(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await prune(absolutePath);
      if ((await readdir(absolutePath)).length === 0) await rm(absolutePath, { recursive: true });
      continue;
    }
    const relativePath = path.relative(dist, absolutePath).split(path.sep).join('/');
    if (!keep(relativePath)) await rm(absolutePath);
  }
}

await prune(dist);
