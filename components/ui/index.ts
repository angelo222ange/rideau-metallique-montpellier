// Composants UI réutilisables - Phase 7

export { FloatingButton } from './FloatingButton';
export { SectionAlternee } from './SectionAlternee';
export { ImagePlaceholder } from './ImagePlaceholder';
export { ImageWithFallback } from './ImageWithFallback';
export { TrustBadges, trustBadgeIcons } from './TrustBadges';
export { CTABanner } from './CTABanner';

// Breadcrumb - composant client
export { Breadcrumb } from './Breadcrumb';
export type { BreadcrumbItem } from './Breadcrumb';

// Schema generator - fonction serveur (séparée pour éviter les erreurs de build)
export { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';

