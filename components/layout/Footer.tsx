import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation, services, zones } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.webp"
                alt={`Logo ${siteConfig.name}`}
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Spécialiste du rideau métallique à {siteConfig.city}. 
              Dépannage, installation, motorisation. Intervention 24h/24.
            </p>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zones d&apos;intervention</h3>
            <ul className="space-y-2">
              {zones.slice(0, 8).map((zone) => (
                <li key={zone.slug}>
                  <Link href={`/zones/${zone.slug}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {zone.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zones" className="text-primary-400 hover:text-primary-300 text-sm font-medium">
                  Voir toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs">Téléphone (24h/24)</p>
                  <a href={siteConfig.phoneLink} className="text-white font-semibold hover:text-primary-400">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-primary-400">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs">Zone d&apos;intervention</p>
                  <p className="text-white">{siteConfig.city} et environs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.fullName}. Tous droits réservés.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white">Confidentialité</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

