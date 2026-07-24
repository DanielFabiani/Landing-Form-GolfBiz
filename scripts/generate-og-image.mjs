import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const bgBuffer = readFileSync(join(process.cwd(), 'public/bg-golfbiz.jpeg'));
  const logoGolfBizSvg = readFileSync(join(process.cwd(), 'public/logo-golfbiz.svg'), 'utf-8');
  const logoFourwindsSvg = readFileSync(join(process.cwd(), 'public/fourwinds.svg'), 'utf-8');

  // Strip XML decl and svg root tags to extract inner paths cleanly
  const golfBizContent = logoGolfBizSvg
    .replace(/<\?xml[\s\S]*?\?>/i, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '');

  const fourwindsContent = logoFourwindsSvg
    .replace(/<\?xml[\s\S]*?\?>/i, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '');

  const overlaySvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#001503" stop-opacity="0.45"/>
          <stop offset="50%" stop-color="#001503" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#001503" stop-opacity="0.95"/>
        </linearGradient>
      </defs>

      <!-- Dark gradient overlay -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- Top Badge -->
      <text x="600" y="150" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="4">2026</text>
      <text x="600" y="185" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-family="sans-serif" font-size="14" font-weight="300" letter-spacing="3">INVITACIÓN PERSONAL NO TRANSFERIBLE</text>

      <!-- GolfBiz Logo (centered) -->
      <g transform="translate(390, 210) scale(1.5)" fill="#FFFFFF">
        ${golfBizContent}
      </g>

      <!-- Powered by + Fourwinds -->
      <g transform="translate(380, 420)">
        <text x="0" y="24" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="600" letter-spacing="3">POWERED BY</text>
        <line x1="145" y1="6" x2="145" y2="28" stroke="#FFFFFF" stroke-width="2" />
        <g transform="translate(160, -5) scale(0.65)" fill="#FFFFFF">
          ${fourwindsContent}
        </g>
      </g>

      <!-- Footer Info -->
      <text x="600" y="525" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="600" letter-spacing="2">GOLF CLUB ARGENTINO · BUENOS AIRES</text>
      <text x="600" y="555" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="sans-serif" font-size="15" font-weight="400" letter-spacing="2">VIERNES 28 DE AGOSTO · EDICIÓN I</text>
    </svg>
  `;

  const resizedBg = await sharp(bgBuffer)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  const finalImage = await sharp(resizedBg)
    .composite([
      {
        input: Buffer.from(overlaySvg),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  writeFileSync(join(process.cwd(), 'public/og-image.jpg'), finalImage);
  writeFileSync(join(process.cwd(), 'app/opengraph-image.jpg'), finalImage);
  console.log('✅ Generated public/og-image.jpg and app/opengraph-image.jpg successfully!');
}

generateOgImage().catch(console.error);
