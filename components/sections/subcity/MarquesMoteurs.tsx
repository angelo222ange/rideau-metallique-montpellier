"use client";

import { siteConfig } from "@/config/site";
import { ImageWithFallback } from "@/components/ui";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface MarquesMoteursProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  cog: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
function getMarques(zoneName: string) {
  return [
    {
      id: "somfy",
      name: "Somfy",
      description: "Leader mondial de la motorisation. Moteurs fiables et silencieux, compatibles domotique.",
      logo: "/images/marques/somfy-logo.webp",
      features: ["Silencieux", "Domotique", "Fiabilité"],
      origin: "France",
      warranty: "5 ans",
      highlight: true,
    },
    {
      id: "nice",
      name: "Nice",
      description: "Marque italienne premium. Excellente qualité de fabrication et design élégant.",
      logo: "/images/marques/nice-logo.webp",
      features: ["Design italien", "Robuste", "Connecté"],
      origin: "Italie",
      warranty: "3 ans",
      highlight: false,
    },
    {
      id: "came",
      name: "Came",
      description: "Spécialiste italien de l'automatisme. Large gamme pour tous types de rideaux.",
      logo: "/images/marques/came-logo.webp",
      features: ["Polyvalent", "Puissant", "Pro"],
      origin: "Italie",
      warranty: "3 ans",
      highlight: false,
    },
    {
      id: "simu",
      name: "Simu",
      description: "Expertise française depuis 1946. Moteurs tubulaires reconnus pour leur durabilité.",
      logo: "/images/marques/simu-logo.webp",
      features: ["Durable", "Tubulaire", "Qualité"],
      origin: "France",
      warranty: "5 ans",
      highlight: false,
    },
    {
      id: "acm",
      name: "ACM",
      description: "Spécialiste des moteurs industriels. Idéal pour les grands rideaux et usage intensif.",
      logo: "/images/marques/acm-logo.webp",
      features: ["Industriel", "Puissant", "Intensif"],
      origin: "Italie",
      warranty: "2 ans",
      highlight: false,
    },
    {
      id: "gaposa",
      name: "Gaposa",
      description: "Solutions professionnelles italiennes. Excellent rapport qualité-prix.",
      logo: "/images/marques/gaposa-logo.webp",
      features: ["Pro", "Économique", "Fiable"],
      origin: "Italie",
      warranty: "2 ans",
      highlight: false,
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function MarquesMoteurs({ zoneName, postalCode }: MarquesMoteursProps) {
  const marques = getMarques(zoneName);

  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.cog}
            Marques partenaires
          </span>
          <h2 className="section-title">
            Marques de moteurs installées à {zoneName}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            À {zoneName} ({postalCode}), nous installons uniquement des moteurs de marques reconnues pour leur fiabilité et durabilité.
          </p>
        </div>

        {/* Marques Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {marques.map((marque, index) => (
            <div 
              key={marque.id}
              className={`group relative bg-white rounded-2xl p-6 transition-all duration-300 animate-fade-in-up border-2 ${
                marque.highlight 
                  ? 'border-secondary-300 shadow-xl' 
                  : 'border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary-200'
              }`}
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {marque.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center gap-1.5 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {icons.star}
                    Recommandé
                  </span>
                </div>
              )}

              {/* Logo + Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
                  <ImageWithFallback
                    src={marque.logo}
                    alt={`Logo ${marque.name}`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-metal-800 group-hover:text-primary-700 transition-colors">
                    {marque.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{marque.origin}</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">Garantie {marque.warranty}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {marque.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {marque.features.map((feature, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {icons.check}
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-card border border-gray-100 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3">
                {icons.shield}
              </div>
              <h4 className="font-bold text-metal-800 mb-1">Pièces d&apos;origine</h4>
              <p className="text-sm text-gray-600">Uniquement des pièces authentiques de marques officielles</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3">
                {icons.cog}
              </div>
              <h4 className="font-bold text-metal-800 mb-1">Installateur agréé</h4>
              <p className="text-sm text-gray-600">Techniciens certifiés par les marques partenaires</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center mb-3">
                {icons.star}
              </div>
              <h4 className="font-bold text-metal-800 mb-1">SAV garanti</h4>
              <p className="text-sm text-gray-600">Service après-vente et pièces détachées disponibles</p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Quelle marque pour votre rideau à {zoneName} ?
              </h3>
              <p className="text-primary-100">
                Nos experts vous conseillent gratuitement sur le moteur adapté à votre configuration.
              </p>
            </div>
            <a 
              href={siteConfig.phoneLink} 
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-lg hover:bg-primary-50 hover:scale-[1.02] transition-all flex-shrink-0"
            >
              {icons.phone}
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Local SEO hidden content */}
        <div className="sr-only">
          <p>
            Marques de moteurs pour rideau métallique installées à {zoneName} ({postalCode}). 
            DRM installe des moteurs Somfy, Nice, Came, Simu, ACM et Gaposa.
            Moteurs de qualité avec garantie pour motorisation rideau métallique à {zoneName}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MarquesMoteurs;

