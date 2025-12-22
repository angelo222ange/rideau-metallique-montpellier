"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation } from "@/config/site";

// Icônes pour chaque item de navigation
const navIcons: Record<string, JSX.Element> = {
  "/": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "/installation": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "/fabrication": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "/entretien": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "/motorisation": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "/contact": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for header background change - optimisé avec passive et throttle
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {/* Top bar urgence - visible au scroll */}
        <div
          className={`bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-center py-1.5 text-sm font-medium transition-all duration-300 ${
            isScrolled ? "hidden" : ""
          }`}
        >
          <a href={siteConfig.phoneLink} className="hover:opacity-90 transition-opacity">
            🚨 Urgence 24h/24 - Appelez le{" "}
            <span className="font-bold underline">{siteConfig.phone}</span>
          </a>
        </div>

        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-[120px] lg:h-40 w-auto transform group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/logo-drm-montpellier.webp"
                  alt={`${siteConfig.name} - Logo`}
                  width={200}
                  height={60}
                  className="h-full w-auto object-contain"
                  priority
                  sizes="200px"
                />
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-metal-700 hover:text-primary-600 hover:bg-primary-50/50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Téléphone + Menu Button */}
            <div className="flex items-center gap-3">
              {/* Phone CTA - Desktop avec animation */}
              <a
                href={siteConfig.phoneLink}
                className="hidden md:flex items-center gap-2 relative group"
              >
                {/* Pulse ring externe */}
                <span className="absolute -inset-2 bg-secondary-500/20 rounded-2xl animate-pulse" />
                <span className="relative flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-5 py-3 rounded-xl font-bold shadow-secondary hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                  {/* Icône téléphone animée */}
                  <span className="relative">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {/* Petit badge pulsant */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse border-2 border-secondary-500" />
                  </span>
                  <span className="hidden lg:inline">{siteConfig.phone}</span>
                  <span className="lg:hidden">Appeler</span>
                </span>
              </a>

              {/* Menu Mobile Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isScrolled || isMenuOpen
                    ? "bg-gray-100 text-metal-700"
                    : "bg-white/80 backdrop-blur text-metal-700"
                } hover:bg-primary-50 hover:text-primary-600`}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary-900/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl lg:hidden transform transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-white">
            <div>
              <span className="font-heading font-bold text-xl text-primary-800">
                Menu
              </span>
              <span className="block text-sm text-gray-500">
                {siteConfig.name}
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-2 px-4">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-primary"
                        : "text-metal-700 bg-gray-50 hover:bg-primary-50 hover:text-primary-600"
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.3s ease ${index * 0.05}s`
                    }}
                  >
                    {/* Icon */}
                    <span className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                      {navIcons[item.href]}
                    </span>
                    <span className="text-lg">{item.label}</span>
                    {isActive && (
                      <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Quick Info */}
            <div className="px-4 mt-8">
              <div className="bg-gradient-to-br from-sand-100 to-white rounded-2xl p-5 border border-gray-100">
                <p className="font-heading font-bold text-metal-800 mb-3">Zone d&apos;intervention</p>
                <p className="text-sm text-gray-600 mb-2">
                  {siteConfig.city} et agglomération
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">24h/24</span>
                  <span className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">7j/7</span>
                  <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full">30km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Footer - Phone CTA */}
          <div className="p-5 border-t border-gray-100 bg-gradient-to-t from-sand-100 to-white">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center justify-center gap-4 w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4 rounded-2xl font-bold shadow-secondary hover:shadow-xl active:scale-[0.98] transition-all"
            >
              {/* Icône animée */}
              <span className="relative">
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              </span>
              <div className="text-left">
                <span className="block text-xs opacity-80">Urgence 24h/24</span>
                <span className="text-xl font-extrabold">{siteConfig.phone}</span>
              </div>
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">
              Intervention rapide à {siteConfig.city} et environs
            </p>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className={`${isScrolled ? "h-16 lg:h-20" : "h-[calc(2.5rem+4rem)] lg:h-[calc(2.5rem+5rem)]"} transition-all duration-300`} />
    </>
  );
}
