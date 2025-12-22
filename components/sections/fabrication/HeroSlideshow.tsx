"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slideshowImages = [
  {
    src: "/images/rideau-metallique-lame-pleine-montpellier-34.webp",
    alt: "Rideau métallique à lames pleines Montpellier",
    label: "Lames Pleines"
  },
  {
    src: "/images/rideau-metallique-lame-micro-perforer-drm-montpellier.webp",
    alt: "Rideau métallique micro-perforé Montpellier",
    label: "Micro-Perforé"
  },
  {
    src: "/images/depannage-rideau-metallique-lame-cobra.webp",
    alt: "Rideau métallique grille ajourée Montpellier",
    label: "Grille Ajourée"
  },
  {
    src: "/images/depannage-rideau-metallique-polycarbonate.webp",
    alt: "Rideau métallique polycarbonate Montpellier",
    label: "Polycarbonate",
    isNew: true
  }
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main image container */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 translate-x-0" 
                : index < currentIndex 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Badge 100% Sur-Mesure en haut à droite */}
        <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">100% Sur-Mesure</p>
              <p className="text-xs text-gray-500">Fabrication locale</p>
            </div>
          </div>
        </div>

        {/* Label overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg text-sm font-semibold text-gray-900">
              {slideshowImages[currentIndex].label}
            </span>
            {slideshowImages[currentIndex].isNew && (
              <span className="px-2 py-1 bg-secondary-500 rounded-md text-xs font-bold text-white uppercase">
                Nouveau
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-3 mt-5">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/40 hover:bg-white/60 w-2.5"
            }`}
            aria-label={`Voir image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

