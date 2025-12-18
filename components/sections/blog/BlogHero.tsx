import { siteConfig } from "@/config/site";

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Blog & Conseils
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Blog Rideau Métallique
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Conseils d&apos;experts, guides pratiques et actualités sur les rideaux métalliques 
            par <strong className="text-white">{siteConfig.name}</strong>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
              <p className="text-sm text-white/70">Années d&apos;expertise</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">5000+</p>
              <p className="text-sm text-white/70">Interventions</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{siteConfig.reviews.rating}/5</p>
              <p className="text-sm text-white/70">Note Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-16 text-white fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,48 1440,48 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}

