"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import comparatifContent from "@/content/sections/motorisation/comparatif.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  scale: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  ),
  hand: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
    </svg>
  ),
  bolt: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  x: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  user: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// RATING BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function RatingBar({ value, maxValue = 5, color }: { value: number; maxValue?: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxValue }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-sm transition-all duration-300 ${
            i < value ? color : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function ComparatifSection() {
  const [activeTab, setActiveTab] = useState<"avantages" | "inconvenients" | "pourqui">("avantages");
  
  const { manuel, motorise, criteres, economieTemps, verdict } = comparatifContent;

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
            {icons.scale}
            {comparatifContent.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {comparatifContent.title} :{" "}
            <span className="text-primary-600">{comparatifContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {comparatifContent.subtitle}
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Manuel Card */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 md:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gray-200 text-gray-600 flex items-center justify-center mb-4">
                  {icons.hand}
                </div>
                <h3 className="text-2xl font-bold text-metal-800">{manuel.title}</h3>
                <p className="text-gray-500">{manuel.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wide">À partir de</p>
                <p className="text-2xl font-bold text-metal-800">{manuel.prix}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {["avantages", "inconvenients", "pourqui"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab === "avantages" ? "Avantages" : tab === "inconvenients" ? "Inconvénients" : "Pour qui ?"}
                </button>
              ))}
            </div>

            {/* Content based on tab */}
            <div className="space-y-3">
              {activeTab === "avantages" && manuel.avantages.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              {activeTab === "inconvenients" && manuel.inconvenients.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    {icons.x}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              {activeTab === "pourqui" && manuel.pourQui.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    {icons.user}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Motorisé Card */}
          <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-6 md:p-8 border-2 border-primary-200 hover:border-primary-300 transition-all duration-300 shadow-lg">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary-500 text-white text-sm font-bold rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Recommandé
              </span>
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-6 mt-4">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white flex items-center justify-center mb-4">
                  {icons.bolt}
                </div>
                <h3 className="text-2xl font-bold text-metal-800">{motorise.title}</h3>
                <p className="text-primary-600">{motorise.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary-600 uppercase tracking-wide">À partir de</p>
                <p className="text-2xl font-bold text-primary-700">{motorise.prix}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {["avantages", "inconvenients", "pourqui"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-primary-600 text-white"
                      : "bg-white text-primary-600 hover:bg-primary-100"
                  }`}
                >
                  {tab === "avantages" ? "Avantages" : tab === "inconvenients" ? "Inconvénients" : "Pour qui ?"}
                </button>
              ))}
            </div>

            {/* Content based on tab */}
            <div className="space-y-3">
              {activeTab === "avantages" && motorise.avantages.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              {activeTab === "inconvenients" && motorise.inconvenients.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    {icons.x}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              {activeTab === "pourqui" && motorise.pourQui.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    {icons.user}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-sand-100 rounded-3xl p-6 md:p-10 mb-16">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-8">
            Comparaison Détaillée par Critère
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-gray-600 font-semibold">Critère</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-semibold">Manuel</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-semibold">Motorisé</th>
                </tr>
              </thead>
              <tbody>
                {criteres.map((critere, index) => (
                  <tr key={critere.id} className={index % 2 === 0 ? "bg-white" : ""}>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-metal-800">{critere.label}</p>
                      <p className="text-sm text-gray-500">{critere.description}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <RatingBar value={critere.manuel} color="bg-gray-500" />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <RatingBar value={critere.motorise} color="bg-primary-500" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Time Saving Section */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-6 md:p-10 text-white mb-16 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              {icons.clock}
              <h3 className="text-2xl font-bold">{economieTemps.title}</h3>
            </div>
            <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">
              {economieTemps.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Manuel */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-white/70 mb-2">Manuel</p>
                <p className="text-4xl font-bold mb-2">{economieTemps.manuel.totalAn}</p>
                <p className="text-sm text-white/60">perdues par an</p>
              </div>
              
              {/* VS */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  VS
                </div>
              </div>
              
              {/* Motorisé */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-white/70 mb-2">Motorisé</p>
                <p className="text-4xl font-bold mb-2">{economieTemps.motorise.totalAn}</p>
                <p className="text-sm text-white/60">par an seulement</p>
              </div>
            </div>
            
            {/* Result */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-secondary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {economieTemps.economie}
              </div>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-gray-100 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-metal-800 mb-3">{verdict.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{verdict.description}</p>
              <div className="p-4 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-primary-700 font-semibold">{verdict.highlight}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-metal-800 mb-3">{comparatifContent.cta.title}</h3>
          <p className="text-gray-600 mb-6">{comparatifContent.cta.description}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.phoneLink}
              className="group relative inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-2xl bg-secondary-400 animate-pulse-ring opacity-50" />
              {icons.phone}
              <span className="relative">{siteConfig.phone}</span>
            </a>
            
            <a
              href="/contact-rideau-metallique"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-primary-600 border-2 border-primary-200 hover:bg-primary-50 transition-all duration-300"
            >
              {comparatifContent.cta.buttonText}
              {icons.arrow}
            </a>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>
            Comparatif complet entre rideau métallique manuel et motorisé à Montpellier (34000). 
            Guide d&apos;achat pour choisir entre motorisation et ouverture manuelle pour votre 
            commerce dans l&apos;Hérault. Prix, avantages, inconvénients et conseils d&apos;experts 
            en Occitanie.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComparatifSection;

