const SITE_ORIGIN = 'https://ytterman.com';

const hasFileExtension = (pathname: string) => /\.[a-z0-9]+$/i.test(pathname);

const withTrailingSlash = (pathname: string) => {
  if (!pathname || pathname === '/' || pathname.endsWith('/') || hasFileExtension(pathname)) {
    return pathname || '/';
  }

  return `${pathname}/`;
};

export const normalizeInternalPath = (input: string) => {
  if (!input || input === '/' || input.startsWith('/#')) {
    return input;
  }

  if (/^https?:\/\//i.test(input)) {
    return normalizeSiteUrl(input);
  }

  if (!input.startsWith('/')) {
    return input;
  }

  const url = new URL(input, SITE_ORIGIN);
  return `${withTrailingSlash(url.pathname)}${url.search}${url.hash}`;
};

export const normalizeSiteUrl = (input: string) => {
  if (!input) {
    return input;
  }

  const url = new URL(input, SITE_ORIGIN);

  if (url.origin !== SITE_ORIGIN) {
    return url.toString();
  }

  url.pathname = withTrailingSlash(url.pathname);
  return url.toString();
};
