'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';
import { useAdminData } from '@/components/admin-provider';

const demoNews = [
  {
    id: '1',
    title: 'Reprise des entraînements',
    date: 'Septembre 2026',
    description: 'Les cours reprennent au Complexe Maurice Baquet avec les nouveaux groupes.',
    image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    title: 'Journée Fête le Mur',
    date: 'Événement',
    description: 'Olympiades, jeux et animations pour les enfants du club.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ActualitesPage() {
  const admin = useAdminData();

  const news =
    admin.events.length > 0
      ? admin.events.map((event, i) => ({
          id: event.id,
          title: event.title,
          date: event.date,
          description: event.description,
          image: demoNews[i % demoNews.length].image,
        }))
      : demoNews;

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
                Actualités
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl">
                Toute la vie
                <br />
                du TCMG.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Tournois, événements, Fête le Mur et informations importantes :
                retrouvez toute l'actualité du club.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {news.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-[2rem] bg-white shadow-xl"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="p-8">
                    <p className="text-sm font-bold text-[#2FA84F]">
                      {article.date}
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-[#062a59]">
                      {article.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {article.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#062a59] p-10 text-center text-white md:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Ne manquez rien
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Restez informé.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Les nouvelles publications pourront être ajoutées directement
              depuis l'espace administrateur et apparaîtront ici automatiquement.
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
