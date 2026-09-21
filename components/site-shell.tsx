'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  ['Le club', '/le-club'], ['École', '/ecole-de-tennis'], ['Adultes', '/adultes'], ['Compétition', '/competition'], ['Fête le Mur', '/fete-le-mur'], ['Actualités', '/actualites'], ['Galerie', '/galerie'], ['Boutique', '/boutique'],
];

export function Mark({ dark = false }: { dark?: boolean }) {
  return <span aria-label="Logo TCMG" className={`mark ${dark ? 'mark-dark' : ''}`}><i>TC</i><b>MG</b></span>;
}
export function Brand({ dark = false }: { dark?: boolean }) {
  return <Link href="/" className={`brand ${dark ? 'brand-dark' : ''}`}><Mark dark={dark}/><span><strong>TCMG</strong><small>TENNIS CLUB MUNICIPAL<br/>DE GOUSSAINVILLE</small></span></Link>;
}
export function Header(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const f=()=>setScrolled(window.scrollY>18); f(); addEventListener('scroll',f); return()=>removeEventListener('scroll',f); },[]);
  return <header className={`site-header ${scrolled?'site-header-scrolled':''}`}><div className="nav-wrap"><Brand/><nav className="desktop-nav">{links.map(([x,href])=><Link href={href} key={href}>{x}</Link>)}<Link className="nav-cta" href="/reservation">Réserver</Link></nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu"><span/><span/></button></div><AnimatePresence>{open && <motion.div initial={{opacity:0,y:-14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-14}} className="mobile-nav">{links.concat([['Réserver un terrain','/reservation'],['Contact','/contact']]).map(([x,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{x}<span>↗</span></Link>)}</motion.div>}</AnimatePresence></header>
}
export function SocialRail(){return <aside className="social-rail"><a href="https://www.instagram.com" aria-label="Instagram">IG</a><a href="https://www.tiktok.com" aria-label="TikTok">TK</a><a href="https://www.facebook.com" aria-label="Facebook">f</a></aside>}
export function Footer(){return <footer className="footer"><div className="footer-inner"><div><Brand/><p className="footer-intro">Le tennis comme point de départ. À Goussainville, on joue, on apprend et on avance ensemble.</p><div className="socials"><a href="https://www.instagram.com">Instagram</a><a href="https://www.tiktok.com">TikTok</a><a href="https://www.facebook.com">Facebook</a></div></div><div><p className="footer-label">NOUS TROUVER</p><p>Parc des Sports<br/>95190 Goussainville<br/><a href="tel:+33139880000">01 39 88 00 00</a></p></div><div><p className="footer-label">LE CLUB</p><p><Link href="/contact">Contact & horaires</Link><br/><Link href="/partenaires">Nos partenaires</Link><br/><Link href="/reservation">Réserver un terrain</Link><br/><Link href="/admin">Espace administrateur</Link></p></div></div><div className="footer-bottom"><span>© 2026 TCMG</span><span>Tennis Club Municipal de Goussainville</span><span>Mentions légales</span></div></footer>}
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Brand } from './brand';
import { Menu } from './icons';
import { club, navigation } from '@/content/site';

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const listener = () => setScrolled(window.scrollY > 24); listener(); window.addEventListener('scroll', listener, { passive: true }); return () => window.removeEventListener('scroll', listener); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5"><Brand dark={scrolled} />
      <nav className={`hidden items-center gap-5 text-[13px] font-bold xl:flex ${scrolled ? 'text-[#12345a]' : 'text-white'}`} aria-label="Navigation principale">{navigation.slice(1).map(([label, href]) => <Link className="transition hover:text-[#2FA84F]" href={href} key={href}>{label}</Link>)}</nav>
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} className={`grid h-10 w-10 place-items-center rounded-full border ${scrolled ? 'border-[#0057B8] text-[#0057B8]' : 'border-white/50 text-white'} xl:hidden`}><Menu /></button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-100 bg-white px-5 xl:hidden" aria-label="Navigation mobile">{navigation.map(([label, href]) => <Link onClick={() => setOpen(false)} className="block border-b border-slate-100 py-4 text-sm font-bold text-[#12345a]" href={href} key={href}>{label}</Link>)}</motion.nav>}</AnimatePresence>
  </header>;
}
export function Footer() { return <footer className="bg-[#062a59] px-5 py-14 text-white"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.35fr_1fr_1fr_1fr]"><div><Brand /><p className="mt-5 max-w-sm text-sm leading-6 text-white/70">Le tennis pour tous depuis 1983, au cœur de Goussainville.</p></div><div><p className="eyebrow text-[#72d68b]">NAVIGATION</p>{navigation.slice(0, 8).map(([label, href]) => <Link className="mt-3 block text-sm text-white/70 hover:text-white" href={href} key={href}>{label}</Link>)}</div><div><p className="eyebrow text-[#72d68b]">CONTACT</p><a href={club.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 block text-sm leading-6 text-white/70 hover:text-white">{club.address.map(part => <span className="block" key={part}>{part}</span>)}</a><a href={`tel:${club.phone}`} className="mt-3 block text-sm text-white/70 hover:text-white">{club.phoneLabel}</a><a href={`mailto:${club.email}`} className="mt-2 block break-all text-sm text-white/70 hover:text-white">{club.email}</a></div><div><p className="eyebrow text-[#72d68b]">SUIVEZ-NOUS</p><div className="mt-4 flex gap-3"><a aria-label="Instagram TCMG" className="social" href={club.social.instagram} target="_blank" rel="noreferrer">ig</a><a aria-label="Facebook TCMG" className="social" href={club.social.facebook} target="_blank" rel="noreferrer">fb</a></div><p className="mt-8 text-xs text-white/45">© {new Date().getFullYear()} TCMG. Tous droits réservés.</p><Link className="mt-3 block text-sm text-white/70 hover:text-white" href="/partenaires">Partenaires</Link></div></div></footer>; }
