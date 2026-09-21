'use client';

import Link from 'next/link';
import { Header, Footer } from '@/components/site-shell';
import { useAdminData } from '@/components/admin-provider';

const cards = [
  { title: 'Galerie', href: '/admin/galerie', color: '#2FA84F', icon: '📸' },
  { title: 'Actualités', href: '/admin/actualites', color: '#0057B8', icon: '📰' },
  { title: 'Boutique', href: '/admin/boutique', color: '#2FA84F', icon: '🛍️' },
  { title: 'Partenaires', href: '/admin/partenaires', color: '#0057B8', icon: '🤝' },
  { title: 'Événements', href: '/admin/evenements', color: '#2FA84F', icon: '📅' },
  { title: 'Entraîneurs', href: '/admin/entraineurs', color: '#0057B8', icon: '🎾' },
];

export default function AdminDashboard() {
  const admin = useAdminData();

  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-[#062a59] px-5 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#72d68b]">
              Espace administrateur
            </p>

            <h1 className="mt-4 text-5xl font-black md:text-7xl">
              Tableau de bord
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Gérez le contenu du site directement depuis votre téléphone.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-[#edf6f0] p-8">
                <p className="text-sm text-slate-500">Photos</p>
                <p className="mt-3 text-5xl font-black text-[#062a59]">
                  {admin.photos.length}
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#edf6f0] p-8">
                <p className="text-sm text-slate-500">Actualités</p>
                <p className="mt-3 text-5xl font-black text-[#062a59]">
                  {admin.events.length}
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#edf6f0] p-8">
                <p className="text-sm text-slate-500">Produits</p>
                <p className="mt-3 text-5xl font-black text-[#062a59]">
                  {admin.products.length}
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                    style={{ background: `${card.color}20` }}
                  >
                    {card.icon}
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-[#062a59]">
                    {card.title}
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Gérer cette rubrique.
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#0057B8] transition group-hover:translate-x-2">
                    Ouvrir →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
