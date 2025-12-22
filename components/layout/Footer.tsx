import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation, services } from "@/config/site";
import { quartiers, communes } from "@/config/zones";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Zones populaires pour le maillage interne (top 6 communes)
  const zonesPopulaires = communes.slice(0, 6);

  return (
    <footer className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-metal-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Wave top decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 via-accent-400 to-primary-500" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Colonne 1 - À propos & Logo */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group mb-6">
                <div className="relative h-24 lg:h-32 w-auto transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/images/logo-drm-montpellier.webp"
                    alt={`${siteConfig.name} - Logo`}
                    width={400}
                    height={120}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    sizes="(max-width: 1024px) 150px, 200px"
                  />
                </div>
              </Link>

              <p className="text-primary-200 text-sm leading-relaxed mb-6">
                Spécialiste du rideau métallique à {siteConfig.city}. Dépannage 24h/24, 
                fabrication sur-mesure, entretien et motorisation. Votre partenaire de confiance 
                depuis + de 25 ans.
              </p>

              {/* Devenir partenaire button */}
              <Link 
                href="/devenir-partenaire"
                className="inline-flex items-center gap-2 px-4 py-2.5 mb-6 bg-secondary-500/20 hover:bg-secondary-500/30 border border-secondary-500/30 rounded-xl text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-all group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                Devenir partenaire
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-white font-medium">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24h/24
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-white font-medium">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {siteConfig.reviews.rating}/5
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-white font-medium">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Garanti
                </span>
              </div>
            </div>

            {/* Colonne 2 - Services */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary-500 rounded-full"></span>
                Nos Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/${service.slug}`} 
                      className="group flex items-center gap-2 text-primary-200 hover:text-white transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 text-secondary-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {service.name}
                    </Link>
                  </li>
                ))}
                {/* Liens navigation */}
                {navigation.filter(n => n.href !== '/').map((item) => {
                  const exists = services.find(s => `/${s.slug}` === item.href);
                  if (exists) return null;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="group flex items-center gap-2 text-primary-200 hover:text-white transition-colors text-sm"
                      >
                        <svg className="w-4 h-4 text-secondary-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Colonne 3 - Zones d'intervention */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-400 rounded-full"></span>
                Zones d&apos;intervention
              </h3>
              <div className="space-y-4">
                {/* Ville principale - Montpellier */}
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wider mb-2">Ville principale</p>
                  <Link 
                    href="/depannage-rideau-metallique"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-secondary-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {siteConfig.city} (34000)
                  </Link>
                </div>

                {/* Quartiers de Montpellier */}
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wider mb-2">Quartiers Montpellier</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {quartiers.slice(0, 4).map((zone) => (
                      <li key={zone.slug}>
                        <Link 
                          href={`/depannage-rideau-metallique/${zone.slug}`} 
                          className="text-primary-200 hover:text-white transition-colors text-sm"
                        >
                          {zone.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Communes populaires */}
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wider mb-2">Communes proches</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {zonesPopulaires.map((zone) => (
                      <li key={zone.slug}>
                        <Link 
                          href={`/depannage-rideau-metallique/${zone.slug}`} 
                          className="text-primary-200 hover:text-white transition-colors text-sm"
                        >
                          {zone.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Voir toutes les zones */}
                <Link 
                  href="/zones" 
                  className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-colors"
                >
                  Voir toutes les zones
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Colonne 4 - Contact */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary-400 rounded-full"></span>
                Contact
              </h3>
              <ul className="space-y-4">
                {/* Téléphone */}
                <li>
                  <a 
                    href={siteConfig.phoneLink}
                    className="group flex items-start gap-3"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-secondary-500/20 rounded-xl text-secondary-400 group-hover:bg-secondary-500 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-primary-400">Urgence 24h/24</p>
                      <p className="text-white font-bold text-lg group-hover:text-secondary-400 transition-colors">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-3"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-primary-500/20 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-primary-400">Email</p>
                      <p className="text-white text-sm group-hover:text-primary-300 transition-colors break-all">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                </li>

                {/* Adresse */}
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-accent-500/20 rounded-xl text-accent-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-primary-400">Adresse</p>
                    <p className="text-white text-sm">
                      {siteConfig.address}
                    </p>
                  </div>
                </li>

                {/* Horaires */}
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-green-500/20 rounded-xl text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-primary-400">Horaires</p>
                    <p className="text-white text-sm font-medium">
                      {siteConfig.openingHours}
                    </p>
                    <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Disponible maintenant
                    </p>
                  </div>
                </li>
              </ul>

              {/* Réseaux sociaux */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-primary-400 uppercase tracking-wider mb-3">Suivez-nous</p>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a
                    href={siteConfig.social.facebook || "#"}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl text-white hover:bg-[#1877F2] transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href={siteConfig.social.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* Google */}
                  <a
                    href={siteConfig.reviews.googleUrl || siteConfig.social.google || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl text-white hover:bg-[#4285F4] transition-all"
                    aria-label="Google"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-primary-300">
                <p>© {currentYear} {siteConfig.fullName}.</p>
                <p className="hidden sm:block">•</p>
                <p>Tous droits réservés.</p>
              </div>
              <nav className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/mentions-legales" 
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
                <Link 
                  href="/confidentialite" 
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Confidentialité
                </Link>
                <Link 
                  href="/cookies" 
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Cookies
                </Link>
                <Link 
                  href="/contact-rideau-metallique" 
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
