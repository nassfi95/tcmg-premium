'use client';

import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/site-shell';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Complexe+Maurice+Baquet+All%C3%A9e+du+5+D%C3%A9cembre+95190+Goussainville';

export default function ContactPage() {
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
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Venez nous
                <br />
                rencontrer.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Une question, une inscription ou envie de découvrir le club ?
                Nous serons ravis de vous accueillir au Complexe Maurice Baquet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INFOS */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr]">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                Envoyez-nous un message
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#062a59]">
                Nous vous répondrons rapidement.
              </h2>

              <form className="mt-8 space-y-5">
                <input
                  placeholder="Nom et prénom"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#0057B8]"
                />

                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#0057B8]"
                />

                <input
                  placeholder="Téléphone"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#0057B8]"
                />

                <textarea
                  rows={5}
                  placeholder="Votre message"
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#0057B8]"
                />

                <button
                  type="button"
                  className="w-full rounded-full bg-[#2FA84F] px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
                >
                  Envoyer
                </button>
              </form>
            </motion.div>

            {/* Carte infos */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <iframe
                  src="https://www.google.com/maps?q=Complexe+Maurice+Baquet+Goussainville&output=embed"
                  className="h-[340px] w-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="rounded-[2rem] bg-[#062a59] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-black">
                  Tennis Club Municipal de Goussainville
                </h3>

                <div className="mt-6 space-y-5 text-white/80">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#72d68b]">
                      Adresse
                    </p>

                    <p className="mt-2">
                      Complexe Maurice Baquet
                      <br />
                      Allée du 5 Décembre
                      <br />
                      95190 Goussainville
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#72d68b]">
                      Téléphone
                    </p>

                    <a href="tel:+33139880000" className="mt-2 block">
                      01 39 88 00 00
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#72d68b]">
                      Horaires
                    </p>

                    <p className="mt-2">
                      Lundi – Vendredi : 9h – 22h
                      <br />
                      Samedi : 9h – 20h
                      <br />
                      Dimanche : 9h – 18h
                    </p>
                  </div>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#2FA84F] px-7 py-4 font-bold transition hover:scale-105"
                >
                  Itinéraire
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Réseaux */}
        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
              Suivez-nous
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#062a59] md:text-6xl">
              Toute la vie du club en direct.
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/tcm_goussainville/"
                target="_blank"
                className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold transition hover:border-[#E4405F] hover:text-[#E4405F]"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold transition hover:border-black hover:text-black"
              >
                TikTok
              </a>

              <a
                href="https://www.facebook.com/ftcmg/"
                target="_blank"
                className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold transition hover:border-[#1877F2] hover:text-[#1877F2]"
              >
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
