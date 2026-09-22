import { Header, Footer } from '@/components/site-shell';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getPhotos() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/gallery`, {
    cache: 'no-store',
  });

  if (!res.ok) return { photos: [] };

  return res.json();
}

export default async function GaleriePage() {
  const { photos } = await getPhotos();

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
            {photos.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-14 text-center">
                Aucune photo.
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {photos.map((photo: any) => (
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
                      <p className="font-semibold text-[#062a59]">
                        {photo.category}
                      </p>

                      <p className="text-sm text-slate-500">
                        {photo.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
