import React, { useEffect } from 'react';

export const GoogleTagManager = () => {
  useEffect(() => {
    // Only load GTM in production and if GTM ID is available
    if (import.meta.env.PROD && import.meta.env.VITE_GTM_ID) {
      const gtmId = import.meta.env.VITE_GTM_ID;
      
      // GTM script
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      // GTM noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
};