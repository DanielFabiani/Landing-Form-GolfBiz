import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const heroBuffer = readFileSync(join(process.cwd(), 'public/hero-image.jpeg'));

  // Resize and crop hero-image.jpeg to standard 1200x630 Open Graph dimensions
  const finalImage = await sharp(heroBuffer)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92 })
    .toBuffer();

  writeFileSync(join(process.cwd(), 'public/og-image.jpg'), finalImage);
  writeFileSync(join(process.cwd(), 'app/opengraph-image.jpg'), finalImage);
  console.log('✅ Generated public/og-image.jpg and app/opengraph-image.jpg from public/hero-image.jpeg!');
}

generateOgImage().catch(console.error);
