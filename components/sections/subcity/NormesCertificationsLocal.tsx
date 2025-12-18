"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface NormesCertificationsLocalProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  certificate: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  fire: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  shieldLock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
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
  badgeCheck: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const certifications = [
  {
    id: "ce",
    icon: "certificate",
    title: "Marquage CE",
    description: "Conformité aux directives européennes de sécurité",
    detail: "Norme EN 13241-1",
    color: "primary",
  },
  {
    id: "nf",
    icon: "shieldLock",
    title: "Résistance effraction",
    description: "Classes de résistance certifiées A2P",
    detail: "Protection renforcée",
    color: "secondary",
  },
  {
    id: "fire",
    icon: "fire",
    title: "Coupe-feu",
    description: "Rideaux certifiés pour les ERP",
    detail: "Classement M0/M1",
    color: "accent",
  },
  {
    id: "quality",
    icon: "shield",
    title: "Garantie fabricant",
    description: "Garantie pièces et main d'œuvre",
    detail: "2 ans minimum",
    color: "green",
  },
];

function getContent(zoneName: string, postalCode: string) {
  return {
    badge: "Qualité certifiée",
    title: `Normes et certifications`,
    subtitle: `Tous les rideaux métalliques fabriqués par DRM pour ${zoneName} (${postalCode}) respectent les normes européennes les plus strictes. Sécurité et conformité garanties.`,
    mainNorm: {
      code: "EN 13241-1",
      title: "Norme Européenne",
      description: "Cette norme définit les exigences de sécurité et de performance pour les portes et rideaux industriels, commerciaux et résidentiels.",
      requirements: [
        "Dispositif de sécurité anti-chute",
        "Protection contre l'écrasement",
        "Marquage CE obligatoire",
        "Documentation technique fournie",
      ],
    },
    guarantees: [
      { title: "Garantie 2 ans", description: "Pièces et main d'œuvre", icon: "shield" },
      { title: "SAV local", description: `Intervention ${postalCode.substring(0, 2)}`, icon: "document" },
      { title: "Pièces d'origine", description: "Traçabilité complète", icon: "certificate" },
      { title: "Devis gratuit", description: "Sans engagement", icon: "check" },
    ],
    erpInfo: {
      title: "Spécial ERP",
      subtitle: "Établissements Recevant du Public",
      description: `Pour votre commerce à ${zoneName}, nous fournissons tous les documents nécessaires aux contrôles de conformité.`,
      points: [
        "Attestation de conformité CE",
        "Documentation technique complète",
        "Certificat de pose",
        "Assistance contrôle commission de sécurité",
      ],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function NormesCertificationsLocal({ zoneName, postalCode }: NormesCertificationsLocalProps) {
  const content = getContent(zoneName, postalCode);

  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            {icons.badgeCheck}
            {content.badge}
          </span>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            {content.subtitle}
          </p>
        </div>

        {/* Main Norm Card */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-6 md:p-8 mb-10 max-w-4xl mx-auto shadow-card-hover relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-xl mb-4">
                <span className="text-xl font-bold text-white">{content.mainNorm.code}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.mainNorm.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                {content.mainNorm.description}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
              <h4 className="font-bold text-white mb-4 text-sm">Exigences principales :</h4>
              <ul className="space-y-2">
                {content.mainNorm.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      {icons.check}
                    </span>
                    <span className="text-white/90 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {certifications.map((cert, index) => {
            const colorClasses = {
              primary: { icon: "bg-primary-100 text-primary-600", border: "border-primary-100 hover:border-primary-200" },
              secondary: { icon: "bg-secondary-100 text-secondary-600", border: "border-secondary-100 hover:border-secondary-200" },
              accent: { icon: "bg-accent-100 text-accent-600", border: "border-accent-100 hover:border-accent-200" },
              green: { icon: "bg-green-100 text-green-600", border: "border-green-100 hover:border-green-200" },
            };
            const colors = colorClasses[cert.color as keyof typeof colorClasses];

            return (
              <div 
                key={cert.id}
                className={`group bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border ${colors.border} animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.id === "ce" ? (
                    <span className="text-lg font-bold">CE</span>
                  ) : (
                    icons[cert.icon as keyof typeof icons] || icons.shield
                  )}
                </div>
                <h4 className="text-base font-bold text-metal-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{cert.description}</p>
                <p className="text-xs text-primary-600 font-medium bg-primary-50 px-3 py-1.5 rounded-lg inline-block">
                  {cert.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Row: Guarantees + ERP Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Guarantees */}
          <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
            <h3 className="text-lg font-bold text-metal-800 mb-5">Vos garanties</h3>
            <div className="grid grid-cols-2 gap-4">
              {content.guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3 p-2">
                  <span className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    {icons[guarantee.icon as keyof typeof icons] || icons.shield}
                  </span>
                  <div>
                    <p className="font-semibold text-metal-800 text-sm">{guarantee.title}</p>
                    <p className="text-gray-500 text-xs">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ERP Info */}
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 border border-secondary-200">
            <h4 className="text-lg font-bold text-secondary-700 mb-2">
              {content.erpInfo.title}
            </h4>
            <p className="text-xs text-secondary-600 mb-1">{content.erpInfo.subtitle}</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {content.erpInfo.description}
            </p>
            <ul className="space-y-2">
              {content.erpInfo.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-secondary-500 text-white flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Questions sur la conformité de votre projet à {zoneName} ?
          </p>
          <a 
            href={siteConfig.phoneLink} 
            className="inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-secondary-600 hover:scale-[1.02] transition-all"
          >
            {icons.phone}
            {siteConfig.phone}
          </a>
        </div>

        {/* Local SEO hidden content */}
        <div className="sr-only">
          <p>
            Normes et certifications rideau métallique à {zoneName} ({postalCode}). 
            Tous nos rideaux sont conformes à la norme EN 13241-1 et portent le marquage CE.
            Certification A2P, rideaux coupe-feu pour ERP. Garantie 2 ans.
            Contactez DRM au {siteConfig.phone} pour vérifier la conformité de votre projet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NormesCertificationsLocal;

