'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export default function Footer () {
  const t = useTranslations('Footer');
  return (
    <div className='fixed min-h-16 bottom-[30px] left-0 w-full bg-blue-dark opacity-100 visible z-10'>
        <div className='flex px-[60px] pt-3 pb-7 text-white-dark justify-between items-center flex-col-reverse sm:flex-row'>
          <div className='hidden sm:block text-xs lg:text-sm text-center'>{t('copy')}</div>
          <div className='text-xl float-right'>
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