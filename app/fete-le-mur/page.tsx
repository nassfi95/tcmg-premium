'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';

const actions = [
  {
    title: 'Olympiades',
    text: 'Une journée sportive mêlant tennis, parcours, défis et remise de médailles.',
    emoji: '🏅',
  },
  {
    title: 'Jardinage',
    text: 'Découvrir la nature en cultivant et en prenant soin d’un jardin partagé.',
    emoji: '🌱',
  },
  {
    title: 'Cuisine',
    text: 'Des ateliers pour apprendre, partager et cuisiner ensemble.',
    emoji: '🍎',
  },
  {
    title: 'Sorties',
    text: 'Découvertes culturelles, activités en plein air et moments de convivialité.',
    emoji: '🎒',
  },
  {
    title: 'Halloween',
    text: 'Animations, déguisements et tennis dans une ambiance festive.',
    emoji: '🎃',
  },
  {
    title: 'Téléthon',
    text: 'Le club se mobilise pour des actions solidaires et des événements caritatifs.',
    emoji: '❤️',
  },
];

export default function FeteLeMurPage() {
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
                Fête le Mur
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl">
                Bien plus
                <br />
                que du tennis.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Au TCMG, Fête le Mur utilise le sport comme un outil d’éducation,
                de découverte et de partage pour les enfants et les familles.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Notre mission
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#062a59]">
                Grandir ensemble.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                À travers le tennis mais aussi des activités éducatives et
                culturelles, les enfants développent confiance, autonomie et
                esprit d’équipe dans un environnement bienveillant.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
                alt="Fête le Mur"
                className="h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
              Nos actions
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#062a59]">
              Une année riche en projets.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {actions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] bg-white p-8 shadow-lg"
                >
                  <div className="text-4xl">{action.emoji}</div>

                  <h3 className="mt-5 text-2xl font-black text-[#062a59]">
                    {action.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {action.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#062a59] text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
                  Chaque enfant compte
                </p>

                <h2 className="mt-4 text-4xl font-black md:text-5xl">
                  Construire des souvenirs.
                </h2>

                <p className="mt-6 leading-8 text-white/75">
                  Chaque activité devient une occasion de découvrir, partager,
                  apprendre et créer des liens durables.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
                >
                  Nous rejoindre
                </Link>
              </div>

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                  alt="Enfants Fête le Mur"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
              À venir
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#062a59]">
              Bientôt vos vraies photos.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Cette page est prête à accueillir les photos de vos Olympiades,
              ateliers cuisine, jardinage, Halloween, Téléthon et sorties,
              directement depuis l'espace administrateur.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
