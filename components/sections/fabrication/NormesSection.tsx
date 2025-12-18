"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import normesContent from "@/content/sections/fabrication/normes.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  "badge-check": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  "ce-mark": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <text x="2" y="18" fontSize="14" fontWeight="bold" fontFamily="Arial">CE</text>
    </svg>
  ),
  fire: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  "shield-lock": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  thermometer: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  blueprint: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  factory: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  certificate: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  tools: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  refresh: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  award: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATION CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function CertificationCard({ cert, index }: { cert: typeof normesContent.certifications[0]; index: number }) {
  const colors = [
    "from-primary-500 to-primary-600",
    "from-secondary-500 to-secondary-600",
    "from-accent-500 to-accent-600",
    "from-green-500 to-green-600",
  ];

  return (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
        {cert.id === "ce" ? (
          <span className="text-xl font-bold">CE</span>
        ) : (
          icons[cert.icon] || icons.shield
        )}
      </div>
      
      {/* Title */}
      <h4 className="text-lg font-bold text-metal-800 mb-2">
        {cert.title}
      </h4>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
        {cert.description}
      </p>
      
      {/* Detail */}
      <p className="text-xs text-primary-600 font-medium bg-primary-50 px-3 py-2 rounded-lg">
        {cert.detail}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE STEP COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function TimelineStep({ step, index, isLast }: { step: typeof normesContent.timeline[0]; index: number; isLast: boolean }) {
  const colors = [
    "bg-primary-500",
    "bg-primary-400",
    "bg-accent-500",
    "bg-secondary-500",
  ];

  return (
    <div className="relative flex items-start gap-4">
      {/* Step indicator */}
      <div className="relative flex flex-col items-center">
        <div className={`w-12 h-12 rounded-xl ${colors[index % colors.length]} text-white flex items-center justify-center font-bold text-lg shadow-md z-10`}>
          {step.step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-gray-200 to-gray-100 mt-2" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
            {icons[step.icon] || icons.check}
          </span>
          <h4 className="text-lg font-bold text-metal-800">{step.title}</h4>
        </div>
        <p className="text-gray-600 text-sm ml-11">{step.description}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function NormesSection() {
  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            {icons["badge-check"]}
            {normesContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {normesContent.title}
            <span className="block text-primary-600 mt-2">
              {normesContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {normesContent.subtitle}
          </p>
        </div>

        {/* Main Norm Highlight */}
        <div className="rounded-3xl mb-16 relative overflow-hidden shadow-card-hover">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/europe.webp" 
              alt="Norme Européenne CE"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/70" />
          </div>
          
          <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-xl mb-4">
                <span className="text-2xl font-bold text-white">{normesContent.mainNorm.code}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {normesContent.mainNorm.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {normesContent.mainNorm.description}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <h4 className="font-bold text-white mb-4">Exigences principales :</h4>
              <ul className="space-y-3">
                {normesContent.mainNorm.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      {icons.check}
                    </span>
                    <span className="text-white/90">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-10">
            Nos Certifications & Homologations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {normesContent.certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Process Timeline + Guarantees */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
            <h3 className="text-xl font-bold text-metal-800 mb-8">
              Notre Processus Qualité
            </h3>
            <div>
              {normesContent.timeline.map((step, index) => (
                <TimelineStep 
                  key={step.step} 
                  step={step} 
                  index={index}
                  isLast={index === normesContent.timeline.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Guarantees + ERP Info */}
          <div className="space-y-6">
            {/* Guarantees Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-bold text-metal-800 mb-6">
                Vos Garanties
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {normesContent.guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      {icons[guarantee.icon] || icons.shield}
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
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 border border-secondary-200">
              <h4 className="text-lg font-bold text-secondary-700 mb-3">
                {normesContent.erpInfo.title}
              </h4>
              <p className="text-sm text-secondary-600 mb-1">{normesContent.erpInfo.subtitle}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {normesContent.erpInfo.description}
              </p>
              <ul className="space-y-2">
                {normesContent.erpInfo.points.map((point, idx) => (
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
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Questions sur la conformité de votre rideau ?
              </h3>
              <p className="text-white/80 max-w-xl">
                Nos experts certifiés vous conseillent sur les normes applicables à votre établissement à Montpellier et dans le 34.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={siteConfig.phoneLink}
                className="flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
              >
                {icons.phone}
                {siteConfig.phone}
              </a>
              
              <a 
                href="/contact-rideau-metallique"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap"
              >
                Vérifier mon projet
                {icons.arrow}
              </a>
            </div>
          </div>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{normesContent.localSeo.intro}</p>
          <p>{normesContent.localSeo.expertise}</p>
          <p>{normesContent.localSeo.services}</p>
        </div>
      </div>
    </section>
  );
}

export default NormesSection;

