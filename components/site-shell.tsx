'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  ['Accueil', '/'],
  ['Le club', '/le-club'],
  ['Tennis', '/tennis'],
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
        src="/Tableau-de-32.pdf.png"
        alt="Logo TCMG"
        width={60}
        height={60}
        priority
        className="h-[60px] w-[60px] rounded-2xl object-cover shadow-xl"
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Logo dark={scrolled} />

          <nav
            className={`hidden lg:flex items-center gap-7 text-sm font-semibold ${
              scrolled ? 'text-[#062a59]' : 'text-white'
            }`}
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-[#2FA84F]"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-full bg-[#2FA84F] px-5 py-3 text-white transition hover:scale-105 hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`grid h-12 w-12 place-items-center rounded-full border transition ${
              scrolled
                ? 'border-[#0057B8] text-[#0057B8]'
                : 'border-white/40 text-white'
            }`}
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 z-[100] bg-[#041C44]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-8 py-10 text-white">
              <div className="flex items-center justify-between">
                <Logo />

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
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/10 py-4 text-3xl font-black"
                    >
                      {label}
                      <span className="opacity-40">↗</span>
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-5 rounded-full bg-[#2FA84F] px-6 py-4 text-center font-bold"
                >
                  Nous contacter
                </Link>
              </nav>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#72d68b]">
                  Suivez-nous
                </p>

                <div className="mt-4 flex gap-6">
                  <a href="https://www.instagram.com/tcm_goussainville/" target="_blank">Instagram</a>
                  <a href="https://www.tiktok.com" target="_blank">TikTok</a>
                  <a href="https://www.facebook.com/ftcmg/" target="_blank">Facebook</a>
                </div>
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
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      <a
        href="https://www.instagram.com/tcm_goussainville/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#E4405F]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#062a59] group-hover:text-white" fill="currentColor">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 2a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      </a>

      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#062a59] group-hover:text-white" fill="currentColor">
          <path d="M19 8.3a5.7 5.7 0 01-3.3-1V15a5 5 0 11-5-5c.3 0 .6 0 .9.1v2.6a2.5 2.5 0 101.6 2.3V2h2.5a4 4 0 003.3 3.8v2.5z"/>
        </svg>
      </a>

      <a
        href="https://www.facebook.com/ftcmg/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1877F2]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#062a59] group-hover:text-white" fill="currentColor">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V5a22 22 0 00-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4V11H8v3h2.8v8h2.7z"/>
        </svg>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#062a59] px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <Logo />

          <p className="mt-6 max-w-sm leading-7 text-white/70">
            Le tennis comme point de départ. À Goussainville, on joue, on apprend et on avance ensemble.
          </p>

          <div className="mt-6 flex gap-5 text-sm">
            <a href="https://www.instagram.com/tcm_goussainville/" className="hover:text-[#72d68b]">Instagram</a>
            <a href="https://www.tiktok.com" className="hover:text-[#72d68b]">TikTok</a>
            <a href="https://www.facebook.com/ftcmg/" className="hover:text-[#72d68b]">Facebook</a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#72d68b]">
            Nous trouver
          </p>

          <div className="mt-4 space-y-2 text-white/80">
            <p>Complexe Maurice Baquet</p>
            <p>Allée du 5 Décembre</p>
            <p>95190 Goussainville</p>
            <p>01 39 88 00 00</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#72d68b]">
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

      <div className="mx-auto mt-14 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50">
        <span>© 2026 TCMG</span>
        <span>Tennis Club Municipal de Goussainville</span>
      </div>
    </footer>
  );
}
