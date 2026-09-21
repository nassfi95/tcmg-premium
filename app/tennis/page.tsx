'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';

const sections = [
  {
    title: 'Mini Tennis',
    age: '3 à 6 ans',
    text: 'Premiers échanges, motricité et découverte du tennis à travers des jeux adaptés.',
  },
  {
    title: 'Jeunes',
    age: '7 à 17 ans',
    text: 'Apprentissage technique, progression par niveau et préparation à la compétition.',
  },
  {
    title: 'Adultes',
    age: 'Débutants à confirmés',
    text: 'Cours collectifs, perfectionnement et tennis loisir dans une ambiance conviviale.',
  },
];

export default function TennisPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="relative overflow-hidden bg-[#062a59] px-5 py-28 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
          </div>

          <div className="mx-auto max-w-7xl relative">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="uppercase tracking-[0.3em] text-[#72d68b] text-sm">
                Tennis
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl">
                Une pratique
                <br />
                pour chaque joueur.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Du mini-tennis aux cours adultes, le TCMG accompagne chacun dans
                sa progression avec des entraînements adaptés à tous les niveaux.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              {sections.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg"
                >
                  <span className="text-sm font-bold text-[#2FA84F]">
                    {item.age}
                  </span>

                  <h2 className="mt-3 text-2xl font-black text-[#062a59]">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black text-[#062a59]">
                Pourquoi choisir le TCMG ?
              </h2>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li>🎾 Encadrement par une équipe passionnée.</li>
                <li>🏆 Accompagnement vers la compétition.</li>
                <li>👨‍👩‍👧 Ambiance familiale et conviviale.</li>
                <li>📍 Complexe Maurice Baquet à Goussainville.</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
                alt="Entraînement de tennis"
                className="h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#062a59] p-10 text-center text-white md:p-16">
            <p className="uppercase tracking-[0.3em] text-[#72d68b] text-sm">
              Rejoignez-nous
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Prêt à entrer sur le court ?
            </h2>

            <p className="mt-6 text-white/75 leading-8">
              Contactez-nous pour découvrir les créneaux disponibles et trouver
              le groupe qui vous correspond.
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
