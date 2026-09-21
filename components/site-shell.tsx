'use client';

import Link from 'next/link';
import Image from 'next/image';
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

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/icon.svg"
        alt="Logo TCMG"
        width={56}
        height={56}
        className="rounded-2xl shadow-lg"
      />

      <div className="leading-none">
        <h1
          className={`text-3xl font-black tracking-[-0.06em] ${
            dark ? 'text-[#062a59]' : 'text-white'
          }`}
        >
          TCMG
        </h1>

        <p
          className={`mt-1 text-xs uppercase tracking-[0.28em] ${
            dark ? 'text-slate-500' : 'text-white/70'
          }`}
        >
          Goussainville
        </p>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Logo dark={scrolled} />

        <nav
          className={`hidden lg:flex items-center gap-6 text-sm font-semibold ${
            scrolled ? 'text-[#062a59]' : 'text-white'
          }`}
        >
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#2FA84F]">
              {label}
            </Link>
          ))}

          <a
            href="https://tenup.fft.fr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#2FA84F] px-5 py-3 text-white"
          >
            Réserver
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`grid h-12 w-12 place-items-center rounded-full border ${
            scrolled
              ? 'border-[#0057B8] text-[#0057B8]'
              : 'border-white/40 text-white'
          }`}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white border-t border-slate-200 lg:hidden"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-slate-100 text-[#062a59] font-semibold"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#062a59] text-white px-5 py-16">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-3">
        <div>
          <Logo />

          <p className="mt-6 text-white/70 leading-7">
            Le tennis comme point de départ. À Goussainville, on joue,
            on apprend et on avance ensemble.
          </p>
        </div>

        <div>
          <p className="text-[#72d68b] uppercase tracking-[0.2em] text-xs">
            Nous trouver
          </p>

          <div className="mt-4 space-y-1 text-white/80">
            <p>Complexe Maurice Baquet</p>
            <p>Allée du 5 Décembre</p>
            <p>95190 Goussainville</p>
            <p>01 39 88 00 00</p>
          </div>
        </div>

        <div>
          <p className="text-[#72d68b] uppercase tracking-[0.2em] text-xs">
            Navigation
          </p>

          <div className="mt-4 flex flex-col gap-3 text-white/80">
            <Link href="/contact">Contact</Link>
            <Link href="/partenaires">Partenaires</Link>
            <Link href="/reservation">Réserver</Link>
            <Link href="/admin">Espace administrateur</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 flex justify-between text-sm text-white/50">
        <span>© 2026 TCMG</span>
        <span>Tennis Club Municipal de Goussainville</span>
      </div>
    </footer>
  );
}
