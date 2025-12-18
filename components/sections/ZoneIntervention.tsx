"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui";
import { quartiers, communes, mainCity, type Zone } from "@/config/zones";

interface ZoneInterventionProps {
  serviceName: string;
  serviceSlug: string;
  mainCityImage?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ZONE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ZoneCard({ zone, serviceSlug }: { zone: Zone; serviceSlug: string }) {
  return (
    <Link
      href={`/${serviceSlug}/${zone.slug}`}
      className="group relative block h-24 rounded-xl overflow-hidden border border-gray-200 hover:border-primary-400 transition-all hover:shadow-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={zone.image}
          alt={`${zone.name} - ${serviceSlug}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-end p-3">
        <div className="flex items-center gap-2 text-white">
          <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-semibold text-sm leading-tight">{zone.name}</p>
            <p className="text-xs text-white/70">{zone.postalCode}</p>
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
  itemsPerView = 3 
}: { 
  zones: Zone[]; 
  serviceSlug: string; 
  itemsPerView?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const maxIndex = Math.max(0, zones.length - itemsPerView);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  
  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);
  
  const visibleZones = zones.slice(currentIndex, currentIndex + itemsPerView);
  
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visibleZones.map((zone, idx) => (
          <ZoneCard key={`${zone.slug}-${idx}`} zone={zone} serviceSlug={serviceSlug} />
        ))}
      </div>
      
      {/* Navigation dots */}
      {zones.length > itemsPerView && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-primary-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à la slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Navigation arrows */}
      {zones.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all z-10 hidden md:flex"
            aria-label="Précédent"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all z-10 hidden md:flex"
            aria-label="Suivant"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ZoneInterventionSection({ 
  serviceName, 
  serviceSlug,
  mainCityImage = "/images/drm-depannage-rideau-metallique-france-montpellier.webp"
}: ZoneInterventionProps) {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Zone d&apos;intervention
          </span>
          <h2 className="section-title">
            {serviceName} à {mainCity.name} ({mainCity.postalCode}) et ses environs
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Nous intervenons rapidement dans tout Montpellier et l&apos;agglomération montpelliéraine. Délai d&apos;intervention rapide à moins d&apos;1 heure.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left - Main Image */}
          <div className="relative h-full flex flex-col justify-end">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[480px] rounded-3xl overflow-hidden shadow-card-hover">
              <ImageWithFallback
                src={mainCityImage}
                alt={`${serviceName} à Montpellier`}
                fill
                className="object-cover object-top"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="font-bold text-metal-800">Rayon d&apos;intervention</p>
                    <p className="text-sm text-gray-600">30 km autour de Montpellier</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Zones */}
          <div className="space-y-8">
            {/* Main City Card */}
            <div>
              <div className="flex items-center gap-2 text-metal-800 mb-3">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
                </svg>
                <span className="font-bold">{mainCity.name}</span>
              </div>
              <div
                className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white"
              >
                <div>
                  <p className="font-bold text-lg">{mainCity.name}</p>
                  <p className="text-white/80">{mainCity.postalCode}</p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quartiers */}
            <div>
              <div className="flex items-center gap-2 text-metal-800 mb-3">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-bold">Quartiers de Montpellier</span>
              </div>
              <ZoneSlideshow zones={quartiers} serviceSlug={serviceSlug} itemsPerView={2} />
            </div>

            {/* Communes */}
            <div>
              <div className="flex items-center gap-2 text-metal-800 mb-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span className="font-bold">Communes de l&apos;agglomération</span>
              </div>
              <ZoneSlideshow zones={communes} serviceSlug={serviceSlug} itemsPerView={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZoneInterventionSection;

