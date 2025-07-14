import React, { useEffect } from 'react';

export const DynamicSitemap = () => {
  useEffect(() => {
    // Generate dynamic sitemap data for SEO
    const generateSitemapData = () => {
      const routes = [
        { url: '/', priority: 1.0, changefreq: 'weekly' },
        { url: '/tjanster', priority: 0.8, changefreq: 'monthly' },
        { url: '/kontrollansvarig', priority: 0.7, changefreq: 'monthly' },
        { url: '/bas-p', priority: 0.7, changefreq: 'monthly' },
        { url: '/bas-u', priority: 0.7, changefreq: 'monthly' },
        { url: '/blogg', priority: 0.9, changefreq: 'weekly' },
        { url: '/kontakt', priority: 0.6, changefreq: 'monthly' },
        { url: '/analys', priority: 0.8, changefreq: 'monthly' },
      ];

      // Store sitemap data for potential XML generation
      (window as any).__sitemapData = routes;
    };

    generateSitemapData();
  }, []);

  return null;
};