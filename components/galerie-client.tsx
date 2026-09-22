'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Photo = {
  id: string;
  url: string;
  category: string;
  name: string;
};

export default function GalerieClient({
  photos,
}: {
  photos: Photo[];
}) {
  const [selected, setSelected] = useState<Photo | null>(null);

  if (photos.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 p-14 text-center">
        <p className="text-2xl">📸</p>
        <h2 className="mt-4 text-2xl font-black text-[#062a59]">
          La galerie est vide
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(photo)}
            className="group overflow-hidden rounded-3xl bg-white shadow-xl text-left"
          >
            <img
              src={photo.url}
              alt={photo.name}
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="p-5">
              <p className="font-semibold text-[#062a59]">
                {photo.category}
              </p>

              <p className="mt-1 text-sm text-slate-500 truncate">
                {photo.name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl overflow-hidden rounded-3xl bg-white"
          >
            <img
              src={selected.url}
              alt={selected.name}
              className="max-h-[80vh] w-full object-contain"
            />

            <div className="flex items-center justify-between p-5">
              <div>
                <p className="font-semibold text-[#062a59]">
                  {selected.category}
                </p>

                <p className="text-sm text-slate-500">
                  {selected.name}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="rounded-full bg-slate-100 px-4 py-2 font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
