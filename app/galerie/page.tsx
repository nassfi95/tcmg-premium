'use client';

import { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/site-shell';
import { motion } from 'framer-motion';

type Photo = {
  id: string;
  url: string;
  category: string;
  name: string;
};

export default function GaleriePage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/gallery', { cache: 'no-store' });
      const data = await res.json();
      setPhotos(data.photos || []);
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
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            {photos.length === 0 ? (
              <p>Aucune photo.</p>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {photos.map((photo, i) => (
                  <motion.button
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => setSelected(photo)}
                    className="overflow-hidden rounded-3xl shadow-xl text-left"
                  >
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="h-72 w-full object-cover"
                    />

                    <div className="p-5">
                      <p className="font-bold text-[#062a59]">
                        {photo.category}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
        >
          <img
            src={selected.url}
            alt={selected.name}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
