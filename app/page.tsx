'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Arrow } from '@/components/icons';
import { Footer, Header } from '@/components/site-shell';
import { stats } from '@/content/site';

const offers = [
  {
    number: '01',
    title: 'École de tennis',
    text: 'Dès 3 ans, une progression adaptée pour apprendre, jouer et prendre confiance.',
    href: '/tennis',
  },
  {
    number: '02',
    title: 'Cours adultes',
    text: 'Débutants, loisirs ou perfectionnement : chacun trouve son rythme.',
    href: '/tennis',
  },
  {
    number: '03',
    title: 'Fête le Mur',
    text: 'Le tennis comme outil d’éducation, de découverte et de partage.',
    href: '/fete-le-mur',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
];

export default function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      <Header />

      <main>
        <section className="relative isolate min-h-screen overflow-hidden text-white">
          <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_20%_20%,rgba(47,168,79,.18),transparent_30%),linear-gradient(120deg,#00143A_0%,#0048A8_55%,#0066D6_100%)]" />

          <div className="absolute inset-0 -z-20 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
          </div>

          <div className="absolute -right-24 top-28 -z-10 h-72 w-72 rounded-full bg-[#2FA84F]/20 blur-3xl" />
          <div className="absolute -left-24 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#0066D6]/30 blur-3xl" />

          <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 pb-16">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <p className="mb-5 tracking-[0.35em] text-[#72d68b] uppercase text-sm font-semibold">
                Tennis Club Municipal de Goussainville
              </p>

              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                Tennis Club
                <br />
                <span className="text-[#72d68b] italic font-medium">
                  de Goussainville.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
                Depuis 1983, le TCMG réunit école de tennis, compétition,
                pratique loisirs et Fête le Mur dans une ambiance familiale
                et ambitieuse.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/le-club" className="button button-green">
                  Découvrir le club <Arrow />
                </Link>

                <Link href="/contact" className="button button-ghost">
                  Nous contacter
                </Link>

                <a
                  href="https://tenup.fft.fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-ghost"
                >
                  Réserver un terrain
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white border-y border-slate-100 px-5 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-black text-[#0057B8]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-[#2FA84F]">LE CLUB</p>

            <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="headline">
                  Une ambiance familiale.
                  <br />
                  Une ambition sportive.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Le TCMG accueille enfants, adultes, joueurs loisirs et
                  compétiteurs dans des installations modernes, avec un
                  accompagnement adapté à chaque niveau.
                </p>

                <Link
                  href="/le-club"
                  className="text-link mt-8 text-[#0057B8]"
                >
                  En savoir plus <Arrow />
                </Link>
              </div>

              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80"
                  alt="Court de tennis"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-[#2FA84F]">NOS PRATIQUES</p>

            <h2 className="headline mt-4">
              Une place pour chaque joueur.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {offers.map((offer) => (
                <motion.article
                  key={offer.number}
                  whileHover={reduced ? undefined : { y: -8 }}
                  className="rounded-[2rem] bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <span className="text-4xl font-black text-[#2FA84F]">
                    {offer.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#062a59]">
                    {offer.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {offer.text}
                  </p>

                  <Link
                    href={offer.href}
                    className="text-link mt-8 text-[#0057B8]"
                  >
                    Explorer <Arrow />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="eyebrow text-[#2FA84F]">GALERIE</p>
                <h2 className="headline mt-4">
                  L'esprit du club en images.
                </h2>
              </div>

              <Link
                href="/galerie"
                className="button button-ghost text-[#0057B8]"
              >
                Voir toute la galerie
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={reduced ? undefined : { scale: 1.03 }}
                  className="overflow-hidden rounded-[1.8rem]"
                >
                  <img
                    src={image}
                    alt="Galerie TCMG"
                    className="h-80 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0057B8] px-5 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-[#72d68b]">FÊTE LE MUR</p>

              <h2 className="headline mt-4">
                Bien plus qu'un terrain de jeu.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/80">
                Activités nature, jardinage, cuisine, sorties, jeux collectifs
                et découvertes prolongent l'expérience bien au-delà du court.
              </p>

              <Link
                href="/fete-le-mur"
                className="button button-green mt-8"
              >
                Découvrir Fête le Mur <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#062a59] p-10 text-white md:p-16">
            <p className="eyebrow text-[#72d68b]">
              REJOIGNEZ LE CLUB
            </p>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <div>
                <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
                  Votre prochain
                  <br />
                  échange commence ici.
                </h2>

                <p className="mt-6 max-w-xl text-white/75">
                  Envie de découvrir le club, de prendre un cours ou de
                  rejoindre une équipe ? Contactez-nous dès aujourd'hui.
                </p>
              </div>

              <Link href="/contact" className="button button-green">
                Nous rejoindre <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
