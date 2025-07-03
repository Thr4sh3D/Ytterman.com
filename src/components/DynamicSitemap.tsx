import { useEffect } from 'react';
import { generateSitemap } from '@/functions';

export const DynamicSitemap = () => {
  useEffect(() => {
    // This component doesn't render anything visible
    // It's just a utility to trigger sitemap generation
    const updateSitemap = async () => {
      try {
        // Call the generateSitemap function directly
        const response = await generateSitemap();
        console.log('Sitemap generated successfully');
      } catch (error) {
        // Check if the error is related to no domain found (development environment)
        if (error?.message?.includes('No domain found for deployment') || 
            (typeof error === 'object' && error !== null && 'error' in error && 
             error.error === 'No domain found for deployment')) {
          console.log('Sitemap generation skipped - app not yet deployed');
          return;
        }
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