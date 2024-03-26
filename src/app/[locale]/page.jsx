'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BsMouse2Fill } from 'react-icons/bs';
import { PageLayout } from '@/components/PageLayout';
import { GlitchTitle } from '@/components/GlitchTitle';
import { SectionFullHeight } from '@/components/SectionFullHeight';
import { TypingText } from '@/components/TypingText';
import { TextUnderline } from '@/components/TextUnderline';

export default function LocalePage({ params: { locale } }) {
  const t = useTranslations('LocalePage');
  const basics = useTranslations('basics');
  const basicsLabels = useTranslations('Basics');
  const work = useTranslations('work');

  const totalItems = parseInt(work('total'), 10);
  const workItems = [];
  for (var i = 0; i < totalItems; i++) {
    workItems.push({
      name: work(`${i.toString()}.name`),
      position: work(`${i.toString()}.position`),
      url: work(`${i.toString()}.url`),
      startDate: work(`${i.toString()}.startDate`),
      endDate: work(`${i.toString()}.endDate`),
      summary: work(`${i.toString()}.summary`),
      highlights: work(`${i.toString()}.highlights`).split(','),
    });
  }
  const mouseRef = useRef(null);
  const aboutRef = useRef(null);
  // const portfolioRef = useRef(null);

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
      <div className='mx-auto my-0 max-w-full md:max-w-screen-xl lg:max-w-screen-2xl'>
        <SectionFullHeight>
          <div className='table size-full table-fixed'>
            <div className='relative table-cell size-3 align-middle'>
              <GlitchTitle label={t('title')} />
              <TypingText
                ariaLabel={`${t('subtitle')}, ${t('location')}`}
                sequence={[t('subtitle'), 500, t('location'), 500]}
              />
              <div
                ref={mouseRef}
                className='absolute bottom-[90px] left-1/2 animate-hithere text-xl text-orange-light opacity-0 transition-opacity delay-150 duration-300 ease-in-out hover:cursor-pointer'
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
          className='px-2 pb-36 pt-0  md:px-20'
        >
          <div className='flex justify-center md:justify-start'>
            <TextUnderline>{basicsLabels('aboutMe')}</TextUnderline>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[180px_minmax(0,_1fr)]'>
            <div className='mb-3 flex w-full justify-center md:mb-0'>
              <div className='relative size-12 md:size-20 lg:size-28'>
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
                <ul className='grid grid-cols-1 gap-3 gap-x-2 text-center md:grid-cols-2 md:text-left xl:grid-cols-3 '>
                  <li>
                    <strong className='text-orange-light'>
                      {basicsLabels('name')}
                    </strong>
                    {basics('name')}
                  </li>
                  <li>
                    <strong className='text-orange-light'>
                      {basicsLabels('age')}
                    </strong>
                    {basics('age')}
                  </li>
                  <li>
                    <strong className='text-orange-light'>
                      {basicsLabels('label')}
                    </strong>
                    {basics('label')}
                  </li>
                  <li>
                    <strong className='text-orange-light'>
                      {basicsLabels('location.citizenship')}
                    </strong>
                    {basics('location.citizenship')}
                  </li>
                  <li>
                    <strong className='text-orange-light'>
                      {basicsLabels('location.region')}
                    </strong>
                    {basics('location.region')}
                  </li>
                  <li className='text-wrap'>
                    <strong className='text-orange-light'>
                      {basicsLabels('email')}
                    </strong>
                    {basics('email')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/** Expirience */}
        <section id='expirience' className='px-2 pb-36 pt-0  md:px-20'>
          <div className='flex justify-center md:justify-start'>
            <TextUnderline>{basicsLabels('work')}</TextUnderline>
          </div>
          <div className='text-sm text-white'>
            {workItems.map((workItem, key) => (
              <div
                key={`work-item-${key}`}
                className='before:content-[" "] relative pb-12 pl-8 before:absolute before:left-0 before:top-[13px] before:h-full before:w-px before:bg-orange-light'
              >
                <div className='before:content-[" "] relative mb-3 flex w-fit gap-2 rounded border border-solid border-orange-light p-1 text-xs text-orange-light before:absolute before:left-[-32px] before:top-[50%] before:h-px before:w-8 before:bg-orange-light'>
                  <div key={`work-item-startDate-${key}`}>
                    {workItem.startDate}
                  </div>
                  -
                  <div key={`work-item-endDate-${key}`}>{workItem.endDate}</div>
                </div>
                <div key={`work-item-name-${key}`}>{workItem.name}</div>
                <div key={`work-item-summary-${key}`}>{workItem.summary}</div>
                <div key={`work-item-url-${key}`}>{workItem.url}</div>
                {workItem.highlights.map((highlight, keyH) => (
                  <div key={`work-highlights-${key}-${keyH}`}>{highlight}</div>
                ))}
              </div>
            ))}
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
