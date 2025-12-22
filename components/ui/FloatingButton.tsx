"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Show button after scroll - optimisé avec passive et throttle
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main floating button */}
      <a
        href={siteConfig.phoneLink}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 
                   bg-gradient-to-r from-secondary-500 to-secondary-600 
                   text-white rounded-full
                   shadow-xl shadow-secondary-500/40 
                   hover:shadow-2xl hover:shadow-secondary-500/50
                   hover:scale-105 active:scale-95
                   transition-all duration-300 ease-out
                   ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
                   ${isExpanded ? 'pr-6 pl-4 py-3' : 'p-4'}`}
        aria-label={`Appeler le ${siteConfig.phone}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-secondary-400 animate-ping opacity-30" />
        
        {/* Inner pulse */}
        <span className="absolute inset-0 rounded-full bg-secondary-500 animate-pulse opacity-50" />
        
        {/* Phone icon with badge */}
        <span className="relative z-10">
          <svg 
            className={`${isExpanded ? 'w-6 h-6' : 'w-7 h-7'} transition-all duration-300`} 
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
          {/* Online indicator */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-secondary-500 animate-pulse" />
        </span>

        {/* Text content - visible when expanded */}
        <span 
          className={`relative z-10 flex flex-col items-start overflow-hidden transition-all duration-300
                     ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}
        >
          <span className="text-xs opacity-90 whitespace-nowrap">Urgence 24h/24</span>
          <span className="font-bold text-base whitespace-nowrap">{siteConfig.phone}</span>
        </span>
      </a>

      {/* Secondary action - Scroll to top (optional) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-50 
                   w-12 h-12 flex items-center justify-center
                   bg-white text-primary-600 rounded-full
                   shadow-lg shadow-gray-200/50 
                   border border-gray-100
                   hover:bg-primary-50 hover:shadow-xl
                   hover:scale-105 active:scale-95
                   transition-all duration-300 ease-out
                   ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Retour en haut"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
