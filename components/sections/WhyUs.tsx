"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

const advantages = [
  {
    id: "expertise",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Expertise Locale",
    description: `Plus de 25 ans d'expérience à ${siteConfig.city}. Nous connaissons parfaitement les besoins des commerces et entreprises de l'agglomération.`,
    stats: "25+ ans",
    statsLabel: "d'expérience",
  },
  {
    id: "reactivite",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Réactivité Maximale",
    description: "Intervention en moins d'1 heure sur Montpellier et ses environs. Disponibles 24h/24, 7j/7, même les jours fériés.",
    stats: "-1h",
    statsLabel: "d'intervention",
  },
  {
    id: "prix",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Prix Justes & Transparents",
    description: "Devis gratuit avant intervention. Tarifs annoncés et respectés, aucune surprise à la facturation.",
    stats: "0€",
    statsLabel: "le devis",
  },
  {
    id: "garantie",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Garantie Totale",
    description: "Toutes nos pose sont garanties. Pièces d'origine constructeur et main d'œuvre assurées.",
    stats: "2 ans",
    statsLabel: "de garantie",
  },
];

export function WhyUs() {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 text-gold-600 text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Nos engagements
          </span>
          <h2 className="section-title">
            Pourquoi choisir <span className="text-gradient">{siteConfig.name}</span> ?
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Spécialistes du rideau métallique à {siteConfig.city} depuis plus de 25 ans. 
            Une équipe de professionnels à votre service.
          </p>
        </div>

        {/* Main Content - Alternating Layout */}
        <div className="space-y-24">
          {/* Row 1: Image Left - Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
                <Image
                  src="/images/why-us/drm-entreprise-local-montpellier-depannage-rideau-metallique.webp"
                  alt={`Entreprise DRM ${siteConfig.city} - Expertise locale dépannage rideau métallique`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover">
                <p className="text-3xl font-bold text-primary-600">327+</p>
                <p className="text-sm text-gray-600">interventions/an</p>
              </div>
            </div>

            {/* Content - First 2 advantages */}
            <div>
              <div className="space-y-6">
                {advantages.slice(0, 2).map((advantage, index) => (
                  <div 
                    key={advantage.id}
                    className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center text-primary-600 transition-colors flex-shrink-0">
                        {advantage.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-bold text-metal-800 group-hover:text-primary-700 transition-colors">
                            {advantage.title}
                          </h3>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xl font-bold text-primary-600">{advantage.stats}</p>
                            <p className="text-xs text-gray-500">{advantage.statsLabel}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Content Left - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Last 2 advantages */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {advantages.slice(2, 4).map((advantage, index) => (
                  <div 
                    key={advantage.id}
                    className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-secondary-50 group-hover:bg-secondary-100 flex items-center justify-center text-secondary-600 transition-colors flex-shrink-0">
                        {advantage.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-bold text-metal-800 group-hover:text-secondary-600 transition-colors">
                            {advantage.title}
                          </h3>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xl font-bold text-secondary-500">{advantage.stats}</p>
                            <p className="text-xs text-gray-500">{advantage.statsLabel}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-phone">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a href="/contact-rideau-metallique" className="btn-secondary">
                  Demander un devis gratuit
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
                {/* Placeholder */}
                <Image
                  src="/images/why-us/prix-justes-garantie-rideau-metallique-montpellier-34.webp"
                  alt={`Prix justes et garantie 2 ans - Dépannage rideau métallique ${siteConfig.city}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-cta text-white rounded-2xl p-5 shadow-secondary">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-white/80">clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-primary-600">25+</p>
            <p className="text-sm text-gray-600 mt-1">Années d&apos;expérience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-secondary-500">24/7</p>
            <p className="text-sm text-gray-600 mt-1">Disponibilité</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-accent-500">{siteConfig.reviews.rating}</p>
            <p className="text-sm text-gray-600 mt-1">Note Google</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-3xl md:text-4xl font-bold text-gold-500">5000+</p>
            <p className="text-sm text-gray-600 mt-1">Interventions/an</p>
          </div>
        </div>
      </div>
    </section>
  );
}
