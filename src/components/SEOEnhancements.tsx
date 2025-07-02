import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  return (
    <Helmet>
      <title>Kontrollansvarig & BAS P/U Tjänster | Professionell Byggkontroll</title>
      <meta 
        name="description" 
        content="Professionella kontrollansvarig-tjänster och BAS P/U-utredningar för byggprojekt. Certifierade experter med mångårig erfarenhet inom byggbranschen." 
      />
      <meta 
        name="keywords" 
        content="kontrollansvarig, BAS P, BAS U, byggkontroll, bygglov, teknisk kontroll, byggprojekt, säkerhet, kvalitet" 
      />
      <meta name="author" content="Byggkontroll Expert" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Kontrollansvarig & BAS P/U Tjänster | Professionell Byggkontroll" />
      <meta 
        property="og:description" 
        content="Professionella kontrollansvarig-tjänster och BAS P/U-utredningar för byggprojekt. Certifierade experter med mångårig erfarenhet." 
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://byggkontroll-expert.se" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kontrollansvarig & BAS P/U Tjänster" />
      <meta 
        name="twitter:description" 
        content="Professionella kontrollansvarig-tjänster och BAS P/U-utredningar för byggprojekt." 
      />
      <link rel="canonical" href="https://byggkontroll-expert.se" />
    </Helmet>
  );
};