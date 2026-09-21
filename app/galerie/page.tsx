'use client';

import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/site-shell';
import { useAdminData } from '@/components/admin-provider';

const demoImages = [
  "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505666287802-931dc83a6f14?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
];

export default function GaleriePage() {
  const admin = useAdminData();

  const images =
    admin.photos.length > 0
      ? admin.photos.map((photo) => photo.url)
      : demoImages;

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#062a59] px-5 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,168,79,.18),transparent_30%)]" />
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#2FA84F]/20 blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#0057B8]/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
                Galerie
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Les plus beaux
                <br />
                moments du club.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Entraînements, compétitions, Fête le Mur et événements : toute
                la vie du TCMG en images.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MOSAÏQUE */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                  Nos souvenirs
                </p>

                <h2 className="mt-3 text-4xl font-black text-[#062a59]">
                  Une galerie vivante.
                </h2>
              </div>

              <div className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600">
                {images.length} photos
              </div>
            </div>

            <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative mb-4 cursor-pointer overflow-hidden rounded-[1.8rem] break-inside-avoid shadow-xl"
                >
                  <img
                    src={image}
                    alt={`Galerie TCMG ${index + 1}`}
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 translate-y-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#72d68b]">
                      TCMG
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      Photo {index + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#062a59] p-10 text-center text-white md:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Galerie évolutive
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Chaque photo raconte une histoire.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Les nouvelles photos ajoutées depuis l'espace administrateur
              apparaîtront automatiquement ici.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
