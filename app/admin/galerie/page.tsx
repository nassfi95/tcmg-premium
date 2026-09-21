'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';

type Photo = {
  id: string;
  url: string;
  caption: string;
};

type AdminData = {
  photos: Photo[];
  events: any[];
  products: any[];
};

export default function AdminGalerie() {
  const [data, setData] = useState<AdminData>({
    photos: [],
    events: [],
    products: [],
  });

  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then(setData);
  }, []);

  async function upload(file: File) {
    setUploading(true);

    const fd = new FormData();
    fd.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: fd,
    });

    const json = await res.json();

    if (json.url) {
      const next = {
        ...data,
        photos: [
          {
            id: crypto.randomUUID(),
            url: json.url,
            caption,
          },
          ...data.photos,
        ],
      };

      await fetch('/api/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(next),
      });

      setData(next);
      setCaption('');
    }

    setUploading(false);
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-[#062a59] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <Link href="/admin" className="text-[#72d68b]">
              ← Retour
            </Link>

            <h1 className="mt-4 text-5xl font-black">Galerie</h1>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <input
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Légende"
                className="w-full rounded-2xl border px-5 py-4"
              />

              <label className="mt-6 flex cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-[#2FA84F] bg-[#edf6f0] p-10">
                <div className="text-center">
                  <p className="text-4xl">📸</p>
                  <p className="mt-3 font-bold">
                    {uploading ? 'Envoi...' : 'Choisir une photo'}
                  </p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      upload(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {data.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg"
                >
                  <img
                    src={photo.url}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-4">
                    <p>{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
