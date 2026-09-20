import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'TCMG — Tennis Club Municipal de Goussainville', template: '%s | TCMG' },
  description: 'Le Tennis Club Municipal de Goussainville : tennis, école, compétition et vie de club.',
  keywords: ['tennis Goussainville', 'TCMG', 'école de tennis', 'club de tennis'],
  openGraph: { title: 'TCMG — Jouer ensemble, grandir ensemble', description: 'Le tennis à Goussainville, pour toutes les envies.', locale: 'fr_FR', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
