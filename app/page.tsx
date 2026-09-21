'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Arrow } from '@/components/icons';
import { Footer, Header } from '@/components/site-shell';

const univers = [
  { no: '01', title: 'Tennis', text: 'Du premier échange aux matchs qui comptent.', href: '/tennis', tone: 'blue' },
  { no: '02', title: 'Padel', text: 'Un jeu rapide, inclusif et intensément collectif.', href: '/padel', tone: 'orange' },
  { no: '03', title: 'Fête le Mur', text: 'Le sport comme levier d’éducation.', href: '/fete-le-mur', tone: 'lime' },
];
const photos = ['Échanges', 'Transmission', 'Énergie', 'Partage', 'Le collectif', 'Le plaisir'];

export default function Home() {
  return <><Header /><main>
    <section className="hero relative isolate min-h-screen overflow-hidden px-5 pb-12 pt-32 text-white">
      <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
      <div className="court-lines absolute inset-x-[7%] top-24 bottom-[-24%] -z-10 rotate-[-10deg] opacity-35" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-7xl flex-col justify-end">
        <p className="eyebrow text-[#d8ff57]">TENNIS CLUB MUNICIPAL DE GOUSSAINVILLE</p>
        <h1 className="mt-5 max-w-5xl text-balance text-6xl font-black leading-[.86] tracking-[-.075em] sm:text-7xl lg:text-9xl">Ici, on joue<br /><span className="italic font-medium text-[#d8ff57]">plus grand.</span></h1>
        <div className="mt-9 flex flex-wrap gap-3"><Link className="button button-lime" href="/le-club">Découvrir le club <Arrow /></Link><Link className="button button-ghost" href="/contact">Nous contacter</Link></div>
        <div className="mt-16 flex max-w-3xl flex-wrap gap-x-12 gap-y-3 border-t border-white/25 pt-5 text-sm font-semibold text-white/65"><span>8 courts</span><span>400+ licenciés</span><span>Une énergie commune</span></div>
      </motion.div>
    </section>
    <section className="bg-[#f6f4ee] px-5 py-24"><div className="mx-auto max-w-7xl">
      <div className="max-w-2xl"><p className="eyebrow text-[#6444d9]">NOS UNIVERS</p><h2 className="headline mt-4">Trois façons de vivre le club.</h2></div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">{univers.map((item, i) => <motion.article whileHover={{ y: -7 }} key={item.title} className={`universe-card universe-${item.tone}`}>
        <div className="flex items-start justify-between"><span className="text-sm font-bold opacity-70">{item.no}</span><span className="ball ball-small" /></div><div><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Explorer <Arrow /></Link></div>
      </motion.article>)}</div>
    </div></section>
    <section className="bg-[#111426] px-5 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr]">
      <div><p className="eyebrow text-[#d8ff57]">FÊTE LE MUR</p><h2 className="headline mt-4">Bien plus qu’un terrain de jeu.</h2><p className="mt-6 max-w-md text-lg leading-8 text-white/65">Au TCMG, le sport ouvre des portes. Chaque activité est une occasion de se rencontrer, d’apprendre et de prendre confiance.</p><Link href="/fete-le-mur" className="button button-lime mt-8">Notre engagement <Arrow /></Link></div>
      <div className="photo-panel photo-panel-dark"><span>FÊTE LE MUR</span><div className="panel-copy"><b>Grandir<br />ensemble.</b><small>Des expériences qui restent.</small></div><i className="panel-stroke" /></div>
    </div></section>
    <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-[#6444d9]">EN IMAGES</p><h2 className="headline mt-4">L’énergie TCMG.</h2></div><Link href="/galerie" className="text-link">Voir la galerie <Arrow /></Link></div>
      <div className="gallery-grid mt-12">{photos.map((photo, i) => <Link key={photo} href="/galerie" className={`gallery-tile gallery-${i + 1}`}><span>{photo}</span><b>↗</b></Link>)}</div>
    </div></section>
    <section className="px-5 pb-24"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#6444d9] p-8 text-white md:p-14"><p className="eyebrow text-[#d8ff57]">PRÊT À JOUER ?</p><div className="mt-5 flex flex-wrap items-end justify-between gap-8"><h2 className="max-w-3xl text-4xl font-black tracking-[-.06em] md:text-6xl">Votre prochain<br /><i className="font-medium">échange</i> commence ici.</h2><Link href="/contact" className="button bg-white text-[#372499]">Nous rejoindre <Arrow /></Link></div></div></section>
  </main><Footer /></>;
}
