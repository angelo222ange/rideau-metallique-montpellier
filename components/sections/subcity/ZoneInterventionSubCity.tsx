"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui";
import { quartiers, communes, type Zone } from "@/config/zones";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface ZoneInterventionSubCityProps {
  zoneName: string;
  postalCode: string;
  serviceName: string;
  serviceSlug: string;
  zoneImage?: string;
  zoneSlug: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ZONE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ZoneCard({ zone, serviceSlug }: { zone: Zone; serviceSlug: string }) {
  return (
    <Link
      href={`/${serviceSlug}/${zone.slug}`}
      className="group relative block h-32 rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-400 transition-all hover:shadow-xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={zone.image}
          alt={`${zone.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-end p-4">
        <div className="flex items-center gap-2 text-white">
          <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-bold text-base leading-tight">{zone.name}</p>
            <p className="text-sm text-white/80">{zone.postalCode}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ZONE SLIDESHOW COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ZoneSlideshow({ 
  zones, 
  serviceSlug, 
  itemsPerView = 6 
}: { 
  zones: Zone[]; 
  serviceSlug: string; 
  itemsPerView?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const maxIndex = Math.max(0, Math.ceil(zones.length / itemsPerView) - 1);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);
  
  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);
  
  const startIdx = currentIndex * itemsPerView;
  const visibleZones = zones.slice(startIdx, startIdx + itemsPerView);
  
  // Si moins d'items que prévu, compléter avec le début
  while (visibleZones.length < itemsPerView && zones.length > 0) {
    const remaining = itemsPerView - visibleZones.length;
    visibleZones.push(...zones.slice(0, remaining));
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Grid 3x2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleZones.map((zone, idx) => (
          <ZoneCard key={`${zone.slug}-${idx}`} zone={zone} serviceSlug={serviceSlug} />
        ))}
      </div>
      
      {/* Navigation arrows + dots */}
      {zones.length > itemsPerView && (
        <div className="flex items-center justify-center gap-4 mt-5">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all border border-gray-100"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-primary-500 w-7' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à la slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all border border-gray-100"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ZoneInterventionSubCity({ 
  zoneName, 
  postalCode,
  serviceName,
  serviceSlug,
  zoneImage = "/images/drm-depannage-rideau-metallique-france-montpellier.webp",
  zoneSlug
}: ZoneInterventionSubCityProps) {
  // Filtrer les zones proches (exclure la zone actuelle)
  const nearbyZones = [...quartiers, ...communes].filter(z => z.slug !== zoneSlug);
  
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Zone d&apos;intervention
          </span>
          <h2 className="section-title">
            {serviceName} à {zoneName} ({postalCode}) et ses environs
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Nous intervenons rapidement à {zoneName} et dans toute l&apos;agglomération montpelliéraine. Délai d&apos;intervention rapide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Main Image */}
          <div className="relative">
            <div className="relative h-full min-h-[500px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-card-hover">
              <ImageWithFallback
                src={zoneImage}
                alt={`${serviceName} à ${zoneName}`}
                fill
                className="object-cover"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-metal-800">{zoneName}</p>
                      <p className="text-gray-600">{postalCode} • Intervention rapide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Zones */}
          <div className="flex flex-col justify-between gap-5">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-card border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">30 km</div>
                <div className="text-sm text-gray-600">Rayon d&apos;action</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-card border border-gray-100">
                <div className="text-3xl font-bold text-secondary-600 mb-1">&lt;1h</div>
                <div className="text-sm text-gray-600">Intervention</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-card border border-gray-100">
                <div className="text-3xl font-bold text-accent-600 mb-1">19+</div>
                <div className="text-sm text-gray-600">Communes</div>
              </div>
            </div>

            {/* Zones proches */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-metal-800 mb-4">
                <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span className="font-bold text-lg">Nous intervenons aussi à proximité</span>
              </div>
              <ZoneSlideshow zones={nearbyZones} serviceSlug={serviceSlug} itemsPerView={6} />
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-xl">Besoin d&apos;un {serviceName.toLowerCase()} à {zoneName} ?</p>
                  <p className="text-primary-100">Intervention rapide dans tout le secteur {postalCode}</p>
                </div>
                <a 
                  href="tel:0411937676"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors flex-shrink-0 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  04 11 93 76 76
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZoneInterventionSubCity;

