import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

const content = getPageContent(homeContent);

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export function Hero({ badge, title, subtitle }: HeroProps) {
  const displayBadge = badge || content.hero.badge;
  const displaySubtitle = subtitle || content.hero.subtitle;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - Full screen */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/depannage-rideau-metallique-montpellier-34-herault.webp"
          alt={`Dépannage rideau métallique ${siteConfig.city} - Intervention urgence`}
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Overlay MOBILE : très foncé pour lisibilité parfaite */}
        <div className="absolute inset-0 bg-primary-950/85 md:hidden" />
        {/* Overlay DESKTOP : dégradé plus subtil */}
        <div className="hidden md:block absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/50 to-primary-700/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 md:from-primary-900/70 via-primary-900/50 md:via-transparent to-primary-900/80 md:to-primary-800/40" />
      </div>

      <div className="container relative z-10 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu gauche */}
          <div>
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 md:bg-white/10 md:backdrop-blur-sm border border-white/30 md:border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-secondary-500 rounded-full md:animate-pulse" />
            {displayBadge.replace(/[^\w\s]/gi, '')}
          </div>

          {/* Title H1 - SEO optimized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100 text-white">
            Dépannage rideau métallique {siteConfig.city}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white/90 animate-fade-in-up animation-delay-150">
            Expert 24h/24
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200" dangerouslySetInnerHTML={{ __html: displaySubtitle }} />

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
            {/* Primary CTA - Phone */}
            <a 
              href={siteConfig.phoneLink} 
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-secondary-500 px-8 py-4 text-lg font-bold text-white shadow-secondary hover:bg-secondary-600 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-2xl bg-secondary-500 animate-pulse-ring opacity-75" />
              <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative">{siteConfig.phone}</span>
            </a>
            
            {/* Secondary CTA - Devis */}
            <a 
              href="/contact-rideau-metallique" 
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Devis gratuit
            </a>
          </div>

          {/* Trust badges - Version mobile optimisée en grille 2x2 */}
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 animate-fade-in-up animation-delay-400">
            {/* Badge 24h/24 */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/20">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-white/30 md:bg-white/20 flex items-center justify-center">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">24h/24</p>
                <p className="text-xs text-white/80 md:text-white/70">7 jours sur 7</p>
              </div>
            </div>

            {/* Badge Intervention rapide */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/20">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-white/30 md:bg-white/20 flex items-center justify-center">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">-1h</p>
                <p className="text-xs text-white/80 md:text-white/70">Intervention</p>
              </div>
            </div>

            {/* Badge Garantie */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/20">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-white/30 md:bg-white/20 flex items-center justify-center">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">Garantie</p>
                <p className="text-xs text-white/80 md:text-white/70">Pièces & MO</p>
              </div>
            </div>

            {/* Badge Avis Google */}
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white/25 md:bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/30 md:border-white/20">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-white/30 md:bg-white/20 flex items-center justify-center">
                <div className="flex text-gold-400">
                  <svg className="w-4 md:w-5 h-4 md:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">{siteConfig.reviews.rating}/5</p>
                <p className="text-xs text-white/80 md:text-white/70">Google</p>
              </div>
            </div>
          </div>
          </div>

          {/* Image droite - Rideau métallique sans fond */}
          <div className="hidden lg:flex flex-col justify-center items-center animate-fade-in-up animation-delay-300">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/hero/rideau-metallique-hero-depannage-rideau-metallique-montpellier-34.webp"
                alt={`Dépannage rideau de fer ${siteConfig.city} - ${siteConfig.name}`}
                width={600}
                height={700}
                className="object-contain drop-shadow-2xl rounded-2xl"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              {/* Badge flottant 24/7 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <p className="text-3xl font-bold text-primary-600">24/7</p>
                <p className="text-sm text-gray-600 font-medium">Intervention</p>
              </div>
              {/* Badge flottant Avis */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-metal-800">{siteConfig.reviews.rating}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 text-white fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </section>
  );
}
