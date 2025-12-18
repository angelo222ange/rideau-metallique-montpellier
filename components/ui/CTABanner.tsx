import { siteConfig } from "@/config/site";

interface CTABannerProps {
  /** Variante de style */
  variant?: "default" | "urgent" | "minimal" | "gradient";
  /** Titre du CTA */
  title?: string;
  /** Sous-titre ou description */
  subtitle?: string;
  /** Texte du bouton principal */
  buttonText?: string;
  /** Afficher le numéro de téléphone */
  showPhone?: boolean;
  /** Afficher un second bouton (devis) */
  showSecondary?: boolean;
  /** Texte du bouton secondaire */
  secondaryText?: string;
  /** Lien du bouton secondaire */
  secondaryHref?: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export function CTABanner({
  variant = "default",
  title,
  subtitle,
  buttonText = "Appeler maintenant",
  showPhone = true,
  showSecondary = false,
  secondaryText = "Demander un devis",
  secondaryHref = "/contact",
  className = "",
}: CTABannerProps) {
  
  // Variante urgente - fond terracotta avec pulse
  if (variant === "urgent") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-600" />
        
        {/* Animated pulse overlay */}
        <div className="absolute inset-0 bg-secondary-400 animate-pulse opacity-20" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative container py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Text content */}
            <div className="flex items-center gap-4 text-white">
              {/* Icon */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur rounded-xl">
                <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <div>
                <p className="font-heading font-bold text-lg md:text-xl">
                  {title || "Rideau métallique bloqué ?"}
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  {subtitle || "Intervention urgente 24h/24 à Montpellier et environs"}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-3 bg-white text-secondary-600 px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              {/* Phone icon with pulse */}
              <span className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </span>
              {showPhone ? siteConfig.phone : buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Variante minimale - barre simple
  if (variant === "minimal") {
    return (
      <div className={`bg-primary-800 text-white py-4 ${className}`}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <p className="text-sm md:text-base">
              {title || "Besoin d'un dépannage rapide ?"}{" "}
              <span className="font-bold">{subtitle || "Appelez-nous !"}</span>
            </p>
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-2 bg-secondary-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Variante gradient - section complète
  if (variant === "gradient") {
    return (
      <section className={`relative overflow-hidden py-16 md:py-24 ${className}`}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Disponible {siteConfig.openingHours}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              {title || "Besoin d'un expert rideau métallique ?"}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {subtitle || `Contactez DRM Montpellier pour une intervention rapide et professionnelle. Devis gratuit et sans engagement.`}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA - Phone */}
              <a
                href={siteConfig.phoneLink}
                className="group flex items-center gap-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-secondary hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                <span className="relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </span>
                {showPhone ? siteConfig.phone : buttonText}
              </a>

              {/* Secondary CTA */}
              {showSecondary && (
                <a
                  href={secondaryHref}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
                >
                  {secondaryText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/70">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Intervention rapide
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantie 1 an
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante par défaut - section standard
  return (
    <section className={`relative overflow-hidden py-12 md:py-16 bg-primary-800 ${className}`}>
      {/* Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 via-transparent to-primary-900/50" />

      <div className="relative container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              {title || "Besoin d'une intervention ?"}
            </h3>
            <p className="text-white/70">
              {subtitle || `Appelez-nous au ${siteConfig.phone} ou demandez un devis en ligne.`}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 bg-secondary-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-secondary hover:bg-secondary-600 hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {showPhone ? siteConfig.phone : buttonText}
            </a>

            {showSecondary && (
              <a
                href={secondaryHref}
                className="flex items-center gap-2 bg-white text-primary-700 px-6 py-3.5 rounded-xl font-bold hover:bg-primary-50 transition-colors"
              >
                {secondaryText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

