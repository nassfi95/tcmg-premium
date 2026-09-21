import type { Metadata } from 'next';
import './globals.css';
import { LoadingScreen } from '@/components/loading-screen';
export const metadata: Metadata = {
  title: { default: 'TCMG — Tennis Club Municipal de Goussainville', template: '%s | TCMG' },
  description: 'Le Tennis Club Municipal de Goussainville : école de tennis, adultes, compétition et Fête le Mur.',
  keywords: ['tennis Goussainville', 'TCMG', 'école de tennis', 'club de tennis'],
  icons: { icon: '/tcmg-mark.svg', apple: '/tcmg-mark.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: { title: 'TCMG — Jouer ensemble, grandir ensemble', description: 'Le tennis pour tous depuis 1983.', locale: 'fr_FR', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><LoadingScreen/>{children}</body></html>; }
