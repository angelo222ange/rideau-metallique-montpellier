"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ImageWithFallback } from "@/components/ui";
import temoignagesContent from "@/content/sections/motorisation/temoignages.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  starEmpty: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  hand: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  quote: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  mapPin: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  chevronLeft: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  ),
  chevronRight: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// RATING STARS COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          {icons.star}
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialCard({
  temoignage,
  featured = false,
}: {
  temoignage: (typeof temoignagesContent.temoignages)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary-100">{icons.quote}</div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-100 to-accent-100">
          <ImageWithFallback
            src={temoignage.avatar}
            alt={temoignage.nom}
            fill
            className="object-cover"
          />
          {/* Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-primary-400">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-bold text-metal-800">{temoignage.nom}</h4>
          <p className="text-sm text-primary-600">{temoignage.commerce}</p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {icons.mapPin}
            <span>
              {temoignage.quartier} ({temoignage.codePostal})
            </span>
          </div>
        </div>

        {/* Rating */}
        <RatingStars rating={temoignage.rating} />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 leading-relaxed mb-4 italic">
        &quot;{temoignage.temoignage}&quot;
      </p>

      {/* Highlight */}
      <div className="bg-primary-50 rounded-xl p-3 mb-4 border border-primary-100">
        <p className="text-primary-700 font-semibold text-sm">{temoignage.highlight}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {temoignage.avantagesCites.map((avantage, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
          >
            {icons.check}
            {avantage}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
        <span>{temoignage.typeMoteur}</span>
        <span>Installé en {temoignage.dateInstallation}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROGRESS BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ProgressBar({ value, label, icon }: { value: number; label: string; icon: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
        {icons[icon] || icons.check}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-bold text-primary-600">{value}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function TemoignagesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const { temoignages, statsGlobales, avantagesLesPlusCites } = temoignagesContent;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(temoignages.length / itemsPerPage);
  const displayedTemoignages = temoignages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="section bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
            {icons.star}
            {temoignagesContent.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {temoignagesContent.title} :{" "}
            <span className="text-primary-600">{temoignagesContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{temoignagesContent.subtitle}</p>
        </div>

        {/* Stats Banner */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Note Globale */}
            <div className="text-center p-4 border-r border-gray-100 last:border-r-0">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-metal-800">{statsGlobales.noteGlobale}</span>
                <span className="text-yellow-400">{icons.star}</span>
              </div>
              <p className="text-sm text-gray-600">Note moyenne</p>
            </div>

            {/* Total Avis */}
            <div className="text-center p-4 border-r border-gray-100 last:border-r-0">
              <div className="text-4xl font-bold text-primary-600 mb-2">{statsGlobales.totalAvis}</div>
              <p className="text-sm text-gray-600">Avis vérifiés</p>
            </div>

            {/* Recommandent */}
            <div className="text-center p-4 border-r border-gray-100 last:border-r-0">
              <div className="text-4xl font-bold text-green-500 mb-2">{statsGlobales.recommandent}</div>
              <p className="text-sm text-gray-600">Recommandent</p>
            </div>

            {/* Distribution */}
            <div className="p-4">
              <div className="space-y-1">
                {Object.entries(statsGlobales.repartition).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-16">{key.replace("etoiles", "★")}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid with Pagination */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {displayedTemoignages.map((temoignage, index) => (
              <TestimonialCard
                key={temoignage.id}
                temoignage={temoignage}
                featured={index === 0 && currentPage === 0}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-gray-500 hover:text-primary-600 hover:shadow-card-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {icons.chevronLeft}
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === i
                        ? "bg-primary-500 w-8"
                        : "bg-gray-300 hover:bg-primary-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-gray-500 hover:text-primary-600 hover:shadow-card-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {icons.chevronRight}
              </button>
            </div>
          )}
        </div>

        {/* Most Cited Advantages */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card mb-12">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-8">
            Les Avantages les Plus Cités par Nos Clients
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {avantagesLesPlusCites.map((avantage) => (
              <ProgressBar
                key={avantage.avantage}
                value={avantage.pourcentage}
                label={avantage.avantage}
                icon={avantage.icon}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{temoignagesContent.cta.title}</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {temoignagesContent.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.phoneLink}
                className="group relative inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {icons.phone}
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href="/contact-rideau-metallique"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                {temoignagesContent.cta.buttonText}
                {icons.arrow}
              </a>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Témoignages et avis de commerçants montpelliérains sur la motorisation de leur rideau
            métallique. Retours d&apos;expérience de boulangeries, pharmacies, garages et boutiques
            de Montpellier (34000), Castelnau-le-Lez, et du quartier Antigone. Note moyenne 4.9/5
            sur 127 avis vérifiés dans l&apos;Hérault.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TemoignagesSection;

