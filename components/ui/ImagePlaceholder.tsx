interface ImagePlaceholderProps {
  /** Largeur de l'image */
  width: number;
  /** Hauteur de l'image */
  height: number;
  /** Texte alternatif */
  alt: string;
  /** Icône à afficher au centre */
  icon?: "shutter" | "tools" | "lightning" | "settings" | "shield" | "clock" | "factory" | "truck" | "check";
  /** Thème de couleur */
  theme?: "primary" | "secondary" | "accent" | "neutral";
  /** Classes CSS additionnelles */
  className?: string;
  /** Label sous l'icône */
  label?: string;
}

// Icônes SVG pour chaque type
const icons = {
  shutter: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <line x1="8" y1="16" x2="40" y2="16" />
      <line x1="8" y1="24" x2="40" y2="24" />
      <line x1="8" y1="32" x2="40" y2="32" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 5.5a6 6 0 0 1 8.5 8.5l-13 13a3 3 0 0 1-4.24-4.24l13-13z" />
      <path d="M33.5 42.5a6 6 0 0 1-8.5-8.5l13-13a3 3 0 0 1 4.24 4.24l-13 13z" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 4l-8 20h12l-4 20 16-24H24l4-16z" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v4m0 32v4M4 24h4m32 0h4M9.86 9.86l2.83 2.83m22.62 22.62l2.83 2.83M9.86 38.14l2.83-2.83m22.62-22.62l2.83-2.83" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 4l16 8v12c0 10-16 18-16 18S8 34 8 24V12l16-8z" />
      <path d="M16 24l6 6 10-10" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 12v12l8 4" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 40V28l10-8v8l10-8v8l10-8v20H4z" />
      <path d="M38 40V16l6-8v32h-6z" />
      <rect x="10" y="32" width="4" height="8" />
      <rect x="18" y="32" width="4" height="8" />
      <rect x="26" y="32" width="4" height="8" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="14" width="26" height="18" rx="2" />
      <path d="M30 20h10l4 8v4h-14v-12z" />
      <circle cx="14" cy="36" r="4" />
      <circle cx="38" cy="36" r="4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="18" />
      <path d="M14 24l7 7 13-13" />
    </svg>
  ),
};

// Thèmes de couleur pour les gradients
const themeStyles = {
  primary: {
    gradient: "from-primary-100 via-primary-50 to-accent-100",
    icon: "text-primary-400",
    pattern: "rgba(0, 119, 182, 0.1)",
  },
  secondary: {
    gradient: "from-secondary-100 via-secondary-50 to-gold-100",
    icon: "text-secondary-400",
    pattern: "rgba(224, 123, 57, 0.1)",
  },
  accent: {
    gradient: "from-accent-100 via-accent-50 to-primary-100",
    icon: "text-accent-500",
    pattern: "rgba(72, 202, 228, 0.1)",
  },
  neutral: {
    gradient: "from-gray-200 via-gray-100 to-gray-50",
    icon: "text-gray-400",
    pattern: "rgba(107, 114, 128, 0.1)",
  },
};

export function ImagePlaceholder({
  width,
  height,
  alt,
  icon = "shutter",
  theme = "primary",
  className = "",
  label,
}: ImagePlaceholderProps) {
  const style = themeStyles[theme];
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${style.pattern} 1px, transparent 1px),
            linear-gradient(90deg, ${style.pattern} 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/30 rounded-full blur-2xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/30 rounded-full blur-2xl" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Icon */}
        <div className={`${style.icon} mb-3 opacity-60`}>
          {icons[icon]}
        </div>

        {/* Label */}
        {label ? (
          <p className={`text-sm font-medium ${style.icon} opacity-60 text-center px-4`}>
            {label}
          </p>
        ) : (
          <p className={`text-xs ${style.icon} opacity-40`}>
            {width} × {height}
          </p>
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full">
        <div className={`w-2 h-2 rounded-full ${
          theme === 'primary' ? 'bg-primary-500' : 
          theme === 'secondary' ? 'bg-secondary-500' : 
          theme === 'accent' ? 'bg-accent-500' : 'bg-gray-500'
        }`} />
        <span className="text-xs text-gray-500 font-medium">Image à venir</span>
      </div>
    </div>
  );
}

