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
      className={`${className} ${isLoaded ? '' : 'opacity-0'} transition-opacity duration-300`}
      priority={priority}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

