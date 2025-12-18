import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface ServicesProps {
  title?: string;
  subtitle?: string;
}

// Icônes SVG personnalisées pour chaque service
const ServiceIcons = {
  depannage: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  installation: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  fabrication: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  entretien: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  motorisation: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

// Service dépannage (carte principale)
const depannageService = {
  id: "depannage",
  slug: "depannage-rideau-metallique",
  name: "Dépannage Rideau Métallique",
  shortDesc: "Votre rideau est bloqué ? Intervention en moins d'1 heure, 24h/24 et 7j/7.",
  icon: "depannage" as keyof typeof ServiceIcons,
  features: ["Déblocage rideau métallique", "Réparation moteur", "Remplacement pièces", "Intervention express"],
  color: "secondary",
  badge: "24h/24",
  image: "/images/hero/depannage-urgence-rideau-metallique-bloquer.webp",
};

// Autres services (cartes secondaires)
const otherServices = [
  {
    id: "installation",
    slug: "installation-rideau-metallique",
    name: "Installation rideau métallique",
    shortDesc: "Pose certifiée de rideaux métalliques pour commerces et locaux professionnels.",
    icon: "installation" as keyof typeof ServiceIcons,
    features: ["Pose garantie 2 ans", "Sur-mesure", "Toutes marques"],
    color: "primary",
    badge: "Certifié",
    image: "/images/services/installation-rideau-metallique-drm-montpellier.webp",
    imagePosition: "top",
  },
  {
    id: "fabrication",
    slug: "fabrication-rideau-metallique",
    name: "Fabrication rideau métallique",
    shortDesc: "Rideaux métalliques fabriqués sur-mesure pour commerces et locaux professionnels.",
    icon: "fabrication" as keyof typeof ServiceIcons,
    features: ["Lames pleines", "Micro-perforé", "Grilles articulées"],
    color: "primary",
    badge: "Sur-mesure",
    image: "/images/fabrication/fabrication-rideau-metallique-montpellier-drm-34-herault.webp",
    imagePosition: "center",
  },
  {
    id: "entretien",
    slug: "entretien-rideau-metallique",
    name: "Entretien rideau métallique",
    shortDesc: "Contrats de maintenance préventive pour éviter les pannes.",
    icon: "entretien" as keyof typeof ServiceIcons,
    features: ["Lubrification", "Réglages", "Contrôle sécurité"],
    color: "accent",
    badge: "Préventif",
    image: "/images/entretien/entretien-rideau-metallique-34-drm-montpellier.webp",
    imagePosition: "center",
  },
  {
    id: "motorisation",
    slug: "motorisation-rideau-metallique",
    name: "Motorisation rideau métallique",
    shortDesc: "Automatisez votre rideau pour plus de confort et sécurité.",
    icon: "motorisation" as keyof typeof ServiceIcons,
    features: ["Moteur tubulaire", "Télécommande", "Clavier à code"],
    color: "primary",
    badge: "Confort",
    image: "/images/motorisation/motorisation-rideau-metallique-montpellier-34.webp",
    imagePosition: "center",
  },
];

export function Services({ title, subtitle }: ServicesProps) {
  const defaultTitle = "Nos Services Rideau Métallique";

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        {/* Main Grid: Depannage Card (Left) + Title/Text + Other Services (Right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Grande Card Dépannage */}
          <Link
            href={`/${depannageService.slug}`}
            className="group relative rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[600px] lg:min-h-full"
          >
            {/* Label 24/24 centré en haut */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-secondary-500 text-white px-6 py-2.5 rounded-b-2xl font-bold text-lg shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24h/24 - 7j/7
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={depannageService.image}
                alt={depannageService.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 group-hover:from-black/90 group-hover:via-black/55 transition-all duration-300" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary-500/30 backdrop-blur-sm flex items-center justify-center mb-5 border border-secondary-400/30">
                <div className="text-white">
                  {ServiceIcons[depannageService.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {depannageService.name}
              </div>
              <p className="text-white/85 mb-5 leading-relaxed text-lg">
                {depannageService.shortDesc}
              </p>

              {/* Features list */}
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {depannageService.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Urgence Dépannage
                </span>
                <span className="text-white/70 text-sm">Intervention &lt;1h</span>
              </div>
            </div>
          </Link>

          {/* RIGHT: Titre + Texte SEO + 3 Cards */}
          <div className="flex flex-col">
            {/* Header avec titre et texte SEO */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Expert rideau métallique {siteConfig.city}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-metal-800 mb-4">
                {title || defaultTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-metal-800">DRM</strong> est votre spécialiste du <strong className="text-metal-800">rideau métallique à Montpellier</strong> et dans l&apos;Hérault (34). 
                Nous assurons le <strong className="text-metal-800">dépannage</strong>, la <strong className="text-metal-800">réparation</strong>, 
                la <strong className="text-metal-800">fabrication sur-mesure</strong> et l&apos;<strong className="text-metal-800">entretien</strong> de 
                vos <strong className="text-metal-800">rideaux de fer</strong> et <strong className="text-metal-800">grilles métalliques</strong>. 
                Intervention rapide <strong className="text-metal-800">24h/24</strong> pour tous types de commerces, entrepôts et locaux professionnels.
              </p>
            </div>

            {/* 3 Cards empilées verticalement */}
            <div className="flex flex-col gap-4 flex-1">
              {otherServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="group relative rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex-1 min-h-[160px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition === 'top' ? 'object-top' : 'object-center'}`}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 group-hover:from-black/85 group-hover:via-black/65 transition-all duration-300" />
                  </div>

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm ${service.color === 'accent' ? 'text-accent-600' : 'text-primary-600'}`}>
                    {service.badge}
                  </div>

                  <div className="relative h-full flex items-center p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 flex-shrink-0 ${service.color === 'accent' ? 'border border-accent-400/30' : 'border border-primary-400/30'}`}>
                      <div className="text-white">
                        {ServiceIcons[service.icon]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-lg lg:text-xl font-bold text-white mb-1">
                        {service.name}
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Une urgence ? Notre équipe est disponible <strong className="text-metal-800">24h/24 et 7j/7</strong>
          </p>
          <a 
            href={siteConfig.phoneLink}
            className="btn-phone text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
