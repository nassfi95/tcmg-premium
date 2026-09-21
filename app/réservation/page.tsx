'use client';

import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/site-shell';

const TENUP_URL = 'https://tenup.fft.fr/';

const courts = [
  {
    name: 'Court couvert',
    type: 'Résine',
    info: 'Disponible toute l’année.',
    image:
      'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Court extérieur',
    type: 'Plein air',
    info: 'Idéal dès les beaux jours.',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ReservationPage() {
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
                Réservation
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Réservez
                <br />
                votre terrain.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Réservez votre court rapidement via Ten'Up et retrouvez les
                informations utiles avant de jouer.
              </p>

              <a
                href={TENUP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
              >
                Réserver sur Ten'Up →
              </a>
            </motion.div>
          </div>
        </section>

        {/* MÉTÉO */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-[#edf6f0] p-8">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#2FA84F]">
                    Conditions du jour
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-[#062a59]">
                    Bonnes conditions pour jouer.
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-5xl">☀️</p>
                  <p className="mt-2 text-lg font-bold text-[#0057B8]">22°C</p>
                  <p className="text-slate-600">Vent faible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TERRAINS */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Les terrains
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#062a59]">
                Choisissez votre court.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {courts.map((court, index) => (
                <motion.a
                  key={court.name}
                  href={TENUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={court.image}
                      alt={court.name}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#2FA84F]">
                      {court.type}
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-[#062a59]">
                      {court.name}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {court.info}
                    </p>

                    <div className="mt-6 inline-flex rounded-full bg-[#2FA84F] px-5 py-3 font-bold text-white transition group-hover:scale-105">
                      Réserver →
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* HORAIRES */}
        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Horaires
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#062a59]">
                Quand jouer ?
              </h2>

              <div className="mt-8 space-y-4 text-slate-700">
                <div className="flex justify-between rounded-xl bg-white p-4">
                  <span>Lundi – Vendredi</span>
                  <strong>9h – 22h</strong>
                </div>

                <div className="flex justify-between rounded-xl bg-white p-4">
                  <span>Samedi</span>
                  <strong>9h – 20h</strong>
                </div>

                <div className="flex justify-between rounded-xl bg-white p-4">
                  <span>Dimanche</span>
                  <strong>9h – 18h</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#062a59] p-10 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
                Réservation officielle
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Toutes les réservations passent par Ten'Up.
              </h3>

              <p className="mt-6 leading-8 text-white/75">
                Consultez les disponibilités en temps réel et réservez votre
                terrain en quelques clics.
              </p>

              <a
                href={TENUP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
              >
                Ouvrir Ten'Up
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
