import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    const measurePerformance = () => {
      // Only run in production and if Performance API is available
      if (process.env.NODE_ENV !== 'production' || !window.performance) {
        return;
      }

      const metrics: Partial<PerformanceMetrics> = {};

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      // Measure First Contentful Paint (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
      }

      // Measure Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Measure First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              metrics.fid = entry.processingStart - entry.startTime;
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Measure Cumulative Layout Shift (CLS)
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            metrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // Send metrics after page load
          window.addEventListener('load', () => {
            setTimeout(() => {
              sendMetricsToAnalytics(metrics);
            }, 2000);
          });

        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }
    };

    const sendMetricsToAnalytics = (metrics: Partial<PerformanceMetrics>) => {
      // In a real application, you would send these metrics to your analytics service
      console.log('Performance Metrics:', metrics);
      
      // Example: Send to Google Analytics 4
      if (typeof gtag !== 'undefined') {
        Object.entries(metrics).forEach(([key, value]) => {
          if (value !== undefined) {
            gtag('event', 'web_vitals', {
              metric_name: key,
              metric_value: Math.round(value),
              custom_parameter: window.location.pathname
            });
          }
        });
      }
    };

    // Monitor resource loading performance
    const monitorResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            // Log slow resources (>1000ms)
            if (entry.duration > 1000) {
              console.warn(`Slow resource detected: ${entry.name} took ${Math.round(entry.duration)}ms`);
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.warn('Resource monitoring not supported:', error);
        }
      }
    };

    // Monitor memory usage (if available)
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memInfo = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memInfo.usedJSHeapSize / 1048576), // MB
          total: Math.round(memInfo.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) // MB
        };
        
        // Warn if memory usage is high
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Initialize monitoring
    measurePerformance();
    monitorResourceLoading();
    monitorMemoryUsage();

    // Monitor performance periodically
    const performanceInterval = setInterval(() => {
      monitorMemoryUsage();
    }, 30000); // Every 30 seconds

    return () => {
      clearInterval(performanceInterval);
    };
  }, []);

  return null;
};