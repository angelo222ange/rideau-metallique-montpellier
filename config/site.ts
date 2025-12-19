/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONFIGURATION DU SITE - DRM Montpellier
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────
  // INFORMATIONS ENTREPRISE
  // ─────────────────────────────────────────────────────────────────────────
  name: "DRM Montpellier",
  fullName: "Dépannage Rideau Métallique Montpellier",
  domain: "depannagerideau-metallique-montpellier.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────────────────────────────────
  phone: "04 11 93 76 76",
  phoneLink: "tel:+33411937676",
  email: "contact@depannagerideau-metallique-montpellier.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // LOCALISATION
  // ─────────────────────────────────────────────────────────────────────────
  city: "Montpellier",
  postalCode: "34000",
  department: "Hérault",
  departmentCode: "34",
  region: "Occitanie",
  address: "15 Rue Marceau, 34000 Montpellier, France",
  
  geo: {
    lat: 43.6108,
    lng: 3.8767,
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // HORAIRES
  // ─────────────────────────────────────────────────────────────────────────
  openingHours: "24h/24, 7j/7",
  openingHoursSchema: ["Mo-Su 00:00-23:59"],
  
  // ─────────────────────────────────────────────────────────────────────────
  // RÉSEAUX SOCIAUX
  // ─────────────────────────────────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    google: "",
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // AVIS GOOGLE
  // ─────────────────────────────────────────────────────────────────────────
  reviews: {
    rating: 4.9,
    count: 127,
    googleUrl: "https://share.google/5gjiK7yhuHcsPKCxw",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DESIGN - COULEURS INSPIRÉES DE MONTPELLIER
  // Bleu Méditerranée + Terracotta
  // ─────────────────────────────────────────────────────────────────────────
  colors: {
    primary: {
      50: '#e6f4fa',
      100: '#cce9f5',
      200: '#99d3eb',
      300: '#66bde1',
      400: '#33a7d7',
      500: '#0077B6',  // Bleu Méditerranée - couleur principale
      600: '#006699',
      700: '#004d73',
      800: '#023E8A',  // Bleu Nuit Écusson
      900: '#012a5e',
    },
    secondary: {
      400: '#f0a060',
      500: '#E07B39',  // Terracotta Toiture
      600: '#c66830',
    },
    accent: {
      400: '#6dd5f0',
      500: '#48CAE4',  // Azur Ciel
      600: '#30b8d5',
    },
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────
// ZONES D'INTERVENTION - MONTPELLIER ET AGGLOMÉRATION
// ─────────────────────────────────────────────────────────────────────────
export const zones = [
  { name: "Montpellier", slug: "montpellier", postalCode: "34000", isMain: true },
  { name: "Montpellier Centre", slug: "montpellier-centre", postalCode: "34000", quartier: true },
  { name: "L'Écusson", slug: "ecusson", postalCode: "34000", quartier: true },
  { name: "Antigone", slug: "antigone", postalCode: "34000", quartier: true },
  { name: "Port Marianne", slug: "port-marianne", postalCode: "34000", quartier: true },
  { name: "Castelnau-le-Lez", slug: "castelnau-le-lez", postalCode: "34170" },
  { name: "Lattes", slug: "lattes", postalCode: "34970" },
  { name: "Pérols", slug: "perols", postalCode: "34470" },
  { name: "Mauguio", slug: "mauguio", postalCode: "34130" },
  { name: "Saint-Jean-de-Védas", slug: "saint-jean-de-vedas", postalCode: "34430" },
  { name: "Juvignac", slug: "juvignac", postalCode: "34990" },
  { name: "Grabels", slug: "grabels", postalCode: "34790" },
  { name: "Clapiers", slug: "clapiers", postalCode: "34830" },
  { name: "Le Crès", slug: "le-cres", postalCode: "34920" },
  { name: "Jacou", slug: "jacou", postalCode: "34830" },
  { name: "Villeneuve-lès-Maguelone", slug: "villeneuve-les-maguelone", postalCode: "34750" },
  { name: "Palavas-les-Flots", slug: "palavas-les-flots", postalCode: "34250" },
  { name: "Carnon", slug: "carnon", postalCode: "34280" },
  { name: "Baillargues", slug: "baillargues", postalCode: "34670" },
  { name: "Vendargues", slug: "vendargues", postalCode: "34740" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// NAVIGATION - SIMPLIFIÉE SELON CONTEXTE
// ─────────────────────────────────────────────────────────────────────────
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Installation", href: "/installation-rideau-metallique" },
  { label: "Fabrication", href: "/fabrication-rideau-metallique" },
  { label: "Entretien", href: "/entretien-rideau-metallique" },
  { label: "Motorisation", href: "/motorisation-rideau-metallique" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-rideau-metallique" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// SERVICES - 4 services principaux
// ─────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "depannage",
    slug: "depannage-rideau-metallique",
    name: "Dépannage Rideau Métallique",
    shortDesc: "Intervention rapide 24h/24",
    longDesc: "Service de dépannage rideau métallique en urgence, disponible 24h/24 et 7j/7 à Montpellier.",
    icon: "depannage",
    hasPage: true,
  },
  {
    id: "installation",
    slug: "installation-rideau-metallique",
    name: "Installation Rideau Métallique",
    shortDesc: "Pose professionnelle certifiée",
    longDesc: "Installation de rideaux métalliques sur-mesure pour commerces, entrepôts et locaux professionnels à Montpellier.",
    icon: "installation",
    hasPage: true,
  },
  {
    id: "fabrication",
    slug: "fabrication-rideau-metallique",
    name: "Fabrication Rideau Métallique",
    shortDesc: "Rideaux métalliques personnalisés",
    longDesc: "Fabrication de rideaux métalliques sur-mesure pour commerces et locaux professionnels à Montpellier.",
    icon: "fabrication",
    hasPage: true,
  },
  {
    id: "entretien",
    slug: "entretien-rideau-metallique",
    name: "Entretien Rideau Métallique",
    shortDesc: "Maintenance préventive",
    longDesc: "Contrats d'entretien et maintenance préventive pour rideaux métalliques à Montpellier.",
    icon: "entretien",
    hasPage: true,
  },
  {
    id: "motorisation",
    slug: "motorisation-rideau-metallique",
    name: "Motorisation Rideau Métallique",
    shortDesc: "Automatisation de votre rideau",
    longDesc: "Motorisation et automatisation de rideaux métalliques existants ou neufs à Montpellier.",
    icon: "motorisation",
    hasPage: true,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// TYPES DE RIDEAUX
// ─────────────────────────────────────────────────────────────────────────
export const rideauTypes = [
  { name: "Rideau à lames pleines", slug: "lames-pleines" },
  { name: "Rideau à lames micro-perforées", slug: "micro-perfore" },
  { name: "Grille métallique articulée", slug: "grille" },
  { name: "Rideau coupe-feu", slug: "coupe-feu" },
  { name: "Rideau isolant", slug: "isolant" },
] as const;

// Type exports
export type SiteConfig = typeof siteConfig;
export type Zone = typeof zones[number];
export type NavItem = typeof navigation[number];
export type Service = typeof services[number];
