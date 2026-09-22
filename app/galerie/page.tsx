import { Header, Footer } from '@/components/site-shell';
import { readAdminData } from '@/lib/admin-store';
import GalerieClient from '@/components/galerie-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function GaleriePage() {
  const data = await readAdminData();

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
            <div className="mb-6 rounded-2xl bg-green-100 p-4 text-black">
  <p>Nombre de photos : {data.photos.length}</p>
</div>

<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
  {data.photos.map((photo) => (
    <div
      key={photo.id}
      className="overflow-hidden rounded-3xl bg-white shadow-xl"
    >
      <img
        src={photo.url}
        alt={photo.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-5">
        <p className="font-semibold text-[#062a59]">{photo.category}</p>
        <p className="text-sm text-slate-500">{photo.name}</p>
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
