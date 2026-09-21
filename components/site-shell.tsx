'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  ['Accueil', '/'],
  ['Le club', '/le-club'],
  ['École', '/ecole-de-tennis'],
  ['Adultes', '/adultes'],
  ['Compétition', '/competition'],
  ['Fête le Mur', '/fete-le-mur'],
  ['Actualités', '/actualites'],
  ['Galerie', '/galerie'],
  ['Boutique', '/boutique'],
];

export function Mark({ dark = false }: { dark?: boolean }) {
  return (
    <span aria-label="Logo TCMG" className={`mark ${dark ? 'mark-dark' : ''}`}>
      <i>TC</i>
      <b>MG</b>
    </span>
  );
}

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`brand ${dark ? 'brand-dark' : ''}`}>
      <Mark dark={dark} />
      <span>
        <strong>TCMG</strong>
        <small>
          TENNIS CLUB MUNICIPAL
          <br />
          DE GOUSSAINVILLE
        </small>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 24);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Brand dark={scrolled} />

          <nav
            className={`hidden xl:flex items-center gap-6 text-sm font-bold ${
              scrolled ? 'text-[#12345a]' : 'text-white'
            }`}
          >
            {links.slice(1).map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-[#72d68b] transition">
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
              scrolled
                ? 'border-[#0057B8] text-[#0057B8]'
                : 'border-white/40 text-white'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-6 bg-current rounded transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-6 bg-current rounded transition ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-current rounded transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#041C44]/95 backdrop-blur-2xl"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-8 py-10 text-white">
              <div className="flex items-center justify-between">
                <Brand />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/30 p-3 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <nav className="my-10 flex flex-col gap-4">
                {links.map(([label, href], i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4 text-3xl md:text-5xl font-black hover:text-[#72d68b]"
                    >
                      {label}
                      <span className="opacity-40 group-hover:opacity-100">↗</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-white/10 pt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#72d68b]">
                    Suivez-nous
                  </p>
                  <div className="mt-3 flex gap-6">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                  </div>
                </div>

                <Link
                  href="/reservation"
                  onClick={() => setOpen(false)}
                  className="button button-green"
                >
                  Réserver un terrain
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SocialRail() {
  return (
    <aside className="social-rail">
      <a href="https://www.instagram.com" aria-label="Instagram">IG</a>
      <a href="https://www.tiktok.com" aria-label="TikTok">TK</a>
      <a href="https://www.facebook.com" aria-label="Facebook">FB</a>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Brand />
          <p className="footer-intro">
            Le tennis comme point de départ. À Goussainville, on joue, on apprend et on avance ensemble.
          </p>

          <div className="socials">
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.tiktok.com">TikTok</a>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
        </div>

        <div>
          <p className="footer-label">NOUS TROUVER</p>
          <p>
            Parc des Sports
            <br />
            95190 Goussainville
            <br />
            <a href="tel:+33139880000">01 39 88 00 00</a>
          </p>
        </div>

        <div>
          <p className="footer-label">LE CLUB</p>
          <p>
            <Link href="/contact">Contact & horaires</Link>
            <br />
            <Link href="/partenaires">Nos partenaires</Link>
            <br />
            <Link href="/reservation">Réserver un terrain</Link>
            <br />
            <Link href="/admin">Espace administrateur</Link>
          </p>
        </div>
      </div>

      <div>
  <p className="footer-label">NOUS TROUVER</p>
  <p>
    Complexe Maurice Baquet
    <br />
    Allée du 5 Décembre
    <br />
    95190 Goussainville
    <br />
    <a href="tel:+33139880000">01 39 88 00 00</a>
  </p>
</div>
    </footer>
  );
}
