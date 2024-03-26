'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export default function Footer () {
  const t = useTranslations('Footer');
  return (
    <div className='mb:min-h-16 visible fixed bottom-[30px] left-0 z-10 w-full bg-blue-dark opacity-100'>
        <div className='flex flex-col-reverse items-center justify-between px-[60px] py-3 text-white-dark sm:flex-row md:pb-7'>
          <div className='hidden text-center text-xs sm:block lg:text-sm'>{t('copy')}</div>
          <div className='float-right text-xl'>
            <Link
              className='inline-block'
              href='https://www.linkedin.com/in/rogelio-vargas-marquez/'
              aria-label='Linkedin'
              target='_blank'
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              className='inline-block pl-3'
              href='https://github.com/ShimonureYue'
              aria-label='Github'
              target='_blank'
            >
              <IoLogoGithub />
            </Link>
          </div>
        </div>
      </div>
  );
}