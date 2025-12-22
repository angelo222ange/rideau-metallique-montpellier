'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  /** Attribut sizes pour le responsive */
  sizes?: string;
  /** Texte à afficher comme placeholder */
  placeholderText?: string;
  /** Dimensions à afficher dans le placeholder */
  placeholderDimensions?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  placeholderText = "Image",
  placeholderDimensions,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    // Return null or empty div to show underlying placeholder
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? '' : 'opacity-0'} transition-opacity duration-200`}
      priority={priority}
      sizes={fill ? sizes : undefined}
      loading={priority ? undefined : "lazy"}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

