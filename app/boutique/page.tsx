'use client';

import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/site-shell';

const SHOP_URL = 'https://bs.ms/BzIhMl';

const products = [
  {
    name: 'Sweat à capuche TCMG',
    category: 'Club',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'T-shirt Performance TCMG',
    category: 'Club',
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Polo TCMG',
    category: 'Club',
    image:
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Casquette TCMG',
    category: 'Accessoire',
    image:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Sac de sport TCMG',
    category: 'Accessoire',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Veste Club',
    category: 'Club',
    image:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function BoutiquePage() {
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
                Boutique officielle
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Portez les couleurs
                <br />
                du TCMG.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Retrouvez l'ensemble des vêtements et accessoires officiels du
                Tennis Club Municipal de Goussainville.
              </p>

              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
              >
                Accéder à la boutique →
              </a>
            </motion.div>
          </div>
        </section>

        {/* PRODUITS */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#2FA84F]">
                  Collection officielle
                </p>

                <h2 className="mt-3 text-4xl font-black text-[#062a59]">
                  Les articles du club
                </h2>
              </div>

              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#0057B8] px-5 py-3 font-semibold text-[#0057B8] transition hover:bg-[#0057B8] hover:text-white"
              >
                Voir toute la boutique
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <motion.a
                  key={product.name}
                  href={SHOP_URL}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#2FA84F]">
                      {product.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-[#062a59]">
                      {product.name}
                    </h3>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-semibold text-[#0057B8]">
                        Disponible sur la boutique
                      </span>

                      <span className="rounded-full bg-[#2FA84F] px-4 py-2 text-sm font-bold text-white transition group-hover:scale-105">
                        Commander
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#edf6f0] px-5 py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#062a59] p-10 text-center text-white md:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Boutique officielle TCMG
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Toute la collection est en ligne.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Découvrez tous les modèles, les tailles disponibles et passez
              commande directement sur la boutique officielle.
            </p>

            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#2FA84F] px-8 py-4 font-bold transition hover:scale-105"
            >
              Ouvrir la boutique officielle
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
