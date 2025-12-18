"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Types pour les avis - exporté pour utilisation externe
// Supporte "text" OU "comment" pour compatibilité avec les pages SubCity
export interface Review {
  id?: string;
  name: string;
  rating: number;
  date: string;
  text?: string;
  comment?: string; // Alias de text pour les pages SubCity
  visitDate?: string;
  isNew?: boolean;
  avatarType?: "letter" | "icon" | "landscape" | "gradient";
  avatarColor?: string;
  // Champs supplémentaires pour les pages SubCity
  service?: string;
  location?: string;
}

interface ReviewsProps {
  reviews: Review[];
  title?: string;
  subtitle?: string;
}

// Couleurs pour les avatars "letter"
const avatarColors = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-fuchsia-500",
  "bg-lime-600",
];

// Composant Avatar
function ReviewAvatar({ name, type, color, index }: { 
  name: string; 
  type: Review["avatarType"]; 
  color?: string;
  index: number;
}) {
  const letter = name.charAt(0).toUpperCase();
  const bgColor = color || avatarColors[index % avatarColors.length];

  switch (type) {
    case "letter":
      return (
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
          <span className="text-white font-semibold text-lg">{letter}</span>
        </div>
      );
    case "icon":
      return (
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
          <span className="text-white font-semibold text-lg">{letter}</span>
        </div>
      );
    case "landscape":
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center overflow-hidden">
          <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
          </svg>
        </div>
      );
    case "gradient":
      return (
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
          <span className="text-white font-semibold text-lg">{letter}</span>
        </div>
      );
    default:
      return (
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
          <span className="text-white font-semibold text-lg">{letter}</span>
        </div>
      );
  }
}

// Composant étoiles
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Composant carte d'avis
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // Support text OU comment pour compatibilité SubCity
  const text = review.text || review.comment || "";
  const shouldTruncate = text.length > 180;
  // Valeurs par défaut pour avatarType
  const avatarType = review.avatarType || "letter";
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col min-w-[320px] max-w-[380px] snap-start">
      {/* Header avec avatar et infos */}
      <div className="flex items-start gap-3 mb-3">
        <ReviewAvatar 
          name={review.name} 
          type={avatarType} 
          color={review.avatarColor}
          index={index}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-gray-900 truncate">{review.name}</h4>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span>Avis de</span>
            <Image
              src="/images/logos/logo-google-depannage-drm.webp"
              alt="Google"
              width={40}
              height={14}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Rating et date */}
      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} />
        <span className="text-sm text-gray-500">·</span>
        <span className="text-sm text-gray-500">{review.date}</span>
        {review.isNew && (
          <>
            <span className="text-sm text-gray-500">·</span>
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded">Nouveau</span>
          </>
        )}
      </div>

      {/* Texte de l'avis */}
      <div className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">
          {shouldTruncate && !isExpanded ? (
            <>
              {text.substring(0, 180)}...
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-primary-600 hover:text-primary-700 font-medium ml-1"
              >
                Plus
              </button>
            </>
          ) : (
            text
          )}
        </p>
      </div>

      {/* Date de visite */}
      {review.visitDate && (
        <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
          Visité en {review.visitDate}
        </p>
      )}
    </div>
  );
}

export function Reviews({ reviews, title = "Ce que disent nos clients", subtitle }: ReviewsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Vérifier les possibilités de scroll
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Fonctions de navigation
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sand-50 to-white overflow-hidden">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-12">
          {/* Badge Google */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <span className="font-medium text-gray-700">Google</span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-gray-900">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Précédent"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Suivant"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Reviews carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 -mx-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={review.id || `review-${index}`} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* CTA pour voir tous les avis */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=drm+depannage+rideau+metallique+montpellier+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <span>Voir tous nos avis sur Google</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

