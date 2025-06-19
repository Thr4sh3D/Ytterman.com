import { useState, useEffect } from 'react';
import { generateImage } from '@/integrations/core';

export const HeroBanner = () => {
  const [bannerUrl, setBannerUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateBanner = async () => {
      try {
        const result = await generateImage({
          prompt: "Professional construction supervision banner image, modern construction site with safety equipment, earth tones (browns, beiges, warm grays), Swedish construction industry, building inspector with hard hat and clipboard, construction crane and building in background, clean professional design, wide banner format 16:6 aspect ratio, high quality, photorealistic style, warm natural lighting, representing trust and expertise in construction supervision"
        });
        setBannerUrl(result.url);
      } catch (error) {
        console.error('Error generating banner:', error);
      } finally {
        setIsLoading(false);
      }
    };

    generateBanner();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-secondary/30 to-accent/20 rounded-2xl animate-pulse flex items-center justify-center">
        <div className="text-muted-foreground">Laddar banner...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-earth">
      {bannerUrl ? (
        <img 
          src={bannerUrl}
          alt="Trygg Byggprocess med Ytterman - Professionell kontrollansvarig och BAS"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full earth-gradient-light flex items-center justify-center">
          <div className="text-center text-primary">
            <h3 className="text-2xl font-bold mb-2">Trygg Byggprocess</h3>
            <p className="text-lg">Professionell kontrollansvarig & BAS</p>
          </div>
        </div>
      )}
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      {/* Optional overlay text */}
      <div className="absolute bottom-6 left-6 text-white">
        <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">20+ års erfarenhet • Certifierad & Erfaren</p>
        </div>
      </div>
    </div>
  );
};