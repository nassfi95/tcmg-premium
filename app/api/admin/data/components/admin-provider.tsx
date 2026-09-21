'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type AdminData = {
  events: {
    id: string;
    title: string;
    date: string;
    description: string;
  }[];
  schedules: string;
  prices: string;
  products: {
    id: string;
    name: string;
    price: string;
    stock: string;
  }[];
  contact: {
    phone: string;
    email: string;
    address: string;
    instagram: string;
    facebook: string;
  };
  photos: {
    id: string;
    url: string;
    category: string;
    name: string;
  }[];
};

const defaults: AdminData = {
  events: [],
  schedules: '',
  prices: '',
  products: [],
  contact: {
    phone: '',
    email: '',
    address: '',
    instagram: '',
    facebook: '',
  },
  photos: [],
};

const AdminContext = createContext<AdminData>(defaults);

export function AdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(defaults);

  useEffect(() => {
    fetch('/api/admin/data', { cache: 'no-store' })
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  return (
    <AdminContext.Provider value={data}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminData() {
  return useContext(AdminContext);
}
