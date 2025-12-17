import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { BackgroundFXClient } from './components/background/BackgroundFXClient';
import styles from './layout.module.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://udic.cz'),
  title: 'David Udič | Full‑stack developer',
  description:
    'Full‑stack developer zaměřený na moderní UI, API, databáze a integrace. Next.js, TypeScript, C#, PostgreSQL.',
  keywords:
    'David Udič, full-stack developer, TypeScript, Next.js, React, C#, .NET, PostgreSQL, MongoDB, integrace, testing, portfolio',
  authors: [{ name: 'David Udič' }],
  creator: 'David Udič',
  openGraph: {
    title: 'David Udič | Full‑stack developer',
    description:
      'Moderní webové produkty od UI přes API až po databáze a integrace. Next.js, TypeScript, C#.',
    url: 'https://udic.cz',
    siteName: 'David Udič Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'David Udič - Web Developer Portfolio',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Udič | Full‑stack developer',
    description: 'Full‑stack developer: UI + API + databáze + integrace. Next.js, TypeScript, C#.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/DU.svg',
    shortcut: '/DU.svg',
    apple: '/DU.svg',
  },
  verification: {
    google: '8x-XvkMYqH817BJmy2d3BbN3K5onJYwLEm6p-tpY7MA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${styles.body}`}>
        <a className={styles.skipLink} href="#content">
          Přeskočit na obsah
        </a>
        <div className={styles.bg} aria-hidden />
        <BackgroundFXClient />
        <div className={styles.noise} aria-hidden />
        <div className={styles.app}>{children}</div>
      </body>
    </html>
  );
}
