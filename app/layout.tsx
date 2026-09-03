import type { Metadata } from 'next';
import './globals.css';
const title = 'Lois Nyishimente — Software Developer';
const description =
  'Thoughtful code. Meaningful experiences. Explore web, mobile, and full-stack projects by Lois Nyishimente, based in Kigali, Rwanda.';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_ORIGIN || 'http://localhost:3000'),
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Lois Nyishimente',
    images: [
      {
        url: '/og.png',
        width: 1732,
        height: 909,
        alt: 'Lois Nyishimente — Software Developer. Thoughtful code. Meaningful experiences.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
