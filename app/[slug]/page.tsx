import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow } from '@/components/icons';
import { Footer, Header } from '@/components/site-shell';

const pages: Record<string, { kicker: string; title: string; lead: string; items: string[]; color: string }> = {
  'le-club': { kicker: 'LE CLUB', title: 'Un club qui rassemble.', lead: 'Un lieu de jeu, de progrès et de rencontres au cœur de Goussainville.', items: ['Une équipe passionnée', 'Des installations pour toute l’année', 'Un esprit ouvert à tous'], color: 'purple' },
  tennis: { kicker: 'TENNIS', title: 'Le plaisir de chaque échange.', lead: 'École de tennis, pratique adulte, compétition : un accompagnement à votre rythme.', items: ['École de tennis dès 4 ans', 'Cours adultes tous niveaux', 'Équipes et compétition'], color: 'blue' },
  padel: { kicker: 'PADEL', title: 'Le jeu qui crée du lien.', lead: 'Découvrez un sport spontané, technique et très addictif sur nos courts.', items: ['Découverte & initiation', 'Sessions enfants et adultes', 'Jeu libre & animations'], color: 'orange' },
  'fete-le-mur': { kicker: 'FÊTE LE MUR', title: 'Le sport comme levier d’éducation.', lead: 'Des activités et des moments de partage pour faire grandir les jeunes avec confiance.', items: ['Accrobranche & jeux collectifs', 'Jardinage et récoltes', 'Tennis, padel et partage'], color: 'lime' },
  boutique: { kicker: 'BOUTIQUE OFFICIELLE', title: 'Portez nos couleurs.', lead: 'Une collection pensée avec Training Addict pour jouer, bouger et représenter le TCMG.', items: ['T-shirts & hoodies', 'Tenues femme & homme', 'Accessoires & packs'], color: 'purple' },
  galerie: { kicker: 'GALERIE', title: 'Les souvenirs qui nous ressemblent.', lead: 'Tennis, padel, Fête le Mur : découvrez les temps forts du club.', items: ['Tennis', 'Padel', 'Fête le Mur'], color: 'blue' },
  contact: { kicker: 'CONTACT', title: 'On se retrouve sur le court ?', lead: 'Une question, une inscription ou l’envie de découvrir le club ? Parlons-en.', items: ['01 39 88 10 70', 'contact@tcmg.fr', 'Parc des Sports, Goussainville'], color: 'orange' },
};
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = pages[slug]; return p ? { title: p.kicker, description: p.lead } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = pages[slug]; if (!p) notFound(); const isContact = slug === 'contact'; return <><Header /><main>
  <section className={`inner-hero inner-${p.color} px-5 pb-20 pt-40 text-white`}><div className="mx-auto max-w-7xl"><p className="eyebrow text-[#d8ff57]">{p.kicker}</p><h1 className="mt-5 max-w-4xl text-balance text-6xl font-black leading-[.88] tracking-[-.07em] md:text-8xl">{p.title}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/70">{p.lead}</p></div></section>
  <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-4 md:grid-cols-3">{p.items.map((item, i) => <article className="feature-card" key={item}><p>0{i + 1}</p><h2>{item}</h2>{isContact && <a href={i === 0 ? 'tel:+33139881070' : i === 1 ? 'mailto:contact@tcmg.fr' : 'https://maps.google.com/?q=Tennis+Club+Municipal+de+Goussainville'}>{i === 0 ? 'Appeler' : i === 1 ? 'Écrire' : 'Ouvrir Maps'} <Arrow /></a>}</article>)}</div>
  {slug === 'boutique' && <div className="product-row mt-16">{['T-shirt violet', 'Hoodie blanc', 'Pack femme'].map((product, i) => <a key={product} href={`mailto:contact@tcmg.fr?subject=${encodeURIComponent('Commande ' + product)}`} className="product-card"><span>{String(i + 1).padStart(2, '0')}</span><b>{product}</b><small>Training Addict · Commander</small></a>)}</div>}
  {slug === 'fete-le-mur' && <div className="activity-strip mt-16"><span>Accrobranche</span><span>Jardinage</span><span>Jus d’orange</span><span>Jeux collectifs</span></div>}
  <div className="mt-16 rounded-[2rem] bg-[#111426] p-8 text-white md:p-12"><p className="eyebrow text-[#d8ff57]">TCMG</p><h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-.05em] md:text-5xl">Une même passion, une place pour chacun.</h2><Link href="/contact" className="button button-lime mt-8">Nous contacter <Arrow /></Link></div></div></section>
  </main><Footer /></>;
}
