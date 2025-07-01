import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEOOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Optimize page loading
    const optimizePageLoad = () => {
      // Remove unused CSS (critical CSS inlining simulation)
      const criticalCSS = `
        /* Critical above-the-fold styles */
        body { margin: 0; font-family: Inter, sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .header { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .hero { background: linear-gradient(135deg, #1e40af, #1e3a8a); color: white; padding: 4rem 0; }
        .btn-primary { background: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; }
      `;

      // Inject critical CSS
      const criticalStyleTag = document.createElement('style');
      criticalStyleTag.textContent = criticalCSS;
      criticalStyleTag.setAttribute('data-critical', 'true');
      document.head.insertBefore(criticalStyleTag, document.head.firstChild);

      // Defer non-critical CSS
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
      stylesheets.forEach(link => {
        const href = (link as HTMLLinkElement).href;
        link.remove();
        
        // Load non-critical CSS asynchronously
        const newLink = document.createElement('link');
        newLink.rel = 'preload';
        newLink.as = 'style';
        newLink.href = href;
        newLink.onload = () => {
          newLink.rel = 'stylesheet';
        };
        document.head.appendChild(newLink);
      });
    };

    // Add canonical URL
    const addCanonicalURL = () => {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }

      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = `https://buildcontrol.se${location.pathname}`;
      document.head.appendChild(canonical);
    };

    // Add hreflang for Swedish
    const addHreflang = () => {
      const existingHreflang = document.querySelector('link[rel="alternate"][hreflang]');
      if (existingHreflang) {
        existingHreflang.remove();
      }

      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hrefLang = 'sv-SE';
      hreflang.href = `https://buildcontrol.se${location.pathname}`;
      document.head.appendChild(hreflang);
    };

    // Add robots meta tag
    const addRobotsMeta = () => {
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      
      // Allow indexing for all pages except admin/private pages
      const noIndexPaths = ['/admin', '/private', '/test'];
      const shouldIndex = !noIndexPaths.some(path => location.pathname.startsWith(path));
      
      robotsMeta.content = shouldIndex 
        ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        : 'noindex, nofollow';
    };

    // Optimize images with WebP support
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        // Add loading="lazy" for images below the fold
        const rect = img.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight;
        
        if (!isAboveFold && !img.hasAttribute('loading')) {
          img.loading = 'lazy';
        }

        // Add proper alt text if missing
        if (!img.alt && img.src.includes('placeholder')) {
          const pathSegments = location.pathname.split('/');
          const pageName = pathSegments[pathSegments.length - 1] || 'hem';
          img.alt = `BuildControl ${pageName} - Kontrollansvarig och BAS i Västernorrland`;
        }

        // Add width and height attributes to prevent CLS
        if (!img.width && !img.height) {
          img.style.aspectRatio = '16/9';
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });
    };

    // Add JSON-LD for local business
    const addLocalBusinessSchema = () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-type="local-business"]');
      if (existingSchema) return;

      const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://buildcontrol.se/#organization",
        "name": "BuildControl",
        "description": "Certifierad kontrollansvarig, BAS-P och BAS-U i Västernorrland med över 15 års erfarenhet.",
        "url": "https://buildcontrol.se",
        "telephone": "+46-XX-XXX-XX-XX",
        "email": "info@buildcontrol.se",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Västernorrland",
          "addressCountry": "SE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "62.3908",
          "longitude": "17.3069"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Sundsvall"
          },
          {
            "@type": "City", 
            "name": "Härnösand"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Västernorrland"
          }
        ],
        "serviceType": [
          "Kontrollansvarig enligt PBL",
          "BAS-P Byggarbetsmiljösamordnare Planering", 
          "BAS-U Byggarbetsmiljösamordnare Utförande",
          "Teknisk konsultation byggprojekt",
          "Bygglovshjälp och rådgivning"
        ],
        "priceRange": "$$",
        "openingHours": "Mo-Fr 08:00-17:00",
        "sameAs": [
          "https://www.linkedin.com/company/buildcontrol",
          "https://www.facebook.com/buildcontrol"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'local-business');
      script.textContent = JSON.stringify(localBusinessData);
      document.head.appendChild(script);
    };

    // Monitor Core Web Vitals and fix issues
    const optimizeCoreWebVitals = () => {
      // Reduce Cumulative Layout Shift (CLS)
      const preventLayoutShift = () => {
        // Add aspect ratios to prevent layout shift
        const mediaElements = document.querySelectorAll('img, video, iframe');
        mediaElements.forEach(element => {
          if (!element.style.aspectRatio && !element.getAttribute('width')) {
            (element as HTMLElement).style.aspectRatio = '16/9';
          }
        });

        // Reserve space for dynamic content
        const dynamicContainers = document.querySelectorAll('[data-dynamic]');
        dynamicContainers.forEach(container => {
          if (!(container as HTMLElement).style.minHeight) {
            (container as HTMLElement).style.minHeight = '200px';
          }
        });
      };

      // Improve Largest Contentful Paint (LCP)
      const optimizeLCP = () => {
        // Preload hero images
        const heroImages = document.querySelectorAll('.hero img, [data-hero] img');
        heroImages.forEach(img => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = (img as HTMLImageElement).src;
          document.head.appendChild(link);
        });

        // Optimize font loading
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.as = 'font';
        fontPreload.type = 'font/woff2';
        fontPreload.href = '/fonts/inter-var.woff2';
        fontPreload.crossOrigin = 'anonymous';
        document.head.appendChild(fontPreload);
      };

      preventLayoutShift();
      optimizeLCP();
    };

    // Initialize all optimizations
    optimizePageLoad();
    addCanonicalURL();
    addHreflang();
    addRobotsMeta();
    optimizeImages();
    addLocalBusinessSchema();
    optimizeCoreWebVitals();

  }, [location.pathname]);

  return null;
};