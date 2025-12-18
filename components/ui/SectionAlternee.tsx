import { ImagePlaceholder } from "./ImagePlaceholder";

interface Feature {
  icon?: React.ReactNode;
  text: string;
}

interface SectionAlterneeProps {
  /** Titre de la section (H2 ou H3) */
  title: string;
  /** Niveau du titre */
  titleLevel?: "h2" | "h3";
  /** Badge/label au-dessus du titre */
  badge?: string;
  /** Description principale */
  description: string;
  /** Liste de points clés */
  features?: Feature[];
  /** Statistique mise en avant */
  stat?: {
    value: string;
    label: string;
  };
  /** CTA optionnel */
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  /** Position de l'image (gauche ou droite) */
  imagePosition?: "left" | "right";
  /** Props pour l'image placeholder */
  image?: {
    src?: string;
    alt: string;
    width: number;
    height: number;
    icon?: "shutter" | "tools" | "lightning" | "settings" | "shield" | "clock";
  };
  /** Couleur du thème pour les accents */
  theme?: "primary" | "secondary" | "accent";
  /** Background de la section */
  background?: "white" | "sand" | "gradient";
  /** Index pour animation stagger */
  index?: number;
}

export function SectionAlternee({
  title,
  titleLevel = "h3",
  badge,
  description,
  features = [],
  stat,
  cta,
  imagePosition = "right",
  image,
  theme = "primary",
  background = "white",
  index = 0,
}: SectionAlterneeProps) {
  const TitleTag = titleLevel;

  // Theme colors
  const themeColors = {
    primary: {
      badge: "bg-primary-100 text-primary-700",
      stat: "text-primary-600",
      icon: "text-primary-500",
      cta: "bg-primary-500 hover:bg-primary-600 text-white",
      ctaSecondary: "border-primary-500 text-primary-600 hover:bg-primary-50",
    },
    secondary: {
      badge: "bg-secondary-100 text-secondary-700",
      stat: "text-secondary-600",
      icon: "text-secondary-500",
      cta: "bg-secondary-500 hover:bg-secondary-600 text-white",
      ctaSecondary: "border-secondary-500 text-secondary-600 hover:bg-secondary-50",
    },
    accent: {
      badge: "bg-accent-100 text-accent-700",
      stat: "text-accent-600",
      icon: "text-accent-500",
      cta: "bg-accent-500 hover:bg-accent-600 text-white",
      ctaSecondary: "border-accent-500 text-accent-600 hover:bg-accent-50",
    },
  };

  const colors = themeColors[theme];

  // Background styles
  const bgStyles = {
    white: "bg-white",
    sand: "bg-sand-100",
    gradient: "bg-gradient-to-br from-white to-sand-100",
  };

  // Content and image components
  const ContentBlock = (
    <div className="flex flex-col justify-center">
      {/* Badge */}
      {badge && (
        <span className={`inline-flex self-start px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${colors.badge}`}>
          {badge}
        </span>
      )}

      {/* Title */}
      <TitleTag className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-metal-800 mb-4">
        {title}
      </TitleTag>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        {description}
      </p>

      {/* Stats highlight */}
      {stat && (
        <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-transparent rounded-xl border-l-4 border-primary-500">
          <span className={`block text-3xl md:text-4xl font-bold ${colors.stat}`}>
            {stat.value}
          </span>
          <span className="text-sm text-gray-500">{stat.label}</span>
        </div>
      )}

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`flex-shrink-0 mt-1 ${colors.icon}`}>
                {feature.icon || (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <a
          href={cta.href}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
            cta.variant === "secondary"
              ? `border-2 ${colors.ctaSecondary}`
              : colors.cta
          }`}
        >
          {cta.label}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </div>
  );

  const ImageBlock = (
    <div className="relative">
      {image ? (
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
          <ImagePlaceholder
            width={image.width}
            height={image.height}
            alt={image.alt}
            icon={image.icon}
            theme={theme}
            className="w-full h-auto"
          />
          
          {/* Floating stat badge */}
          {stat && (
            <div className={`absolute -bottom-4 ${imagePosition === 'left' ? '-right-4' : '-left-4'} bg-white rounded-xl shadow-lg p-4 animate-float`}>
              <span className={`block text-2xl font-bold ${colors.stat}`}>
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 whitespace-nowrap">{stat.label}</span>
            </div>
          )}
        </div>
      ) : (
        <ImagePlaceholder
          width={600}
          height={400}
          alt={title}
          theme={theme}
          className="rounded-2xl lg:rounded-3xl shadow-xl"
        />
      )}
    </div>
  );

  return (
    <section 
      className={`py-16 md:py-20 ${bgStyles[background]}`}
      style={{ 
        animationDelay: `${index * 100}ms` 
      }}
    >
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
        }`}>
          {imagePosition === 'left' ? (
            <>
              {ImageBlock}
              {ContentBlock}
            </>
          ) : (
            <>
              {ContentBlock}
              {ImageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

