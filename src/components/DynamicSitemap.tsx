import { useEffect } from 'react';
import { generateSitemap } from '@/functions';

export const DynamicSitemap = () => {
  useEffect(() => {
    // This component doesn't render anything visible
    // It's just a utility to trigger sitemap generation
    const updateSitemap = async () => {
      try {
        await generateSitemap();
        console.log('Sitemap generated successfully');
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    };
    
    // Generate sitemap when the app loads
    updateSitemap();
    
    // Set up a weekly refresh
    const intervalId = setInterval(updateSitemap, 7 * 24 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return null;
};