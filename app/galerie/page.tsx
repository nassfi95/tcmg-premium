'use client';

import { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/site-shell';
import GalerieClient from '@/components/galerie-client';

type Photo = {
  id: string;
  url: string;
  category: string;
  name: string;
};

export default function GaleriePage() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/gallery?ts=' + Date.now(), {
          cache: 'no-store',
        });

        const data = await res.json();
        setPhotos(data.photos || []);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-[#062a59] px-5 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Galerie
            </p>

            <h1 className="mt-4 text-5xl font-black md:text-7xl">
              Les meilleurs moments du club.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Tournois, entraînements, Fête le Mur et événements du TCMG.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <GalerieClient photos={photos} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
