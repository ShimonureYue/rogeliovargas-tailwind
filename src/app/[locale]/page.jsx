import Image from 'next/image';
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
            <div className='table-cell align-middle w-3 h-3'>
              <GlitchTitle label={t('title')} />
              <TypingText
                ariaLabel={`${t('subtitle')}, ${t('location')}`}
                sequence={[t('subtitle'), 500, t('location'), 500]}
              />
            </div>
          </div>
        </SectionFullHeight>
        {/** ABOUT ME */}
        <section className='pt-0 pr-20 pb-36 pl-20'>
          <div className='grid grid-cols-[180px_minmax(0,_1fr)]'>
            <div className='flex w-full justify-center'>
              <div className='relative w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 w'>
                <Image
                  className='rounded-full'
                  src='/rogeliovargas-photo.jpeg'
                  alt='Rogelio Vargas Photo'
                  fill
                />
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
              vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
              vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
              audire suavitate has, ei quodsi tacimates sapientem sed, pri zril
              ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri,
              eum mollis salutandi corrumpit et, fugit apeirian duo ad.
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
