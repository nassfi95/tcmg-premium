'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/site-shell';

const teams = [
  { name: 'Équipe 1 Hommes', level: 'Championnat Départemental' },
  { name: 'Équipe 2 Hommes', level: 'Compétition FFT' },
  { name: 'Équipe Femmes', level: 'Championnat Départemental' },
  { name: 'Jeunes', level: 'Compétitions FFT Jeunes' },
];

export default function CompetitionPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="relative overflow-hidden bg-[#062a59] px-5 py-28 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
                Compétition
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl">
                Défendre
                <br />
                les couleurs du club.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Championnats par équipes, tournois et compétitions FFT rythment
                la saison du TCMG.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                  Tournois
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#062a59]">
                  Tableau de 32 joueurs
                </h2>
              </div>

              <Link
                href="/contact"
                className="rounded-full border border-[#0057B8] px-6 py-3 font-semibold text-[#0057B8] hover:bg-[#0057B8] hover:text-white"
              >
                Organiser un tournoi
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
              <Image
                src="/Tableau-de-32.pdf.png"
                alt="Tableau de 32 joueurs"
                width={1200}
                height={1600}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
              Équipes
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#062a59]">
              Les équipes du TCMG
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {teams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] bg-white p-8 shadow-lg"
                >
                  <span className="text-sm font-bold text-[#2FA84F]">
                    {team.level}
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-[#062a59]">
                    {team.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80"
                alt="Match de compétition"
                className="h-[430px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Esprit d'équipe
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#062a59]">
                Jouer ensemble.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Au-delà des résultats, les rencontres sont des moments de
                partage où les joueurs représentent le club avec engagement et
                convivialité.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-7 py-4 font-bold text-white transition hover:scale-105"
              >
                Rejoindre une équipe
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#062a59] px-5 py-24 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Calendrier
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Les prochains rendez-vous
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Les résultats, convocations et dates des rencontres pourront être
              mis à jour directement depuis l'espace administrateur.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
