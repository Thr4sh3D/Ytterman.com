import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Add query parameters for optimization if the src is a URL
  const optimizedSrc = src && src.startsWith('http') 
    ? `${src}${src.includes('?') ? '&' : '?'}w=${width || 800}&q=80` 
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={cn(
        'transition-opacity duration-300',
        !isLoaded && 'opacity-0',
        isLoaded && 'opacity-100',
        className
      )}
    />
  );
};
