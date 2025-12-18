import { siteConfig } from "@/config/site";

interface Badge {
  icon: React.ReactNode;
  label: string;
  value?: string;
  color?: "primary" | "secondary" | "accent" | "success";
}

interface TrustBadgesProps {
  /** Variante d'affichage */
  variant?: "default" | "compact" | "detailed" | "inline";
  /** Badges personnalisés ou utiliser les defaults */
  badges?: Badge[];
  /** Classes CSS additionnelles */
  className?: string;
  /** Thème sombre ou clair */
  theme?: "light" | "dark";
  /** Titre optionnel */
  title?: string;
}

// Icônes SVG
const iconSvgs = {
  clock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  lightning: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  location: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Badges par défaut
const defaultBadges: Badge[] = [
  {
    icon: iconSvgs.clock,
    label: "Disponible",
    value: "24h/24",
    color: "primary",
  },
  {
    icon: iconSvgs.lightning,
    label: "Intervention",
    value: "< 1h",
    color: "secondary",
  },
  {
    icon: iconSvgs.shield,
    label: "Garantie",
    value: "1 an",
    color: "accent",
  },
  {
    icon: iconSvgs.star,
    label: "Note Google",
    value: `${siteConfig.reviews.rating}/5`,
    color: "success",
  },
];

// Couleurs par type
const colorStyles = {
  primary: {
    light: "bg-primary-100 text-primary-700",
    dark: "bg-primary-500/20 text-primary-300",
    icon: "text-primary-500",
  },
  secondary: {
    light: "bg-secondary-100 text-secondary-700",
    dark: "bg-secondary-500/20 text-secondary-300",
    icon: "text-secondary-500",
  },
  accent: {
    light: "bg-accent-100 text-accent-700",
    dark: "bg-accent-500/20 text-accent-300",
    icon: "text-accent-500",
  },
  success: {
    light: "bg-green-100 text-green-700",
    dark: "bg-green-500/20 text-green-300",
    icon: "text-yellow-500",
  },
};

export function TrustBadges({
  variant = "default",
  badges = defaultBadges,
  className = "",
  theme = "light",
  title,
}: TrustBadgesProps) {
  
  // Variante par défaut - badges côte à côte
  if (variant === "default") {
    return (
      <div className={className}>
        {title && (
          <p className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>
            {title}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, index) => {
            const colors = colorStyles[badge.color || "primary"];
            return (
              <div
                key={index}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${
                  theme === "dark" ? colors.dark : colors.light
                } transition-transform hover:scale-105`}
              >
                <span className={theme === "dark" ? "text-current" : colors.icon}>
                  {badge.icon}
                </span>
                <div className="flex flex-col">
                  {badge.value && (
                    <span className="font-bold text-sm leading-tight">{badge.value}</span>
                  )}
                  <span className={`text-xs ${theme === "dark" ? "opacity-80" : "opacity-70"}`}>
                    {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Variante compacte - badges petits en ligne
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {badges.map((badge, index) => {
          const colors = colorStyles[badge.color || "primary"];
          return (
            <span
              key={index}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                theme === "dark" 
                  ? "bg-white/10 text-white backdrop-blur-sm" 
                  : colors.light
              }`}
            >
              <span className={theme === "dark" ? "text-current" : colors.icon}>
                {badge.icon}
              </span>
              {badge.value || badge.label}
            </span>
          );
        })}
      </div>
    );
  }

  // Variante détaillée - cards plus grandes
  if (variant === "detailed") {
    return (
      <div className={className}>
        {title && (
          <h3 className={`text-lg font-heading font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-metal-800'
          }`}>
            {title}
          </h3>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => {
            const colors = colorStyles[badge.color || "primary"];
            return (
              <div
                key={index}
                className={`relative p-4 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-lg ${
                  theme === "dark" 
                    ? "bg-white/10 backdrop-blur-sm" 
                    : "bg-white shadow-md border border-gray-100"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                  theme === "dark" ? colors.dark : colors.light
                }`}>
                  <span className={theme === "dark" ? "text-current" : colors.icon}>
                    {badge.icon}
                  </span>
                </div>
                {badge.value && (
                  <p className={`font-bold text-xl ${
                    theme === "dark" ? "text-white" : "text-metal-800"
                  }`}>
                    {badge.value}
                  </p>
                )}
                <p className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-gray-500"
                }`}>
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Variante inline - texte simple
  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
        {badges.map((badge, index) => {
          const colors = colorStyles[badge.color || "primary"];
          return (
            <span
              key={index}
              className={`inline-flex items-center gap-1.5 text-sm ${
                theme === "dark" ? "text-white/80" : "text-gray-600"
              }`}
            >
              <span className={theme === "dark" ? "text-current" : colors.icon}>
                {badge.icon}
              </span>
              {badge.value && <span className="font-semibold">{badge.value}</span>}
              {badge.label}
            </span>
          );
        })}
      </div>
    );
  }

  return null;
}

// Export des icônes pour réutilisation
export { iconSvgs as trustBadgeIcons };

