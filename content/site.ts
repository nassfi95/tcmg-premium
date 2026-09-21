/** Informations officielles du Tennis Club Municipal de Goussainville. */
export const club = {
  name: 'Tennis Club Municipal de Goussainville',
  shortName: 'TCMG',
  since: 1983,
  phone: '+33139888025',
  phoneLabel: '01 39 88 80 25',
  email: 'tcmgoussainville@fft.fr',
  address: ['Complexe Maurice Bacquet', 'Allée du 5 Décembre', '95190 Goussainville'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Complexe+Maurice+Bacquet+All%C3%A9e+du+5+D%C3%A9cembre+95190+Goussainville',
  social: {
    instagram: 'https://www.instagram.com/tcm_goussainville/',
    facebook: 'https://www.facebook.com/ftcmg/',
  },
};

export const navigation = [
  ['Accueil', '/'], ['Le Club', '/le-club'], ['Tennis', '/tennis'],
  ['Fête le Mur', '/fete-le-mur'], ['Galerie', '/galerie'], ['Boutique', '/boutique'], ['Contact', '/contact'],
] as const;

export const stats = [
  { value: '1983', label: 'Depuis' }, { value: '4', label: 'courts couverts' },
  { value: '2', label: 'courts Green Set' }, { value: '3', label: 'ans pour commencer' },
];

export const products = ['Hoodie violet', 'Hoodie blanc', 'T-shirt violet', 'T-shirt blanc', 'Jupe', 'Legging', 'Jogging', 'Casquette', 'Chaussettes', 'Poignets'];
export const orderUrl = (product: string) => `mailto:${club.email}?subject=${encodeURIComponent(`Commande Boutique TCMG — ${product}`)}`;
