'use client';
import { useRef, useEffect } from 'react';
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
  const basics = useTranslations('basics');
  const basicsLabels = useTranslations('Basics');
  const mouseRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 110,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollWindow = () => {
    if (window.scrollY > 100) {
      mouseRef.current.classList.remove('opacity-100');
      mouseRef.current.classList.add('opacity-0');
    }
    if (window.scrollY < 100) {
      mouseRef.current.classList.remove('opacity-0');
      mouseRef.current.classList.add('opacity-100');
    }
  };
    

  useEffect(() => {
    if (window.scrollY < 100) {
      mouseRef.current.classList.add('opacity-100');
      mouseRef.current.classList.remove('opacity-0');
    }
    window.addEventListener('scroll', handleScrollWindow, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollWindow);
    };
  }, [mouseRef]);

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
                ref={mouseRef}
                className='absolute text-orange-light text-xl bottom-[90px] left-[50%] animate-hithere hover:cursor-pointer opacity-0 transition-opacity ease-in-out delay-150 duration-300'
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
          className='pt-0 pb-36 pr-6 pl-6  md:pr-20  md:pl-20'
        >
          <div className='grid grid-cols-1 md:grid-cols-[180px_minmax(0,_1fr)]'>
            <div className='flex mb-4 md:mb-0 w-full justify-center'>
              <div className='relative w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 w'>
                <Image
                  className='rounded-full'
                  src='/rogeliovargas-photo.jpeg'
                  alt='Rogelio Vargas Photo'
                  fill
                />
              </div>
            </div>
            <div className='text-sm text-white'>
              <p className='mb-16 text-center md:text-left'>
                {basics('summary')}
              </p>
              <div className='mb-8'>
                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 gap-x-2 text-center md:text-left '>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('name')}
                    </strong>
                    {basics('name')}
                  </li>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('age')}
                    </strong>
                    {basics('age')}
                  </li>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('label')}
                    </strong>
                    {basics('label')}
                  </li>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('location.citizenship')}
                    </strong>
                    {basics('location.citizenship')}
                  </li>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('location.region')}
                    </strong>
                    {basics('location.region')}
                  </li>
                  <li>
                    <strong className='text-orange-light mr-2'>
                      {basicsLabels('email')}
                    </strong>
                    {basics('email')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className='h-12 md:h-64'></div>
        {/**
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
         */}
      </div>
    </PageLayout>
  );
}
