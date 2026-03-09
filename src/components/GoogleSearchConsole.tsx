import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * GoogleSearchConsole component
 * Adds verification meta tags for search engines and webmaster tools
 * 
 * NOTE: Update the verification codes with your actual codes from:
 * - Google Search Console: https://search.google.com/search-console
 * - Bing Webmaster Tools: https://www.bing.com/webmasters
 */
export const GoogleSearchConsole: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console verification */}
      {/* Verified code from Google Search Console */}
      <meta name="google-site-verification" content="RzdLk5ZZjJoDLBeC-hu0eQ2O5fVjF4M-EXUewixYTs" />
      
      {/* Bing Webmaster Tools verification */}
      {/* Replace with your actual verification code from Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="DIN_BING_VERIFIERINGSKOD" />
      
      {/* Additional meta tags for better crawling */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
    </Helmet>
  );
};