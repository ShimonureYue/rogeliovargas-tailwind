import { Roboto_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config';
import '@/app/globals.css';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

async function getMessages(locale) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);
  return (
    <html lang={locale} className={`${roboto_mono.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
