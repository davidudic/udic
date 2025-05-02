import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Udič | Portfolio',
  description: 'Osobní portfolio Davida Udiče, studenta IT se zaměřením na frontendový vývoj',
  icons: {
    icon: '/favicon.ico',
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