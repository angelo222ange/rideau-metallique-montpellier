import { siteConfig } from "@/config/site";
import Link from "next/link";

export function AuthorBox() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-sand-100 rounded-2xl p-6 md:p-8 border border-primary-100 my-12">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Logo/Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              À propos de
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-metal-900 mb-3">
            🏢 {siteConfig.fullName}
          </h3>
          
          <p className="text-metal-600 leading-relaxed mb-4">
            Expert en <strong>rideaux métalliques</strong> depuis plus de <strong>15 ans</strong> à {siteConfig.city}. 
            Notre équipe intervient en urgence <strong>24h/24 et 7j/7</strong> pour tous vos besoins : 
            dépannage, installation, fabrication sur-mesure, entretien et motorisation.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-metal-700 shadow-sm">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Intervention -1h
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-metal-700 shadow-sm">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Devis gratuit
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-metal-700 shadow-sm">
              <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {siteConfig.reviews.rating}/5 ({siteConfig.reviews.count} avis)
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link 
              href="/contact-rideau-metallique"
              className="inline-flex items-center gap-2 bg-white hover:bg-primary-50 text-primary-700 font-semibold px-5 py-2.5 rounded-xl border-2 border-primary-200 hover:border-primary-300 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

