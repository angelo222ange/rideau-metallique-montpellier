import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Icône 404 stylisée */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
            <svg 
              className="w-24 h-24 text-primary-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          {/* Badge flottant */}
          <div className="absolute -top-2 -right-2 bg-secondary-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            404
          </div>
        </div>

        {/* Texte */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-metal-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Pas de panique, nous sommes là pour vous aider !
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler {siteConfig.phone}
          </a>
        </div>

        {/* Liens rapides */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 className="font-heading text-lg font-semibold text-metal-800 mb-4">
            Pages les plus consultées
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: '/fabrication', label: 'Fabrication', icon: '🏭' },
              { href: '/entretien', label: 'Entretien', icon: '🔧' },
              { href: '/motorisation', label: 'Motorisation', icon: '⚡' },
              { href: '/contact', label: 'Contact', icon: '📞' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 p-3 rounded-xl bg-sand-50 hover:bg-primary-50 text-metal-700 hover:text-primary-700 transition-colors text-sm font-medium"
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Info entreprise */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>{siteConfig.name}</strong> – Dépannage rideau métallique à {siteConfig.city}
          <br />
          Disponible {siteConfig.openingHours}
        </p>
      </div>
    </div>
  );
}

