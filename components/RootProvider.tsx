"use client";

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}