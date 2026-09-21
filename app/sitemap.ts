import type { MetadataRoute } from 'next';
const paths = ['', '/le-club', '/tennis', '/fete-le-mur', '/competitions', '/galerie', '/boutique', '/contact', '/partenaires'];
export default function sitemap(): MetadataRoute.Sitemap { return paths.map(path => ({ url: `https://tcmg-premium.vercel.app${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : .7 })); }
