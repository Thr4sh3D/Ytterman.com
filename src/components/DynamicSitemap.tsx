import { useEffect } from 'react';
import { generateSitemap } from '@/functions';

export const DynamicSitemap = () => {
  useEffect(() => {
    const updateSitemap = async () => {
      try {
        const response = await generateSitemap();
        
        // Check if the response indicates no domain (development environment)
        if (response && typeof response === 'object' && 'error' in response) {
          if (response.error === 'No domain found for deployment') {
            console.log('Sitemap generation skipped - app not yet deployed');
            return;
          }
          throw new Error(response.error);
        }
        
        console.log('Sitemap generated successfully');
      } catch (error) {
        // Handle network errors and other issues
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          console.log('Sitemap generation skipped - function not available in development');
          return;
        }
        
        // Check if the error is related to no domain found (development environment)
        if (error?.message?.includes('No domain found for deployment')) {
          console.log('Sitemap generation skipped - app not yet deployed');
          return;
        }
        
        console.error('Error generating sitemap:', error);
      }
    };
    
    // Generate sitemap when the app loads
    updateSitemap();
    
    // Set up a weekly refresh (7 days)
    const intervalId = setInterval(updateSitemap, 7 * 24 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return null;
};