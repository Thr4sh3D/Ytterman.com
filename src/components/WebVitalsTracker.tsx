import { useEffect } from 'react';

interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export const WebVitalsTracker = () => {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const trackWebVital = (vital: WebVital) => {
      // Log to console for debugging
      console.log(`${vital.name}: ${vital.value} (${vital.rating})`);

      // Send to analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', vital.name, {
          event_category: 'Web Vitals',
          event_label: vital.id,
          value: Math.round(vital.value),
          custom_map: {
            metric_rating: vital.rating,
            metric_delta: vital.delta
          }
        });
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: vital.name,
          value: vital.value,
          rating: vital.rating,
          url: window.location.href,
          timestamp: Date.now()
        })
      }).catch(error => {
        console.warn('Failed to send web vital:', error);
      });
    };

    const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
      switch (name) {
        case 'CLS':
          return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
        case 'FID':
          return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
        case 'FCP':
          return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
        case 'LCP':
          return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
        case 'TTFB':
          return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
        default:
          return 'good';
      }
    };

    // Track Core Web Vitals using Performance Observer
    if ('PerformanceObserver' in window) {
      try {
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        let clsEntries: any[] = [];
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              clsEntries.push(entry);
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            trackWebVital({
              name: 'FID',
              value: fid,
              rating: getRating('FID', fid),
              delta: fid,
              id: (entry as any).entryType + '-' + Math.random()
            });
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcp = lastEntry.startTime;
          trackWebVital({
            name: 'LCP',
            value: lcp,
            rating: getRating('LCP', lcp),
            delta: lcp,
            id: 'lcp-' + Math.random()
          });
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              const fcp = entry.startTime;
              trackWebVital({
                name: 'FCP',
                value: fcp,
                rating: getRating('FCP', fcp),
                delta: fcp,
                id: 'fcp-' + Math.random()
              });
            }
          }
        });
        fcpObserver.observe({ type: 'paint', buffered: true });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          trackWebVital({
            name: 'TTFB',
            value: ttfb,
            rating: getRating('TTFB', ttfb),
            delta: ttfb,
            id: 'ttfb-' + Math.random()
          });
        }

        // Send CLS when page is about to unload
        const sendCLS = () => {
          if (clsValue > 0) {
            trackWebVital({
              name: 'CLS',
              value: clsValue,
              rating: getRating('CLS', clsValue),
              delta: clsValue,
              id: 'cls-' + Math.random()
            });
          }
        };

        // Send CLS on page unload
        window.addEventListener('beforeunload', sendCLS);
        window.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            sendCLS();
          }
        });

        return () => {
          clsObserver.disconnect();
          fidObserver.disconnect();
          lcpObserver.disconnect();
          fcpObserver.disconnect();
          window.removeEventListener('beforeunload', sendCLS);
        };

      } catch (error) {
        console.warn('Web Vitals tracking not supported:', error);
      }
    }

    // Fallback for browsers without PerformanceObserver
    else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const ttfb = navigation.responseStart - navigation.requestStart;
            trackWebVital({
              name: 'TTFB',
              value: ttfb,
              rating: getRating('TTFB', ttfb),
              delta: ttfb,
              id: 'ttfb-fallback'
            });
          }
        }, 0);
      });
    }
  }, []);

  return null;
};