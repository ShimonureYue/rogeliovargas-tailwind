'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BsMouse2Fill } from 'react-icons/bs';
import { PageLayout } from '@/components/PageLayout';
import { GlitchTitle } from '@/components/GlitchTitle';
import { SectionFullHeight } from '@/components/SectionFullHeight';
import { TypingText } from '@/components/TypingText';

export default function LocalePage({ params: { locale } }) {
  const t = useTranslations('LocalePage');
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleScroll = (ref) => {
    console.log('🚀 ~ file: page.jsx:17 ~ handleScroll ~ ref:', ref.offsetTop);
    window.scrollTo({
      top: ref.offsetTop - 110,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <PageLayout locale={locale}>
      <div className='max-w-full md:max-w-screen-lg lg:max-w-screen-xl mx-auto my-0'>
        <SectionFullHeight>
          <div className='table table-fixed w-full h-full'>
            <div className='table-cell align-middle w-3 h-3 relative'>
              <GlitchTitle label={t('title')} />
              <TypingText
                ariaLabel={`${t('subtitle')}, ${t('location')}`}
                sequence={[t('subtitle'), 500, t('location'), 500]}
              />
              <div
                className='absolute text-red-dark text-xl bottom-[90px] left-[50%] animate-hithere hover:cursor-pointer'
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                <BsMouse2Fill />
              </div>
            </div>
          </div>
        </SectionFullHeight>
        {/** ABOUT ME */}
        <section
          id='section-about'
          ref={aboutRef}
          className='pt-0 pr-20 pb-36 pl-20'
        >
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
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
        </section>
        <section id='section-portfolio' ref={portfolioRef} className='pt-0 pr-20 pb-36 pl-20'>
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>

          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>

          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
