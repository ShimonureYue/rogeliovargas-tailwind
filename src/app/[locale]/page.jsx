import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PageLayout } from '@/components/PageLayout';
import { GlitchTitle } from '@/components/GlitchTitle';
import { SectionFullHeight } from '@/components/SectionFullHeight';
import { TypingText } from '@/components/TypingText';

export default function LocalePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('LocalePage');
  return (
    <PageLayout locale={locale}>
      <div className='max-w-full md:max-w-screen-lg lg:max-w-screen-xl mx-auto my-0'>
        <SectionFullHeight>
          <div className='table table-fixed w-full h-full'>
            <div className='table-cell align-middle'>
              <GlitchTitle label={t('title')} />
              <TypingText
                ariaLabel={`${t('subtitle')}, ${t('location')}`}
                sequence={[t('subtitle'), 500, t('location'), 500]}
              />
            </div>
          </div>
        </SectionFullHeight>
      </div>
    </PageLayout>
  );
}
