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

const KEY = "tcmg:admin:data";

const DEFAULT_DATA: AdminData = {
  events: [],
  schedules: "Lundi au vendredi : 9h00 – 22h00",
  prices: "Tarifs sur demande auprès du club.",

  products: [],

  contact: {
    phone: "01 39 88 80 25",
    email: "tcmgoussainville@fft.fr",
    address: "Complexe Maurice Baquet, Allée du 5 Décembre, 95190 Goussainville",
    instagram: "https://www.instagram.com/tcm_goussainville/",
    facebook: "https://www.facebook.com/ftcmg/",
  },

  photos: [],
};

async function kv(command: string, ...args: string[]) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;

  const response = await fetch(
    `${url}/${command}/${args.map(encodeURIComponent).join("/")}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Vercel KV indisponible.");
  }

  return response.json() as Promise<{ result: string | null }>;
}

export async function readAdminData(): Promise<AdminData> {
  const result = await kv("get", KEY);

  if (!result?.result) {
    return DEFAULT_DATA;
  }

  return {
    ...DEFAULT_DATA,
    ...JSON.parse(result.result),
  };
}

export async function writeAdminData(
  data: AdminData
): Promise<AdminData> {
  await kv("set", KEY, JSON.stringify(data));
  return data;
}
