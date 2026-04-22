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

const SUPABASE_IMAGE_QUALITY = 75;

const optimizeImageSrc = (src: string, width?: number) => {
  if (!src || !src.startsWith('http')) {
    return src;
  }

  try {
    const url = new URL(src);

    if (url.hostname.endsWith('.supabase.co') && url.pathname.includes('/storage/v1/object/public/')) {
      url.pathname = url.pathname.replace('/storage/v1/object/public/', '/storage/v1/render/image/public/');

      if (width) {
        url.searchParams.set('width', width.toString());
      }

      url.searchParams.set('quality', SUPABASE_IMAGE_QUALITY.toString());
      url.searchParams.set('format', 'webp');

      return url.toString();
    }
    
    return src;
  } catch {
    return src;
  }
};

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
  const optimizedSrc = optimizeImageSrc(src, width);

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
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
