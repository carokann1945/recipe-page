import type { Metadata } from 'next';
import { Young_Serif, Outfit } from 'next/font/google';
import './globals.css';

const youngSerif = Young_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-young-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'recipe-page',
  description: 'frontend mentor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${outfit.variable}`}>
      <body className="antialiased bg-stone-100 min-h-dvh md:py-[128px] md:px-[48px]">{children}</body>
    </html>
  );
}
