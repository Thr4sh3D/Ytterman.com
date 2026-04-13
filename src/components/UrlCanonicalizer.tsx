import { useEffect } from 'react';
import { normalizeInternalPath } from '@/utils/url';

const normalizeAnchorHref = (anchor: HTMLAnchorElement) => {
  const href = anchor.getAttribute('href');

  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return;
  }

  const normalizedHref = normalizeInternalPath(href);
  if (normalizedHref && normalizedHref !== href) {
    anchor.setAttribute('href', normalizedHref);
  }
};

export const UrlCanonicalizer = () => {
  useEffect(() => {
    const normalizeCurrentUrl = () => {
      const { pathname, search, hash } = window.location;
      const currentUrl = `${pathname}${search}${hash}`;
      const normalizedPath = normalizeInternalPath(currentUrl);

      if (normalizedPath && normalizedPath !== currentUrl) {
        window.history.replaceState(window.history.state, '', normalizedPath);
      }
    };

    const normalizeDocumentLinks = (root: ParentNode = document) => {
      root.querySelectorAll('a[href]').forEach((anchor) => {
        normalizeAnchorHref(anchor as HTMLAnchorElement);
      });
    };

    normalizeCurrentUrl();
    normalizeDocumentLinks();

    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);

    window.history.pushState = (...args) => {
      originalPushState(...args);
      normalizeCurrentUrl();
    };

    window.history.replaceState = (...args) => {
      originalReplaceState(...args);
      normalizeCurrentUrl();
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.target instanceof HTMLAnchorElement) {
          normalizeAnchorHref(mutation.target);
          continue;
        }

        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node instanceof HTMLAnchorElement) {
            normalizeAnchorHref(node);
          }

          normalizeDocumentLinks(node);
        });
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['href'],
    });

    window.addEventListener('popstate', normalizeCurrentUrl);

    return () => {
      observer.disconnect();
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', normalizeCurrentUrl);
    };
  }, []);

  return null;
};
