"use client";

import { siteConfig } from "@/config/site";
import { ImageWithFallback } from "@/components/ui";
import deblocageContent from "@/content/sections/home/deblocage.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  bolt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  cog: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  link: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function DeblocageSection() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
            {icons.bolt}
            {deblocageContent.badge.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {deblocageContent.title}
          </h2>
          <p className="text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: deblocageContent.subtitle }} />
        </div>

        {/* Main Content - Split Screen */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            {/* Causes Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {deblocageContent.causes.map((cause, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-2xl bg-gray-50 hover:bg-primary-50 border border-gray-100 hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 group-hover:bg-primary-500 text-primary-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      {icons[cause.icon] || icons.cog}
                    </div>
                    <div>
                      <h3 className="font-semibold text-metal-800 mb-1">{cause.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: cause.description }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {deblocageContent.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    {icons.check}
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={siteConfig.phoneLink}
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-secondary-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-2xl bg-secondary-400 animate-pulse-ring opacity-50" />
                {icons.phone}
                <span className="relative">{siteConfig.phone}</span>
              </a>
              
              <a 
                href="/contact-rideau-metallique"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary-200 bg-primary-50 px-6 py-4 text-lg font-semibold text-primary-700 hover:bg-primary-100 hover:border-primary-300 transition-all duration-300"
              >
                Demander un devis
                {icons.arrow}
              </a>
            </div>
          </div>

          {/* Right - Image + Description */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                <ImageWithFallback
                  src={deblocageContent.image}
                  alt={deblocageContent.imageAlt}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-500/20 z-10 pointer-events-none" />
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white rounded-2xl p-5 shadow-card-hover border border-gray-100 animate-float">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-primary-600">
                    {deblocageContent.stats.value}
                  </span>
                  <span className="text-lg font-semibold text-primary-600">
                    {deblocageContent.stats.unit}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium mt-1">
                  {deblocageContent.stats.label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
            </div>

            {/* Description - Under the image */}
            <p className="text-lg text-gray-600 leading-relaxed mt-12 pt-4" dangerouslySetInnerHTML={{ __html: deblocageContent.description }} />
          </div>
        </div>

        {/* Process Timeline - Bottom */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-metal-800 text-center mb-10">
            Notre processus de déblocage en 4 étapes
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200" />
            
            {deblocageContent.process.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Step Number */}
                <div className={`relative z-10 w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-2xl ${
                  index === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                  index === 1 ? 'bg-gradient-to-br from-primary-400 to-primary-500' :
                  index === 2 ? 'bg-gradient-to-br from-secondary-400 to-secondary-500' :
                  'bg-gradient-to-br from-green-400 to-green-500'
                }`}>
                  {step.step}
                </div>
                
                <h4 className="font-bold text-metal-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Rideau métallique bloqué dans le 34 ?
              </h3>
              <p className="text-white/80">
                Nos techniciens interviennent en urgence à Montpellier et dans toute l&apos;agglomération héraultaise
              </p>
            </div>
            
            <a 
              href={siteConfig.phoneLink}
              className="flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              {icons.phone}
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeblocageSection;
