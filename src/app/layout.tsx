import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Udič | Portfolio',
  description: 'Osobní portfolio Davida Udiče, studenta IT se zaměřením na frontendový vývoj',
  icons: {
    icon: '/DU.svg',          // Pro moderní prohlížeče
    shortcut: '/DU.svg',      // Pro starší prohlížeče
    apple: '/DU.svg',         // Pro iOS/MacOS
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