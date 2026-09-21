import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TCMG – Tennis Club Municipal de Goussainville',
  description: 'Site officiel du Tennis Club Municipal de Goussainville.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
