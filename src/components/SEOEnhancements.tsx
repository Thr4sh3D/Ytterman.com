import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  return (
    <Helmet>
      <title>Byggkontroll & Teknisk Konsultation | Professionella Byggtjänster</title>
      <meta name="description" content="Professionell byggkontroll, kontrollansvarig och teknisk konsultation för ditt byggprojekt. BAS P, BAS U och kvalitetssäkring." />
      <meta name="keywords" content="byggkontroll, kontrollansvarig, BAS P, BAS U, byggprojekt, teknisk konsultation" />
      <meta property="og:title" content="Byggkontroll & Teknisk Konsultation" />
      <meta property="og:description" content="Professionell byggkontroll och teknisk konsultation för ditt byggprojekt" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="/" />
    </Helmet>
  );
};