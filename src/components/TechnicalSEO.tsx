import { useEffect } from 'react';

export const TechnicalSEO = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = () => {
        fontLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontLink);

      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Add structured data for organization
    const addOrganizationStructuredData = () => {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-type="organization"]');
      if (existingScript) return;

      const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BuildControl",
        "description": "Certifierad kontrollansvarig, BAS-P och BAS-U i Västernorrland. Över 15 års erfarenhet av byggkontroll och teknisk konsultation.",
        "url": "https://buildcontrol.se",
        "logo": "https://buildcontrol.se/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+46-XX-XXX-XX-XX",
          "contactType": "customer service",
          "availableLanguage": "Swedish"
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Västernorrland",
          "addressCountry": "SE"
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Västernorrland"
          },
          {
            "@type": "Place", 
            "name": "Sundsvall"
          },
          {
            "@type": "Place",
            "name": "Härnösand"
          }
        ],
        "serviceType": [
          "Kontrollansvarig enligt PBL",
          "BAS-P (Byggarbetsmiljösamordnare Planering)",
          "BAS-U (Byggarbetsmiljösamordnare Utförande)",
          "Teknisk konsultation",
          "Bygglovshjälp"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'organization');
      script.textContent = JSON.stringify(organizationData);
      document.head.appendChild(script);
    };

    // Add breadcrumb structured data
    const addBreadcrumbStructuredData = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(segment => segment);
      
      if (pathSegments.length === 0) return;

      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hem",
          "item": "https://buildcontrol.se"
        }
      ];

      const pageNames: { [key: string]: string } = {
        'tjanster': 'Tjänster',
        'kontrollansvarig': 'Kontrollansvarig',
        'bas-p': 'BAS-P',
        'bas-u': 'BAS-U',
        'blogg': 'Blogg',
        'kontakt': 'Kontakt',
        'resurser': 'Resurser',
        'analys': 'Webbplatsanalys'
      };

      pathSegments.forEach((segment, index) => {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": pageNames[segment] || segment,
          "item": `https://buildcontrol.se/${pathSegments.slice(0, index + 1).join('/')}`
        });
      });

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      const existingBreadcrumb = document.querySelector('script[type="application/ld+json"][data-type="breadcrumb"]');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'breadcrumb');
      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    };

    // Performance optimizations
    const optimizePerformance = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });

      // Add resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
      ];

      resourceHints.forEach(hint => {
        const existingLink = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossorigin) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        }
      });
    };

    // Mobile optimization
    const optimizeForMobile = () => {
      // Ensure viewport meta tag is properly set
      let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';

      // Add mobile-specific optimizations
      const mobileOptimizations = document.createElement('style');
      mobileOptimizations.textContent = `
        /* Touch optimization */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize font rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        /* Prevent zoom on input focus (iOS) */
        input, select, textarea {
          font-size: 16px;
        }
        
        /* Optimize images */
        img {
          max-width: 100%;
          height: auto;
          image-rendering: -webkit-optimize-contrast;
        }
      `;
      document.head.appendChild(mobileOptimizations);
    };

    // Initialize all optimizations
    preloadCriticalResources();
    optimizeImages();
    addOrganizationStructuredData();
    addBreadcrumbStructuredData();
    optimizePerformance();
    optimizeForMobile();

    // Cleanup function
    return () => {
      // Remove any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};