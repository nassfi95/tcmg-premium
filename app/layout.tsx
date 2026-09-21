import type { Metadata } from 'next';
import './globals.css';
import { AdminProvider } from '@/components/admin-provider';

export const metadata: Metadata = {
  title: 'TCMG – Tennis Club Municipal de Goussainville',
  description: 'Site officiel du Tennis Club Municipal de Goussainville.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
