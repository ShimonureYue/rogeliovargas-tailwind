import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, localePrefix } from './config';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createSharedPathnamesNavigation({ locales, localePrefix });
