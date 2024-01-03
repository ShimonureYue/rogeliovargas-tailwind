import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from '@/config';
 
export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'en',
  locales,
  localePrefix,
  pathnames,
});
 
export const config = {
  matcher: [
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(es|en)/:path*',
  ]
};