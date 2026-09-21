'use client';

import { useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then(setData);
  }, []);

  async function upload(file: File) {
    try {
      setUploading(true);

      const fd = new FormData();
      fd.append('file', file);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
      });

      if (!uploadRes.ok) {
        throw new Error("Échec de l'envoi de l'image.");
      }

      const uploadJson = await uploadRes.json();

      const nextData = {
        ...data,
        photos: [
          {
            id: crypto.randomUUID(),
            url: uploadJson.url,
            caption,
          },
          ...data.photos,
        ],
      };

      const saveRes = await fetch('/api/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nextData),
      });

      if (!saveRes.ok) {
        throw new Error("Échec de l'enregistrement.");
      }

      setData(nextData);
      setCaption('');
      if (inputRef.current) inputRef.current.value = '';
      alert('Photo publiée !');
    } catch (e: any) {
      alert(e.message || 'Erreur.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-[#062a59] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <Link href="/admin" className="text-[#72d68b]">
              ← Retour au tableau de bord
            </Link>

            <h1 className="mt-4 text-5xl font-black">Galerie</h1>
            <p className="mt-3 text-white/75">
              Les photos ajoutées ici apparaîtront automatiquement sur le site.
            </p>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <input
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Légende de la photo"
                className="w-full rounded-2xl border border-slate-200 px-5 py-4"
              />

              <label className="mt-6 flex cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-[#2FA84F] bg-[#edf6f0] p-10 hover:bg-[#dff0e5]">
                <div className="text-center">
                  <p className="text-4xl">📸</p>

                  <p className="mt-3 font-bold text-[#062a59]">
                    {uploading ? 'Envoi en cours...' : 'Choisir une photo'}
                  </p>

                  <p className="text-sm text-slate-500">
                    Depuis votre iPhone
                  </p>
                </div>

                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) upload(file);
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
                    alt={photo.caption}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-4">
                    <p className="font-semibold text-[#062a59]">
                      {photo.caption}
                    </p>
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
