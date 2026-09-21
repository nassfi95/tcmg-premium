'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';

const partners = [
  {
    name: 'Babolat',
    type: 'Équipementier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Babolat_logo.svg',
  },
  {
    name: 'Dunlop',
    type: 'Équipementier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Dunlop_logo.svg',
  },
  {
    name: 'Prince',
    type: 'Équipementier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Prince_logo.svg',
  },
  {
    name: 'Artengo',
    type: 'Équipementier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Decathlon_Logo.svg',
  },
  {
    name: 'Fête le Mur',
    type: 'Association',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/0/02/F%C3%AAte_le_Mur_logo.png',
  },
  {
    name: 'Ville de Goussainville',
    type: 'Institution',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Logo_Ville_Goussainville.svg',
  },
];

export default function PartenairesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#062a59] px-5 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,168,79,.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
                Partenaires
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Ils font grandir
                <br />
                le TCMG.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Nos partenaires soutiennent les projets du club, les compétitions
                et les actions menées auprès des jeunes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Nos soutiens
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#062a59]">
                Merci à nos partenaires.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg"
                >
                  <div className="flex h-24 items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-[150px] object-contain"
                    />
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#2FA84F]">
                    {partner.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#062a59] text-center">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#062a59] p-10 text-center text-white md:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Devenir partenaire
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Construisons un projet ensemble.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Entreprises, associations et institutions peuvent accompagner le
              développement du Tennis Club Municipal de Goussainville.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
