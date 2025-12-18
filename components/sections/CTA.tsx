import { siteConfig } from "@/config/site";

interface CTAProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact" | "urgent";
}

export function CTA({ title, subtitle, variant = "default" }: CTAProps) {
  const defaultTitle = `Besoin d'un dépannage rideau métallique à ${siteConfig.city} ?`;
  const defaultSubtitle = `Notre équipe intervient en moins d'1 heure, 24h/24 et 7j/7. Devis gratuit et sans engagement.`;

  if (variant === "compact") {
    return (
      <section className="py-12 bg-gradient-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold">{title || defaultTitle}</h2>
              <p className="text-white/80 text-sm mt-1" dangerouslySetInnerHTML={{ __html: subtitle || defaultSubtitle }} />
            </div>
            <a 
              href={siteConfig.phoneLink} 
              className="btn-phone whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "urgent") {
    return (
      <section className="py-16 md:py-20 bg-gradient-cta relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        </div>

        <div className="container relative z-10 text-center">
          {/* Urgent badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Urgence 24h/24
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title || "Rideau métallique bloqué ?"}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: subtitle || `Nos techniciens interviennent en urgence à ${siteConfig.city}. Appelez maintenant !` }} />

          {/* Phone CTA with pulse effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white rounded-2xl animate-pulse-ring opacity-50" />
            <a 
              href={siteConfig.phoneLink} 
              className="relative inline-flex items-center gap-3 bg-white text-secondary-600 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>

          <p className="text-white/70 text-sm mt-6">
            Appel gratuit • Devis immédiat • Sans engagement
          </p>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Intervention rapide
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title || defaultTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10" dangerouslySetInnerHTML={{ __html: subtitle || defaultSubtitle }} />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            {/* Phone CTA */}
            <a 
              href={siteConfig.phoneLink} 
              className="group relative inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-secondary"
            >
              <span className="absolute inset-0 rounded-2xl bg-secondary-500 animate-pulse-ring opacity-50 group-hover:opacity-0 transition-opacity" />
              <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative">{siteConfig.phone}</span>
            </a>

            {/* Contact CTA */}
            <a 
              href="/contact-rideau-metallique" 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Intervention &lt;1h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Garantie 1 an</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{siteConfig.city} & environs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
