"use client";

import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface TarifsSectionProps {
  zoneName: string;
  postalCode: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons = {
  euro: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  info: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  lightning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  cog: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// TARIFS DATA
// ─────────────────────────────────────────────────────────────────────────────
const tarifs = [
  {
    id: "urgence",
    icon: "lightning",
    title: "Déblocage urgent",
    description: "Rideau bloqué ouvert ou fermé, intervention rapide",
    priceRange: "90€ - 150€",
    includes: [
      "Déplacement inclus",
      "Diagnostic sur place",
      "Main d'œuvre",
      "Petites pièces",
    ],
    badge: "Le + demandé",
    badgeColor: "secondary",
  },
  {
    id: "reparation",
    icon: "wrench",
    title: "Réparation standard",
    description: "Panne moteur, lame cassée, serrure défaillante",
    priceRange: "120€ - 250€",
    includes: [
      "Déplacement inclus",
      "Diagnostic complet",
      "Réparation sur place",
      "Pièces courantes",
    ],
    badge: null,
    badgeColor: null,
  },
  {
    id: "complexe",
    icon: "cog",
    title: "Réparation complexe",
    description: "Axe tordu, tablier à remplacer, reprogrammation",
    priceRange: "200€ - 400€",
    includes: [
      "Déplacement inclus",
      "Diagnostic approfondi",
      "Pièces spécifiques",
      "Garantie 1 an",
    ],
    badge: null,
    badgeColor: null,
  },
];

const engagements = [
  {
    icon: "check",
    title: "Devis gratuit",
    description: "Le technicien établit un devis précis avant toute intervention",
  },
  {
    icon: "shield",
    title: "Prix fixe annoncé",
    description: "Aucun supplément, le tarif convenu est respecté",
  },
  {
    icon: "clock",
    title: "Paiement après",
    description: "Vous ne payez qu'une fois le travail terminé et validé",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function TarifsSection({ zoneName, postalCode }: TarifsSectionProps) {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-50 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-40" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {icons.euro}
            Transparence tarifaire
          </span>
          <h2 className="section-title">
            Nos tarifs dépannage à {zoneName}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Des tarifs clairs et transparents pour tous vos dépannages de rideau métallique à {zoneName} ({postalCode}). Devis gratuit, sans engagement.
          </p>
        </div>

        {/* Tarifs Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tarifs.map((tarif, index) => (
            <div 
              key={tarif.id}
              className={`relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-2 animate-fade-in-up ${
                tarif.badge ? 'border-secondary-300' : 'border-gray-100'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {tarif.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                    {tarif.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                tarif.badge 
                  ? 'bg-secondary-100 text-secondary-600' 
                  : 'bg-primary-100 text-primary-600'
              }`}>
                {icons[tarif.icon as keyof typeof icons] || icons.wrench}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-metal-800 mb-2">{tarif.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{tarif.description}</p>

              {/* Price */}
              <div className="mb-4">
                <p className={`text-2xl font-bold ${
                  tarif.badge ? 'text-secondary-500' : 'text-primary-600'
                }`}>
                  {tarif.priceRange}
                </p>
                <p className="text-xs text-gray-500">TTC, déplacement inclus</p>
              </div>

              {/* Includes */}
              <ul className="space-y-2">
                {tarif.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      {icons.check}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engagements */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 max-w-4xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-metal-800 text-center mb-6">
            Nos engagements prix à {zoneName}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((engagement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white text-primary-600 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {icons[engagement.icon as keyof typeof icons]}
                </div>
                <h4 className="font-bold text-metal-800 mb-1">{engagement.title}</h4>
                <p className="text-sm text-gray-600">{engagement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-sand-100 rounded-2xl p-6 max-w-3xl mx-auto border border-sand-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center flex-shrink-0">
              {icons.info}
            </div>
            <div>
              <h4 className="font-bold text-metal-800 mb-1">Tarif exact sur place</h4>
              <p className="text-sm text-gray-600">
                Ces tarifs sont indicatifs. Le technicien établira un devis précis gratuit après diagnostic de votre rideau métallique à {zoneName}. 
                Vous êtes libre d&apos;accepter ou refuser, sans engagement. <strong>Majorations week-end/nuit : +30%</strong>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Un doute sur le tarif ? Appelez-nous pour un devis téléphonique gratuit.
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
            Tarifs dépannage rideau métallique à {zoneName} ({postalCode}). 
            Déblocage urgence : 90€-150€. Réparation standard : 120€-250€. 
            Réparation complexe : 200€-400€. Devis gratuit, intervention 24h/24. 
            Contactez DRM au {siteConfig.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TarifsSection;

