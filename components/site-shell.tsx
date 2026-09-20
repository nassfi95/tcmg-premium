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
