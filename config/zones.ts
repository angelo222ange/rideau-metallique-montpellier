// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION DES ZONES D'INTERVENTION
// ─────────────────────────────────────────────────────────────────────────────

export interface Zone {
  name: string;
  slug: string;
  postalCode: string;
  isQuartier: boolean;
  image: string;
  description?: string;
}

// Ville principale
export const mainCity: Zone = {
  name: "Montpellier",
  slug: "montpellier",
  postalCode: "34000",
  isQuartier: false,
  image: "/images/zones/montpellier.webp",
  description: "Ville principale d'intervention",
};

// Quartiers de Montpellier
export const quartiers: Zone[] = [
  {
    name: "Montpellier Centre",
    slug: "montpellier-centre",
    postalCode: "34000",
    isQuartier: true,
    image: "/images/zones/depannage-rideau-metallique-montpellier-centre.webp",
  },
  {
    name: "L'Écusson",
    slug: "ecusson",
    postalCode: "34000",
    isQuartier: true,
    image: "/images/zones/ecusson-montpellier-depannage-rideau-metallique.webp",
  },
  {
    name: "Antigone",
    slug: "antigone",
    postalCode: "34000",
    isQuartier: true,
    image: "/images/zones/depannage-rideau-metallique-antigone-montpellier.webp",
  },
  {
    name: "Port Marianne",
    slug: "port-marianne",
    postalCode: "34000",
    isQuartier: true,
    image: "/images/zones/depannage-rideau-metallique-port-marianne-montpellier.webp",
  },
];

// Communes des environs
export const communes: Zone[] = [
  {
    name: "Castelnau-le-Lez",
    slug: "castelnau-le-lez",
    postalCode: "34170",
    isQuartier: false,
    image: "/images/zones/depannage-rideau-metallique-castelnau-le-lez-montpellier.webp",
  },
  {
    name: "Lattes",
    slug: "lattes",
    postalCode: "34970",
    isQuartier: false,
    image: "/images/zones/depannage-rideau-metallique-lattes-montpellier.webp",
  },
  {
    name: "Pérols",
    slug: "perols",
    postalCode: "34470",
    isQuartier: false,
    image: "/images/zones/depannage-rideau-metallique-perols-montpellier.webp",
  },
  {
    name: "Mauguio",
    slug: "mauguio",
    postalCode: "34130",
    isQuartier: false,
    image: "/images/zones/depannage-rideau-metallique-Mauguio.webp",
  },
  {
    name: "Saint-Jean-de-Védas",
    slug: "saint-jean-de-vedas",
    postalCode: "34430",
    isQuartier: false,
    image: "/images/zones/depannage-rideau-metallique-saint-jean-de-vedas-montpellier.webp",
  },
  {
    name: "Juvignac",
    slug: "juvignac",
    postalCode: "34990",
    isQuartier: false,
    image: "/images/zones/Juvignac-depannage-rideau-metallique.webp",
  },
  {
    name: "Grabels",
    slug: "grabels",
    postalCode: "34790",
    isQuartier: false,
    image: "/images/zones/Grabels-depannage-rideau-metallique.webp",
  },
  {
    name: "Clapiers",
    slug: "clapiers",
    postalCode: "34830",
    isQuartier: false,
    image: "/images/zones/Clapiers-depannage-rideau-metallique.webp",
  },
  {
    name: "Le Crès",
    slug: "le-cres",
    postalCode: "34920",
    isQuartier: false,
    image: "/images/le-cres-depannage-rideau-metallique-drm.webp",
  },
  {
    name: "Jacou",
    slug: "jacou",
    postalCode: "34830",
    isQuartier: false,
    image: "/images/zones/Jacou-depannage-rideau-metallique-drm.webp",
  },
  {
    name: "Villeneuve-lès-Maguelone",
    slug: "villeneuve-les-maguelone",
    postalCode: "34750",
    isQuartier: false,
    image: "/images/zones/Villeneuve-les-Maguelone-depannage-rideau-metallique.webp",
  },
  {
    name: "Palavas-les-Flots",
    slug: "palavas-les-flots",
    postalCode: "34250",
    isQuartier: false,
    image: "/images/zones/Palavas-les-Flots-depannage-rideau-metallique-montpellier.webp",
  },
  {
    name: "Carnon",
    slug: "carnon",
    postalCode: "34280",
    isQuartier: false,
    image: "/images/zones/Carnon-depannage-rideau-metallique-montpellier.webp",
  },
  {
    name: "Baillargues",
    slug: "baillargues",
    postalCode: "34670",
    isQuartier: false,
    image: "/images/zones/Baillargues-depannage-rideau-metallique.webp",
  },
  {
    name: "Vendargues",
    slug: "vendargues",
    postalCode: "34740",
    isQuartier: false,
    image: "/images/zones/Vendargues-34740-depannage-rideau-metallique.webp",
  },
];

// Toutes les zones combinées
export const allZones: Zone[] = [...quartiers, ...communes];

// Services disponibles pour les pages SubCity
export const services = [
  {
    id: "depannage",
    name: "Dépannage Rideau Métallique",
    slug: "depannage-rideau-metallique",
    shortName: "Dépannage",
  },
  {
    id: "fabrication",
    name: "Fabrication Rideau Métallique",
    slug: "fabrication-rideau-metallique",
    shortName: "Fabrication",
  },
  {
    id: "entretien",
    name: "Entretien Rideau Métallique",
    slug: "entretien-rideau-metallique",
    shortName: "Entretien",
  },
  {
    id: "motorisation",
    name: "Motorisation Rideau Métallique",
    slug: "motorisation-rideau-metallique",
    shortName: "Motorisation",
  },
  {
    id: "installation",
    name: "Installation Rideau Métallique",
    slug: "installation-rideau-metallique",
    shortName: "Installation",
  },
];

// Helper : récupérer une zone par son slug
export function getZoneBySlug(slug: string): Zone | undefined {
  return allZones.find((z) => z.slug === slug);
}

// Helper : récupérer un service par son slug
export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Helper : générer toutes les combinaisons service/zone pour le sitemap
export function getAllServiceZoneCombinations() {
  const combinations: { serviceSlug: string; zoneSlug: string; zone: Zone }[] = [];
  
  for (const service of services) {
    for (const zone of allZones) {
      combinations.push({
        serviceSlug: service.slug,
        zoneSlug: zone.slug,
        zone,
      });
    }
  }
  
  return combinations;
}

