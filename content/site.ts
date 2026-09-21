/** Données éditoriales du Tennis Club Municipal de Goussainville. */
export const club = {
  name: 'Tennis Club Municipal de Goussainville', shortName: 'TCMG', since: 1983,
  phone: '+33139888025', phoneLabel: '01 39 88 80 25', email: 'tcmgoussainville@fft.fr',
  address: ['Complexe Maurice Bacquet', 'Allée du 5 Décembre', '95190 Goussainville'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Complexe+Maurice+Bacquet+All%C3%A9e+du+5+D%C3%A9cembre+95190+Goussainville',
  social: { instagram: 'https://www.instagram.com/tcm_goussainville/', facebook: 'https://www.facebook.com/ftcmg/' },
};
export const navigation = [
  ['Accueil', '/'], ['Le Club', '/le-club'], ['Tennis', '/tennis'], ['Fête le Mur', '/fete-le-mur'], ['Compétitions', '/competitions'], ['Galerie', '/galerie'], ['Boutique', '/boutique'], ['Contact', '/contact'],
] as const;
export const stats = [
  { value: '1983', label: 'Depuis' }, { value: '4', label: 'courts couverts' },
  { value: '2', label: 'courts Green Set' }, { value: '3', label: 'ans pour commencer' },
];
export const products = ['Hoodie violet', 'Hoodie blanc', 'T-shirt violet', 'T-shirt blanc', 'Jupe', 'Legging', 'Jogging', 'Casquette', 'Chaussettes', 'Poignets'];
export const orderUrl = (product: string) => `mailto:${club.email}?subject=${encodeURIComponent(`Commande Boutique TCMG — ${product}`)}`;
export const organisation = [
  ['Sandrine Poirier', 'Présidente', true], ['Philippe Matos', 'Vice-président', true], ['Rosa Boumadi', 'Trésorière', true], ['Murielle Fufait', 'Secrétaire', true], ['Gia Han Lam', 'Responsable Communication', true], ['Céline Decrawer', 'Responsable Événementiel', true], ['Savanah Thirion', 'Représentante de Section', true],
  ['Rudy Coco', 'Coach', true], ['Grégoire Coulaud', 'Coach', true], ['Cédric Pouget', 'Coach', true], ['Nathan Dufait', 'Éducateur', true], ['Mehdi Benabdelmoumene', 'Éducateur', false], ['Ekin Zincir', 'Éducateur', false], ['Nassim Saifi', 'Éducateur', false],
] as const;
export const partners = ['FFT', 'Fête le Mur', 'Ville de Goussainville', 'BNP Paribas', 'ECOSPORT Tennis', 'CITEOS', 'Comité du Val-d’Oise', 'Training Addict'];
