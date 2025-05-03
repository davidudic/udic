import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Udič | Web Developer - Tvorba webových stránek na míru',
  description: 'David Udič - Frontend web developer a student IT. Tvorba moderních webových stránek na míru, React, Next.js. Portfolio, kontakt a služby.',
  keywords: 'David Udič, Udič, web developer, frontend developer, tvorba webů, web na míru, React developer, Next.js developer, portfolio David Udič, student IT',
  authors: [{ name: 'David Udič' }],
  creator: 'David Udič',
  openGraph: {
    title: 'David Udič | Web Developer - Tvorba webových stránek',
    description: 'David Udič - Frontend web developer. Tvorba moderních webových stránek na míru, React, Next.js. Spojte se se mnou pro váš webový projekt.',
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
    title: 'David Udič | Web Developer - Tvorba webových stránek',
    description: 'Frontend web developer specializující se na React a Next.js. Tvorba webů na míru.',
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
      <body>
        {children}
      </body>
    </html>
  );
}