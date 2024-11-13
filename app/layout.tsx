import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootProvider from '@/components/RootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teba - Comercial',
  description: 'Tu tienda de confianza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}