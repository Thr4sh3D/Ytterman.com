import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GoogleSearchConsole: React.FC = () => {
  return (
    <Helmet>
      {/* Google Search Console verification - replace with actual verification code */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />
      
      {/* Google Analytics - replace with actual tracking ID */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_TRACKING_ID');
        `}
      </script>
      
      {/* Bing Webmaster Tools verification */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      
      {/* Additional meta tags for better crawling */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      <meta name="doc-class" content="Living Document" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Helmet>
  );
};