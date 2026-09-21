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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  } else {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }

  return () => {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };
}, [open]);

  const previews = [
    "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Logo dark={scrolled} />

          <button
            onClick={() => setOpen(true)}
            className={`flex h-12 w-12 items-center justify-center rounded-full border ${
              scrolled
                ? 'border-[#0057B8] text-[#0057B8]'
                : 'border-white/40 text-white'
            }`}
          >
            ☰
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .35 }}
            className="fixed inset-0 z-[100] bg-[#041C44]/96 backdrop-blur-2xl"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-8 py-8 text-white">

              <div className="flex items-center justify-between">
                <Logo />

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 p-3 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1fr_.85fr]">

                <nav className="flex flex-col gap-2">
                  {links.map(([label, href], i) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -35 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * .05 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        onMouseEnter={() => setActive(i)}
                        className="group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-black md:text-5xl"
                      >
                        <span className="flex items-center gap-5">
                          <span className="text-base text-white/30">
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          {label}
                        </span>

                        <span className="translate-x-0 opacity-30 transition group-hover:translate-x-2 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.35 }}
  className="fixed inset-0 z-[100] overflow-y-auto bg-[#041C44]/95 backdrop-blur-3xl"
>
  <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-8 py-8 text-white">

    <div className="flex items-center justify-between">
      <Logo />

      <button
        onClick={() => setOpen(false)}
        className="rounded-full border border-white/20 p-3 text-2xl transition hover:rotate-90 hover:bg-white/10"
      >
        ✕
      </button>
    </div>

    <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1fr_.9fr]">

      <nav className="flex flex-col">
        {links.map(([label, href], i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.06,
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <Link
              href={href}
              onClick={() => setOpen(false)}
              onMouseEnter={() => setActive(i)}
              className="group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-black transition md:text-5xl"
            >
              <span className="flex items-center gap-5">
                <span className="text-base text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="transition group-hover:translate-x-3">
                  {label}
                </span>
              </span>

              <span className="translate-x-0 text-white/30 transition-all group-hover:translate-x-3 group-hover:text-[#72d68b]">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="hidden overflow-hidden rounded-[2.2rem] shadow-2xl lg:block"
      >
        <img
          src={previews[active]}
          alt="Aperçu"
          className="h-[560px] w-full object-cover transition duration-500"
        />
      </motion.div>
    </div>

    <div className="border-t border-white/10 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-6">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#72d68b]">
            Suivez-nous
          </p>

          <div className="mt-3 flex gap-6 text-white/70">
            <a href="https://www.instagram.com/tcm_goussainville/" target="_blank">
              Instagram
            </a>

            <a href="https://www.tiktok.com" target="_blank">
              TikTok
            </a>

            <a href="https://www.facebook.com/ftcmg/" target="_blank">
              Facebook
            </a>
          </div>
        </div>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="rounded-full bg-[#2FA84F] px-7 py-4 font-bold transition hover:scale-105 hover:shadow-xl"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  </div>
</motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#72d68b]">
                    Suivez-nous
                  </p>

                  <div className="mt-3 flex gap-6 text-white/70">
                    <a href="https://www.instagram.com/tcm_goussainville/">Instagram</a>
                    <a href="https://www.tiktok.com">TikTok</a>
                    <a href="https://www.facebook.com/ftcmg/">Facebook</a>
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#2FA84F] px-6 py-4 font-bold"
                >
                  Nous contacter
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
