import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'My awesome rating',
  description: 'App, where you can rate anything',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${notoSans.variable}`}>{children}</body>
    </html>
  );
}
