"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones } from "@/config/site";

interface ZonesProps {
  title?: string;
  limit?: number;
}

export function Zones({ title, limit = 12 }: ZonesProps) {
  const displayedZones = zones.slice(0, limit);
  const mainZone = zones.find(z => 'isMain' in z && z.isMain);
  const quartiers = zones.filter(z => 'quartier' in z && z.quartier);
  const communes = zones.filter(z => !('isMain' in z && z.isMain) && !('quartier' in z && z.quartier));

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Zone d&apos;intervention
          </span>
          <h2 className="section-title">
            {title || `Intervention à ${siteConfig.city} et ses environs`}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Notre équipe intervient rapidement dans tout {siteConfig.city} et l&apos;agglomération montpelliéraine. 
            Délai d&apos;intervention : <strong className="text-primary-600">moins d&apos;1 heure</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map / Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card-hover bg-gradient-to-br from-primary-100 to-accent-100">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-400 p-8">
                <svg className="w-24 h-24 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-lg font-medium text-center">Carte Zone d&apos;Intervention</p>
                <p className="text-sm opacity-70 text-center mt-1">Montpellier et agglomération</p>
              </div>
              <Image
                src="/images/hero/drm-depannage-rideau-metallique-france-montpellier.webp"
                alt={`Zone d'intervention ${siteConfig.name} - ${siteConfig.city} et agglomération`}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Floating info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-metal-800">Rayon d&apos;intervention</p>
                    <p className="text-sm text-gray-600">30 km autour de Montpellier</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zones List */}
          <div className="space-y-8">
            {/* Montpellier - Main Zone */}
            {mainZone && (
              <div>
                <h3 className="text-lg font-bold text-metal-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  {siteConfig.city}
                </h3>
                <div 
                  className="block bg-gradient-primary text-white rounded-2xl p-6 shadow-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold">{mainZone.name}</p>
                      <p className="text-primary-100 text-sm">{mainZone.postalCode}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quartiers */}
            {quartiers.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-metal-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </span>
                  Quartiers de Montpellier
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quartiers.map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zones/${zone.slug}`}
                      className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-accent-300 hover:bg-accent-50 transition-all duration-200"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-accent-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <div className="min-w-0">
                        <p className="font-medium text-metal-800 group-hover:text-accent-700 transition-colors truncate">{zone.name}</p>
                        <p className="text-xs text-gray-500">{zone.postalCode}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Communes */}
            {communes.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-metal-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Communes de l&apos;agglomération
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {communes.slice(0, 12).map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zones/${zone.slug}`}
                      className="group flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-secondary-50 hover:border-secondary-200 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-secondary-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-metal-800 group-hover:text-secondary-700 transition-colors truncate">{zone.name}</p>
                        <p className="text-xs text-gray-500">{zone.postalCode}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* View all CTA */}
            {zones.length > limit && (
              <div className="pt-4">
                <Link 
                  href="/zones" 
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  <span>Voir toutes les {zones.length} zones</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-sand-100 rounded-2xl">
            <p className="text-gray-600">
              Vous êtes dans une autre commune ? <strong className="text-metal-800">Contactez-nous</strong> pour vérifier notre disponibilité.
            </p>
            <a href={siteConfig.phoneLink} className="btn-phone-header whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
