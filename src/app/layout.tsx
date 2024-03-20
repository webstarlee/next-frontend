import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pikachu',
  description: 'Send me ur dankest memes!!',
  icons: '/images/logo.png',
  openGraph: {
    type: 'website',
    url: 'https://hehe.to',
    title: 'HEHE',
    description: 'Send me ur dankest memes!!',
    siteName: 'HEHE-Crypto',
    images: [
      {
        url: 'https://hehe.to/images/og_image.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
