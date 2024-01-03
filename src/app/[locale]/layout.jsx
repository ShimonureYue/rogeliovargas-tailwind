import { Roboto_Mono } from 'next/font/google';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import { locales } from '@/config';
import '@/app/globals.css';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});


export async function generateMetadata({ params: {locale} }) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description')
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
};

export default function LocaleLayout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} className={`${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}