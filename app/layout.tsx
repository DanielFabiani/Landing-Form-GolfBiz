import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { EVENT } from '@/config/event';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight:  ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://golf-biz.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:       EVENT.meta.title,
  description: EVENT.meta.description,
  openGraph: {
    title:       EVENT.meta.title,
    description: EVENT.meta.description,
    url:         siteUrl,
    siteName:    EVENT.name,
    images: [
      {
        url:    EVENT.meta.ogImage,
        width:  600,
        height: 314,
        alt:    EVENT.name,
        type:   'image/png',
      },
    ],
    type:        'website',
    locale:      'es_AR',
  },
  twitter: {
    card:        'summary_large_image',
    title:       EVENT.meta.title,
    description: EVENT.meta.description,
    images: [
      {
        url:    EVENT.meta.ogImage,
        width:  600,
        height: 314,
        alt:    EVENT.name,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
