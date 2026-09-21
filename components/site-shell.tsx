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
        alt="TCMG"
        width={58}
        height={58}
        priority
        className="h-[58px] w-[58px] rounded-2xl object-cover shadow-lg"
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
            ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl'
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
              className="rounded-full bg-[#2FA84F] px-5 py-3 text-white transition hover:opacity-90"
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
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${
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
                  className="rounded-full border border-white/30 p-3"
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
                  className="mt-4 rounded-full bg-[#2FA84F] px-6 py-4 text-center font-bold"
                >
                  Nous contacter
                </Link>
              </nav>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#72d68b]">
                  Suivez-nous
                </p>

                <div className="mt-3 flex gap-6 text-white/80">
                  <a href="https://www.instagram.com" target="_blank">
                    Instagram
                  </a>
                  <a href="https://www.tiktok.com" target="_blank">
                    TikTok
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#062a59] px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <Logo />

          <p className="mt-6 max-w-sm leading-7 text-white/70">
            Le tennis comme point de départ. À Goussainville, on joue, on
            apprend et on avance ensemble.
          </p>

          <div className="mt-6 flex gap-5 text-sm">
            <a href="https://www.instagram.com" className="hover:text-[#72d68b]">
              Instagram
            </a>

            <a href="https://www.tiktok.com" className="hover:text-[#72d68b]">
              TikTok
            </a>

            <a href="https://www.facebook.com" className="hover:text-[#72d68b]">
              Facebook
            </a>
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
